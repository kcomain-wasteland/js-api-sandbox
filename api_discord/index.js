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


let versionNumber=Number(1)
const appDiv = document.getElementById('version');
appDiv.innerHTML = versionNumber;