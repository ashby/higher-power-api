const getInventory = require( '../utils/get-inventory' );
const getCast = require( '../utils/get-cast' );

module.exports = ( register ) => register( {
    higherPower: async () => {        
        const inventory = await getInventory();
        const cast = await getCast();
        return {
            inventory,
            cast
        };
    }
} );
