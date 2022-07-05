// 정렬
function sortinit(){
    var sortstring = document.querySelectorAll('.won');
    for(i=0;i<sortstring.length;i++){
        sortstring[i].innerHTML = '₩';
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
                if(Number(sort_price[i].innerHTML) > Number(sort_price[i+1].innerHTML)){
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
                if(Number(sort_price[i].innerHTML) < Number(sort_price[i+1].innerHTML)){
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

    