// 각 지역 타겟팅. 근데 이게 옳은 방식인가?? 너무 난잡해서 틀렸단 생각이 드는데;






// 원하는 광역시칸 타겟팅(버튼은 바로 리스너 달면 됨)

function subCities_f(e){
    console.log(e);

    let html = '';
    // this는 자기자신. 선택된 체크박스 자신을 this로 받는다.
    html += `<div class='cities'>`;
    html += `<span><input type="checkbox" name='all' onclick='chkAll_f(this)'>전체</span>`;
    html += `<span><input type="checkbox">울산 남구</span>`;
    html += `<span><input type="checkbox">울산 동구</span>`;
    html += `</div><div class='cities'>`;
    html += `<span><input type="checkbox">울산 북구</span>`;
    html += `<span><input type="checkbox">울산 울주군</span>`;
    html += `<span><input type="checkbox">울산 중구</span>`;
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



