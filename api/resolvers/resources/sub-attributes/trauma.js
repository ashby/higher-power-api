const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    traumas: () => prisma.traumas(),
    trauma: ( _, { id } ) => prisma.trauma( { id } )
}, {
    mutateTrauma: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'trauma', id, data )
} );