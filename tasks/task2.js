// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let charsWithoutNumbers = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (isNaN(parseInt(char))) {
      charsWithoutNumbers.push(char);
    }
  }

  return charsWithoutNumbers.reverse().join('');
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;