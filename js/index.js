import usersData from '../users.json' assert {type: 'json'};

const users = usersData.data;
const usersList = document.querySelector('.users');
const heroSearch = document.querySelector('.hero__search');
let filteredUsers = null;


const usersListCreate = (array, location) => {
  location.innerHTML = '';

  if (array.length) {
    array.map(item => {
      const li = document.createElement('li');
      li.className = 'user';

      const userAvatar = document.createElement('img');
      userAvatar.className = 'user__avatar';
      userAvatar.src = item.image ? item.image : './img/avatar.png';

      const userName = document.createElement('p');
      userName.className = 'user__name';
      userName.textContent = item.username;

      li.append(userAvatar, userName);
      location.append(li);
    });
  } else {
    const userNone = document.createElement('h2');
    userNone.className = 'user__none';
    userNone.textContent = 'пользователи ненайдены!';
    location.append(userNone);
  }
};

usersListCreate(users, usersList);

heroSearch.addEventListener('input', () => {
  let usersFilteredList = [];
  filteredUsers = heroSearch.value;

  users.map(item => {
    if (item.username.includes(filteredUsers)) {
      usersFilteredList.push(item);
    }
  })

  usersListCreate(usersFilteredList, usersList);
});
