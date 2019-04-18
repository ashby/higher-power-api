const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas, getObsession } = require( '../utils' );

module.exports = ( register ) => register( {
    obsession: async () => getObsession()
}, {
    mutateObsession: async ( parent, { data } ) => {
        let obsession;
        if ( !data.id ) {
            obsession.id = 'obsession';
            obsession = await prisma.createObsession( obsession );
            await handleHas( 'obsession' );
            return obsession;
        }
        return prisma.updateObsession( {
            data: obsession,
            where: { id: data.id }
        } );
    }
} );
