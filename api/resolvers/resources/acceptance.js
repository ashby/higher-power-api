const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    acceptances: () => prisma.acceptances(),
    acceptance: ( _, { id } ) => prisma.acceptance( { id } )
}, {
    mutateAcceptance: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createAcceptance( data );
        }
        const acceptance = {
            ...data
        };
        return prisma.updateAcceptance( {
            data: acceptance,
            where: { id }
        } );
    }
} );
