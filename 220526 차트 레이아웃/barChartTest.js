'use strict';

//  연간 업무량 json
const annual = {
    "2021": [
        { "kykim": "30" },
        { "dhlee": "15" }
    ],

    "2022": [
        { "kykim": "45" },
        { "dhlee": "20" }
    ]
};

// 캔버스 위치, 차트 타겟팅은 전역변수.
const bar = document.getElementById('bar');
let barChart;

// 페이지 최초 로드 시 기본 호출 함수.
window.onload = function () {
    setDateBox();
    firstChart_f();
}

// select box 연도 , 월 표시
function setDateBox() {
    // 현재 날짜, 연도
    var dt = new Date();
    var year = "";
    var com_year = dt.getFullYear();
    const com_month = dt.getMonth() + 1;

    // 발행 뿌려주기(셀렉터 문법. #/. 로 id/class 타겟팅을 바꿀 수 있다.)
    // option: selected 디폴트. 오늘 날짜로 기본값 설정하고 로딩시켜야 한다.
    $(".year").append("<option value='selected'>" + com_year + " 년" + "</option>");

    // 올해 기준으로 -10년부터 +1년까지 보여준다.
    for (var y = (com_year - 10); y <= (com_year + 1); y++) {
        $(".year").append("<option value='" + y + "'>" + y + " 년" + "</option>");
    }

    // 월 뿌려주기(1월부터 12월)
    var month;
    $(".month").append("<option value=''>" + " 월" + "</option>");
    for (var i = 1; i <= 12; i++) {
        $(".month").append("<option value='" + i + "'>" + i + " 월" + "</option>");
    }

    // 일 뿌려주기(1일부터 31일)
    var day;
    $("#day").append("<option value=''>일</option>");
    for (var i = 1; i <= 31; i++) {
        $("#day").append("<option value='" + i + "'>" + i + " 일" + "</option>");
    }
}

// 최초 로드 차트 그리기
function firstChart_f() {
    // 데이터 세팅
    const labels = [
        '팀장',
        '사원',
        '수습'
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: '연간 업무량',
            data: [45, 20, 5],
            backgroundColor: 'rgb(255, 99, 132)',  //배열로 더 많은 색 넣을 수 있지만 눈 아파서
            borderColor: 'rgb(255, 99, 132)'
        }]
    };
    const config = {
        type: 'bar',
        data,
        options: {}
    };

    //새 차트 객체 생성
    barChart = new Chart(bar, config);
}

// test
// 데이터 조작 버튼
changeBtn.addEventListener('click', changeData_f);
function changeData_f() {
    // 새로 넣을 x, y축 데이터
    const xData = ['kykim', 'dhlee', 'hblee', 'a', 'b'];
    const yData = [22, 7, 2, 10, 15];

    // 1) 기존 데이터 삭제
    let $cData = barChart.config.data;
    $cData.labels = []; //x축. .splice(0) 사용해도 된다.
    $cData.datasets[0].data = []; //y축. 배열 함수들이 거의 먹히지 않는다. 이게 최선.

    //2) 데이터 변경. 배열로 된 데이터를 넣는 경우엔 [...]으로 요소를 풀어 넣으면 된다
    barChart.config.data.labels.push(...xData);
    barChart.config.data.datasets[0].data.push(...yData);

    // 3)차트 갱신
    barChart.update();
}
