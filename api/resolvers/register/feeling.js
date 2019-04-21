const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateFeeling = async ( feeling, id, data ) => {
    const name = upperCase( feeling );
    if ( !id ) {
        data = await prisma[ `create${name}` ]( data );
        //await createSource( data );
        return data;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
};

const createSource = async data => {
    const name = upperCase( data.source );
    const source = {
        [ data.feeling ]: [data.id]
    };
    await prisma[ `create${name}` ]( source );
};

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateFeeling( singular, id, data )
} );

const registerFeeling = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerFeeling
};
