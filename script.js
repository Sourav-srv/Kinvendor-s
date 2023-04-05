const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');
if(bar){
      bar.addEventListener('click',()=>{
            nav.classList.add('active');
      })
}
if(close){
      close.addEventListener('click',()=>{
            nav.classList.remove('active');
      })
}
/*login*/
const wrapper =document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link');
const registerlink =document.querySelector('.register-link');

const btnPopup =document.querySelector('.btnLogin-popup');


const iconClose =document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>{
       wrapper.classList.add('active'); });
loginlink.addEventListener('click',()=>{
       wrapper.classList.remove('active'); });
 btnPopup.addEventListener('click',()=>{
      wrapper.classList.add('active-popup'); 
      });


iconClose.addEventListener('click',()=>{
      wrapper.classList.remove('active-popup'); 
});
/*search*/
/*
const searchproducts= (event)=>{
      let filter =document.getElementByClass('search-txt').value.toUpperCase();
      let ul =document.getElementById('header');
      let li=ul.getElementsByTagNameNS('li');
      for(var i=0;i<length;i++){
            let a=li[i].getElementsByTagName('a')[0];
            if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
                  li[i].style.display="";
            }else{
                  li[i].style.display="none";
            }
      }
}
*/