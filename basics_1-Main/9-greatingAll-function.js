function greatingAll() {
  let firstName = 'Ilon';
  let lastName = 'Musk';
  greating();

  firstName = 'Дмитрий';
  lastName = 'Рогозин';
  greating();

  firstName = 'Ким';
  lastName = 'Чен Ын';
  greating();

  function greating() {
    console.log(`Здравствуйте, ${firstName} ${lastName}`);
    console.log('Вы вошли в Друзья!');
    console.log('Можете выйти');
    console.log('');
  }
}

greatingAll();
