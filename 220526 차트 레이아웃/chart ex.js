'use strict';

// 타겟팅
const bar = document.getElementById('bar');
const pie = document.getElementById('pie');
const line = document.getElementById('line');


// 페이지 최초 로드. 이거 자바스크립트로도 있지 싶은데. 
$(document).ready(function () {
    // 차트 데이터 최신 날짜로 렌더링, 날짜 셀렉트박스 데이터
    setDateBox();
    firtsChart_f();
});

// select box 연도 , 월 표시
function setDateBox() {
    // 현재 날짜, 연도
    var dt = new Date();
    var year = "";
    var com_year = dt.getFullYear();
    const com_month = dt.getMonth() + 1;

    // 발행 뿌려주기(셀렉터 문법. #/. 로 id/class 타겟팅을 바꿀 수 있다.)
    // option: seleted 디폴트. 오늘 날짜로 기본값 설정하고 로딩시켜야 한다.
    $(".year").append("<option value=''>" + "연도" + "</option>");

    // 올해 기준으로 -20년부터 +1년까지 보여준다.
    for (var y = (com_year - 20); y <= (com_year + 1); y++) {
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

// 차트 그리기
function firtsChart_f() {
    // 1) bar 
    const config = {
        type: 'bar',
        data,
        options: {}
    };

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


