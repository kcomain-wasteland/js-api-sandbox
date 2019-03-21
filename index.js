// Import stylesheets
import './style.css';
import './functions.js'
import 'jquery'
// Write Javascript code!
function setHtmlValue(id,value){     //Proven Work
  document.getElementById(id).innerHTML = value;
  return
}
const datasend = false
function webhook(mode,datasend,url){          //Proven Work
  const http = new XMLHttpRequest();
  http.open(mode, url);
  if (datasend){
    
  }
  http.send();
  http.onreadystatechange=(e)=>{
    console.log(http.responseText)
  }
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Time to have a rest......(2019/03/20)
//Finally, can use WebHooks.
 setHtmlValue("version",9);

 var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "/json-handler";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));