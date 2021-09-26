---
date: '2021-09-24'
title: 'Airbnb JavaScript Style Guide'
categories: ['JavaScript']
summary: ''
thumbnail: './JS.png'
---

코딩 컨벤션에 위배되는 코드나 안티 패턴 코드 등을 자동 검출해주는 Tool을 linter라고 합니다. JavaScript linter로 ESLint를 사용하고 있습니다. 그리고 Airbnb Style Guide를 추가 룰 셋으로 설정해서 사용하고 있습니다.

코드를 작성하면 보통 코드의 들여쓰기를 탭(공백 4개)으로 하게됩니다. 최근에 코드를 작성하며 ESLint에 의해 충돌이 났던 적이 있는데, 알고보니 Airbnb Style Guide 에서는 들여쓰기를 공백 2개로 권장하고 있기 때문이었습니다. 이때 내가 사용하고 있는 JavaScript Style Guide를 좀 더 살펴보자는 생각이 들었습니다.

Style Guide를 살펴보니 세부사항은 카테고리별로 나눠져 있었습니다. 특별한 이유없이 들여쓰기 공백 2개처럼 단순 가독성 향상을 위해 Airbnb 내부에서 지정한 컨벤션도 있지만, 에러 발생 가능성을 줄이거나 유지 보수의 편의성을 높이기 위한 명확한 이유가 있는 세부사항도 있었습니다. 이 포스트에서 Airbnb Style Guide 세부사항 중에서도 명확하고 합리적인 이유가 있는 세부사항들 몇 가지를 골라 카테고리별로 정리해보았습니다.

## 참조(References)

1. 모든 식별자 선언은 `var`대신 `const`를 사용합니다.

   **Why?** 변수 재할당을 방지해 의도치 않는 버그를 막을 수 있습니다.

   ```js
   // bad
   var a = 1;
   var b = 2;

   // good
   const a = 1;
   const b = 2;
   ```

2. 재할당이 필요하다면, `var`가 아닌 `let`을 사용합니다.

   **Why?** 함수 레벨 스코프를 취하는 것보다는 블록 레벨 스코프를 취하는 `let`이 더 낫기 때문입니다.

   ```js
   // bad
   var count = 1;
   if (true) {
     count += 1;
   }

   // good, use the let.
   let count = 1;
   if (true) {
     count += 1;
   }
   ```

## 객체 (Objects)

- Guide에서는 ES6에서 도입된 프로퍼티 단축구문이나 메서드 축약 표현을 적극 권장하고 있습니다.

1. 프로퍼티 단축구문은 객체 코드블록의 시작 부분에 모아줍니다.

   **Why?** 어떤 프로퍼티가 단축 구문을 사용하고 있는지 한 눈에 파악하기 쉽습니다. 이를 통해 가독성과 유지보수의 편의성이 높일 수 있습니다.

   ```js
   const valueOne = 'value1';
   const valueTwo = 'value2';

   // bad
   const obj = {
     propertyOne: 1,
     propertyTwo: 2,
     valueOne,
     propertyThree: 3,
     propertyFour: 4,
     valueTwo,
   };

   // good
   const obj = {
     valueOne,
     valueTwo,
     propertyOne: 1,
     propertyTwo: 2,
     propertyThree: 3,
     propertyFour: 4,
   };
   ```

## 비구조화 (Destructuring)

1. 하나의 객체에 있는 다수의 프로퍼티에 접근할 경우, 객체 비구조화 할당을 사용합니다.

   **Why?** 프로퍼티에 접근하기 위한 임시 변수 식별자의 생성을 억제하고, 객체에 대한 반복적인 접근을 방지할 수 있습니다. 이로써 중복 코드를 인한 오류 발생 가능성을 낮출 수 있습니다.

   ```js
   // bad
   function getFullName(user) {
     const firstName = user.firstName;
     const lastName = user.lastName;

     return `${firstName} ${lastName}`;
   }

   // good
   function getFullName(user) {
     const { firstName, lastName } = user;
     return `${firstName} ${lastName}`;
   }
   ```

