'use strict';

// 게시물마다 체크박스가 따라 추가되게 해야 하는데 이거 js로 하는 게 맞나?? 게시물은 서버에서 등록되는데 체크박스를 DOM으로 더해줄 수 있나??
// 문제: 첫 번째 게시물에만 적용되고 나머지엔 생성되지 않고 있다. 반복문 혹은 이벤트리스너 등으로 게시물 개수에 맞춰 생성해줘야 할 것 같은데 대혼란. / 지금: 해결.

// 0) 상위 컨테이너 위치 타겟팅. 여기 아래로 추가할 것이다.
const whereBookmark = document.querySelectorAll('.bookmark-container');

// 1) 요소 생성
const $label = document.createElement('label');
const $likeList = document.createElement('input');

const $checked = document.createElement('i');
const $unchecked = document.createElement('i');

// 2) label, input에 각각 속성 추가
// label의 for와 input의 id를 연결하는 게 웹표준 방식으로 권장된다지만 이 경우는 그럴 수 없으니 label로 감싼다.
$label.setAttribute('class', 'bookmark');

$likeList.setAttribute('type', 'checkbox');
$likeList.setAttribute('class', 'likeList');
$likeList.setAttribute('name', 'likeList');

$unchecked.setAttribute('class', 'fas fa-heart unchecked');
$checked.setAttribute('class', 'fas fa-heart checked');

// 3) 컨텐츠 추가
// 딱히 더할 게 없네

// 4) 상위 컨테이너에 추가. 컨테이너 안에 자식 요소로 넣는다.
$label.appendChild($likeList);
$label.appendChild($unchecked);
$label.appendChild($checked);

// cloneNode로 똑같이 복사한 체크박스를 각 타겟팅 위치(class)에 반복 생성, 추가한다.
[...whereBookmark].forEach(ele => ele.appendChild($label.cloneNode(true)));



// 체크가 읽히는지 확인해볼까? 일단은 이벤트리스너를 등록해야지;
// 1) 지도 만들 때처럼 체크박스가 생성되기 전엔 없다. 상위 컨테이너에 리스너를 위임 등록한다.
const $bookmark = document.querySelectorAll('.likeList');
$bookmark.forEach(ele => {
  // 생각해보니 이거 이벤트가 버튼 클릭이 아니잖냐? 체크박스가 체크/해제 되었을 때 이벤트 로직 처리.
  ele.addEventListener('change', isChecked_f);
});

function isChecked_f(e){
  // 이벤트가 먹히는지 확인
  console.log(e);
  // 체크 된 것만 읽어오기
  const query = 'input[name="likeList"]:checked';
  const theChecked = document.querySelectorAll(query);
  console.log(theChecked);

  // 체크된 곳의 dataset이 뭔지 읽어와야 하는데 여기선 실험을 더 못하네

}





