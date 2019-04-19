const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    fears: () => prisma.fears(),
    fear: ( _, { id } ) => prisma.fear( { id } )
}, {
    mutateFear: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'fear', id, data )
} );
