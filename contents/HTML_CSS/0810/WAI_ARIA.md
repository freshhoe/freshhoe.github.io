---
date: "2021-08-10"
title: "WAI-ARIA 란 무엇인가?"
categories: ["WEB"]
summary: "WAI-ARIA의 출현배경, 사용목적을 알아보고, 간단한 사용법에 대해 나열하였습니다."
thumbnail: "./Accessibility.jpg"
---

# WAI-ARIA?

## 의미와 출현 배경

WEB Accessibility Initiative – Accessible Rich Internet Applications 의 약어로 위키피디아의 정의는 다음과 같습니다.

> "웹 페이지, 특히 동적 콘텐츠, 그리고 Ajax, HTML, 자바스크립트 및 관련 기술로 개발된 사용자 인터페이스 구성 요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술 사양이다."  
> -위키피디아-

웹이 발전을 거듭하며 높은 수준의 사용자 경험을 요구하게 되었고, 기존의 정적인 문서의 개념에서 벗어나 위 정의에서 언급된 Ajax, 향상된 자바스크립트 관련 기술 등을 활용하여 웹 애플리케이션을 제작하고 향상된 사용자 경험을 제공할 수 있게 되었습니다. 이러한 애플리케이션을 통칭하여 **Rich Internet Applicaiton**(이하 RIA)라고 합니다. <br>
그러나 **RIA** 를 만드는데 사용되는 언어들에는 스크린 리더와 같은 보조기술을 사용하는 장애인들이 제대로 사용할 수 있게 하는데 필요한 모든 기능이 포함되어 있지는 않습니다. 따라서 W3C가 접근성 개선을 목적으로 발표한 기술 명세가 **WAI-ARIA** 입니다. <br>
따라서 해당 명세는 웹 애플리케이션 개발자들 뿐만아니라 유저 에이전트와 보조 기술 개발자에게도 접근성과 관련된 처리에 있어 유용할 수 있습니다.

<hr>

## 사용 목적

**WAI-ARIA** 는 마크업에 Role, Property, State 기능을 통해 정보를 추가할 수 있도록 지원합니다.<br>

- **Role** : UI에 포함된 특정 컴포넌트의 역할, 기능을 정의
- **Property** : 컴포넌트의 특징이나 상황을 정의하며 속성명으로 **"aria-"** prefix를 사용
- **State** : 컴포넌트의 상태 정보 정의 <br>
추가된 정보는 웹 브라우저에 의해 해석되어 OS의 접근성 API로 변환됩니다. 보조기기는 OS에서 제공하는 접근성 API를 통해 데스크탑 애플리케이션과 동일한 방법으로 자바스크립트 컨트롤을 인식하고 상호 작용하게 됩니다. 이로 인해 향상된 UX를 제공할 수 있게 되는 것입니다. 즉, 누락된 의미 구조 등을 요소나 컴포넌트에 적절하게 제공하여, 개발자의 의도가 보조 기술에도 잘 전달될 수 있도록 하는 것이 목적입니다.

<figure style = "display: block; text-align: center;">
  <img src = "./relation.png">
  <figcaption style = "text-align: center; font-size: 12px; color: #808080">
  (출처 : WAI-ARIA 사례집(온라인판).pdf)
  </figcaption>
</figure>

<hr>

## 3 가지 기능 설명

### 1. Role

특정 요소에 기능을 정의합니다. 페이지의 검색 영역인지, 네비게이션 요소인지, 섹션의 제목인지 등의 명확한 기능을 부여할 수 있습니다. 아래의 4가지 카테고리로 구분할 수 있습니다. <br>

- Document Structure Role
- Abstract Role
- Widget Role
- **Landmark Role** (**\*하단 별도 설명**)

#### 예시

```html
<a href=“/” onclick=“playApp()” role=“button”>재생</a>
```

버튼 컴포넌트 구현을 위해 `<a>` 태그를 사용하는 경우 스크린리더는 링크로 인식하기 때문에 사용자에게 혼선을 줄 수 있습니다. 위와 같이 `<a>` 태그에 `role="button"`을 지정하면 스크린리더는 버튼으로 인식하고 사용자에게 정확한 용도를 전달할 수 있습니다.

#### 1-1. Landmark Role

웹 페이지의 구성과 구조를 식별하는 방법을 제공합니다. 페이지의 섹션을 분류하고 레이블을 지정함으로써, 레이아웃을 통해 시각적으로 전달되는 구조 정보를 프로그래밍 방식으로 나타낼 수 있습니다.

#### 1-2. Landmark Role 종류

