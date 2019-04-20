const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const getPaths = require( '../utils/path' );

const mutatePath = async ( feeling, data ) => {
    let response;
    const name = upperCase( feeling );
    if ( !data.id ) {
        response.id = feeling;
        response = await prisma[ `create${name}` ]( feeling );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
};

const registerPath = ( path, register ) => register( {
    [ path ]: async () => getPaths[ `get${upperCase(path)}` ]()
}, {
    [ `mutate${upperCase(path)}` ]: async ( parent, { data } ) => 
        await mutatePath( path, data )
} );

module.exports = {
    registerPath
};