const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas } = require( '../utils/has' );
const { getProcess } = require( '../utils/source' );

const mutateCharacter = async ( character, data ) => {
    let response;
    const name = upperCase( character );
    if ( !data.id ) {
        response.id = character;
        response = await prisma[ `create${name}` ]( character );
        await handleHas( character );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
};

const registerCharacter = ( character, register ) => register( {
    [ character ]: async () => prisma[ `get${upperCase(character)}` ]()
}, {
    [ `mutate${upperCase(character)}` ]: async ( parent, { data } ) => 
        await mutateCharacter( character, data )
} );

module.exports = {
    registerCharacter
};