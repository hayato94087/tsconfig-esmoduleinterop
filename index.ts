import snakecaseKeys from 'snakecase-keys';

const user = { userName: 'micheal', emailAddress: 'taro@gmail.com' };

const userSnakeCase = snakecaseKeys(user);

console.log(userSnakeCase);