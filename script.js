let listTrigger = document.querySelectorAll('.nav-item');

function showList(){
     this.querySelector('.nav-item-list').style.display = "block";
     this.querySelector('img').style.transform = "rotate(180deg)";
}
function hideList(){
    this.querySelector('.nav-item-list').style.display = "none";
    this.querySelector('img').style.transform = "rotate(360deg)";
}

listTrigger.forEach(el => {
    el.onmouseover = showList;
    el.onmouseout = hideList;
})