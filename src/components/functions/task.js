import gqlClient from './gql';

const Task = {
  create: (value, stageId, callback) => {
    const query = `mutation insert_task {
  insert_task(objects:[
    {
      value: "${value}"
      stage_id: ${stageId}
    }
  ]) {
    returning{
      value
    }
  }
}`;
    gqlClient.request(query).then((data) => {
      callback(data.insert_task.returning[0]);
    });
  },

  destroy: (id, callback) => {
    const query = `mutation delete_task {
  delete_task(where: {id: {_eq: ${id}}}) {
    affected_rows
    returning{
      value
    }
  }
}`;
    gqlClient.request(query).then((data) => {
      callback(data.delete_task.returning[0].value);
    });
  }
};

export default Task;