<figure style = "display: block; text-align: center;">
  <img src = "./landmark_role.png">
  <figcaption style = "text-align: center; font-size: 12px; color: #808080">
  (출처 : WAI-ARIA 사례집(온라인판).pdf)
  </figcaption>
</figure>

- **application**
  정적인 콘텐츠가 아닌 특정 기능을 제공하는 웹 애플리케이션의 영역임을 명시합니다. HTML 요소 중 동일한 역할의 요소는 없습니다. `<div>` 요소로 대체할 수 있습니다.
  <br>

- **banner**
  사이트 로고나 제목 등을 나타내는 헤더 정보를 포함할 수 있는 영역입니다. `<header>` 요소와 유사한 역할을 합니다.
  <br>

- **navigation**
  웹 사이트의 내비게이션 영역으로 링크 모음을 포함할 수 있습니다. `<nav>` 요소와 동일한 역할을 하기 때문에 중복사용을 피합니다. 또한 `<nav>` 요소와 달리 한 페이지에 2~3개 이상 사용하지 않습니다.
  <br>

- **main**
  메인 콘텐츠 영역을 의미하며 페이지 내에서 한 번만 선언할 수 있습니다. `<main>` 요소와 동일한 역할을 하기 때문에 중복사용을 피합니다.
  <br>

- **complementary**
  메인 콘텐츠를 보충할 부가적인 내용의 영역입니다. `<aside>` 요소와 동일한 역할을 합니다.
  <br>

- **form**
  사용자가 입력하여 서버로 전송될 수 있는 콘텐츠 영역입니다. `<form>` 요소와 동일한 역할을 하기 때문에 중복사용을 피합니다.
  <br>

- **search**
  검색을 위한 입력 폼 영역을 나타냅니다. HTML 요소 중 동일한 역할의 요소는 없습니다. `<div>` 또는 `<form>` 요소를 사용을 권장합니다.
  <br>

- **contentinfo**
  HTML `<footer>` 요소와 비슷한 역할을 합니다. 주소 및 연락처, 개인정보 정책 등의 내용을 담을 수 있는 영역입니다.
  <br>

#### 주의사항

- Semantic HTML 요소를 우선 고려합니다. 예를 들어, `<button>` 요소를 사용할 수 있음에도 불구하고 특정 태그에 `role="button"`을 붙여 사용하는 것은 지양합니다. Semantic HTML 요소들이 ARIA에 비해 훨씬 넓은 보조 기술 지원을 받기 때문입니다.<br>또한, 대화형 UI의 경우 반드시 레이블을 제공해야 하는데, 이 레이블 제공을 위해 `<label>` 요소 사용을 먼저 고려하는 것과 같은 상황도 포함됩니다.
  <br>
- 아래와 같은 **override**를 피합니다. `<button>` 요소에는 `heading` role과 충돌하는 기본 특성이 있기 때문입니다. 이렇게 요소의 native 의미를 변경하는 것은 권장사항이 아닙니다.

  ```html
  <button role="heading">search</button>
  ```

  <br>

- 아래와 같은 중복된 적용은 피합니다. 요소에 이미 `<button>` 의 역할이 정의되어 있기 때문에 role 의 기능은 불필요합니다.
  ```html
  <button role="button">...</button>
  ```
  <br>
- Landmark role 의 경우 HTML 섹션 관련 요소와 중복되어 사용할 경우 기능이 무효화 되거나 충돌이 발생할 수 있습니다.

<hr>

### 2. Property

요소가 기본적으로 가지고 있는 특징이나 상황을 말합니다. **form**의 입력상자가 읽기 전용(**Read Only**) 인지 필수 항목(**Require**)인지, 사용자 입력에 대해서는 자동 완성(**Auto Complete**) 기능을 지원할 지 **Drag**가 가능한지 등의 상황을 인지할 수 있게 만듭니다.

#### 예시

```html
<div class="“id-area”">
  <label for="“user-email”">아이디</label>
  <input type="“email”" id="“user-email”" aria-required="“true”" />
</div>
```

입력 폼에서 아이디를 필수로 입력받아야 하는 항목일 경우 `<input>` 에 `aria-required="true"`를 지정해주면 보조기기에서도 해당 항목이 필수항목임을 알 수 있습니다.

<hr>

### 3. State

요소의 현재 상태를 의미하며 상황의 변화에 따라 다른 값을 가집니다. 메뉴가 펼쳐진 상태(**expanded**)인지, 적절하지 못한(**invalid**) 값이 입력되었는지, 콘텐츠가 숨김 상태(**hidden**)인지 등을 나타낼 수 있습니다.

#### 예시

