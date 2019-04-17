const HigherPowerFragment = `
    fragment FullDataOnHigherPower on HigherPower {
        inventory {
            defect {
                trauma {
                    id
                    name
                }
                toxicity {
                    id
                    name
                }
                suffering {
                    id
                    name
                }
            }
            resentment {
                anger {
                    id
                    name
                }
                selfPity {
                    id
                    name
                }
                fear {
                    id
                    name
                }
                pride {
                    id
                    name
                }
            }
            obsession {
                suffering {
                    id
                    name
                }
                loyalty {
                    id
                    name
                }
                honor {
                    id
                    name
                }
                vulnerability {
                    id
                    name
                }  
            }
            experience {
                compassion {
                    id
                    name
                }
                courage {
                    id
                    name
                }
                acceptance {
                    id
                    name
                }
                vulnerability {
                    id
                    name
                }   
            }
            strength {
                armor {
                    id
                    name
                }
                boundary {
                    id
                    name
                }
                loyalty {
                    id
                    name
                }
                honor {
                    id
                    name
                }
            }
            hope {
            }
        }
    }
`;
module.exports = HigherPowerFragment;