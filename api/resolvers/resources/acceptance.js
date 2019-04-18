const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    acceptances: () => prisma.acceptances(),
    acceptance: ( _, { id } ) => prisma.acceptance( { id } )
}, {
    mutateAcceptance: async ( parent, { id, data } ) => {
        if ( !id ) {
            const acceptance = await prisma.createAcceptance( data );
            await handleHas( 'acceptance', data.attribute );
            return acceptance;
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
