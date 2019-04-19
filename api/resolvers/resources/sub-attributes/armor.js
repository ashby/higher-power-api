const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    armors: () => prisma.armors(),
    armor: ( _, { id } ) => prisma.armor( { id } )
}, {
    mutateArmor: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'armor', id, data )
} );
