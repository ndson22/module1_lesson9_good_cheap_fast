function clickChecked(id){
    let good = document.getElementById('good');
    let fast = document.getElementById('fast');
    let cheap = document.getElementById('cheap');
    if(id==='good'&&fast.checked&&cheap.checked){
        fast.checked = false;
    }
    else if(id==='fast'&&good.checked&&cheap.checked){
        cheap.checked = false;
    }
    else if(id==='cheap'&&good.checked&&fast.checked){
        good.checked = false;
    }
}