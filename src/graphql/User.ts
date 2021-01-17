import { gql } from 'apollo-boost';

export const USER = gql`
    query User($name: String!) {
        user(login: $name) {
            id
            login
            name
            bio
            url
            avatarUrl
            followers(first: 100) {
                nodes {
                    id
                    login
                    name
                    bio
                    url
                }
            }
            repositories(first: 100) {
                nodes {
                    id
                    name
                    url
                    description
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }  
`;