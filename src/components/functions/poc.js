import gqlClient from './gql';

const Poc = {
  create: (name, role, email, tel, appId, callback) => {
    const query = `mutation insert_poc{
  insert_poc(objects:[
    {
      name: "${name}"
      role: "${role}"
      email:"${email}"
      tel: "${tel}"
      application_id: ${appId}
    }
  ]
  ){
    returning{
      name
    }
  }
}`;

    gqlClient.request(query).then((data) => {
      callback(data.insert_poc.returning[0]);
    });
  }
};

export default Poc;
