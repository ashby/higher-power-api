const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    boundarys: () => prisma.boundarys(),
    boundary: ( _, { id } ) => prisma.boundary( { id } )
}, {
    mutateBoundary: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createBoundary( data );
        }
        const boundary = {
            ...data
        };
        return prisma.updateBoundary( {
            data: boundary,
            where: { id }
        } );
    }
} );
