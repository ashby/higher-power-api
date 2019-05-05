const { prisma } = require( '../../../generated/prisma-client' );

const query = () => ( {
    sources: () => prisma.sources(),
    source: ( _, { type } ) => prisma.source( { type } )
} );

const mutateSource = async ( data ) => {
    if ( !data.id ) {
        data = await prisma.createSource( data );
        return data;
    }
    const { id, ...feeling } = data;
    return prisma.updateSource( {
        data: feeling,
        where: { id: data.id }
    } );
};

const mutate = () => ( { 
    mutateSource: async ( parent, { data } ) => await mutateSource( data )
} );

const registerSource = register => register( query(), mutate() );

module.exports = registerSource;