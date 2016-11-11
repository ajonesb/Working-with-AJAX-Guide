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



/******************************************************************************************/


/*Reading data with JQuery */

$.getJSON('data.json', function(data) { /*pass along the data we get from this getjson function
in order to get data.json file */
	var 
	output = '<ul>'; /*variable created called output (not an actual method)  */
		/*instead of using js foor loop, use jquery's each statement */
		$.each(data, function(key, val) { /*Pass along data, then function literal. Function literal will
			have a couple of variables, key and val. Similar to using js for in statement.*/
	output += '<li>' + val.name + '</li>'; /*output list item, output a variable and pass
		along name, close list item. name comes from the list of objects and the name of value
		pairs. */
	});
	output +='</ul>';
	$('#update').prepend(output); /*to update html, use html jquery method prepend to add the 
	data from the json file. Or append to add it after the h1 tag called Speakers.*/
});



/*******************************************************************************************/


/*Read the json data and output it into our div */

/*This will read the json file and then as a callback, will run an anonymus function
to pass along the data that we have. */


$.getJSON('data.json', function(data) {

//First test to make sure the data is being sent. 
//console.log(data);


	var output = '<ul class="searchresults">'; //create variable output, feed unordered list with class
	$.each(data, function(key, val) { // use each statement to output list items, function literal
		//meaning doesn't have an actual function name.
		output += '<li>'; //output elements on there own line
		output += '<h2>'+ val.name +'</h2>'; // output the name from the value variable that gets
		//created from .each statement, .name on json file.
		output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
		//outputs image targeting image folder, targeting value of shortname on json file, 
		//then get image with path _tn.jpg and alt of value of name with .name value on json file.
		output += '<p>'+ val.bio +'</p>'; // get bio text targeting bio value on json file
		output += '</li>';
	});
	output += '</ul>'; //closes out variable created
	$('#update').html(output); //output html into #update div

}); //get JSON


/*******************************************************************************************/


/*Searching JSON data */

$('#search').keyup(function() { //target input field with id of search, use .keyup jquery event
	// to target keys being clicked, then function literal
	var searchField = $('#search').val(); // get the text the user is typing, target div with
	//id of search and getting the value that is in that field.
	var myExp = new RegExp(searchField, "i"); // create new variable myExp, create new RegExp 
	// which RegExp Regular expressions are used to perform pattern-matching and
	//0 "search-and-replace" functions on text. Takes searchField, type i in quotes for case
	//insensitive search.
	$.getJSON('data.json', function(data) { // get json data file 
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) || // wrap around list of output items, if value 
				//of name from data file, then execute a search, passing it a regular expression
				//the one created called myExp, and if not equal -1, means it did find text in data
			(val.bio.search(myExp) != -1)) { // also search bio field which || means or search bio also
				//says look for regular expression in name or in the bio field.
				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
				output += '<p>'+ val.bio +'</p>';
				output += '</li>';
			}
		}); // if find text in data, output everything above
		output += '</ul>';
		$('#update').html(output);//output the html in the div id of update
	}); //get JSON
});
