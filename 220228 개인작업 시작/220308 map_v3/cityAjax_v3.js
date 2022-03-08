
// 하드코딩을 막기 위한 지역 json data 제작
const data = {
    "Seoul": [
        { "sub": "전체" },

        { "sub": "서울 강남구" },
        { "sub": "서울 강동구" },
        { "sub": "서울 강북구" },
        { "sub": "서울 강서구" },
        { "sub": "서울 관악구" },

        { "sub": "서울 광진구" },
        { "sub": "서울 구로구" },
        { "sub": "서울 금천구" },
        { "sub": "서울 노원구" },
        { "sub": "서울 도봉구" },

        { "sub": "서울 동대문구" },
        { "sub": "서울 동작구" },
        { "sub": "서울 마포구" },
        { "sub": "서울 서대문구" },
        { "sub": "서울 서초구" },

        { "sub": "서울 성동구" },
        { "sub": "서울 성북구" },
        { "sub": "서울 송파구" },
        { "sub": "서울 양천구" },
        { "sub": "서울 영등포구" },

        { "sub": "서울 용산구" },
        { "sub": "서울 은평구" },
        { "sub": "서울 종로구" },
        { "sub": "서울 중구" },
        { "sub": "서울 중랑구" }
    ],

    "Busan": [
        { "sub": "전체" },

        { "sub": "부산 강서구" },
        { "sub": "부산 금정구" },
        { "sub": "부산 남구" },
        { "sub": "부산 동구" },
        { "sub": "부산 동래구" },

        { "sub": "부산 부산진구" },
        { "sub": "부산 북구" },
        { "sub": "부산 사상구" },
        { "sub": "부산 사하구" },
        { "sub": "부산 서구" },
        { "sub": "부산 수영구" },

        { "sub": "부산 연제구" },
        { "sub": "부산 영도구" },
        { "sub": "부산 중구" },
        { "sub": "부산 해운대구" },
        { "sub": "부산 기장군" },
    ],

    "Daegu": [
        { "sub": "전체" },

        { "sub": "대구 남구" },
        { "sub": "대구 달서구" },
        { "sub": "대구 동구" },
        { "sub": "대구 북구" },
        { "sub": "대구 서구" },
        { "sub": "대구 수성구" },
        { "sub": "대구 중구" },
        { "sub": "대구 달성군" },
    ],

    "Incheon": [
        { "sub": "전체" },

        { "sub": "인천 계양구" },
        { "sub": "인천 남동구" },
        { "sub": "인천 동구" },
        { "sub": "인천 부평구" },
        { "sub": "인천 미추홀구" },

        { "sub": "인천 서구" },
        { "sub": "인천 연수구" },
        { "sub": "인천 중구" },
        { "sub": "인천 강화군" },
        { "sub": "인천 옹진군" },
    ],

    "Gwangju": [
        { "sub": "전체" },

        { "sub": "광주 광산구" },
        { "sub": "광주 남구" },
        { "sub": "광주 동구" },
        { "sub": "광주 북구" },
        { "sub": "광주 서구" },
    ],

    "Dajeon": [
        { "sub": "전체" },

        { "sub": "대전 대덕구" },
        { "sub": "대전 동구" },
        { "sub": "대전 서구" },
        { "sub": "대전 유성구" },
        { "sub": "대전 중구" },
    ],

    "Ulsan": [
        { "sub": "전체" },

        { "sub": "울산 남구" },
        { "sub": "울산 동구" },
        { "sub": "울산 북구" },
        { "sub": "울산 중구" },
        { "sub": "울산 울주군" },
    ],

    "Sejong": [
        { "sub": "전체" },
    ],

    "Gangwon": [
        { "sub": "전체" },

        { "sub": "강원 강릉시" },
        { "sub": "강원 동해시" },
        { "sub": "강원 삼척시" },
        { "sub": "강원 속초시" },
        { "sub": "강원 원주시" },
        { "sub": "강원 춘천시" },
        { "sub": "강원 태백시" },

        { "sub": "강원 고성군" },
        { "sub": "강원 양구군" },
        { "sub": "강원 양양군" },
        { "sub": "강원 영월군" },
        { "sub": "강원 인제군" },
        { "sub": "강원 정선군" },

        { "sub": "강원 철원군" },
        { "sub": "강원 평창군" },
        { "sub": "강원 홍천군" },
        { "sub": "강원 화천군" },
        { "sub": "강원 횡성군" },
    ],

    "Gyeonggi": [
        { "sub": "전체" },

        { "sub": "경기 고양시" },
        { "sub": "경기 과천시" },
        { "sub": "경기 광명시" },
        { "sub": "경기 광주시" },
        { "sub": "경기 구리시" },

        { "sub": "경기 군포시" },
        { "sub": "경기 김포시" },
        { "sub": "경기 남양주시" },
        { "sub": "경기 동두천시" },
        { "sub": "경기 부천시" },

        { "sub": "경기 성남시" },
        { "sub": "경기 수원시" },
        { "sub": "경기 시흥시" },
        { "sub": "경기 안산시" },
        { "sub": "경기 안성시" },

        { "sub": "경기 안양시" },
        { "sub": "경기 양주시" },
        { "sub": "경기 여주시" },
        { "sub": "경기 오산시" },
        { "sub": "경기 용인시" },

        { "sub": "경기 의왕시" },
        { "sub": "경기 의정부시" },
        { "sub": "경기 이천시" },
        { "sub": "경기 파주시" },
        { "sub": "경기 평택시" },

        { "sub": "경기 포천시" },
        { "sub": "경기 하남시" },
        { "sub": "경기 화성시" },

        { "sub": "경기 가평군" },
        { "sub": "경기 양평군" },
        { "sub": "경기 연천군" },
    ],

    "Gyeongnam": [
        { "sub": "전체" },

        { "sub": "경남 거제시" },
        { "sub": "경남 김해시" },
        { "sub": "경남 마산시" },
        { "sub": "경남 밀양시" },
        { "sub": "경남 사천시" },
        { "sub": "경남 양산시" },
        { "sub": "경남 진주시" },
        { "sub": "경남 진해시" },
        { "sub": "경남 창원시" },
        { "sub": "경남 통영시" },

        { "sub": "경남 거창군" },
        { "sub": "경남 고성군" },
        { "sub": "경남 남해군" },
        { "sub": "경남 의령군" },
        { "sub": "경남 창녕군" },
        { "sub": "경남 하동군" },
        { "sub": "경남 함안군" },
        { "sub": "경남 함양군" },
        { "sub": "경남 합천군" },
    ],

    "Gyeongbuk": [
        { "sub": "전체" },

        { "sub": "경북 경산시" },
        { "sub": "경북 경주시" },
        { "sub": "경북 구미시" },
        { "sub": "경북 김천시" },
        { "sub": "경북 문경시" },
        { "sub": "경북 상주시" },
        { "sub": "경북 안동시" },
        { "sub": "경북 영주시" },
        { "sub": "경북 영천시" },
        { "sub": "경북 포항시" },

        { "sub": "경북 고령군" },
        { "sub": "경북 군위군" },
        { "sub": "경북 봉화군" },
        { "sub": "경북 성주군" },
        { "sub": "경북 영덕군" },
        { "sub": "경북 영양군" },
        { "sub": "경북 예천군" },
        { "sub": "경북 울릉군" },
        { "sub": "경북 울진군" },
        { "sub": "경북 의성군" },
        { "sub": "경북 청도군" },
        { "sub": "경북 청송군" },
        { "sub": "경북 칠곡군" },

    ],

    "Jeonnam": [
        { "sub": "전체" },

        { "sub": "전남 광양시" },
        { "sub": "전남 나주시" },
        { "sub": "전남 목포시" },
        { "sub": "전남 광양시" },
        { "sub": "전남 순천시" },
        { "sub": "전남 여수시" },

        { "sub": "전남 강진군" },
        { "sub": "전남 고흥군" },
        { "sub": "전남 곡성군" },
        { "sub": "전남 구례군" },
        { "sub": "전남 담양군" },
        { "sub": "전남 무안군" },
        { "sub": "전남 보성군" },
        { "sub": "전남 신안군" },
        { "sub": "전남 영광군" },
        { "sub": "전남 영암군" },
        { "sub": "전남 완도군" },
        { "sub": "전남 장성군" },
        { "sub": "전남 장흥군" },
        { "sub": "전남 진도군" },
        { "sub": "전남 함평군" },
        { "sub": "전남 해남군" },
        { "sub": "전남 화순군" },

    ],

    "Jeonbuk": [
        { "sub": "전체" },

        { "sub": "전북 군산시" },
        { "sub": "전북 김제시" },
        { "sub": "전북 남원시" },
        { "sub": "전북 익산시" },
        { "sub": "전북 전주시" },
        { "sub": "전북 정읍시" },

        { "sub": "전북 고창군" },
        { "sub": "전북 무주군" },
        { "sub": "전북 부안군" },
        { "sub": "전북 순창군" },
        { "sub": "전북 완주군" },
        { "sub": "전북 임실군" },
        { "sub": "전북 장수군" },
        { "sub": "전북 진안군" },
    ],

    "Chungnam": [
        { "sub": "전체" },

        { "sub": "충남 계룡시" },
        { "sub": "충남 공주시" },
        { "sub": "충남 논산시" },
        { "sub": "충남 당진시" },
        { "sub": "충남 보령시" },
        { "sub": "충남 서산시" },
        { "sub": "충남 아산시" },
        { "sub": "충남 천안시" },

        { "sub": "충남 금산군" },
        { "sub": "충남 부여군" },
        { "sub": "충남 서천군" },
        { "sub": "충남 연기군" },
        { "sub": "충남 에산군" },
        { "sub": "충남 청양군" },
        { "sub": "충남 태안군" },
        { "sub": "충남 홍성군" },
    ],

    "Chungbuk": [
        { "sub": "전체" },

        { "sub": "충북 제천시" },
        { "sub": "충북 청주시" },
        { "sub": "충북 충주시" },

        { "sub": "충북 괴산군" },
        { "sub": "충북 단양군" },
        { "sub": "충북 보은군" },
        { "sub": "충북 영동군" },
        { "sub": "충북 옥천군" },
        { "sub": "충북 음성군" },
        { "sub": "충북 증평군" },
        { "sub": "충북 진천군" },
        { "sub": "충북 청원군" },
    ],

    "Jeju": [
        { "sub": "전체" },

        { "sub": "제주 서귀포시" },
        { "sub": "제주 제주시" },
    ]
}

