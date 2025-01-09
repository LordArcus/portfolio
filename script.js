var navLinks = document.getElementById("navLinks");
var list = document.getElementById("list");
var backspace = document.getElementById("backspace")

function showMenu(){
    if (window.innerWidth <= 700){
        navLinks.style.display = "block";
        backspace.style.display = "block";
    }
    
    
}
function hideMenu(){
    if (window.innerWidth <= 700){
        navLinks.style.display = "none";
        backspace.style.display = "none";
    }
}
