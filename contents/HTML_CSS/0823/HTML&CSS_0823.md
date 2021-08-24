---
date: '2021-08-23'
title: '11. HTML&CSS TIL'
categories: ['HTML', 'CSS']
summary: ''
thumbnail: './HTMLCSS.jpg'
---
<!-- ![](./images/.PNG) -->

## 첫 번째 시간
- ios 접근성 관련 영상

https://www.youtube.com/watch?v=3_WXZxvYboM&t=321s 

**Sass**
- sass도 css 로 변환되어 서비스. css 는 배포에 최적화. sass 는 개발에 최적화.
- less, stylus도 sass 와 같은 preprossessor.
- postcss 는 후처리의 개념. plugin이기 때문에 결과물에 어떤 가공을 가하는 것. 이를테면 css 파일이 나오면 autoprefixer를 통해 후처리를 하는 것.
- css 가 강력해지고 있고 sass의 활용수준이 css 수준에서 머물고 있기 때문에 sass의 영향력이 줄지 않을까 라는...
- Sass와 SCSS는 문법의 차이. 이 둘 모두 통틀어 Sass라고 부를 수 있다.
- 현업에서는 node Sass를 많이 쓴다. 그러나 공식 문서 표준은 Dart Sass이고, 점점 이쪽으로 넘어올 것이다. 수업도 Dart Sass로 진행할 예정.
- Dart Sass에서는 node Sass에는 없었던 @use와 @forward를 사용할 수 있다.
- 기존의 sass에서는 mixin의 선언순서도 기억해서 사용해야 한다.
- 그런데 Dart Sass 에서는 @use와 @forward를 통해 module 개념을 도입했다.
- sass에서의 연산에서 `/` 연산은 특별한 규칙이 필요했다.
- dart sass에서는 sass:math로 math 객체를 불러와서 math.div(12px, 2) 로 나눗셈(division)을 수행한다.
- npm install 을 통한 참조모듈들 설치는 전역 설치보다는 프로젝트 내의 로컬로만 설치하는 것을 추천. path 꼬임 방지 목적

**package.json**
- script 명령
- `"sass sass:css"` : dart sass를 통해 sass 폴더의 모든 파일을 css 로 처리해라 라는 의미.
- `"npm run sass -- --watch"` : 중간의 `--`는 `npm run` 명령어를 사용할 경우 앞 뒤를 구분하기 위함. `--watch`는 `-w`로 축약할 수 있다.
- `"devDependencies"`는 개발할 때만 필요. 배포할 때는 아무 필요 없음.

- browser는 sass 파일을 이해하지 못함. css로 빌드해서 변환해야 함.
- 빌드하면 css 파일과 함께 관련된 `sourcemap.css` 파일도 같이 생성된다. 개발할 때는 해당 파일이 어떤 sass파일을 가져다 썼는지 알려주기 때문에 필요하지만 배포할 때는 용량축소 관점에서 없는게 낫다. no source map으로 빌드시 생성되지 않게 할 수 있다.

**관련 실습**
- `input.html` 클래스 네이밍은 BEM 방식을 사용함.
- button 에 type 명시하지 않을 경우 form 요소에 포함되면 button이 아닌 submit type속성이 되어버려 초기 의도와 달라질 수 있다.
- 컴포넌트의 분할 기준으로 재활용 가능성을 들 수 있겠다. 자주 사용될 것으로 보인다면 분할 해서 사용한다.
- webfont 사용을 위해서, css 라면 `url()`을 사용해야 하지만 sass 는 생략해서 사용 가능하다. `url()`을 사용한다는 것은 결국 css 파일이라는 것. 
- `@import './base';` 와 `@import './_base.scss';`는 동일하다.
- import 방식은 entry 파일에 다 명시해줘서 사용함. use는?
import로 불러온 파일과 use로 불러온 파일의 사용법이 다름
use 는 변수나 메서드 앞에 파일명(또는 네임스페이스)을 명시해줘야 함.
- sass는 import한 파일에 이어서 차례대로, 선택자별로 속성값을 추가함. 이후에 빌드한 css 파일을 보면 확인해 볼 수 있음.

<hr>

## 두 번째 시간
- sass 연산 특징
    - `$value * 0` : `$value`에 단위가 있다면 단위를 없애주고 숫자값만 반환하게 함.
- height는 rem 단위를 잘 안씀. 강사님 스타일은 height를 주기보다 padding을 줘서 늘리는 스타일.

<hr>

## 세 번째 시간
- textarea는 보기 좋게하기 위해 마크업에서 줄바꿈하면 렌더링시 반영됨.
- forward 방식의 use 활용법. 하나의 덩어리로 만들어서 가져오는 것?
- checkbox 의 ux 측면에서 square 모양의 checkbox가 일반적인 스타일 circle로 하면 radio랑 헷갈릴 수 있음.
- checkbox 특성상 앞에 체크박스가 나오고 label이 뒤에 있기 때문에 마크업도 해당 순서를 고려해서 해야 레이아웃 작업이 편하다.

<hr>

## 네 번째 시간
- 스크롤의 경우 -webkit- 기반의 브라우저만 스타일링이 가능함

<hr>

## 다섯 번째 시간
- dart sass 국내 자료는 많지 않으므로 공식문서를 보는게 더 좋을 것으로 보임.