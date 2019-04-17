const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    experience: async () => {
        const compassion = await prisma.compassions();
        const courage = await prisma.courages();
        const acceptance = await prisma.acceptances();
        const vulnerability = await prisma.vulnerabilities();
        const gratitude = await prisma.gratitudes();
        const suffering = await prisma.sufferings();
        const experience = {
            compassion,
            courage,
            acceptance,
            vulnerability,
            gratitude,
            suffering
        };
        return experience;
    }
}, {
    mutateExperience: async ( parent, { data } ) => {
        let experience;
        if ( !data.id ) {
            experience.id = 'experience';
            return prisma.createExperience( experience );
        }
        return prisma.updateExperience( {
            data: experience,
            where: { id: data.id }
        } );
    }
} );
