$(document).ready(function () {
    console.log("aaa")
    var $navbarItem = $(".navbar_items"),
        $navbarMenu = $(".navbar_menu"),
        $subMenu = $(".navbar_submenu");
    console.log($subMenu);
    $subMenu.hide();

    $navbarItem.mouseenter(function () {
        console.log(this);
        $(this).children(".navbar_submenu").stop().slideDown();
    })
    $navbarItem.mouseleave(function () {
        $(this).children(".navbar_submenu").stop().slideUp();

    })
    
})

$('.pw').focusout(function () {
    var pwd1 = $("#password_1").val();
    var pwd2 = $("#password_2").val();

    if ( pwd1 != '' && pwd2 == '' ) {
        null;
    } else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            $("#alert-success").css('display', 'inline-block');
            $("#alert-danger").css('display', 'none');
        } else {
            alert("비밀번호가 일치하지 않습니다. 비밀번호를 재확인해주세요.");
            $("#alert-success").css('display', 'none');
            $("#alert-danger").css('display', 'inline-block');
        }
    }
});



const clock = document.querySelector('.h1-clock');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();