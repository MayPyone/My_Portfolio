const mainmenu = document.querySelector('.mainMenu');
const closemenu = document.querySelector('.closeMenu');
const openmenu = document.querySelector('.openMenu');
const menuitems = document.querySelectorAll('nav .mainMenu li a');

function show() {
  mainmenu.style.display = 'inline';
  mainmenu.style.paddingTop = '80px';
  mainmenu.style.top = '0';
}

function close() {
  mainmenu.style.top = '-180%';
  mainmenu.style.display = 'flex';
  mainmenu.style.paddingTop = '2px';
}

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

const p1= {
  hname:'Tonic',
  pname:['Canopy','Full Stack Dev','2015'],
  img: "<img id='card-image' src='images/one.png' alt=''/>",
  description:'daily selection of privately personalized reads; no accounts or sign-ups required.'+
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."+
  " Odit exercitationem quidem eius illum",

  tech: ['html','Ruby on rails','css', 'javaScript'],
     
};

const p2= {
  hname:'Multi-Post Stories',
  pname:['Canopy','Full Stack Dev','2015'],
  img: "<img id='card-image' src='images/two.png' alt=''/>",
  description:'daily selection of privately personalized reads; no accounts or sign-ups required.'+
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."+
  " Odit exercitationem quidem eius illum",

  tech: ['html','Ruby on rails','css', 'javaScript'],
     
};

const p3= {
  hname:'Facebook 360',
  pname:['Canopy','Full Stack Dev','2015'],
  img: "<img id='card-image' src='images/three.png' alt=''/>",
  description:'daily selection of privately personalized reads; no accounts or sign-ups required.'+
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."+
  " Odit exercitationem quidem eius illum",

  tech: ['html','Ruby on rails','css', 'javaScript'],
     
};

const p4= {
  hname:'Uber Navigation',
  pname:['Canopy','Full Stack Dev','2015'],
  img: "<img id='card-image' src='images/four.png' alt=''/>",
  description:'daily selection of privately personalized reads; no accounts or sign-ups required.'+
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."+
  " Odit exercitationem quidem eius illum",

  tech: ['html','Ruby on rails','css', 'javaScript'],
     
};



const body=document.querySelector('body');
const open=document.querySelectorAll('.see-more');
const open2=document.querySelectorAll('.see-more2');
const open3=document.querySelectorAll('.see-more3');
const open4=document.querySelectorAll('.see-more4');

// open.addEventListener('click',()=>{
//   openfunction();
// });
open.forEach((item) => {
    item.addEventListener('click', () => {
      pe1();
    });
  });

  open2.forEach((item) => {
    item.addEventListener('click', () => {
      pe2();
    });
  });

  open3.forEach((item) => {
    item.addEventListener('click', () => {
      pe3();
    });
  });

  open4.forEach((item) => {
    item.addEventListener('click', () => {
      pe4();
    });
  });

  
function openfunction() {
const main=document.createElement('section');
main.className='main';
const popup=document.createElement('div');
popup.className='popup';
popup.innerHTML="<div class='upper'>"
+"<h2 class='stronger' id='head'>Header </h2>"+"<button type='button' class='close'><i class='fa fa-times'></i></button></div>"+
"<div id='mylist' class='canopy'>OK</div>"+
"<div class='mycard'>Nothing</div>"+
"<div class='footer'>"
+"<p class='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit."+
" Odit exercitationem quidem eius illum.</p> "+
"<div class='last-foot'><div id='mytech' class='language'>OK</div>"+
"<div class='bgroup'>"+
"<a class='see-live'href='#'><button type='button' class='live '>See live<img src='images/live.svg' alt=''></button></a>"+
"<a class='see-live'href='#'><button type='button' class='live'>See source<img src='images/git.png' alt=''></button></a></div></div></div>"
;

//popup.append(list);
main.append(popup);
body.append(main);

const close=document.querySelector('.close');
close.addEventListener('click', ()=> {
    body.removeChild(main);
})

}

function pe1(){
  openfunction()
  document.getElementById("head").innerHTML=p1.hname;

//pnamelist
var list = "<li class='noitem'>" + p1.pname.join("</li><li>") + "</li>";
document.getElementById("mylist").innerHTML = list;
var techlist = "<li class='noitem'>" + p1.tech.join("</li><li>") + "</li>";
document.getElementById("mytech").innerHTML = techlist;
// imagelist
document.querySelector(".mycard").innerHTML=p1.img;

document.querySelector(".des").innerHTML=p1.description;

}

function pe2(){
  openfunction();
  document.getElementById("head").innerHTML=p1.hname;

//pnamelist
var list = "<li class='noitem'>" + p2.pname.join("</li><li>") + "</li>";
document.getElementById("mylist").innerHTML = list;
var techlist = "<li class='noitem'>" + p2.tech.join("</li><li>") + "</li>";
document.getElementById("mytech").innerHTML = techlist;
// imagelist
document.querySelector(".mycard").innerHTML=p2.img;

document.querySelector(".des").innerHTML=p2.description;

}

function pe3(){
  openfunction();
  document.getElementById("head").innerHTML=p1.hname;

//pnamelist
var list = "<li class='noitem'>" + p3.pname.join("</li><li>") + "</li>";
document.getElementById("mylist").innerHTML = list;
var techlist = "<li class='noitem'>" + p3.tech.join("</li><li>") + "</li>";
document.getElementById("mytech").innerHTML = techlist;
// imagelist
document.querySelector(".mycard").innerHTML=p3.img;

document.querySelector(".des").innerHTML=p3.description;

}

function pe4(){
  openfunction();
  document.getElementById("head").innerHTML=p4.hname;

//pnamelist
var list = "<li class='noitem'>" + p4.pname.join("</li><li>") + "</li>";
document.getElementById("mylist").innerHTML = list;
var techlist = "<li class='noitem'>" + p4.tech.join("</li><li>") + "</li>";
document.getElementById("mytech").innerHTML = techlist;
// imagelist
document.querySelector(".mycard").innerHTML=p4.img;

document.querySelector(".des").innerHTML=p4.description;

}