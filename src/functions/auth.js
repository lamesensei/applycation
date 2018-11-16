import gqlClient from './gql';

const Auth = {
  authenticate: (user, pass, callback) => {
    const login = `{
        results: users (
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
      if (data.results.length > 0) {
        if (data.results[0].name === user && data.results[0].password === pass)
          return callback(true, user);
        return callback(false);
      }
      return callback(false);
    });
  }
};

export default Auth;
