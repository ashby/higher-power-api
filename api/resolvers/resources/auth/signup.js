const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const { prisma } = require( '../../../../generated/prisma-client' );
const config = require( '../../../config' );
const userSeed = require( '../../seed/user' );

module.exports = ( register ) => register( null, {
    signup: async ( parent, { email, password } ) => {
        password = await bcrypt.hash( password, 10 )
        const user = await prisma.createUser( { email, password } );
        await userSeed( user.id );
        return {
            token: jwt.sign( { userId: user.id }, config.JWT_SECRET ),
            userId: user.id
        }
    }
} );