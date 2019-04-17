const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    armors: () => prisma.armors(),
    armor: ( _, { id } ) => prisma.armor( { id } )
}, {
    mutateArmor: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createArmor( data );
        }
        const armor = {
            ...data
        }; 
        return prisma.updateArmor( {
            data: armor,
            where: { id }
        } );
    }
} );
