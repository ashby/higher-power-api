const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateSource = async ( subpath, id, data ) => {
    const name = upperCase( subpath );
    if ( !id ) {
        const response = await prisma[ `create${name}` ]( data );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
}

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateSource( singular, id, data )
} );

const registerSource = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerSource
};
