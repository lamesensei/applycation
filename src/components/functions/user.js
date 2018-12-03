import gqlClient from './gql';
import bcryptjs from 'bcryptjs';

const User = {
  create: (name, pass, first, last, email, tel, callback) => {
    bcryptjs.genSalt(10, function(err, salt) {
      bcryptjs.hash(pass, salt, function(err, hash) {
        const query = `mutation insert_user {
  insert_user(objects:[
    {
      name: "${name}"
      password: "${hash}"
      first_name: "${first}"
      last_name: "${last}"
      email: "${email}"
      tel: "${tel}"
    }
  ]) {
    returning{
      name
    }
  }
}`;
        gqlClient.request(query).then((data) => {
          callback(data.insert_user.returning[0].name);
        });
      });
    });
  },

  find: (id, callback) => {
    const query = `{
  user(where: {id: {_eq: ${id}}}) {
    created
    first_name
    last_name
    email
    tel
  }
}
`;

    gqlClient.request(query).then((data) => {
      callback(data.user[0]);
    });
  }
};

export default User;
