/*
    These programs are written by Kenny Cheung. 
    PLEASErefer to me if you are going to use these programs.
*/


// Check for the various File API support.
if (window.File && window.FileReader && window.Blob) {
  alert('All API supported YAY!')
} else {
  alert('The File APIs are not fully supported in this browser.');
}
//OOF 

let versionNumber=Number(9)
function setInnerHTML(id,value){
  
}
const appDiv = document.getElementById('version');
appDiv.innerHTML = versionNumber;
document.getElementById('attribute').innerHTML = "https://loading.io/icon/qau8ei";