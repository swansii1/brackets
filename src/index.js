module.exports = function check(str, bracketsConfig) {
  const openToClose = {};
  const closeToOpen = {};

  bracketsConfig.forEach(([open, close]) => {
      openToClose[open] = close;
      closeToOpen[close] = open;
  });

  const stack = [];

  for (const char of str) {
      if (openToClose[char]) {
          if (char === openToClose[char] && stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else if (closeToOpen[char]) {
          if (stack.length === 0 || stack.pop() !== closeToOpen[char]) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
