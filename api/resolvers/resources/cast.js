const queryCast = require( '../query/cast' );

module.exports = ( register ) => register( {
    cast: ( _, { userId } ) => queryCast( userId )
} );