fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/*
﻿
﻿
function webhook(mode,url,variable){          //Proven Work
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
*/         //Proven Work

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