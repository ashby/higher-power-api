const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    boundarys: () => prisma.boundarys(),
    boundary: ( _, { id } ) => prisma.boundary( { id } )
}, {
    mutateBoundary: async ( parent, { id, data } ) => {
        if ( !id ) {
            const boundary = prisma.createBoundary( data );
            await handleHas( 'boundary', data.attribute );
            return boundary;
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
