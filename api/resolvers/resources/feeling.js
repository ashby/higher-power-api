const { prisma } = require( '../../../generated/prisma-client' );

const query = () => ( {
    feelings: () => prisma.feelings(),
    feeling: ( _, { id } ) => prisma.feeling( { id } )
} );

const mutateFeeling = async ( data ) => {
    if ( !data.id ) {
        const feelingId = data.feeling.toLowerCase();
        data = await prisma.createFeeling( { ...data, id: feelingId } );

        return data;
    }
    const { id, ...feeling } = data;
    return prisma.updateFeeling( {
        data: feeling,
        where: { id: data.id }
    } );
};

const mutate = () => ( { 
    mutateFeeling: async ( parent, { data } ) => await mutateFeeling( data )
} );

const registerFeeling = register => register( query(), mutate() );

module.exports = registerFeeling;