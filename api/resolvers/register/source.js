const { prisma } = require( '../../../../generated/prisma-client' );
const { upperCase } = require( '../../utils' );

const mutateSource = async ( source, data ) => {
    const sourceName = upperCase( source );
    const subattribute = await prisma[ data.subattribute.name ]( data.subattribute.id );
    if ( !data.id ) {
        sourceData = {
            id: source,
            subattributes: [ subattribute ]
        }
        return await prisma[ `create${sourceName}` ]( brain );
    }
    return prisma[ `update${sourceName}` ]( {
        data: data.subattributes.push( subattribute ),
        where: { id }
    } );
};

module.exports = {
    mutateSource
}