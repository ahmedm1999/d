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
    logo.style.transition = '0.5s' ;
  } else {
    toTop.classList.remove("active");
    navbar.classList.remove("navbar-1") ;
    brandName.style.display = 'none' ;
    logo.setAttribute("src", "pic/logomaindes.png") ;
    logo.style.transition = '0.5s' ;
  }
}) 
///////////////////////////////////////////////////////////// 
//  = `<span class="const">const</span> <span class="blue">codeDiv</span> = <span class="li-blue">document</span><span class="dot">.</span><span class="function">querySelector</span>(<span class="green">".code-div"</span>) ;
// <p><span class="blue">codeDiv</span><span class="dot">.</span><span class="event">addEventListener</span>(<span class="green"> 'mousover'</span>, <span class="event">( ) =></span> {
// <br/> <span class="dashs">-------</span><span class="this">this</span><span class="dot">.</span><span class="function">showCridet()</span> ; <br/>
// }) ;</p>` ;
// console.log()
// const mainInner = `<span class="this">\<</span><span class="this">script</span><span class="this">></span><br/>
//     <span class="const">const</span> <span class="blue">aboutUs</span> = {<br/> 
//     <span class="dashs">-------</span><span class="this">name</span> : <span class="event">" NextGenTech "</span><br/>
//     <span class="dashs">-------</span><span class="this">service</span> : <span class="event">" Web Design & Development "</span><br/>
//     <span class="dashs">-------</span><span class="this">tchniques</span> : <span class="event">"Pure code, no templates"</span><br/>
//     <span class="dashs">-------</span><span class="this">contact</span> : 
//     {<br/><span class="dashs">-------</span><span class="dashs">-------</span><span class="this">E-mail</span> : <span class="event">" nextg307@gmail.com "</span><br/>

//     <span class="dashs">-------</span><span class="dashs">-------</span><span class="this">phone</span> : <span class="event">" +9627 9502 3801 "</span><br/><span class="dashs">-------</span>}<br/>} ;<br/><span class="this">\<</span><span class="this">/ script</span><span class="this">></span>` ;
const mainInner = `<span class="const">const</span> <span class="blue">nextGenTech</span> = <span class="li-blue">document</span><span class="dot">.</span><span class="function">querySelector</span>(<span class="green">".services"</span>) ;
<p><span class="blue">nextGenTech</span><span class="dot">.</span><span class="event">addEventListener</span>(<span class="green"> 'load'</span>, <span class="event">( ) =></span> {
<br/> <span class="dashs">-------</span><span class="const">console</span><span class="dot">.</span><span class="function">log</span>(<span class="li-blue">"The power of thechnologeis"</span>) ; <br/>}` ;
let codeDiv = document.querySelector(".code-div").innerHTML = mainInner ;