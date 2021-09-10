---
date: '2021-08-27'
title: '15. HTML&CSS TIL'
categories: ['HTML', 'CSS']
summary: ''
thumbnail: './HTMLCSS.jpg'
---
<!-- ![](./images/.PNG) -->

## 첫 번째 시간
- 마크업 과정에서 클래스 네이밍을 잘해야 유지보수 시 수고를 덜 수 있을 것. 나중에 함수 네이밍도 마찬가지.
- [Atomic design pattern을 그만 해야하는 이유](https://jbee.io/react/stop-using-atomic-design/)
- 블로그 글도 디테일한 사용법도 좋지만 하나의 주제에 대해 딥하게 파고 들어간 글을 쓰는 것이 어필하기에 좋다.
- postcss의 도입도 시너지가 난다면 도입을 시도하는 것.

- `tailwind.config.js`에 mode 설정 `mode: 'jit',` 를 쓰는 이유는 직접 등록해서 사용하는 custom class 때문. 해당 모드를 사용하면 빌드가 훨씬 간편하고 빨라짐.
- `tailwind.config.js` 풀코드를 찾아서 어떤 설정을 할 수 있는지 살펴보는 것이 설정 커스텀 하는데 도움이 될듯.
- 기존 값에 overide 시키고 싶다면 tailwind.css를 바꾸면 된다. style.css는 빌드용 파일.

- `<br>`이 아닌 `<span>`으로 구분해서 줄바꿈. 이후에 강조를 위해서라면 span을 다른 강조 태그로 바꿔서 사용해도 됨.

```css
<p class="">
    인생을 바꾸는 교육,
    <span class="block">패스트 캠퍼스.</span>
</p>
```
- tailwind에 space-y라는 클래스를 통해 컴포넌트 사이의 y축 간격만 마진을 통해 벌려줌. 그러나 이것을 사용하기 위해서는 컴포넌트들을 하나로 묶어줘야 함.
- tailwind는 mobile first로 작업을 진행해야 함.
- intellisense가 작동하면 class 명 입력하면 자동완성이라던지 좌표입력이면 수치화해서 보여줌. 만약 작동하지 않으면 공식문서에서 관련 클래스 검색하면 됨.

- jit 모드에서 커스텀 클래스를 작성하는 법 `w-[200px]`. `width: 200px`을 위한 커스텀 클래스. 수치값은 대괄호 안에 넣어주면 된다.
- 커스텀 클래스르 많이 쓸수록 빌드 속도가 느려질 수 있음. 기존에 있던 클래스를 가져오는 것이 아니기 때문으로 보임.


<hr>

## 두 번째 시간
- svg로 하면 다크모드 전환 시 이미지 체인지 할 필요없이 필 컬러 체인지 해주면 됨.
- tailwind가 무거워지면서 대항마로 windycss 라는 새로운 프레임워크가 등장함.
- 하나의 클래스가 너무 길어질 경우 tailwind.css 에 공통된 설정은 하나의 클래스명으로 압축해서 사용가능 `@apply`로 html에서 사용가능. 관련 내용은 `@apply` 검색
```css
.input {
  @apply w-full border border-gray5 border-solid rounded-md p-4 outline-none focus:border-black dark:border-primary;
}
```

<hr>

## 세 번째 시간
- 자동로그인 체크박스 이미지 변경을위해 appearnce-none을 주고, 없어진 이미지를 키보드가 포커스 하기위해서 abosolte를 줘서 화면에 띄워 해당 영역만큼 포커스 할 수 있도록 만든다. 키보드를 통한 접근성 

- tailwind class 는 해당 요소만 적용할 수 있다. 따라서 이럴 때는 tailwind.css에 직접 원하는 스타일을 입력해야 한다.

- tailwind 는 버전업이 되면 이전 문법이 적용되지 않을 수 있다. 이런걸 공식문서를 바탕으로 조사해보고 블로그에 정리해두면 좋을듯. 이렇게 새로운 프레임워크, 유틸리티들을 알아보고 장단점 등을 비교해가며 정리해두는걸 권장.


**프로젝트 안내**

- 발표시 보여주는 비주얼도 신경써야 함. [Slides.com](slides.com)
- 비포 애프터를 보여주는 것이 효과적인 내용 전달이 될 수 있음. 잘 모르는 사람에게도 전달이 잘 되게끔 해야함.
- 발표시간 25~30분. 16:00부터 시작.

- 수요일, 목요일. 기술면접도 있음. 최대 20분. 수업시간에 던져줬던 주제와 그렇지 않은 것도 물어볼 것.
- [animeJS](https://codepen.io/codewitharyann/pen/poERmEM) : 스크립트를 넣을 수 있는 부분은 넣어서 구현해 보면 좋을듯. codepen 예제도 있음.
- [yammo9 번역자료](https://github.com/yamoo9/anime)


<hr>

## 네 번째 시간

<hr>

## 다섯 번째 시간

