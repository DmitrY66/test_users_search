const API_URL = 'https://fakerapi.it/api/v1/users?_quantity=100&_gender=male';

const fetchUsers = async () => {
  const response = await fetch(`${API_URL}`);

  if (!(response.status === 200 || response.status === 201)) {
    const error = await response.json();
    throw error;
  }

  const users = await response.json();

  const userNames = [];

  users.data.map(item => {
    userNames.push(item.username);
    return userNames;
  });

  console.log('userNames: ', users);
};

fetchUsers();


