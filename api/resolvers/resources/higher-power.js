
const { getInventory } = require( '../utils/inventory' );
const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    higherPower: async ( _, data, ctx ) => {
        //const prayers = await getPrayers();
        //const character = await getCharacter();
        const inventory = await getInventory();
        return {
            inventory
        };
    }
} );
