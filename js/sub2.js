// 정렬
function sortinit(){
    var KRW = [3920,9900,7920,19920,31920,79920];
    var sort_price = document.querySelectorAll('.add_price');
    var sortstring = document.querySelectorAll('.won');
    for(i=0;i<sortstring.length;i++){
        sortstring[i].innerHTML = '₩';
        sort_price[i].innerHTML = KRW[i].toLocaleString('ko-KR');
    }
    sortList.onclick = function(e){
        standard.innerHTML = e.target.innerText;
   }
}
sortinit();

function sortingUp(){
    var sort_ul, i, switching, sort_li,shouldSwitch;
    sort_ul = document.getElementById('addList')
        switching = true;
    while(switching){
        switching = false;
        sort_li = sort_ul.getElementsByTagName('li');
        sort_price = sort_ul.querySelectorAll('.add_price');
        for(i=0;i<(sort_li.length-1);i++){
            shouldSwitch = false;
            if(parseInt(sort_price[i].innerHTML) > parseInt(sort_price[i+1].innerHTML)){
                shouldSwitch = true;
                break;
            }
        }
            
        if(shouldSwitch){
            sort_li[i].parentNode.insertBefore(sort_li[i+1],sort_li[i]);
            switching = true;
        }
    }
}

function sortingDown(){
    var sort_ul, i, switching, sort_li,shouldSwitch;
    sort_ul = document.getElementById('addList');
    switching = true;
    while(switching){
        switching = false;
        sort_li = sort_ul.getElementsByTagName('li');
        sort_price = sort_ul.querySelectorAll('.add_price');
        for(i=0;i<(sort_li.length-1);i++){
            shouldSwitch = false;
            if(parseInt(sort_price[i].innerHTML) < parseInt(sort_price[i+1].innerHTML)){
                shouldSwitch = true;
                break;
            }
        }
    if(shouldSwitch){
        sort_li[i].parentNode.insertBefore(sort_li[i+1],sort_li[i]);
        switching = true;
        }
    }
}

function sortingAll(){
    var sort_ul, i, switching, sort_li, sort_name, shouldSwitch;
    sort_ul = document.getElementById('addList');
    switching = true;
    while(switching){
        switching = false;
        sort_li = sort_ul.getElementsByTagName('li');
        sort_name = sort_ul.querySelectorAll('.sortname');
        for(i=0;i<(sort_li.length-1);i++){
            shouldSwitch = false;
            if(sort_name[i].innerHTML.toLowerCase() <= sort_name[i+1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
    if(shouldSwitch){
        sort_li[i].parentNode.insertBefore(sort_li[i+1],sort_li[i]);
        switching = true;
        }
    }
}

// 필터링
function filterinit(){
    var f_list;
    var f_class;
    var i;
    filterbox.onclick = function(e){
        f_list = document.querySelectorAll('.sorter');
        f_class = filterbox.getElementsByTagName('li');
        for(i=0;i<=f_list.length;i++){
            if(e.target.value == 11000 && f_list[i].value < e.target.value){
                // e.target.classList.add('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.value == 22000 && f_list[i].value < e.target.value){
                // e.target.classList.add('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.value == 33000 && f_list[i].value < e.target.value){
                // e.target.classList.add('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.value == 15000 && f_list[i].value >= e.target.value){
                // e.target.classList.add('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.id == 'free' || e.target.id == 'sale'){
                // e.target.classList.add('on');
                // f_class[i].classList.remove('on');
                f_list[i].style.display = 'none';
                hidden.style.display = 'block';
            } else {
                f_list[i].style.display = 'none';
                hidden.style.display = 'none';
            }
        }
    }
    filterbox2.onclick = function(e){
        f_list = document.querySelectorAll('.sorter');
        f_class = filterbox2.getElementsByTagName('li');
        for(i=0;i<=f_list.length;i++){
            if(e.target.id == 'game'){
                // e.target.classList.toggle('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.id=='book' || e.target.id=='vid' || e.target.id=='sound'){
                // e.target.classList.toggle('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'block';
                f_list[i].style.display = 'none';
            } else {
                hidden.style.display = 'block';
                f_list[i].style.display = 'none';
            }
        }
    }
    filterbox3.onclick = function(e){
        f_list = document.querySelectorAll('.sorter');
        f_class = filterbox3.getElementsByTagName('li');
        for(i=0;i<=f_list.length;i++){
            if(e.target.id == 'win'){
                // e.target.classList.toggle('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'none';
                f_list[i].style.display = 'flex';
            } else if(e.target.id == 'mac'){
                // e.target.classList.toggle('on');
                // f_class[i].classList.remove('on');
                hidden.style.display = 'block';
                f_list[i].style.display = 'none';
            } else{
                hidden.style.display = 'block';
                f_list[i].style.display = 'none';
            }
        }
    }
}
filterinit();