const config = require( './config' );
const createApp = require( './app' );
const app = createApp();

app.start( app.serverOptions, () =>
    console.log( `Server listening at http://localhost:${config.SERVER_PORT}` ),
);
