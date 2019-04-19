const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    salvations: () => prisma.salvations(),
    salvation: ( _, { id } ) => prisma.salvation( { id } )
}, {
    mutateSalvation: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'salvation', id, data )
} );
