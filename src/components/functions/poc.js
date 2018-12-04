import gqlClient from './gql';

const Poc = {
  create: (name, role, email, tel, appId, image, callback) => {
    const cloudinary = 'https://api.cloudinary.com/v1_1/lamesensei/upload';
    let imageUrl = '';
    let formData = new FormData();
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
    formData.append('tags', 'applycation');
    formData.append('file', image);

    fetch(cloudinary, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: formData
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.error(error))
      .then((data) => {
        imageUrl = data.secure_url;
        if (imageUrl === undefined) imageUrl = 'https://via.placeholder.com/300';
        const query = `mutation insert_poc{
  insert_poc(objects:[
    {
      name: "${name}"
      role: "${role}"
      email:"${email}"
      tel: "${tel}"
      application_id: ${appId}
      image_url: "${imageUrl}"
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
      });
  }
};

export default Poc;
