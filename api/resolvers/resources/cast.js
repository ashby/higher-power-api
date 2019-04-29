const getCast = require( '../utils/get-cast' );


module.exports = ( register ) => register( {
    cast: getCast
} );