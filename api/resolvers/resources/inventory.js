const { prisma } = require( '../../../generated/prisma-client' );
const { getAttributes } = require( './attributes/utils' );

module.exports = ( register ) => register( {
    inventory: async ( _, data, ctx ) => {
        let has;
        has = await prisma.has( { id: 'has' }  );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        };
        const attributes = {};
        const inventoryPromises = [
            'defect',
            'resentment',
            'obsession',
            'experience',
            'strength',
            'hope'
        ].map( async ( item ) => {
            if ( has[ item ] ) {
                const name = item.charAt( 0 ).toUpperCase() + item.slice( 1 );
                const attribute = await getAttributes[ `get${name}` ]( has );
                attributes[ item ] = attribute
            }
        } );
        await Promise.all( inventoryPromises );
        return {
            has,
            ...attributes
        }
    }
} );
