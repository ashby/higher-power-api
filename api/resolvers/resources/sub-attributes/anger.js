const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    angers: () => prisma.angers(),
    anger: ( _, { id } ) => prisma.anger( { id } )
}, {
    mutateAnger: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'anger', id, data )
} );
