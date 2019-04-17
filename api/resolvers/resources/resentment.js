const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    resentment: async ( _, data ) => {
        const anger = await prisma.angers();
        // const selfPity = await prisma.selfPitys();
        // const fear = await prisma.fears();
        // const pride = await prisma.prides();
        const resentment = {
            anger,
            // selfPity,
            // fear,
            // pride
        };
        return resentment;
    }
} );
