let name = 'Max';             // 전역 변수  

if (name === 'Max') {
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);

}

function greet() {
  let age = 30;
  let name = 'Manuel';        // 블록 변수가 함수 변수보다 우선순위가 높다.
  console.log(name, age);
}

console.log(name);

greet();