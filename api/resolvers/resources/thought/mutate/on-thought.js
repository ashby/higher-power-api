const mutateFeeling = require( './feeling' );
const mutateSource = require( './source' );
const mutatePath = require( './path' );

const mutateOnThought = async thought => {
    const path = await mutatePath( thought );
    const source = await mutateSource( thought );
    const sourceFeeling = await mutateFeeling( 'source', thought );
    const pathFeeling = await mutateFeeling( 'path', thought );
    return Promise.all( [ path, source, sourceFeeling, pathFeeling ] );
};

module.exports = mutateOnThought;