const { getHas } = require( '../utils/has' );
const { HAS } = require( '../utils/constants' );
const { getInventory } = require( '../utils/inventory' );
const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    higherPower: async ( _, data, ctx ) => {
        const has = await prisma.has( { id: 'has' } );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        };
        //const prayers = await getPrayers();
        //const character = await getCharacter();
        const inventory = await getInventory( has );
        return {
            has,
            inventory
        };
    }
} );
