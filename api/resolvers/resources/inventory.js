const getInventory = require( '../utils/get-inventory' );

module.exports = ( register ) => register( {
    inventory: ( _, { userId } ) => getInventory( userId )
} );