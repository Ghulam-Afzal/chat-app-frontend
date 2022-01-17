const config = {
    user_url: 'http://127.0.0.1:8080/api/auth/getUser',
    mes_url: 'http://127.0.0.1:8080/api/messages/getMessages',
    new_mes_url: 'http://127.0.0.1:8080/api/messages/newMessage',
    g_get_url: 'http://127.0.0.1:8080/api/groups/getGroups',
    g_join_url: "http://127.0.0.1:8080/api/groups/joinGroup",
    g_leave_url: "http://127.0.0.1:8080/api/groups/leaveGroup",
    g_create_url: "http://127.0.0.1:8080/api/groups/createGroup",
    signup_url: 'http://127.0.0.1:8080/api/auth/signup',
    signin_url: 'http://127.0.0.1:8080/api/auth/signin'
}


// meant for when the react front end is buit and used in the backend asn on app
// const config = {
//     user_url: '/api/auth/getUser',
//     mes_url: '/api/messages/getMessages',
//     new_mes_url: '/api/messages/newMessage',
//     g_get_url: '/api/groups/getGroups',
//     g_join_url: "/api/groups/joinGroup",
//     g_leave_url: "/api/groups/leaveGroup",
//     g_create_url: "/api/groups/createGroup",
//     signup_url: '/api/auth/signup',
//     signin_url: '/api/auth/signin'
// }

export default config