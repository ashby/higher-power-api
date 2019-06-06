const queryInventory = require( '../query/inventory' );

module.exports = ( register ) => register( {
    inventory: ( _, { userId } ) => queryInventory( userId )
} );