import gql from 'graphql-tag';

export abstract class Mutations {
    public static createUser = gql`
        mutation createUser(
            $name: String!
        ) {
            createUser(
                name: $name
            ) {
                id,
                name
            }
        }
    `;
}