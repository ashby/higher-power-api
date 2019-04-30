const getInventory = require( '../utils/get-inventory' );
const getCast = require( '../utils/get-cast' );

module.exports = ( register ) => register( {
    higherPower: async userId => {        
        const inventory = await getInventory( userId );
        const cast = await getCast( userId );
        return {
            inventory,
            cast
        };
    }
} );
