const { prisma } = require( '../../../generated/prisma-client' );

const handleFeeling = async ( type, data ) => {
    let feelingType;
    switch ( type ) {
        case 'path':
            feelingType = `${data.path}-${data.feeling}`;
            break;
        case 'source':
            feelingType = `${data.source}-${data.feeling}`;
            break;
    }
    const hasFeeling = await prisma.feeling( { type: feelingType, userId: data.userId } );
    if ( !hasFeeling ) {
        const feeling = {
            type: feelingType,
            title: data.feeling,
            thoughts: { set: [ data.id ] },
            author: data.userId
        };
        await prisma.createFeeling( feeling );

    } else {
        let { updatedAt, id, createdAt, ...feeling } = hasFeeling;
        feeling = {
            ...feeling,
            thoughts: {
                set: [ ...feeling.thoughts, data.id ]
            }
        };
        return prisma.updateFeeling( {
            data: feeling,
            where: { type: feelingType, userId: data.userId }
        } );
    }
};

const handlePath = async data => {
    if ( data.path ) {
        const pathType = data.path;
        const feelingType = `${pathId}-${data.feeling}`;
        const hasPath = await prisma.path( { type: pathType, userId: data.userId } );
        if ( !hasPath ) {
            const path = {
                type: pathType,
                title: data.path,
                feelings: { set: [ feelingType ] },
                userId: data.userId
            };
            await prisma.createPath( path );
        } else {
            let { updatedAt, id, createdAt, ...path } = hasPath;
            const hasFeelingType = path.feelings.find( feeling => feeling === feelingType );
            if ( !hasFeelingType ) {
                path.feelings.push( feelingType );
            };
            path = {
                ...path,
                feelings: { set: path.feelings }
            };
            return prisma.updatePath( {
                data: path,
                where: { type: pathType, userId: data.userId }
            } );
        }
    } else {
        return data;
    }
};

const handleSource = async data => {
    if ( data.source ) {
        const sourceType = data.source;
        const feelingType = `${sourceType}-${data.feeling}`; 
        const hasSource = await prisma.source( { type: sourceType, userId: data.userId } );
        if ( !hasSource ) {
            const source = {
                type: sourceType,
                title: data.source,
                feelings: { set: [ feelingType ] },
                userId: data.userId
            };
            await prisma.createSource( source );
        } else {
            let { updatedAt, id, createdAt, ...source } = hasSource;
            const hasFeelingType = source.feelings.find( feeling => feeling === feelingType );
            if ( !hasFeelingType ) {
                source.feelings.push( feelingType );
            }
            source = {
                ...source,
                feelings: { set: source.feelings }
            };
            return prisma.updateSource( {
                data: source,
                where: { type: sourceType, userId: data.userId }
            } );
        }
    } else {
        return data;
    }
};

const handleProcess = async data => {
    if ( data.process ) {
        const processType = data.process;
        const sourceType = data.source;
        const hasProcess = await prisma.process( { type: processType, userId: data.userId } );
        if ( !hasProcess ) {
            const process = {
                type: processType,
                title: data.process,
                sources: { set: [ sourceType ] },
                userId: data.userId
            };
            await prisma.createProcess( process );
        } 
    } else {
        return data;
    }
};

module.exports = {
    handleFeeling,
    handlePath,
    handleSource,
    handleProcess,
};