var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aaa.jpg') {
      myImage.setAttribute ('src','images/ar.jpg');
    }
      else if(mySrc === 'images/ar.jpg'){
        myImage.setAttribute ('src','images/arr.jpg');
      }
    else {
      myImage.setAttribute ('src','images/aaa.jpg');
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