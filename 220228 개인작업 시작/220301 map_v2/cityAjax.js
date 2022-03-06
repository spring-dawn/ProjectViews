'use strict';

// 각 지역 타겟팅. 근데 이게 옳은 방식인가?? 너무 난잡해서 틀렸단 생각이 드는데;
const $Korea = document.getElementById('Korea');

const $Seoul = document.getElementById('Seoul');
const $Busan = document.getElementById('Busan');

const $Daegu = document.getElementById('Daegu');
const $Incheon = document.getElementById('Incheon');

const $Gwangju = document.getElementById('Gwangju');
const $Dajeon = document.getElementById('Dajeon');

const $Ulsan = document.getElementById('Ulsan');
const $Sejong = document.getElementById('Sejong');

const $Gyeonggi = document.getElementById('Gyeonggi');
const $Gangwon = document.getElementById('Gangwon');

const $Chungbuk = document.getElementById('Chungbuk');
const $Chungnam = document.getElementById('Chungnam');

const $Jeonbuk = document.getElementById('Jeonbuk');
const $Jeonnam = document.getElementById('Jeonnam');

const $Gyeongbuk = document.getElementById('Gyeongbuk');
const $Gyeongnam = document.getElementById('Gyeongnam');

const $Jeju = document.getElementById('Jeju');

// 각 타겟에 리스너 달기; 버튼으로 만들었음 리스너만 달았을 텐데 일을 두 번 하네; 
$Korea.addEventListener('click', subCities_f);
$Seoul.addEventListener('click', subCities_f);
$Sejong.addEventListener('click', subCities_f);
$Busan.addEventListener('click', subCities_f);
$Ulsan.addEventListener('click', subCities_f);
$Gangwon.addEventListener('click', subCities_f);
$Gwangju.addEventListener('click', subCities_f);
$Gyeongbuk.addEventListener('click', subCities_f);
$Gyeonggi.addEventListener('click', subCities_f);
$Gyeongnam.addEventListener('click', subCities_f);
$Daegu.addEventListener('click', subCities_f);
$Chungbuk.addEventListener('click', subCities_f);
$Chungnam.addEventListener('click', subCities_f);
$Jeju.addEventListener('click', subCities_f);
$Jeonbuk.addEventListener('click', subCities_f);
$Jeonnam.addEventListener('click', subCities_f);
$Dajeon.addEventListener('click', subCities_f);
$Incheon.addEventListener('click', subCities_f);

        // 원하는 광역시칸 타겟팅(버튼은 바로 리스너 달면 됨)

        function subCities_f(e){
            console.log(e);

            let html = '';
            // this는 자기자신. 선택된 체크박스 자신을 this로 받는다.
            html += `<div class='cities'>`;
            html += `<span>전체<input type="checkbox" name='all' onclick='chkAll_f(this)'></span>`;
            html += `<span>울산 남구<input type="checkbox"></span>`;
            html += `<span>울산 동구<input type="checkbox"></span>`;
            html += `</div><div class='cities'>`;
            html += `<span>울산 북구<input type="checkbox"></span>`;
            html += `<span>울산 울주군<input type="checkbox"></span>`;
            html += `<span>울산 중구<input type="checkbox"></span>`;
            html += `</div>`;

            cityBox.innerHTML = html;
        }
        

















        // 체크박스 중 전체를 선택하면 전부 체크된다. 이거 좀 간단하게 짜고 싶은데 켁. 
        function chkAll_f(e){
            console.log('전체 선택');
            const checkboxs = document.querySelectorAll('input[type="checkbox"]');

            checkboxs.forEach( (checkboxs)=> {
                checkboxs.checked = e.checked;
            })

        }



