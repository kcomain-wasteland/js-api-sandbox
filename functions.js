export function setHtmlValue(id,value){
  document.getElementById(id).setInnerHTML(value);
  return
}
//Define commands and functions as below.
export function foo(bar){
  const foo="foo"
  const bar="bar"
  const par=bar
}

export function webhook(mode,url,variable){          //Proven Work
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
    http.setRequestHeader("Access-Control-Allow-Headers",'X-PINGOTHER, Content-Type')
    http.setRequestHeader("Access-Control-Allow-Origin",'*')
    http.setRequestHeader("Access-Control-Allow-Methods",'POST, GET')
    http.send();
    http.onreadystatechange=(e)=>{
      console.log(http.responseText)
      variable = http.responseText
      return
    }
  }
}

function autoCldMsg(value){
  fetch('https://llamalab.com/automate/cloud/message',{
    method:'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
{
  "secret": "2.gaBf8JXuGfkO9ERyMlInE57gx4sMEVkT2yLJz-vtITc",
  "to": "cheunghowui@gmail.com",
  "device": null,
  "priority": "normal",
  "payload": "Hello World!"
}



)
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
//stor https://runkit.io/kcomain/api/branches/master
