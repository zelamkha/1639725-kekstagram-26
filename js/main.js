function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Нашел на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function maxLength(string, max) {
  const length = string.length;
  if (length <= max) {
    return true;
  }
  return false;
}
//Сделал сам
