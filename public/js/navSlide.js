const menuBtn = document.querySelector('.menu i');
const mobileNav = document.querySelector('.mobileNav')
const aboutBtn = document.querySelector('.dropMobileA');
const dropDownMobile = document.querySelector('.dropDownMobile');

let dropDownMobileStatus = false;
let mobileNavStatus = false;



const noScroll = () => {
  window.scrollTo(0, 0);
}







const showMenu = () => {
  if (!mobileNavStatus) {
    mobileNav.style.right = 0;
    mobileNav.style.left = 0;
    mobileNavStatus = !mobileNavStatus
    window.addEventListener('scroll', noScroll);

  } else {
    mobileNav.style.right = '-600px';
    mobileNav.style.left = '1000px';
    mobileNavStatus = !mobileNavStatus
    window.removeEventListener('scroll', noScroll);
  }

}

/*
const showAbout = (e) => {
  e.preventDefault();
  if (!dropDownMobileStatus) {
    dropDownMobileStatus = !dropDownMobileStatus
    dropDownMobile.style.display = 'block';
  } else {
    dropDownMobileStatus = !dropDownMobileStatus
    dropDownMobile.style.display = 'none';
  }

}


*/










//aboutBtn.addEventListener('click', showAbout)
menuBtn.addEventListener('click', showMenu);
