// Import stylesheets
import './style.css';
import './functions.js'
import 'jquery'
// Write Javascript code!
function setHtmlValue(id,value){     //Proven Work
  document.getElementById(id).innerHTML = value;
  return
}
function webhook(mode,url,variable){          //Proven Work
  const http = new XMLHttpRequest();
  http.open(mode, url);
  if (mode!="GET"){
    var json = prompt("JSON Data")
    var header = prompt("Content Type(application/json)")
    http.setRequestHeader("Content-Type",header+";charset=UTF-8" )
    http.send(JSON.stringify(json));
    console.log(http.responseText)
    return http.responseText
  } else {
  http.send();
    http.onreadystatechange=(e)=>{
      console.log(http.responseText)
      variable = http.responseText
      return
    }
  }
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Time to have a rest......(2019/03/20)
//Finally, can use WebHooks.
 setHtmlValue("version",9);
