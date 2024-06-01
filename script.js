var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.display  = "block";
    navLinks.style.right = "0";
    navLinks.style.transition = "5s ease 3s";
}
function hideMenu(){
    navLinks.style.display = "none";
    navLinks.style.right = "-200px";
    navLinks.style.transition = "5s ease 3s";
}

