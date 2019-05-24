const { prisma } = require( '../../../../../generated/prisma-client' );

const mutateSource = async data => {
    if ( data.source ) {
        const sourceKey = `${data.source}-${data.userId}`
        const feelingKey = `${data.source}-${data.feeling}-${data.userId}`; 
        const hasSource = await prisma.source( { key: sourceKey } );
        if ( !hasSource ) {
            const source = {
                key: sourceKey,
                title: data.source,
                feelings: { set: [ feelingKey ] },
                userId: data.userId
            };
            await prisma.createSource( source );
        } else {
            let { updatedAt, id, createdAt, ...source } = hasSource;
            const hasFeelingKey = source.feelings.find( feeling => feeling === feelingKey );
            if ( !hasFeelingKey ) {
                source.feelings.push( feelingKey );
            }
            source = {
                ...source,
                feelings: { set: source.feelings }
            };
            return prisma.updateSource( {
                data: source,
                where: { id: hasSource.id }
            } );
        }
    } else {
        return data;
    }
};

module.exports = mutateSource;