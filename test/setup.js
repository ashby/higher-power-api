const config = require( '../api/config' );
const path = require( 'path' );
const execa = require( 'execa' );

const prismaCli = path.resolve( __dirname, '..', 'node_modules', '.bin', 'prisma' );

const run = ( cmd ) => execa.shell( cmd ).then( result => result.stdout );
const prisma = async ( ...args ) => {
    const cliArgs = [ ...args, '-e', 'env/.env.test' ];
    console.log( `$ ${prismaCli} ${cliArgs.join( ' ' )}` );
    const result = await execa( prismaCli, cliArgs );
    console.log( result.stdout );
    return result;
};
const CONTAINER_NAME = 'privacy-db-test';

const [ ,, ...args ] = process.argv;
const isWatch = args.includes( '--watch' );

const getContainer = async () => {
    const containers = await run( 'docker ps -a', {} );
    const container = containers
        .split( '\n' )
        .filter( c => c.includes( CONTAINER_NAME ) )[ 0 ];

    if ( !container ) {
        return null;
    }

    const parts = container.split( /\s\s+/i );
    if ( !parts ) {
        return null;
    }
    let [ containerId, image, command, created, status, ports, name ] = parts; // eslint-disable-line prefer-const
    if ( !name ) {
        name = ports;
        ports = '';
    }
    return { containerId, image, command, created, status, ports, name };
};

const containerHelp = () => console.log( 'If there are database problems, make sure that the database is running with `yarn run-dep:test`' );

module.exports = async function setup() {
    console.log( '\n' );

    try {
        if ( isWatch ) {
            console.log( 'watch mode detected, skipping database setup...' );
            return true;
        } else if ( config.BIW_ENVIRONMENT === 'ci' ) {
            console.log( 'ci environment detected, skipping docker setup' );
        } else {
            const hasDocker = await run( 'which docker' );
            if ( hasDocker ) {
                const container = await getContainer();
                if ( container.ports ) {
                    console.log( `database is running in container '${CONTAINER_NAME}'` );
                    containerHelp();
                } else {
                    console.log( `Could not find a docker container '${CONTAINER_NAME}'` );
                    containerHelp();
                }
            } else {
                console.log( 'docker command not found in the environment' );
                console.log( 'Unable to run docker in environment, assuming setup is completed' );
                containerHelp();
            }
        }
    } catch ( e ) {
        console.log( 'Unable to run docker in environment, assuming setup is completed' );
        console.log( e );
        containerHelp();
    }

    console.log( 'Database connection initialized, cleaning the slate and running migrations...' );
    await prisma( 'reset', '-f' );
    await prisma( 'deploy' );
    console.log( 'migrations complete, running all seeds' );
    await prisma( 'seed' );
    console.log( 'seeding complete' );
};
