const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    strength: async () => {
        const armor = await prisma.armors();
        const boundary = await prisma.boundaries();
        const loyalty = await prisma.loyalties();
        const honor = await prisma.honors();
        const anger = await prisma.angers();
        const courage = await prisma.courages();
        const strengths = {
            armor,
            boundary,
            loyalty,
            honor,
            anger,
            courage
        };
        return strengths;
    }
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
