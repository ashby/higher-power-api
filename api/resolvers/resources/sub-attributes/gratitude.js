const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    gratitudes: () => prisma.gratitudes(),
    gratitude: ( _, { id } ) => prisma.gratitude( { id } )
}, {
    mutateGratitude: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'gratitude', id, data )
} );
