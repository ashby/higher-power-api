const { prisma } = require( '../../../generated/prisma-client' );
const { HAS } = require( '../utils/constants' );

module.exports = ( register ) => register( {
    has: ( _, { id } ) => prisma.has( { id } )
}, {
    mutateHas: async ( parent, { data } ) => {
        if ( data.has ) {
            HAS[ data.has ] = true;
        }
        if ( !data.id ) {
            HAS.id = 'has';
            return prisma.createHas( HAS );
        }
        return prisma.updateHas( {
            data: HAS,
            where: { id: data.id }
        } );
    }
} );
