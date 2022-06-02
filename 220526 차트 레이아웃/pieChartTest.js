'use strict';
const pie = document.getElementById('pie');
let pieChart;

pieChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: [
            '완료',
            '대기',
            '진행중'
        ],
        datasets: [{
            label: '프로젝트 진행현황',
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