import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation($email: String, $password: String) {
        login (email: $email, password: $password) {
            success
            message
            data {
                id
                name
                email
                token
                language
                phone
                timezone
                imageURL
            }
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation($userBody: CreateUserInput!) {
        signUpUser (userBody: $userBody) {
            success
            message
            data {
                id
                name
                email
                token
                language
                phone
                timezone
                imageURL
            }
        }
    }
`;

export const CREATE_GROUP_EXPENSE = gql`
    mutation($userId: String, $groupBody: CreateGroupExpenseInput) {
        createGroupExpense(userId: $userId, groupBody: $groupBody) {
            success
            message
            data {
                id
                byUser
                toUser
                groupId
                amount
                description
                settledAt
                currency
            }
        }
    }

`

export const CREATE_GROUP = gql`
    mutation($userId: String, $data: CreateGroupInput) {
        createGroup(userId: $userId, data: $data) {
            success
            message
            data {
                id
                name
                acceptedUsers
                invitedUsers
                currency
                imageUrl
            }
        }
    }

`

export const ACCEPT_INVITE = gql`
    mutation($userId: String, $groupId: String) {
        acceptGroupInvite(userId: $userId, groupId: $groupId) {
            success
            message
            data {
                id
                name
                acceptedUsers
                invitedUsers
                currency
                imageUrl
            }
        }
    }
`
