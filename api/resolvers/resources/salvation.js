const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    salvations: () => prisma.salvations(),
    salvation: ( _, { id } ) => prisma.salvation( { id } )
}, {
    mutateSalvation: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createSalvation( data );
        }
        const salvation = {
            ...data
        };
        return prisma.updateSalvation( {
            data: salvation,
            where: { id }
        } );
    }
} );
