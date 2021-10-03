---
date: '2021-10-01'
title: 'JavaScript의 this'
categories: ['JavaScript']
summary: ''
thumbnail: './JS.png'
---

다른 클래스 기반 언어에서 this는 항상 클래스가 생성할 인스턴스를 가리킵니다. 자바스크립트의 this는
자바스크립트의 this가 가리키는 값은 함수 호출 방식에 의해 동적으로 결정됩니다. 따라서 항상 클래스가 생성할 인스턴스만을 가리키지 않기 때문에 이에 대해 정리해두고자 합니다.

먼저 this를 사용하는 목적에 대해 알아보고, 함수 호출 방식에 따라 달라지는 this가 가리키는 값의 종류를 알아봅니다.

## 1. this란?

this의 사용목적은 무엇일까요? 우리가 객체 리터럴이나 생성자함수로 객체(또는 인스턴스)를 생성할 때, 객체나 인스턴스에 속해 있는 프로퍼티와 메서드를 참조할 필요가 있습니다.

```js
// 객체 리터럴
const person = {
  name: 'Kim',
  getName() {
    return this.name;
  },
};

console.log(person.getName()); // 'Kim'

// 생성자 함수
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

// 인스턴스 생성
const anotherPerson = new Person('Lee');
console.log(anotherPerson.getName()); // 'Lee'
```

즉, this는 자신이 어디에 속해있는지, 혹은 자신이 생성할 인스턴스는 무엇인지를 나타내는 자기 참조 변수(self-referencing variable)입니다. this를 사용하는 이유는 this가 가리키는 객체나 생성될 인스턴스에 속해 있는 프로퍼티와 메서드를 참조하기 위함입니다. 따라서 아래에서도 다룰테지만, strict mode가 적용된 일반 함수 내부의 this가 `undefined`인 이유는 이러한 사용 목적에 맞지 않기 때문입니다.

기본적으로 this는 코드 어디서든 참조가 가능합니다. 그러나 앞서 언급했듯이 함수 호출 방식에 따라 this 가 가리키는 값이 달라진다고 했습니다. this와 가리키는 값(객체)의 연결을 this 바인딩이라고 합니다. 이러한 this 바인딩은 함수 호출시 arguments 객체와 함께 this가 암묵적으로 함수 내부에 전달되며 함수를 어떠한 방식으로 호출했는지에 따라 다르게 바인딩됩니다. 이에 대해 알아보겠습니다.

## 2. 함수 호출 방식에 따른 this 바인딩 구분

### 2.1 메서드로 호출

어떤 객체의 메서드로 호출할 경우, 메서드 내부의 this는 메서드가 정의되어 있는 객체가 아니라 메서드를 호출한 객체를 가리킵니다.

```js
const person = {
  name: 'Kim',
  getName() {
    return this.name;
  },
};
console.log(person.getName()); // Kim

const anotherPerson = {
  name: 'Lee',
};

anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // Lee
```

위의 코드에서 `getName` 메서드는 `getName` 이라는 프로퍼티(식별자)에 바인딩된 함수입니다. `person` 이라는 객체 내부에서 메서드로 정의되었을 뿐, `getName` 프로퍼티가 가리키는 함수 `person` 객체에 포함된 것이 아니라 독립적으로 존재하는 함수 객체입니다. 따라서 `getName` 메서드는 다른 객체인 `anotherPerson`의 메서드로 할당할 수도 있고, 일반 함수로 호출할 수도 있습니다.

이렇게 `getName` 메서드는 독립적인 함수 객체이기 때문에 메서드 내부의 this는 메서드가 정의되어 있는 객체로 고정되는 것이 아니라 호출시점에 호출한 객체에 따라 달라지게 됩니다. 위의 코드의 출력 결과가 달라지는 것도 호출한 객체가 다르기 때문입니다.

## 2.2 생성자 함수로 호출

생성자 함수 내부의 this는 생성자 함수로 생성할 객체(인스턴스)가 바인딩됩니다.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

// 인스턴스 생성
const person = new Person('Lee');
console.log(person.getName()); // 'Lee'
```

생성자 함수의 인스턴스 생성과정에 대해 알고 있다면 this 바인딩에 대한 이해도 수월할 것입니다.

```js
function Person(name) {
  // (1) 인스턴스가 될 암묵적인 빈 객체가 생성되고 this와 바인딩 됨.
  this.name = name; // (2) this(바인딩 된 객체)에 대한 초기화가 이루어짐.
  // (3) return 문이 없어도 암묵적으로 this(바인딩 된 객체)가 반환됨.
}
```

위의 this 바인딩 과정은 생성자 함수 뿐만아니라 클래스로 생성하는 인스턴스도 마찬가지입니다. 클래스는 `constructor` 메서드 내부에서 this 바인딩이 이루어진다는 차이가 있습니다.

### 2.3 일반 함수로 호출

앞서 this는 코드 어디서든지 참조가 가능하다고 했습니다. 그러나 객체의 프로퍼티나 메서드를 참조하기 위해 사용하는 목적이 아니라면 의미가 없습니다. 따라서 전역에서 this를 참조하면 전역 객체가 바인딩되어 있는 것을 확인할 수 있습니다.

```js
console.log(this); // window
```

함수 내부에서 참조한 경우, 그리고 그 함수를 일반 함수로 호출한 경우에도 this 에는 전역 객체가 바인딩됩니다. 객체의 메서드 내에서 정의한 중첩 함수든, 메서드 내에서 사용하는 콜백 함수든 일반 함수로 호출되었다면 함수 내부의 this는 모두 전역 객체가 바인딩됩니다.

```js
// 전역에서 var로 정의한 변수는 전역 객체의 프로퍼티
var name = 'Kim';

