import gqlClient from './gql';

const Stage = {
  create: (name, value, dateTime, appId, callback) => {
    const query = `mutation insert_stage {
  insert_stage(
    objects: [
      {
        name: "${name}",
        value: "${value}",
        due: "${dateTime}",
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
  },

  destroy: (id, callback) => {
    const query = `mutation delete_stage {
  delete_task(where: {stage_id: {_eq: ${id}}}) {
    affected_rows
  }
  delete_stage(where:{id:{_eq: ${id}}}){
    affected_rows
    returning{
      name
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      const { name } = data.delete_stage.returning[0];
      return callback(name);
    });
  },

  tasks: (stageId, callback) => {
    const query = `{
  stage(where:{id:{_eq: ${stageId}}}){
    tasks{
      id
      value
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      return callback(data.stage[0].tasks);
    });
  }
};

export default Stage;
