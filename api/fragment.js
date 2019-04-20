const HigherPowerFragment = `
    fragment FullDataOnHigherPower on HigherPower {
        inventory {
            resentment {
                anger {
                    id
                    name
                    thought
                    path
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