const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas, getResentment } = require( '../utils' );

module.exports = ( register ) => register( {
    resentment: async ( _, data ) => getResentment()
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
