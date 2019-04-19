const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    sufferings: () => prisma.sufferings(),
    suffering: ( _, { id } ) => prisma.suffering( { id } )
}, {
    mutateSuffering: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'suffering', id, data )
} );

