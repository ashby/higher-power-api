const { prisma } = require( '../generated/prisma-client' );


module.exports = {
    createCookieType( opts = {} ) {
        const data = Object.assign( {
            name: 'cookie-type-name',
            description: 'test-cookie-type-description'
        }, opts );

        return prisma.createCookieType( data );
    }
};
