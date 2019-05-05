const { prisma } = require( '../../../generated/prisma-client' );

const handleFeeling = async ( type, data ) => {
    let feelingType;
    switch ( type ) {
        case 'path':
            feelingType = `${data.path}-${data.feeling}-${data.userId}`;
            break;
        case 'source':
            feelingType = `${data.source}-${data.feeling}-${data.userId}`;
            break;
    }
    const hasFeeling = await prisma.feeling( { type: feelingType } );
    if ( !hasFeeling ) {
        const feeling = {
            type: feelingType,
            title: data.feeling,
            thoughts: { set: [ data.id ] },
            userId: data.userId
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
            where: { id: hasFeeling.id }
        } );
    }
};

const handlePath = async data => {
    if ( data.path ) {
        const pathType = `${data.path}-${data.userId}`;
        const feelingType = `${data.path}-${data.feeling}-${data.userId}`;
        const hasPath = await prisma.path( { type: pathType } );
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
                where: { id: hasPath.id }
            } );
        }
    } else {
        return data;
    }
};

const handleSource = async data => {
    if ( data.source ) {
        const sourceType = `${data.source}-${data.userId}`
        const feelingType = `${data.source}-${data.feeling}-${data.userId}`; 
        const hasSource = await prisma.source( { type: sourceType } );
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
                where: { id: hasSource.id }
            } );
        }
    } else {
        return data;
    }
};

const handleProcess = async data => {
    if ( data.process ) {
        const processType = `${data.process}-${data.userId}`;
        const sourceType = `${data.source}-${data.userId}`;
        const hasProcess = await prisma.process( { type: processType } );
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