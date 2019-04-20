const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas } = require( '../utils/has' );
const { getPaths } = require( '../utils/path' );

const mutatePath = async ( feeling, data ) => {
    let response;
    const name = upperCase( feeling );
    if ( !data.id ) {
        response.id = feeling;
        response = await prisma[ `create${name}` ]( feeling );
        await handleHas( feeling );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
};

const registerPath = ( singular, register ) => register( {
    [ singular ]: async () => getPaths[ `get${upperCase(singular)}` ]()
}, {
    [ `mutate${upperCase(singular)}` ]: async ( parent, { data } ) => 
        await mutatePath( singular, data )
} );

module.exports = {
    registerPath
};