const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    obsession: async () => {
        const suffering = await prisma.sufferings();
        const loyalty = await prisma.loyalties();
        const honor = await prisma.honors();
        const vulnerability = await prisma.vulnerabilities();
        const obsession = {
            suffering,
            loyalty,
            honor,
            vulnerability
        };
        return obsession;
    }
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
