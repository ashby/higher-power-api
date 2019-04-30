const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const { prisma } = require( '../../../generated/prisma-client' );
const config = require( '../../config' ); 

module.exports = ( register ) => register( null, {
    login: async ( parent, { email, password } ) => {
        const user = await prisma.user( { email } );
        if ( !user ) {
            throw new Error( `No such user found for email: ${email}` );
        }
        const valid = await bcrypt.compare( password, user.password );
        if ( !valid ) {
            throw new Error( 'Invalid password' );
        }
        return {
            token: jwt.sign( { userId: user.id }, config.JWT_SECRET ),
            userId: user.id
        }
    }
} );