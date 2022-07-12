
const ww = document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)
const wh = document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)

let timeout

function logoView() {
  timeout = setTimeout(logo, 500)
}


function logoHiden() {
  timeout = setTimeout(() => {
    document.querySelector('.logoimg').style.cssText = `
            opacity: 1;
            visibility: visible;
        `
  }, 1000);
  timeout = setTimeout(() => {
    document.querySelector('.logop').style.cssText = `
            opacity: 1;
            visibility: visible;
        `
  }, 1500);
}

logoHiden()

function logo() {
  document.querySelector('.logo').style.cssText = `
          width: ${ww}px;
          height: ${wh}px`
  if (document.documentElement.clientWidth >= 938) {
    document.querySelector('.nav-header').style.cssText = `
            display: block;
        `
    document.querySelector('.nav-h').style.cssText = `
            display: none;
        `
  } else {
    document.querySelector('.nav-header').style.cssText = `
            display: none;
        `
    document.querySelector('.nav-h').style.cssText = `
            display: block;
        `
  }
  // let elem = document.querySelector('.logo')
  //  elem.style.cssText = `
  //    width: ${ww}px;
  //    height: ${wh}px`

  // if (document.documentElement.clientWidth >= 750) {
  //   document.querySelector('.ul-osn').style.cssText =`
  //       display: flex;
  //   `
  //   document.querySelector('.header-hidden').style.cssText = `
  //       display: none;
  //   `
  //   document.querySelector('.logo').style.cssText = `
  //    width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
  //    height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)}px;`
  // } else {
  //   document.querySelector('.ul-osn').style.cssText = `
  //       display: none;
  //   `
  //   document.querySelector('.header-hidden').style.cssText = `
  //       display: flex;
  //   `
  //   document.querySelector('.logo').style.cssText = `
  //    width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
  //    height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)}px;`
  // }

  if (document.documentElement.clientWidth >= 938) {
    document.querySelector('.ul-osn').classList.add('active');
    document.querySelector('.header-hidden').classList.add('hidden');

  } else {
    document.querySelector('.ul-osn').classList.add('hidden');
    document.querySelector('.header-hidden').classList.add('active');

  }

  let i = false
  document.getElementById('btn-hidden').addEventListener('click', () => {
    i = !i

    if (i) {
      // document.querySelector('.ul-hidden').classList.add('active-block');
      // document.querySelector('.ul-hidden').classList.remove('hidden');
      document.querySelector('.ul-hidden').style.cssText = `
            display: block;
        `
    } else {
      // document.querySelector('.ul-hidden').classList.remove('active-block');
      // document.querySelector('.ul-hidden').classList.add('hidden');
      document.querySelector('.ul-hidden').style.cssText = `
            display: none;
        `
    }
  });
}
logoView();
window.addEventListener('resize', function(event){

  if (document.documentElement.clientWidth >= 938) {
    document.querySelector('.nav-header').style.cssText = `
            display: block;
        `
    document.querySelector('.nav-h').style.cssText = `
            display: none;
        `
  } else {
    document.querySelector('.nav-header').style.cssText = `
            display: none;
        `
    document.querySelector('.nav-h').style.cssText = `
            display: block;
        `
  }

  document.querySelector('.logo').style.cssText = `
          width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
          height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)}px;
          `
});
