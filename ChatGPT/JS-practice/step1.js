// 請建立一個變數 name，內容是你的名字
// 再建立一個變數 age，內容是你的年齡
// 最後用 console.log() 印出：
// 我是___，我今年___歲

const name = "Yuna";
const age = 25;

console.log(`我是${name}，我今年${age}歲`);

// 宣告一個變數 score = 75
// 如果分數 >= 60 印出「及格」
// 否則印出「不及格」

const score = 75;

if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// 宣告一個變數 temperature = 28
// 如果 >= 30 印出「太熱了」
// 否則如果 >= 20 印出「剛剛好」
// 否則印出「有點冷」

const temperature = 28;
if (temperature >= 30) {
  console.log("太熱了");
} else if (temperature >= 20) {
  console.log("剛剛好");
} else {
  console.log("有點冷");
}

// 使用 for 迴圈印出 1 到 5
// 結果要是：1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 使用 for 迴圈印出 1~10 之中「偶數」的數字

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//// 寫一個函數 sayHi，接收一個參數 name
// 執行後印出「嗨，___！」

function sayHi(name) {
  console.log(`嗨，${name}`);
}

sayHi("Lucky");

// 寫一個函數 add，接收 a、b 兩個數字
// 回傳相加的結果
// 最後印出這個結果

const add = (a, b) => {
  return a + b;
};

console.log(add(3, 5));

// 寫一個函數 checkNumber，接收一個數字 num
// 如果 num 是偶數回傳 "偶數"
// 如果 num 是奇數回傳 "奇數"
// 最後用 console.log() 印出結果

const checkNumber = (num) => {
  if (num % 2 == 0) {
    return "偶數";
  } else {
    return "奇數";
  }
};

console.log(checkNumber(22));

// 寫一個函數 sumToN，接收一個參數 n
// 回傳從 1 加到 n 的總和
// 例如 sumToN(5) => 15

// 解題
// 建立變數total = 0
// 用for迴圈從1跑到n

const sumToN = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};

console.log(sumToN(5)); // 15
console.log(sumToN(10)); // 55

// 寫一個函數 judge，接收一個參數 score
// 分數 >= 90 回傳 "A"
// 分數 >= 80 回傳 "B"
// 分數 >= 70 回傳 "C"
// 分數 >= 60 回傳 "D"
// 其他回傳 "F"
const judge = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(judge(85)); // B
console.log(judge(40)); // F