```html
<ul id="“menu”" role="“tree”">
  <li id="“menu”" role="“treeitem”" aria-expanded="“true”">
    <a>...</a>
    <ul id="“sub-menu”" role="“group”">
      <li id="“menu”" role="“treeitem”" aria-expanded="“false”">
        <a>...</a>
      </li>
    </ul>
  </li>
  <li id="“menu”" role="“treeitem”" aria-expanded="“false”">
    <a>...</a>
  </li>
</ul>
```

메뉴가 하위 메뉴를 포함하고 있는 경우, 현재 하위 메뉴가 펼쳐진 상태인지 여부를 스크린리더 사용자에게 제공할 수 있도록 `aria-expanded` 속성을 사용합니다. `true`, `false` 값의 지정을 통해 나타낼 수 있습니다.

#### 3-1. 아코디언 콘텐츠에 사용되는 **State**
아코디언 콘텐츠란 토글 기능을 통해 확장 축소를 할 수 있는 여러 개의 요소들이 하나의 그룹으로 묶여 있는 영역을 말합니다. 토글할 수 있는 객체를 아코디언 헤더라고 부르고, 그 버튼과 관련된 콘텐츠를 아코디언 패널이라고 부릅니다. <br> 보조기기 사용자는 아코디언 요소가 확장/축소될 때 페이지의 경로가 변경되지는 않기에 레이아웃 파악에 혼란을 겪을 수 있습니다. 따라서 아코디언 콘텐츠를 구상할 때는 적절한 ARIA 사용이 필요합니다.

- 아코디언 헤더에는 `aria-expanded` state 기능의 값을 상황에 맞게 부여해야 합니다. 아코디언 패널이 표시되는 경우는 `true`, 숨겨지는 경우는 `false`로 표시합니다.

```html
<button aria-expanded = "true">
  ```
<br>

- 아코디언 헤더 및 패널에 각각 고유 id를 부여해 사용합니다.
```html
<button id = "ah1">
```

<br>

- 부여된 id는 아코디언 헤더가 확장되는 경우 `aria-controls = "id"` 속성을 추가해 사용할 수 있습니다. `aria-controls` 는 컨트롤과 관련이 있는 컨텐츠를 하나로 연결하여, 해당 속성을 지원하는 보조기기에서는 특정 단축키를 통해 컨텐츠로 즉시 이동할 수 있도록 도와주는 역할을 합니다.

 <br>

#### 주의사항

- 정보는 전달하되 화면에서만 숨김 처리한 콘텐츠에 `aria-hidden="true"`를 지정하면 안 됩니다. 보조기기에서는 해당 요소를 의미적으로도 숨겨진 콘텐츠로 인식하기 때문입니다.
  <br>

- 비슷한 맥락으로 의미를 전달해야 하는 요소에 role 기능을 활용해 `role="presentation"` 지정해서는 안 됩니다. 보조기기에서는 해당 요소를 의미 없이 단순히 가시적 목적의 요소로 인식하기 때문입니다.
  <br>

- 사용자의 접근을 완전히 차단하고자 할 경우에는 CSS `display: none;` 으로 지정한 뒤 해당 요소에도 `aria-hidden="true"`을 지정해주면 됩니다.

## 참고사항

### 실무 사례

**레진의 WAI-ARIA 명세 도입 배경 사례**

> 페이지를 새로고침하지 않고 콘텐츠를 Ajax 방식으로 갱신했을 때 전맹 시각장애인은 어떤 응답을 받을 수 있을까? 갱신 사실을 보조기기에 즉시 알려줄 수 있으면 좋겠다. 비장애인이 화면에 등장하는 툴팁을 보면서 비밀번호를 바르게 생성(입력)하는 동안 시각 장애인은 아무런 안내도 받지 못한 상태로 잘못된 비밀번호를 계속해서 입력하고 있다.

**\*출처 : [레진 기술블로그]** https://tech.lezhin.com/2018/04/20/wai-aria

<br>

본 내용은 아래 링크를 참고하여 작성했습니다.
**[W3C Editor's Draft]** https://rawgit.com/w3c/aria-practices/apg-1.2/aria-practices.html
**[W3C Candidate Recommendation Draft]** https://www.w3.org/TR/html-aria/
**[NIA WAI-ARIA 사례집]** https://www.wah.or.kr:444/_Upload/pds2/WAI-ARIA%20%EC%82%AC%EB%A1%80%EC%A7%91(%EC%98%A8%EB%9D%BC%EC%9D%B8%ED%8C%90).pdf
**[NULI]** https://nuli.navercorp.com/community/article/1132889?email=true
