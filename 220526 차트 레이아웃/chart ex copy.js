'use strict';

// 셀렉트박스에서 선택된 옵션값 읽어오기. ex 막대 그래프의 연도(yearB)
// 1) onchange 함수 선언
function yearB() {
    const sBar = document.getElementById("yearB");   //셀렉트박스 타겟팅
    
    // 선택된 값 읽기 
    const sValue= sBar.options[sBar.selectedIndex].text;  //option의 0번째 인덱스는 2022년(기본값), 그런데 왜 seletedIndex는 안 먹히지? > ㅇㄴ 되잖아 뭐임?
    console.log(sValue);

    
}



// 셀렉트박스 날짜 표시, 디폴트는 현재. 
$(document).ready(function () {
    setDateBox();
});

// select box 연도 , 월 표시
function setDateBox() {
    // 현재 날짜, 연도
    var dt = new Date();
    var year = "";
    var com_year = dt.getFullYear();
    const com_month = dt.getMonth() + 1;

    // 발행 뿌려주기(셀렉터 문법. #/. 로 id/class 타겟팅을 바꿀 수 있다.)
    // 옵션 밸류에서 이름 바꿀 수 있음
    // option: seleted 디폴트값. 
    $(".year").append("<option value='selected'>" + com_year + " 년" + "</option>");

    // 올해 기준으로 -50년부터 +1년을 보여준다.
    for (var y = (com_year - 50); y <= (com_year + 1); y++) {
        $(".year").append("<option value='" + y + "'>" + y + " 년" + "</option>");
    }

    // 월 뿌려주기(1월부터 12월)
    var month;
    $(".month").append("<option value=''>" + com_month + " 월" + "</option>");
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


// 막대
const bar = document.getElementById('bar');
const barChart = new Chart(bar, {
    type: 'bar',
    data: {
        // x축
        labels: ['그룹장', '대리', '사원', '수습'],
        datasets: [{
            // y축
            label: '업무량(개수)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            text: '담당자별 업무순위'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 원형
const pie = document.getElementById('pie');
const pieChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: [
            '진행중',
            '대기',
            '완료'
        ],
        datasets: [{
            label: '프로젝트 현황',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
});


// 선형(꺾은 선)
const line = document.getElementById('line');
const lineChart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        // 일수를 하드코딩할 순 없으니 반복문 쓰든가 하자
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        datasets: [{
            label: '월간 업데이트 횟수',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 10, 5, 2, 10, 5, 2, 10, 5, 2]
        }]
    },

    // Configuration options go here
    options: {}
});