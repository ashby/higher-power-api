const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    toxicities: () => prisma.toxicities(),
    toxicity: ( _, { id } ) => prisma.toxicity( { id } )
}, {
    mutateToxicity: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createToxicity( data );
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
