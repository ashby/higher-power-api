const { prisma } = require( '../../../generated/prisma-client' );

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
            return prisma.createStrength( strength );
        }
        return prisma.updateStrength( {
            data: strength,
            where: { id: data.id }
        } );
    }
} );
