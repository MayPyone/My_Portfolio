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

const arr = [
  {
    hname: 'Tonic',
    pname: [' ', 'Canopy', 'Full Stack Dev', '2015'],
    img: "<img id='card-image' src='images/one.png' alt=''/>",
    description: 'daily selection of privately personalized reads; no accounts or sign-ups required.'
   + 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
   + 'Odit exercitationem quidem eius illum',
    tech: [' ', 'html', 'Ruby on rails', 'css', 'javaScript'],
    link: '#',
    psource: '#',
  },
  {
    hname: 'Multi-Post Stories',
    pname: [' ', 'Canopy', 'Full Stack Dev', '2015'],
    img: "<img id='card-image' src='images/two.png' alt=''/>",
    description: 'daily selection of privately personalized reads; no accounts or sign-ups required.'
   + 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    + 'Odit exercitationem quidem eius illum',
    tech: [' ', 'html', 'Ruby on rails', 'css', 'javaScript'],
    link: '#',
    psource: '#',
  },

  {
    hname: 'Facebook 360',
    pname: [' ', 'Facebook', 'Full Stack Dev', '2015'],
    img: "<img id='card-image' src='images/three.png' alt=''/>",
    description: 'daily selection of privately personalized reads; no accounts or sign-ups required.'
  + 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  + 'Odit exercitationem quidem eius illum',
    tech: [' ', 'html', 'Ruby on rails', 'css', 'javaScript'],
    link: '#',
    psource: '#',
  },

  {
    hname: 'Uber Navigation',
    pname: [' ', 'Multiposts', 'Full Stack Dev', '2015'],
    img: "<img id='card-image' src='images/four.png' alt=''/>",
    description: 'daily selection of privately personalized reads; no accounts or sign-ups required.'
 + 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  + 'Odit exercitationem quidem eius illum',
    tech: [' ', 'html', 'Ruby on rails', 'css', 'javaScript'],
    link: '#',
    psource: '#',
  },
];

const body = document.querySelector('body');
const open = document.querySelectorAll('.see-more');
const open2 = document.querySelectorAll('.see-more2');
const open3 = document.querySelectorAll('.see-more3');
const open4 = document.querySelectorAll('.see-more4');
function openfunction() {
  const main = document.createElement('section');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = "<div class='upper'>"
  + "<h2 class='stronger' id='head'>Header </h2>"
  + "<button type='button' class='close'><i class='fa fa-times'></i></button></div>"
  + "<div id='mylist' class='canopy'>OK</div>"
  + "<div class='mycard'>Nothing</div>"
  + "<div class='footer'>"
  + "<p class='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit."
  + ' Odit exercitationem quidem eius illum.</p> '
  + "<div class='last-foot'><div id='mytech' class='language'>OK</div>"
  + "<div class='bgroup'>"
  + "<a class='see-live id='link' href='#'><button type='button' class='live '>See live<img src='images/live.svg' alt=''></button></a>"
  + "<a class='see-live' id='res' href='#'><button type='button' class='live'>See source<img src='images/git.png' alt=''></button></a></div></div></div>";
  main.append(popup);
  body.append(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
}

function myfun(position) {
  openfunction();
  document.getElementById('head').innerHTML = arr[position].hname;
  const list = arr[position].pname.join('</li><li>');
  document.getElementById('mylist').innerHTML = list;
  const techlist = arr[position].tech.join('</li><li>');
  document.getElementById('mytech').innerHTML = techlist;
  document.querySelector('.mycard').innerHTML = arr[position].img;
  document.querySelector('.des').innerHTML = arr[position].description;
  document.querySelector('.res').querySelector.setAttribute('href', arr[position].psource);
  document.querySelector('.link').querySelector.setAttribute('href', arr[position].link);
}

open.forEach((item) => {
  item.addEventListener('click', () => {
    myfun(0);
  });
});

open2.forEach((item) => {
  item.addEventListener('click', () => {
    myfun(1);
  });
});

open3.forEach((item) => {
  item.addEventListener('click', () => {
    myfun(2);
  });
});

open4.forEach((item) => {
  item.addEventListener('click', () => {
    myfun(3);
  });
});

const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  const messages = [];
  if (email.value !== email.value.toLowerCase()) {
    messages.push(' ! email should be lowercase');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});