import gqlClient from './gql';

const Job = {
  create: (title, companyName, id, callback) => {
    const query = `mutation insert_application {
  insert_application(
    objects: [
      {
        title: "${title}",
        user_id: ${id},
        company: {
          data: {
            name: "${companyName}"
          }
        },
      }
    ]
  ) {
    returning {
      id
      title
      company {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      const result = data.insert_application.returning[0];
      const { id } = result;
      callback(id);
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

export default Job;
