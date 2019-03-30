var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'aaa.jpg') {
      myImage.setAttribute ('src','ar.jpg');
    }
      else if(mySrc === 'ar.jpg'){
        myImage.setAttribute ('src','arr.jpg');
      }
    else {
      myImage.setAttribute ('src','aaa.jpg');
    }
}
var myButton = document.querySelector('.button1');
var myHeading = document.querySelector('#top');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'My Profile Name is, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'My Profile Name is, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }