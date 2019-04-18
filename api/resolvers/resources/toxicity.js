const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    toxicities: () => prisma.toxicities(),
    toxicity: ( _, { id } ) => prisma.toxicity( { id } )
}, {
    mutateToxicity: async ( parent, { id, data } ) => {
        if ( !id ) {
            const toxicity = await prisma.createToxicity( data );
            await handleHas( 'toxicity' );
            return toxicity
        }
        const toxicity = {
            ...data
        } ;
        return prisma.updateToxicity( {
            data: toxicity,
            where: { id }
        } );
    }
} );
