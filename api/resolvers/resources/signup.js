const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const { prisma } = require( '../../../generated/prisma-client' );
const config = require( '../../config' ); 

module.exports = ( register ) => register( null, {
    signup: async ( parent, { email, password } ) => {
        password = await bcrypt.hash( password, 10 )
        const user = await prisma.createUser( { email, password } );
        console.log( user );
        return {
            token: jwt.sign( { userId: user.id }, config.JWT_SECRET ),
            userId: user.id
        }
    }
} );