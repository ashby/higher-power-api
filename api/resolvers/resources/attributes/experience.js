const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas, getExperience } = require( '../../utils' );

module.exports = ( register ) => register( {
    experience: async () => getExperience()
}, {
    mutateExperience: async ( parent, { data } ) => {
        let experience;
        if ( !data.id ) {
            experience.id = 'experience';
            experience = prisma.createExperience( experience );
            await handleHas( 'experience' );
            return experience;
        }
        return prisma.updateExperience( {
            data: experience,
            where: { id: data.id }
        } );
    }
} );
