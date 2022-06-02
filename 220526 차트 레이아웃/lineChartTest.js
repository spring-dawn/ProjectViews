'use strict';

const line = document.getElementById('line');
let lineChart;

// line
lineChart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        // x축: 일수. 하드코딩할 순 없으니 업데이트 날짜를 불러오는 쿼리가 필요할 듯.
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: '월간 업데이트 횟수',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        scale:{
            y:{
                max: 150,
                min: 0,
                ticks:{
                    stepSize: 10
                }
                
            }
        }
    }
});