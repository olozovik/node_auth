/*
Шифрование пароля +
Сравнение +
Создание токена
Расшифровка токена
Инвалидация токена
Регистрация
Вход
Выход
Привязка тасок  к отдельному пользователю
*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const toHashPassword = async () => {
  try {
    const password = '12345456456456';
    const hash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
    console.log(hash);
    const compare = await bcrypt.compare(password, hash);
    console.log(compare);
  } catch (e) {
    console.log(e);
  }
};

try {
  // Create token
  const token = jwt.sign({ id: '123' }, 'secret', { expiresIn: '1h' });
  console.log(token);
  //  Decode token
  const decode = jwt.decode(token);
  console.log(decode);
} catch (e) {
  console.log(e);
}
