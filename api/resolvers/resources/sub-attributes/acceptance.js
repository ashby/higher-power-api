const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    acceptances: () => prisma.acceptances(),
    acceptance: ( _, { id } ) => prisma.acceptance( { id } )
}, {
    mutateAcceptance: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'acceptance', id, data )
} );
