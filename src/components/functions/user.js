import gqlClient from './gql';

const User = {
  create: (name, pass, first, last, email, tel, callback) => {
    const query = `mutation insert_user {
  insert_user(objects:[
    {
      name: "${name}"
      password: "${pass}"
      first_name: "${first}"
      last_name: "${last}"
      email: "${email}"
      tel: ${parseInt(tel)}
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
  }
};

export default User;
