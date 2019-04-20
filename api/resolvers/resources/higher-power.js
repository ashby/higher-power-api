const { getHas } = require( '../utils/has' );
const { getInventory } = require( '../utils/inventory' );

module.exports = ( register ) => register( {
    higherPower: async ( _, data, ctx ) => {
        const has = await getHas();
        //const prayers = await getPrayers();
        //const character = await getCharacter();
        const inventory = await getInventory( has );
        console.log( inventory );
        return {
            has,
            inventory
        };
    }
} );
