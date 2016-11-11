/*Using asynchronous XHR request */


for (var i = 0; i < 100; i++) {
	var request = new XMLHttpRequest();/*us XMLHttpRequest to make calls and request data from
	your server. You start by oppening a connection and then sending the data. */
	request.open('GET', 'data.txt', false);/*method get, then location of data file, last request is 
	boolean that specifies whether you want request to be asynchronous or not. false makes request
	asynchronous */
	request.send();/*Sends request to server */
	if (request.status===200) {
		console.log(request);/*Output results to javascript console */
		document.writeln(request.responseText);
	}	
}

/******************************************************************************************/

/*Making requests asynchronous */

var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();

/******************************************************************************************/

/*Scripting for backwards compatibility */


var request;
if (window.XMLHttpRequest) { /* if browser api has xml.httpRequest object*/
	request = new XMLHttpRequest(); /*Set request variable to this new object */
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP"); /* otherwise check for active x object*/
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();


/******************************************************************************************/

/*Updating the DOM with getElementById */

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		/* create variable called modify to be equal to element on the DOM*/
		var modify = document.getElementById('update');/*updates the div element on the dom with 
		the id of update */
		modify.innerHTML = request.responseText; /*The responseText property and returns the response
		 as a string, and you can use it accordingly */
	}
}
request.send();/*send request to server */


/******************************************************************************************/

/*Modifying elements with getElementsByTagName */

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var modify = document.getElementsByTagName('li');/*place an array of elements 
		into the modify variable */
		for (var i = 0; i < modify.length; i++) {
			modify[i].innerHTML = request.responseText;	/*modify each index, the innner html with
			the response text from the request, looks for all the elements on page that have
			a list item */		
		}
	}
}
request.send();

/******************************************************************************************/



/* parsing XML and using AJAX*/

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		/* responseXML. It's sort of like the responseText property, except that it converts 
		the data into an object that you can manipulate through JavaScript.*/

		//Logs on console
		console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);
		/* firstChild and .nodeValue gets the first element child plus nodeValue gets the text alone*/


		// Make a list of our speakers		
		var items = request.responseXML.getElementsByTagName('name');/*looks for the elements 
		with the tag of name */
		var output = '<ul>'; /* Create an output variable with an unordered list*/

		/*Cycle through the XML file using a for loop. When the request is ready we'll create a 
		variable that looks for the elements with a tag of name. */



		for (var i = 0; i < items.length; i++) { /*Create loop */
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}/*add the value of each result as list items. */
		output += '</ul>';
		document.getElementById('update').innerHTML = output;/*Send results to our div with the 
		value of update */
	}
}
request.send();


/******************************************************************************************/



/*Reading JSON Files */

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json'); /*Open command opens json document */
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		/* Crate variable Items, set it to json object, and use parse command with response text of
		request*/
		var items = JSON.parse(request.responseText);/* Gets the data from json text file
		and outputs to console below with parse command*/
		
		var output = '<ul>'; /*Create output variable just like xml */
			for (var key in items) { /*loop through the value of the objects with for in statement,
			which loops through the properties of an object. The block of code inside the loop will be 
			executed once for each property.*/
				output += '<li>' + items[key].name + '</li>';
			}
		output += '</ul>';

		document.getElementById('update').innerHTML = output; /*throws in the ul li list created
		with the data into the update div element with innerHTML js function */
	}
}
request.send();



/******************************************************************************************/



/*Using event driven ajax */

var mybutton = document.getElementById('loadbutton'); /*Create variable that gets to button
in order for code bellow to populate data from json file to show */

mybutton.onclick = function() { /*Check for a click (calling the variable), created as a function 
	literal with variable mybutton */
		var request;
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		request.open('GET', 'data.json');
		request.onreadystatechange = function() {
			if ((request.readyState===4) && (request.status===200)) {
				var items = JSON.parse(request.responseText);
				var output = '<ul>';
				for (var key in items) {
					output += '<li>' + items[key].name + '</li>';
				}
				output += '</ul>';
				document.getElementById('update').innerHTML = output;
			}
		}
		request.send();
} // loadAJAX
 
 // Events can be triggered either through an attribute in the HTML 
 //or through an event handler in JavaScript. 


/******************************************************************************************/

// Understanding and Installing JQuery 

var mybutton = document.getElementById('loadbutton');
mybutton.onclick = function() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();
} // loadAJAX


/******************************************************************************************/


/*Working with JQuery amd AJAX */

/*Select the element call of update and use the load method to load the text file into
the class called update. Very simple! :) */

$('.update:even').load('data.txt'); 


















