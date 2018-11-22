import gqlClient from './gql';

const Job = {
  list: (userId, callback) => {
    const query = `query {
  user(where:{id:{_eq: ${userId}}}){
    applications{
      id
      title
      stages{
        id
        name
        value
        due
      }
      company{
        id
        name
      }
    }
  }
}`;
    gqlClient.request(query).then((data) => {
      const { applications } = data.user[0];
      if (applications.length > 0) callback(applications, false);
      else callback(applications, true);
    });
  },

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
  },

  stages: (id, callback) => {
    const query = `{
    application(where: {id: {_eq: ${id}}}){
            stages{
                id
                name
                value
                due
                }
            }
     }`;

    gqlClient.request(query).then((data) => {
      const result = data.application[0];
      return callback(result);
    });
  },

  destroy: (id, callback) => {
    const query = `mutation delete_job {
  delete_task(where:{stage:{application_id:{_eq: ${id}}}}){
    affected_rows
  }
  delete_stage(where: {application_id: {_eq: ${id}}}) {
    affected_rows
  }
  delete_application(where: {id: {_eq: ${id}}}) {
    affected_rows
     returning {
      title
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      const { title } = data.delete_application.returning[0];
      return callback(title);
    });
  },
  pocs: (id, callback) => {
    const query = `{
  application(where:{id:{_eq: ${id}}}){
    pocs{
      id
      name
      role
      email
      tel
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      return callback(data.application[0]);
    });
  }
};

export default Job;
