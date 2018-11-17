import gqlClient from './gql';

const Auth = {
  authenticate: (user, pass, callback) => {
    const login = `{
        user (
            where: {
            _and: [
                {name: {_eq: "${user}"}},
                {password: {_eq: "${pass}"}}
                ]
            }
        )
    {
        id
        name
        password
    }
}`;

    gqlClient.request(login).then((data) => {
      if (data.user.length > 0) {
        const { name, password, id } = data.user[0];
        if (name === user && password === pass) return callback('true', name, id);
        return callback('false');
      }
      return callback('false');
    });
  }
};

export default Auth;
