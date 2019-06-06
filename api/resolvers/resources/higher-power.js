const queryInventory = require( '../query/inventory' );
const queryCast = require( '../query/cast' );

module.exports = ( register ) => register( {
    higherPower: async ( _, { userId } ) => {  
        const inventory = await queryInventory( userId );
        const cast = await queryCast( userId );
        return {
            inventory,
            cast
        };
    }
} );
