function setHtmlValue(id,value){
  document.getElementById(id).setInnerHTML(value);
  return
}
//Define commands and functions as below.
function foo(bar){
  const foo="foo"
  const bar="bar"
  const par=bar
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