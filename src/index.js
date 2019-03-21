module.exports = function check(str, bracketsConfig) {
  // your solution
  
  // отбрасываем нечетное количество скобок
  if (str.length % 2 != 0) return false;                  
    
  //функция с рекурсией, которая вырезает пары идущих подряд скобок вида "()"
  //рекурсия останавливается, когда за цикл for строка не сократилась, т.е. не нашлись пары скобок
  //после завершения функция выдает итоговую обрезаную строку
    function counter(str, bracketsConfig) {                         
      let a = str;
      for (i = 0; i < bracketsConfig.length; i++) {
        
        let skobki = bracketsConfig[i].join('');
        while (~str.indexOf(skobki)) {
          str = str.replace(skobki, '');
        }
        
      }
      if (str != a ) {
        return counter(str, bracketsConfig);
      }
      return str;
    }
  
    // вызываем функцию вырезания пар скобок
    let b = counter(str, bracketsConfig);

    // если строка обрезалась в ноль, то набор скобок корректный
      if (b == 0 ) {
      return true;
    }
    
    // иначе - ошибка
  return false;
}