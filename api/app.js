const config = require( './config' );
const path = require( 'path' );
const Handlebars = require( 'handlebars' );
const fs = require( 'fs' );
const _ = require( 'lodash' );
const _fp = require( 'lodash/fp' );
const VIEWS = path.resolve( __dirname, 'views' );

const { GraphQLServer } = require( 'graphql-yoga' );
const { Prisma } = require( 'prisma-binding' );

const { prisma } = require( '../generated/prisma-client' );
const resolvers = require( './resolvers' );

const HigherPowerFragment  = require( './fragment' );

const englishBundle = require( './higher-power/bundle.en' );

module.exports = () => {
    const db = new Prisma( {
        typeDefs: path.resolve( __dirname, '..', 'generated', 'prisma.graphql' ), // the auto-generated GraphQL schema of the Prisma API
        endpoint: config.PRISMA_SERVER, // the endpoint of the Prisma API
        debug: true // log all GraphQL queries & mutations sent to the Prisma API
        // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    } );

    const app = new GraphQLServer( {
        typeDefs: './api/schema/defs.graphql',
        resolvers,
        context: req => ( {
            ...req,
            db,
            prisma
        } )
    } );

    app.serverOptions = {
        endpoint: '/v1/graphql',
        port: config.SERVER_PORT,
        cors: {
            'origin': '*',
            'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        }
    };
    app.db = db;
    app.prisma = prisma;

    app.express.use( ( req, res, next ) => {
        res.render = ( htmlContent ) => {
            res.set( { 'Content-Type': 'text/html' } );
            res.send( htmlContent );
        };
        next();
    } );

    // const templateString = fs.readFileSync( path.join( VIEWS, 'higher-power.hbs' ) ).toString();
    // const HigherPowerTemplate = Handlebars.compile( templateString );
    // Handlebars.registerHelper( 'intl', ( code, locals, options ) => {
    //     const text = englishBundle[ code ];
    //     if ( !text ) { return `Missing translation for code: ${code}`; }
    //     if ( !options ) {
    //         return text;
    //     }

    //     return new Handlebars.SafeString( _.template( text )( locals ) );
    // } );

    app.express.route( '/v1/higher-power/:higherPowerId' ).get( async ( req, res, next ) => {
        const higherPower = await prisma.higherPower( { id: req.params.higherPowerId } ).$fragment( HigherPowerFragment );
        if ( higherPower === null ) {
            res.status( 404 );
            res.render( '<h1>Not Found</h1>' );
            return;
        }

        // res.render( HigherPowerTemplate( { locals: {
        //     privacyPolicy,
        //     dataProtectionOfficer: privacyPolicy.dataProtectionOfficer,
        //     company: privacyPolicy.company,
        //     cookies: privacyPolicy.cookies,
        //     subProcessors: privacyPolicy.subProcessors,
        //     intlTransfers: privacyPolicy.intlTransfers,
        //     automaticProcesses: privacyPolicy.automaticProcesses,
        //     cookieTypes
        // } } ) );
    } );

    app.express.route( '/version' ).get( async( req, res, next ) => {
        res.send( { version: '0.0.1' } );
    } );

    return app;
};
