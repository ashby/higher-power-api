const createApp = require( 'app' );
const supertest = require( 'supertest' );
const chalk = require( 'chalk' );

const app = createApp();
const request = supertest( app.createHttpServer( app.serverOptions ) );

async function queryRequest( query, variables, opts = {} ) {
    const response = await request
        .post( '/v1/graphql' )
        .send( { ...opts, query, variables } );

    if ( !opts.noThrow ) {
        if ( response.body.errors ) {
            throw new Error( [
                chalk.blue.bold( 'query:' ),
                chalk.white.bgBlue( query.split( '                ' ).join( '' ) ),
                chalk.blue.bold( 'variables:' ),
                chalk.white.bgBlue( JSON.stringify( variables, 0, 2 ) ),
                chalk.red.bold( 'errors:' ),
                chalk.white.bgRed( JSON.stringify( response.body.errors, 0, 2 ) )
            ].join( '\n' ) );
        } else if ( response.status >= 500 ) {
            throw new Error( chalk.red.bold( response.text ) );
        }

    }

    if ( opts.raw ) {
        return response;
    }

    return response.body.data;
}

module.exports = {
    request,
    queryRequest,
    db: app.db,
    prisma: app.prisma
};
