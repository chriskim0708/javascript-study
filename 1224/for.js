/**
 * 1224 - 반복문
 */

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
  console.log("for - 1", a[i]);
}

for (let i = a.length - 1; i >= 0; i--) {
  console.log("for - 2", a[i]);
}

for (let i = 0; i < a.length; i++) {
  const num = a[i];
  if (num % 2 === 0) {
    console.log("num", num);
  }
}

for (let i = 0; i < a.length; i++) {
  const num = a[i];
  // if (num === 3 || num === 5) continue;
  if (num !== 3 && num !== 5) {
    console.log("3, 5 제외", num);
  }
}

for (let i = 0; i < a.length; i++) {
  const num = a[i];
  if (num % 5 === 0) {
    console.log("5의 배수", num);
  }
}
