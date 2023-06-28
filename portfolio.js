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

const mail = document.getElementById('email');

const submit =document.getElementById('submit');
submit.addEventListener('click',() => {
   
})

function islower(myemail) {
  if( myemail.value != myemail.value.toLowerCase()) {
    //mail.push("Your email address should be lowercase");
  }
}
