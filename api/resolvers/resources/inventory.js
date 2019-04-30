const getInventory = require( '../utils/get-inventory' );

module.exports = ( register ) => register( {
    inventory: getInventory
} );