// Import stylesheets
import './style.css';
import './functions.js'
import 'jquery'
var jque = require('jquery')
// Write Javascript code!
/*
function setHtmlValue(id,value){     //Proven Work
  document.getElementById(id).innerHTML = value;
  return
}
*/

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Time to have a rest......(2019/03/20)
//Finally, can use WebHooks.


// jQuery
jque.$.getScript('./functions.js', function(){
    // script is now loaded and executed.
    // put your dependent JS here.
     setHtmlValue("version",9);
});