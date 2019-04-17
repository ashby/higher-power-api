const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    traumas: () => prisma.traumas(),
    trauma: ( _, { id } ) => prisma.trauma( { id } )
}, {
    mutateTrauma: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createTrauma( data );
        }
        const trauma = {
            ...data
        };
        return prisma.updateTrauma( {
            data: trauma,
            where: { id }
        } );
    }
} );