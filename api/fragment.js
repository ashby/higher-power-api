const HigherPowerFragment = `
    fragment FullDataOnHigherPower on HigherPower {
        inventory {
            resentment {
                anger {
                    id
                    name
                    thought
                    attribute
                    createdAt
                    updatedAt
                    sharedAt
                    amendedAt
                    resolvedAt
                }
            }
        }
    }
`;
module.exports = HigherPowerFragment;