2. 함수에서 다수의 반환값을 반환해야 하는 경우 배열 비구조화가 아닌 객체 비구조화를 사용합니다.

   **Why?** 배열은 순서를 고려해야 하지만 객체는 그렇지 않습니다. 따라서 반환값 객체에 대해 새로운 프로퍼티를 추가하거나 순서를 변경할 수 있습니다.

   ```js
   // good
   // 예시: 다수의 클로저를 반환해야 할 경우
   const counter = function () {
     let num = 0;

     return {
       increase() {
         return ++num;
       },
       decrease() {
         return num > 0 ? --num : 0;
       },
       something() {
         return anything;
       },
     };
   };

   // 필요한 데이터만 순서 상관없이 선택
   const { increase, something } = counter();
   ```

## 함수 (Functions)

1. 절대 매개변수 이름을 `arguments` 로 네이밍하면 안됩니다.

   **Why?** 함수가 가지는 `arguments` 객체의 참조를 오버라이딩합니다.

   ```js
   // bad
   function foo(name, options, arguments) {
   // ...
   }

   // good
   function foo(name, options, args) {
   // ...
   }
   ```

2. 절대 `arguments`를 사용하면 안됩니다. 대신 `...` (Rest parameter)를 사용합니다.

   **Why?** `arguments` 가 유사 배열 객체이기 때문에 배열 메서드를 사용하기 위해서는 별도의 처리가 필요합니다. 반면에 Rest parameter는 배열이기 때문에 배열 메서드를 바로 사용할 수 있습니다.

   ```js
   // bad
   function sum() {
     const array = Array.prototype.slice.call(arguments);

     return array.reduce((pre, cur) => pre + cur, 0);
   }

   // good
   function sum(...args) {
     return args.reduce((pre, cur) => pre + cur, 0);
   }
   ```

3. 새로운 함수를 만들기 위해 함수 생성자를 사용하면 절대로 안됩니다.

   **Why?** 이런식의 문자열을 평가해 함수를 만드는 방식은 `eval()`과 같은 수준의 취약점을 만들어 냅니다.

   ```js
   // bad
   var add = new Function('a', 'b', 'return a + b');

   // still bad
   var subtract = Function('a', 'b', 'return a - b');
   ```

4. 함수리터럴의 구성요소들 사이에 공백을 삽입합니다.

   **Why?** 함수명을 추가하거나 지울 때 공백을 건드릴 필요가 없어 유지 보수 측면에서 좋습니다.

   ```js
   // good
   const x = function () {};
   const y = function a() {};
   ```

5. 절대로 매개변수를 바꾸거나 재할당하지 않습니다.

   **Why?** 함수 호출 이후 상위 스코프에 의도하지 않은 부수효과(Side Effect)를 발생시킬 수 있습니다. V8엔진에서는 재할당으로 인해 최적화 문제가 발생할 수도 있습니다.

   ```js
   // bad
   function f1(obj) {
     obj.key = 1;
   }

   // good
   function f2(obj) {
     const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
   }
   ```

## 화살표 함수 (Arrow Functions)

1. (콜백을 전달하는) 익명함수를 사용할 때는 화살표 함수를 사용합니다.

   **Why?** 화살표 함수의 `this` 바인딩은 자신의 상위스코프에서 이루어지기 때문에, 콜백으로 사용할 함수의 경우 `this` 바인딩의 불일치를 방지합니다.

   ```js
   // bad
   [1, 2, 3].map(function (x) {
     const y = x + 1;
     return x * y;
   });

   // good
   [1, 2, 3].map(x => {
     const y = x + 1;
     return x * y;
   });
   ```

2. 하나의 문으로 구성된 화살표 함수의 경우 중괄호를 생략하고 암시적 반환을 사용할 수 있습니다. 그 외에는 중괄호를 그대로 두고, `return` 문도 명시적으로 사용합니다. 단, 하나의 문으로 구성된 화살표 함수라도 부수효과를 일으킨다면 중괄호를 사용해줍니다.

   ```js
   // bad
   [1, 2, 3].map(number => {
     const nextNumber = number + 1;
     `A string containing the ${nextNumber}.`;
   });

   // good
   [1, 2, 3].map(number => `A string containing the ${number + 1}.`);

   // 부수효과를 일으키는 문
   let bool = false;

   // bad
   foo(() => (bool = true));

   // good
   foo(() => {
     bool = true;
   });
   ```

3. 화살표 함수의 인자는 항상 괄호로 감싸줍니다.

   **Why?** 명확성과 일관성을 유지할 수 있고, 인자를 추가하거나 제거할 때 변경 사항을 최소화해 유지 보수가 편리합니다.

   ```js
   // bad
   [1, 2, 3].map(x => x * x);

   // good
   [1, 2, 3].map(x => x * x);
   ```

