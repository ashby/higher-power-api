const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas } = require( '../utils/has' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateSource = async ( subpath, id, data ) => {
    const name = subpath.charAt( 0 ).toUpperCase() + subpath.slice( 1 );
    if ( !id ) {
        const response = await prisma[ `create${name}` ]( data );
        await handleHas( subpath, data.path );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
}

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateFeeling( singular, id, data )
} );

const registerSource = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerSource
};
