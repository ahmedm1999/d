const sidebar = document.getElementById("sidebar") ;
const openBtn = document.getElementsByClassName("openBar") ;
const closeBtn = document.getElementById("close-div") ;
const sideContainer = document.getElementById("sidebar-container") ;
const openBar = () => {
    sidebar.style.bottom = '0px' ;
	sidebar.style.transition = '0.5s' ;
    sideContainer.style.display = 'block' ;
    for(btn of openBtn) {
        btn.style.display = 'none' ;
    }
} 
const closeBar = () => {
	sidebar.style.bottom = '-550px' ;
	sidebar.style.transition = '0.5s' ;
    sideContainer.style.display = 'none' ;
    for(btn of openBtn) {
        btn.style.display = 'block' ;
    }
}

const closeSideOut = (e) => {
    if (e.target == sideContainer) {
       closeBar() ;
    }
}

for(btn of openBtn) {
	btn.addEventListener('click',openBar) ;
}
closeBtn.addEventListener("click", closeBar) ;

window.addEventListener('click', closeSideOut) ;

/////////////////////////////////////////////////////////////

const toTop = document.querySelector(".to-top");
const navbar = document.querySelector(".navbar") ;
const brandName = document.querySelector(".brand-name") ;
const logo = document.getElementById("navlogo") ;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
    navbar.classList.add("navbar-1") ;
    brandName.style.display = 'inline-block' ;
    logo.setAttribute("src", "pic/logomaindes.png") ;
    logo.style.transition = '0.5s' ;
  } else {
    toTop.classList.remove("active");
    navbar.classList.remove("navbar-1") ;
    brandName.style.display = 'none' ;
    logo.setAttribute("src", "pic/logo.png") ;
    logo.style.transition = '0.5s' ;
  }
})