## 변수 (Variables)

1. 하나의 변수 선언 및 할당에는 하나의 `const` 또는 `let`을 사용합니다.

   **Why?** 새로운 변수를 쉽게 추가할 수 있고, `,`를 `;`로 바꿔버릴 가능성이 없기 때문에 유지 보수가 편리합니다. 또한 디버거를 사용해 각 선언을 단계별로 살펴볼 수 있습니다.

   ```js
   // bad
   const items = getItems(),
     goSportsTeam = true,
     dragonball = 'z';

   // bad
   // (위 코드와 비교해 실수를 짚어보세요)
   const items = getItems(),
     goSportsTeam = true;
   dragonball = 'z';

   // good
   const items = getItems();
   const goSportsTeam = true;
   const dragonball = 'z';
   ```

2. 필요한 곳에서 변수를 할당하고, 관련이 있는 코드 블록과 인접한 곳에 위치시킵니다.

   **Why?** `let`과 `const`는 블록 레벨 스코프이기 때문에 관련 있는 코드 블록과 인접한 곳에 위치시키는 것이 가독성과 유지 보수 측면에서 좋습니다.

   ```js
   // bad - unnecessary function call
   function checkName(hasName) {
     const name = getName();

     if (hasName === 'test') {
       return false;
     }

     if (name === 'test') {
       this.setName('');
       return false;
     }

     return name;
   }

   // good
   function checkName(hasName) {
     if (hasName === 'test') {
       return false;
     }

     const name = getName();

     if (name === 'test') {
       this.setName('');
       return false;
     }

     return name;
   }
   ```

3. 변수 할당 체이닝을 사용하지 않습니다.

   **Why?** 변수 할당 체이닝은 암묵적으로 전역 변수를 생성합니다.

   ```js
   // bad
   (function example() {
     // 자바스크립트는 이것을
     // let a = ( b = ( c = 1 ) );
     // 로 해석합니다.
     // let 키워드는 변수 a에만 적용됩니다.
     // 변수 b와 c는 전역 변수가 됩니다.
     let a = (b = c = 1);
   })();

   console.log(a); // throws ReferenceError
   console.log(b); // 1
   console.log(c); // 1

   // good
   (function example() {
     let a = 1;
     let b = a;
     let c = a;
   })();

   console.log(a); // throws ReferenceError
   console.log(b); // throws ReferenceError
   console.log(c); // throws ReferenceError

   // `const`에도 동일하게 적용됩니다
   ```

4. 단항 증감 연산자 `++`, `--`를 사용하지 않습니다.

   **Why?** 단항 증감 구문은 자동으로 세미콜론을 삽입하여 애플리케이션에서 값을 증감할 때 오류 발생 가능성이 있습니다. 전위, 후위에 사용하는 증감 연산 또한 의도하지 않은 동작을 발생시킬 수 있습니다.

   ```js
   // bad
   const array = [1, 2, 3];
   let num = 1;
   num++;
   --num;

   // good
   const array = [1, 2, 3];
   let num = 1;
   num += 1;
   num -= 1;
   ```

## 결론

해외 많은 기업들이 Airbnb Style Guide를 기본 룰셋으로 사용하고 있습니다. 국내에서는 Naver에서 Airbnb Style Guide를 기준으로 추가 코딩 컨벤션을 정의해 룰셋으로 사용하고 있구요. 많은 기업들이 사용하는만큼 공신력이 있는 JavaScript Convention이라는 생각이 듭니다.

따라서 나름의 이유가 있는 Convention들은 왜 그렇게 했는지 알고 사용한다면 더 좋은 코드를 만드는데 도움이 될 수 있지 않을까 생각합니다. 가독성을 위한 컨벤션은 집단에 소속된 경우 그저 따르면 되겠지만요.

Airbnb Style Guide의 모든 부분을 세세하게 살펴보며 정리하지 않았기 때문에 추후에 추가 정리할 부분이 많습니다. 참고 링크를 통해 직접 살펴보는 것을 권장합니다.

## 참고링크

- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Airbnb Style Guide 번역본](https://github.com/parksb/javascript-style-guide)
- [Naver JavaScript Conventions](https://github.com/naver/eslint-config-naver)
