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

const getDefect = async ( has = false ) => await getFeelings( has, DEFECT );
const getDiscontent = async ( has = false ) => await getFeelings( has, DISCONTENT );
const getResentment = async ( has = false ) => await getFeelings( has, RESENTMENT );
const getObsession = async ( has = false ) => await getFeelings( has, OBSESSION );
const getExperience = async ( has = false ) => await getFeelings( has, EXPERIENCE );
const getStrength = async ( has = false ) => await getFeelings( has, STRENGTH );
const getHope = async ( has = false ) => await getFeelings( has, HOPE );

module.exports = { 
    getDefect,
    getDiscontent,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
 };