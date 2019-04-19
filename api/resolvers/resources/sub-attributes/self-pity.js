const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    selfPities: () => prisma.selfPities(),
    selfPity: ( _, { id } ) => prisma.selfPity( { id } )
}, {
    mutateSelfPity: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'selfPity', id, data )
} );
