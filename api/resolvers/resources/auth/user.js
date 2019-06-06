const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    user: ( _, { email } ) => prisma.user( { email } )
} );