const person = {
  name: 'Lee',
  getName() {
    console.log("getName's this.name: ", this.name);

    // 메서드 내에서 정의한 중첩 함수
    function foo() {
      console.log("foo's this.name: ", this.name);
    }

    // 중첩 함수를 일반 함수로 호출
    foo();
  },
};

person.getName();
// getName's this.name: Lee
// foo's this.name: Kim
```

그 이유는 this의 사용 목적이 객체의 프로퍼티나 메서드를 참조하기 위함이기 때문에, 전역에서의 this와 마찬가지로 객체를 생성하지 않는 일반 함수에서의 this도 의미가 없기 때문입니다. 따라서 앞서 설명했듯이 strict mode가 적용된 일반 함수 내부에서의 this 바인딩은 this 사용 목적에 맞지 않는다는 취지에서 `undefined`가 됩니다. 물론 내부에 정의된 중첩함수도 마찬가지입니다.

```js
function foo() {
  'use strict';
  console.log("foo's this: ", this);

  function bar() {
    console.log("bar's this: ", this);
  }
}
foo();
// foo's this: undefined
// bar's this: undefined
```

그러나 메서드 내부에 정의된 중첩 함수나 메서드에게 전달된 콜백 함수가 일반 함수로 호출될 때, 내부의 this가 전역 객체(또는 undefined)로 바인딩되는 것은 적절하지 않습니다. 메서드 내부의 중첩 함수나 콜백 함수는 메서드의 로직을 일부 담당하는 보조 함수의 역할을 하는데 메서드 내부의 this와 바인딩된 값이 일치하지 않게 되면 보조 함수로써의 역할을 제대로 수행할 수 없기 때문입니다.

이러한 this 바인딩 불일치 문제를 해결하기 위해 다양한 방법이 있고, ES6 이전과 ES6 이후 권장되는 방법이 각기 다릅니다.

## 3. this 바인딩 불일치 해결

### 3.1 ES6 이전

#### 3.1.1 this 회피

`getName` 메서드 내부의 this를 `that` 이라는 참조변수에 회피시킨 후에 중첩(또는 콜백)함수 내부에서 사용합니다.

```js
// 전역에서 var로 정의한 변수는 전역 객체의 프로퍼티
var name = 'Kim';

const person = {
  name: 'Lee',
  getName() {
    console.log("getName's this.name: ", this.name);

    const that = this;
    // 메서드 내에서 정의한 중첩 함수
    function foo() {
      console.log("foo's this.name: ", that.name);
    }

    // 중첩 함수를 일반 함수로 호출
    foo();
  },
};

