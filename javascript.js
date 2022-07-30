
function hamburger(){
    document.getElementById("menu-line1").style.cssText = "transform: rotate(45deg);"
    document.getElementById("menu-line3").style.cssText = "transform: rotate(-45deg);"
    document.getElementById("menu-line2").style.cssText = "display: none;"
    document.getElementById("mobile-fix-box").style.cssText = "display: block;"
    document.getElementById("mobile-box").style.cssText = "margin-left:0;"
}
function menuClose(){
    document.getElementById("menu-line1").style.cssText = "transform: rotate(0deg);"
    document.getElementById("menu-line3").style.cssText = "transform: rotate(0deg);"
    document.getElementById("menu-line2").style.cssText = "display: block;"
    document.getElementById("mobile-fix-box").style.cssText = "display: none;"
    document.getElementById("mobile-box").style.cssText = "margin-left:-100%;"
}


function pc21(){
    document.getElementById("p-m-g").style.cssText = "display: block;"
    document.getElementById("p-p-g").style.cssText = "display: block;"
    document.getElementById("c-p-g").style.cssText = "display: block;"
}
function pc22(){
    document.getElementById("p-m-g").style.cssText = "display: none;"
    document.getElementById("p-p-g").style.cssText = "display: block;"
    document.getElementById("c-p-g").style.cssText = "display: block;"
}

function pc23(){
    document.getElementById("p-m-g").style.cssText = "display: block;"
    document.getElementById("p-p-g").style.cssText = "display: none;"
    document.getElementById("c-p-g").style.cssText = "display: none;"
}
function pc24(){
    document.getElementById("p-m-g").style.cssText = "display: block;"
    document.getElementById("p-p-g").style.cssText = "display: block;"
    document.getElementById("c-p-g").style.cssText = "display: block;"
}

function phone(){
    document.getElementById("p-m-g").style.cssText = "display: block;"
    document.getElementById("p-p-g").style.cssText = "display: block;"
    document.getElementById("c-p-g").style.cssText = "display: none;"
}
function camera(){
    document.getElementById("p-m-g").style.cssText = "display: none;"
    document.getElementById("p-p-g").style.cssText = "display: none;"
    document.getElementById("c-p-g").style.cssText = "display: block;"
}


function searchNavBtn(){
    document.getElementById("search-nav-box").style.cssText = "display: block;"
    document.getElementById("bottom-top-main").style.cssText = "display: none;"
}
function searchNavBoxBtn(){
    document.getElementById("search-nav-box").style.cssText = "display: none;"
    document.getElementById("bottom-top-main").style.cssText = "display: block;"
}