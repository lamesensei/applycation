import gqlClient from './gql';

const Stage = {
  create: (name, value, appId, callback) => {
    const query = `mutation insert_stage {
  insert_stage(
    objects: [
      {
        name: "${name}",
        value: "${value}",
        application_id: "${appId}"
      }
    ]
  ) {
    returning {
      id
      name
      value
      application {
        id
        title
        user {
            id
            name
      }
      }

    }
  }
}`;

    gqlClient.request(query).then((data) => {
      callback(data.insert_stage.returning[0]);
    });
  },

  find: (id, callback) => {
    const query = `{
  application(where: {id: {_eq: ${id}}}){
    title
    company{
      id
      name
      address
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      const result = data.application[0];
      return callback(result);
    });
  }
};

export default Stage;
