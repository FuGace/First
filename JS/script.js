document.getElementById('money').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu')
        closeMenu();
        s[0].style.display='block';
    }
}

document.onmouseover=function(event){
    var target = event.taget;
    console.log(event.target);
    if (target.className !='menu-item' && target.className!='submenu'){
       closeMenu(); 
    }
}

function closeMenu() {
    var menu = document.getElementById('money');
    var subm = document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++){
        subm[i].style.display="none";
    }
}