const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    has: () => prisma.has()
}, {
    has: async ( parent, { data } ) => {
        let has = await prisma.has();
        has[ data.has ] = true;
        return prisma.updateHas( {
            data: has,
            where: { has: data.has }
        } );
    }
} );
