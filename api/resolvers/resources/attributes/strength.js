const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas, getStrength } = require( '../../utils' );

module.exports = ( register ) => register( {
    strength: async () => getStrength()
}, {
    mutateStrength: async ( parent, { data } ) => {
        let strength;
        if ( !data.id ) {
            strength.id = 'strength';
            strength = await prisma.createStrength( strength );
            await handleHas( 'strength' );
            return strength;
        }
        return prisma.updateStrength( {
            data: strength,
            where: { id: data.id }
        } );
    }
} );
