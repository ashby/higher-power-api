const { getFeelings } = require( './feeling' );
const {
    DEFECT,
    DISCONTENT,
    RESENTMENT,
    OBSESSION,
    EXPERIENCE,
    STRENGTH,
    HOPE
} = require( './constants' );

const getDefect = async () => await getFeelings( DEFECT );
const getDiscontent = async () => await getFeelings( DISCONTENT );
const getResentment = async () => await getFeelings( RESENTMENT );
const getObsession = async () => await getFeelings( OBSESSION );
const getExperience = async () => await getFeelings( EXPERIENCE );
const getStrength = async () => await getFeelings( STRENGTH );
const getHope = async () => await getFeelings( HOPE );

module.exports = { 
    getDefect,
    getDiscontent,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
 };