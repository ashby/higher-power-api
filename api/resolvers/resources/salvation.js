const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    salvations: () => prisma.salvations(),
    salvation: ( _, { id } ) => prisma.salvation( { id } )
}, {
    mutateSalvation: async ( parent, { id, data } ) => {
        if ( !id ) {
            const salvation = await prisma.createSalvation( data );
            await handleHas( 'salvation' );
            return salvation;
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
