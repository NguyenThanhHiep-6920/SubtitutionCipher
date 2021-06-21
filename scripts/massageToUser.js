//image changer by click 
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Prosím, vyplnte Svoje jméno: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vítám Vás, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Vítám Vás, ' + storedName;
  }

  