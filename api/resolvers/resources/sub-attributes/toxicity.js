const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    toxicities: () => prisma.toxicities(),
    toxicity: ( _, { id } ) => prisma.toxicity( { id } )
}, {
    mutateToxicity: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'toxicity', id, data )
} );
