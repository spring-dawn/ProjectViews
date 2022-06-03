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

// 현재 날짜, 연도
var dt = new Date();
var year = "";
var com_year = dt.getFullYear();
const com_month = dt.getMonth() + 1;

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
    // 발행 뿌려주기(셀렉터 문법. #/. 로 id/class 타겟팅을 바꿀 수 있다.)
    // option: selected 디폴트. 오늘 날짜로 기본값 설정하고 로딩시켜야 한다.
    $(".year").append("<option value='selected'>" + com_year +"년"+ "</option>");

    // 올해 기준으로 -5년부터 +1년까지 보여준다. 기록은 적은데 숫자가 너무 커서; 5로 줄임.
    for (var y = (com_year - 5); y <= (com_year + 1); y++) {
        $(".year").append("<option value='" + y + "'>" + y + "년" + "</option>");
    }

    // 월 뿌려주기(1월부터 12월)
    var month;
    $(".month").append("<option value='selected'>" + com_month+"월" + "</option>");
    for (var i = 1; i <= 12; i++) {
        $(".month").append("<option value='" + i + "'>" + i + "월" + "</option>");
    }

    // // 일 뿌려주기(1일부터 31일)
    // var day;
    // $("#day").append("<option value=''>일</option>");
    // for (var i = 1; i <= 31; i++) {
    //     $("#day").append("<option value='" + i + "'>" + i + "일" + "</option>");
    // }
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
        options: {
            scale:{
                y:{
                    max: 50,
                    min: 1,
                    stepSize: 1
                }
            }
        }
    };

    //새 차트 객체 생성
    barChart = new Chart(bar, config);
}

// =================================================== select 제어

// 타겟팅, 리스너 등록
const $SelectM = document.getElementById('monthL');
$SelectM.addEventListener('change', month_f);

const $SelectY = document.querySelectorAll('.year');
$SelectY.forEach(ele => {
    ele.addEventListener('change', year_f);
})

// 날짜값은 디폴트로
let yearValue;
let monthValue;

function year_f(e) {
    // console.log('연도 선택');
    // 1) 함수 실행을 위치에 따라 분리
    const boxId = e.target.dataset.id;  //사용자가 선택한 박스의 위치(id)

    // 2) 각 분기에서 선택된 옵션값을 읽는다 
    switch (boxId) {
        case 'yearB':
            console.log('막대 차트');
            yearValue = $SelectY[0].options[$SelectY[0].selectedIndex].text;
            console.log(yearValue);

            // // 3) 읽은 옵션값을 ajax로 서버에 전달
            // $.ajax({
            //     type: "POST",
            //     url: window.location.pathname,
            //     dataType: "json",
            //     data: {
            //         task: "select",
            //         mode: "doc",
            //         data: {
            //             YEAR: yearValue.substring(0, 4)
            //             // ,MONTH: sMonthValue.substring(0, 1)
            //         }
            //     }
            // }).done(function (res) {
            //     barChartData_f(res);
            // }).fail(function (res) {
            //     showToastE("통신에 문제가 있습니다.");
            // });
            break;

        case 'yearP':
            console.log('원형 차트');
            yearValue = $SelectY[1].options[$SelectY[1].selectedIndex].text;
            console.log(yearValue);

            




            break;

        case 'yearL':
            month_f();
            break;

        default:
            break;
    }
}

// 라인 차트 월 선택
function month_f() {
    // console.log('선형 차트, 연도/월');
    yearValue = $SelectY[2].options[$SelectY[2].selectedIndex].text;
    monthValue = $SelectM.options[$SelectM.selectedIndex].text;

    let lineWhen = yearValue.substring(0,4) +'-'+ monthValue.replace("월", "").padStart(2,'0');
    console.log(lineWhen);

    // 3) 읽은 옵션값을 ajax로 서버에 전달
            // $.ajax({
            //     type: "POST",
            //     url: window.location.pathname,
            //     dataType: "json",
            //     data: {
            //         task: "select",
            //         mode: "line",
            //         data: {create_dtm: lineWhen}
            //     }
            // }).done(function (res) {
            //     barChartData_f(res);
            // }).fail(function (res) {
            //     showToastE("통신에 문제가 있습니다.");
            // });

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
