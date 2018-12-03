import gqlClient from './gql';

const Auth = {
  authenticate: (user, pass, callback) => {
    const login = `{
  user(where: {name: {_eq: "${user}"}}) {
    id
    name
    password
  }
}`;

    return gqlClient.request(login);

    // if (data.user.length > 0) {
    //   const { name, password, id } = data.user[0];
    //   if (name === user && password === pass) return callback(name, id);
    // }
  }
};

export default Auth;
