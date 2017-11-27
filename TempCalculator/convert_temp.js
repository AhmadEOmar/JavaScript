var $ = function (id) { return document.getElementById(id); }

var fToC = function ()
{
	document.getElementById('degrees_fahrenheit').value = "";
	document.getElementById('degrees_celcius').value = "";
	document.getElementById("degrees_fahrenheit").disabled = false ;
	document.getElementById("degrees_celcius").disabled = true;
}

var cToF = function()
{
	document.getElementById('degrees_fahrenheit').value = "";
	document.getElementById('degrees_celcius').value = "";
	document.getElementById("degrees_fahrenheit").disabled = true ;
	document.getElementById("degrees_celcius").disabled = false;
}
var convert_click = function() {
    var degrees_fahrenheit =  parseFloat( $("degrees_fahrenheit").value );
    var degrees_celcius =  parseFloat( $("degrees_celcius").value );
   

    if ( $("to_celcius").checked ) 
	{
		degrees_celcius = (degrees_fahrenheit-32) * 5/9;
   
    } 
	else if ($("to_fahrenheit").checked)
	{
		degrees_fahrenheit = degrees_celcius * 9/5 + 32;    
	}
	
   
    $("degrees_fahrenheit").value = degrees_fahrenheit;
    $("degrees_celcius").value = degrees_celcius;
   
};		

           
    

window.onload = function () {
 $("convert").onclick = convert_click;
 
};