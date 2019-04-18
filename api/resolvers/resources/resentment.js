const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    resentment: async ( _, data ) => {
        const anger = await prisma.angers();
        const selfPity = await prisma.selfPities();
        const fear = await prisma.fears();
        const pride = await prisma.prides();
        const resentment = {
            anger,
            selfPity,
            fear,
            pride
        };
        return resentment;
    }
}, {
    mutateResentment: async ( parent, { data } ) => {
        let resentment;
        if ( !data.id ) {
            resentment.id = 'resentment';
            resentment = await prisma.createResentment( resentment );
            await handleHas( 'resentment' );
            return resentment;
        }
        return prisma.updateResentment( {
            data: resentment,
            where: { id: data.id }
        } );
    }
} );
