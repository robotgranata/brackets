module.exports = function check(str, bracketsConfig) {

  // отбрасываем нечетное количество скобок
  if (str.length % 2 != 0) return false;

  //удаляем пары скобок, смотрим что осталось
  let newStr = counter(str, bracketsConfig);      
  if (newStr == 0) {
    return true;
  }
  return false;

  //функция с рекурсией, которая вырезает пары идущих подряд скобок вида "()"
  function counter(str, bracketsConfig) {                         
    let strBefore = str;
    for (i = 0; i < bracketsConfig.length; i++) {
      let brackets = bracketsConfig[i].join('');
      while (~str.indexOf(brackets)) {          
        str = str.replace(brackets, '');        
      }
    }
    if (str != strBefore ) {
      return counter(str, bracketsConfig);
    }
    return str;
  }
}