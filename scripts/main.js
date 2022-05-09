  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
myButton.onclick = () => {
    setUserName();
}    
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
if (document.querySelector('html').onload)  {
    localStorage.clear;
}