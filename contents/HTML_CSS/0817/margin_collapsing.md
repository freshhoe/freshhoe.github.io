---
date: '2021-08-17'
title: 'margin collapsing'
categories: ['HTML', 'CSS']
summary: 'margin collapsing 에 대해 알아보고 정리한 글입니다.'
thumbnail: './HTMLCSS.jpg'
---

# 작성중

## margin collapsing

- 두 개 이상의 블록 요소들의 상하 margin이 겹칠 때, 어느 한 쪽의 값만 적용되는(상쇄되는) 것을 말합니다.
- 즉, 요소의 상하 margin에서만 발생하므로 아래와 같이 `writing-mode: vertical-lr`로 요소가 쌓이는 흐름이 바뀔 경우에도 margin collapse가 가능합니다. 이 때 요소는 수평으로 쌓여 있게되므로 수평 margin collapse가 발생하고, 수직 margin collapse는 발생하지 않습니다.
- **참고** : `writing-mode` 를 활용해 block 요소를 수직(vertically)이 아닌 수평(horizontally)으로 쌓을 수 있습니다.

```html
<!-- html -->
<p>p1</p>
<p>p2</p>
```

```css
/* css */
html {
  writing-mode: vertical-lr;
}
p {
  display: block;
  margin-block-start: 20px;
  margin-block-end: 20px;
}
```

그럼 구체적인 발생 상황을 알아보겠습니다.

### 발생 상황

#### 인접 형제 요소

- 인접 형제 요소의 상하 margin이 겹칠 때, 두 margin의 값 중 큰 값으로 상쇄되어(작은 값이 아닌) 적용됩니다. 두 값이 동일할 경우 하나의 margin 값만 적용됩니다.

- **예외** : 뒤에 오는 형제 요소가 floating 해제를 위한 요소라면 margin collapsing이 일어나지 않습니다. 반대로 말하면 float된 요소는 margin collapsing이 일어나지 않는다는 말과 같습니다.

#### 부모와 자손을 분리하는 콘텐츠의 유무

-

#### 빈 블록 요소

- `height`, `min-height`, `max-height`, `padding`, `border` 등과 같이 요소에 높이를 만드는 속성 값을 명시적으로 부여하지 않거나,
- 내부에 inline 콘텐츠가 없어 높이가 0인 **빈 블록** 상태일 때,
- 상하 경계가 없기 때문에 자기 자신의 위쪽 margin과 아래쪽 margin 값 중 더 큰 값으로 상쇄되어 적용됩니다. 두 값이 동일할 경우 하나의 margin 값만 적용됩니다.

<hr>

## 더 알아보면 좋을 것들

<hr>

### 참조링크

- https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
- https://www.joshwcomeau.com/css/rules-of-margin-collapse/
- https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4
