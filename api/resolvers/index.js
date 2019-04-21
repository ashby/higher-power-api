const { PATHS } = require( './constants/paths' );
const { CHARACTERS } = require( './constants/characters' );
const FEELINGS = require( './constants/feelings' );
const { SOURCES } = require( './constants/sources' );
const { PROCESSES } = require( './constants/processes' );

const { registerPath } = require( './register/path' );
const { registerFeeling } = require( './register/feeling' );
const { registerCharacter } = require( './register/character' );
const { registerProcess } = require( './register/process' );
const { registerSource } = require( './register/source' );

const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/inventory' )( registerResolvers );
require( './resources/higher-power' )( registerResolvers );

PATHS.map( path => registerPath( path.singular, registerResolvers ) );
FEELINGS.map( feeling => registerFeeling( feeling.singular, feeling.plural, registerResolvers ) );
CHARACTERS.map( character => registerCharacter( character.singular, registerResolvers ) );
PROCESSES.map( process => registerProcess( process.singular, process.plural, registerResolvers ) );
SOURCES.map( source => registerSource( source.singular, source.plural, registerResolvers ) );

module.exports = {
    Query,
    Mutation
};