// 일단 각 상위 지역에 리스너를 단다. 대한민국 범위에서 검색하는 전체 버튼은 1개이니 따로 리스너를 단다.
// 전체 버튼을 클릭하면 옆 상자에 아무 것도 뜨지 않는다... 어 전체 함수는 따로 만들어야겠네.
// allCityBtn.addEventListener('click', super_f);


// querySelectorAll로 모으면 배열이 된다. 전부 다 리스너 달아주고.
 const $cityBtn = document.querySelectorAll('.cityBtn');
 $cityBtn.forEach(ele => {
     ele.addEventListener('click', super_f);
 });

// 대한민국 범위를 포함한 상위 도시 선택을 하면 옆 서브박스에 하위도시가 출력되게 한다. 
// 예시로 울산 출력. data-sub-id=Ulsan. dataset.[]으로 속성을 읽어올 수 있다.
// 자고 일어나서 id를 바꿔야겠다 후...
function super_f(e){
    console.log(e.target.dataset.subId);

    const url = 'http://192.168.168.103:5500';
    fetch(url,{
        method:'GET',
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(err=> console.log(err));

      let html = '';

      switch(e.target.dataset.subId){
          case 'Ulsan':
            const listUlsan = data.Ulsan;

            listUlsan.forEach(Ulsan => {
              html +=   
              `<span><input type="checkbox" class="subChk">${Ulsan.sub}</span>`
            });
           
            subBox.innerHTML = html;
              
              break;

      };
     

}


//   function detailBtn_f(commentId){
//     const url = `http://localhost:8080/api/comments/${commentId}`;
//     fetch(url,{
//       method:'GET'
//     }).then(res=>res.json())
//       .then(res=>{
//         if(res.rtcd == '00'){
//           console.log(res.data);
//           const comment = res.data;
//           document.getElementById('commentId').value = comment.id;
//           document.getElementById('email').value = comment.email;
//           document.getElementById('nickname').value = comment.nickname;
//           document.getElementById('comment').value = comment.content;
//           saveBtn.textContent = '수정';
//         }else{
//           console.log(res.rtmsg);
//         }
//       })
//       .catch(err=>console.log(err));
//   }
    
    

  

