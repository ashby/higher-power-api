const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { getSource } = require( '../utils/source' );

const mutateProcess = async ( source, data ) => {
    let response;
    const name = upperCase( source );
    if ( !data.id ) {
        response.id = source;
        response = await prisma[ `create${name}` ]( source );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
};

const registerProcess = ( singular, register ) => register( {
    [ singular ]: async () => getPaths[ `get${upperCase(singular)}` ]()
}, {
    [ `mutate${upperCase(singular)}` ]: async ( parent, { data } ) => 
        await mutateProcess( singular, data )
} );

module.exports = {
    registerProcess
};