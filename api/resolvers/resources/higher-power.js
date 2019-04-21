
const { getInventory } = require( '../utils/inventory' );
const { getCharacters } = require( '../utils/characters' );

module.exports = ( register ) => register( {
    higherPower: async ( _, data, ctx ) => {
        //const prayers = await getPrayers();
        const character = getCharacters();
        
        const inventory = await getInventory();
        //console.log( inventory );
        return {
            inventory,
            character
        };
    }
} );
