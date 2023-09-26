//change nav style on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scrolled", window.scrollY >0);
})

// c0ntact
const textButtons=document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton =>{
    let text = textButton.querySelector('p');

     text.innerHTML=text.innerHTML.split('').map((character,  index) =>`<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join("")
});



// /ga;llery

 
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
 
    pagination:{
      el: ".swiper-pagination",
      clickable: true,
      
    },
    breakpoints:{
      599:{
        slidesPerView: 2,
        spaceBetween: 40
      },
      1023:{
        slidesPerView:3,
        spaceBetween: 60
      }
    }
  });
// gg
const nav =document.querySelector('.nav_links');
const opennavbtn=document.querySelector('#nav_toggle-open');
const closenavbtn =document.querySelector('#nav_toggle-close');

const opennav = () => {
  nav.style.display ='flex';
  opennavbtn.style.display ='none';
  closenavbtn.style.display='inline-block';

}
opennavbtn.addEventListener('click',opennav);

const closenav = () => {
  nav.style.display ='none';
  opennavbtn.style.display ='inline-block';
  closenavbtn.style.display='none';
  
}
closenavbtn.addEventListener('click',closenav);

// close 

if(document.body.clientwidth < 1024){
  nav.querySelectorAll('li a').forEach( navlink =>{
    navlink.addEventListener('click',closenav)
  });
};