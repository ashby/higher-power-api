const { prisma } = require( '../../../generated/prisma-client' );
const { getPaths } = require( '../utils/path' );

module.exports = ( register ) => register( {
    inventory: async ( _, data, ctx ) => {
        let has;
        has = await prisma.has( { id: 'has' }  );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        };
        const paths = {};
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
                const path = await getPaths[ `get${name}` ]( has );
                paths[ item ] = path
            }
        } );
        await Promise.all( inventoryPromises );
        return {
            has,
            ...paths
        }
    }
} );