person.getName();
// getName's this.name: Lee
// foo's this.name: Lee
```

#### 3.1.2 함수 호출 시 명시적인 바인딩 객체 지정

`apply, call, bind` 메서드를 사용해 함수 호출시 this가 바인딩될 객체를 명시적으로 지정할 수 있습니다. 함수 내부의 this를 교체하는 것입니다. 메서드의 대한 사용방법은 조금씩 다릅니다.

**Function.prototype.apply/call**

`apply` 메서드는 `호출할 함수.apply(this 바인딩 객체, 호출할 함수의 인수)`의 형식으로 사용할 수 있습니다. 함수를 호출하면서 `apply` 메서드의 첫 번째 인수로 전달한 객체를 호출할 함수의 this로 바인딩하고, `apply` 메서드의 두 번째 인수부터는 호출할 함수의 인수로 전달합니다. 두 번째 인수부터는 생략이 가능합니다.

`call` 메서드도 두 번째 인수에 대한 전달 방식만 다를 뿐 같은 동작을 수행합니다. `apply` 메서드는 호출할 함수의 인수가 여러 개인 경우, 두 번째 인수를 배열 형태로 전달해줘야 합니다. 반면에 `call` 메서드는 쉼표로 구분된 리스트 형태로 전달해줘야 합니다.

```js
function sum() {
  var array = Array.prototype.slice.apply(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
```

두 메서드는 대표적으로 위의 코드 처럼 유사 배열 객체에 배열 메서드를 사용하기 위한 용도로 사용됩니다.

**Function.prototype.bind**

`bind` 메서드는 `this바인딩 할 함수.bind(this 바인딩 객체)`의 형식으로 사용할 수 있습니다. 함수를 호출하지 않고 함수의 this로 바인딩 될 객체만 전달합니다. 함수를 호출하지 않기 때문에 호출할 함수의 인수도 전달할 필요가 없습니다.

```js
const person = {
  name: 'Lee',

  foo(callback) {
    callback.bind(this);
  },
};

person.foo(function () {
  console.log(this.name);
}); // Lee
```

위의 코드는 `bind` 메서드 없이 사용했을 경우, `person.foo` 의 콜백함수가 일반 함수로서 호출되기 때문에 함수 호출 결과는 전역 객체의 빌트인 프로퍼티인 `window.name`의 기본값 `''`이 출력됩니다.

`bind` 메서드를 사용해 명시적으로 this 바인딩 값을 `foo` 함수의 this로 지정하여 this 바인딩 불일치를 해결할 수 있습니다.

### 3.2 ES6 이후

#### 3.2.1 화살표 함수

ES6에서 도입된 화살표 함수는 콜백 함수로 전달되어 사용하는 경우가 많습니다. 앞서 콜백 함수를 화살표 함수가 아닌 일반 함수로 정의해 호출했을 때, 콜백 함수 내부의 this와 외부 함수의 this가 다른 문제가 발생한다고 언급했습니다. 화살표 함수는 이러한 문제를 해결하기 위해 의도적으로 설계되었습니다.

따라서 화살표 함수는 함수 자체의 this 바인딩을 갖지 않습니다. 화살표 함수 내부에서 this를 참조하면 화살표 함수가 정의된 위치, 즉 상위 스코프의 this를 참조합니다. 화살표 함수가 중첩되어 있다면 중첩된 화살표 함수 모두 가장 가까운 화살표 함수가 아닌 상위 함수의 this를 참조합니다.

```js
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(prefixArray) {
    return prefixArray.map(item => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
```

위의 코드는 클래스를 통해 인스턴스를 생성하고 있습니다. 정의된 클래스의 `constructor` 메서드의 this는 클래스가 생성할 인스턴스를 가리킵니다. 메서드 축약표현으로 정의된 `add` 메서드는 클래스로 생성할 인스턴스의 프로토타입 메서드입니다. 따라서 내부의 this 또한 인스턴스를 가리킵니다.

`add` 메서드는 콜백함수를 전달받고 있는데, 콜백함수로 일반함수를 사용했다면 콜백함수의 this는 전역을 가리키게 되어 this 바인딩 불일치 문제가 발생했을 것입니다. 그러나 화살표 함수를 사용했기 때문에 화살표 함수 내부의 this는 상위 스코프인 `add` 메서드의 this를 참조하게 되어 외부함수와 콜백함수의 this 바인딩 불일치 문제를 방지합니다.

본 포스트의 주제를 벗어나지만 참고로 언급하자면, 화살표 함수는 애초에 그 목적과는 다르게 콜백함수가 아닌 메서드 정의의 용도로 사용하지 않는 것이 좋습니다. 화살표 함수 내부의 this가 상위 스코프(화살표 함수가 아닌 외부 함수)의 this를 참조하기 때문에 객체를 생성하는 여러 방법(객체 리터럴, 생성자 함수, 클래스 등)의 메서드 정의에서 상정하는 this 바인딩과 다르기 때문입니다. 메서드 정의는 ES6 사양에서 정의하는 **메서드 축약 표현으로 정의된 함수**를 사용하는 것이 좋습니다.

ES6이전의 모든 함수는 호출 방식에 제약이 없습니다. 생성자 함수로 정의했어도 일반 함수로 호출이 가능하고, ES6부터는 일반 함수, 메서드, 화살표 함수에 대한 명확한 용도 구분이 가능해졌고, 따라서 그 용도에 맞는 사용을 하는 것이 혼란과 실수를 막을 수 있기 때문입니다. 이에 대해서 별도의 포스팅이 가능한 주제이므로 이 정도만 언급하고 넘어가겠습니다.

## 4. 결론

자바스크립트의 this는 함수의 호출 방식에 따라 동적으로 결정됩니다. 따라서 자바스크립트를 객체 지향 프로그래밍으로 사용한다면 메서드의 정의 및 사용 방식에 따라 this 바인딩 불일치 문제와 같이 혼란을 유발할 가능성이 높아 문제가 될 수 있는 부분입니다. 따라서 this 바인딩의 종류와 발생 가능한 문제에 대해서는 기억할 필요가 있습니다.

- 메서드 호출 : 메서드가 정의된 객체가 아닌 메서드를 호출한 객체
- 생성자 함수(또는 클래스) 호출 : 생성자 함수가 생성할 인스턴스
- 일반 함수 호출 : 전역 객체 (strict mode 적용시 `undefined`)
- this 바인딩 불일치 해결
  - `Function.prototype.apply/call/bind` 사용
  - 화살표 함수

참고로 this 바인딩 불일치 문제를 해결하기 위한 방법들이 있지만 근본적인 해결책은 아닙니다. 자바스크립트를 함수형 프로그래밍으로 사용하는 이유 중 하나가 이러한 this에 대한 혼란을 줄이기 위함입니다.

## 참고

본 포스트는 '모던 자바스크립트 Deep Dive' 내용을 바탕으로 정리한 글입니다.
