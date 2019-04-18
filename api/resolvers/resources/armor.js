const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    armors: () => prisma.armors(),
    armor: ( _, { id } ) => prisma.armor( { id } )
}, {
    mutateArmor: async ( parent, { id, data } ) => {
        if ( !id ) {
            const armor = await prisma.createArmor( data );
            await handleHas( 'armor' );
            return armor;
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
