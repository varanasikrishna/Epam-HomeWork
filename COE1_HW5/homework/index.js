// Your code goes here
/*eslint no-magic-numbers: [0, { "ignore": [1] }]*/
// Task #1
function isEquals(a, b) {
  return a === b;
}
// Task #2
function isBigger(a, b) {
  return a > b;
}
// Task #3
function storeNames() {
  return [...arguments];
}
// Task #4
function getDifference(x, y) {
  if (x > y) {
    return x - y;
  } else {
    return y - x;
  }
}
// Task #5
function negativeCount(arr) {
  let count = 0;
  for (let i in arr) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
// Task #6
function letterCount(str1, str2) {
  str1 = str1.toLowerCase();
  let let_count = 0;
  for (let pos = 0; pos < str1.length; pos++) {
    if (str1.charAt(pos) === str2) {
      let_count++;
    }
  }
  return let_count;
}
// Task #7
function countPoints(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    let each = games[i].split(':');
    let x = parseInt(each[0]);
    let y = parseInt(each[1]);
    if (x > y) {
      points += 3;
    } else if (x === y) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}
