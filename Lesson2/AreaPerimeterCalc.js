var $ = function (id) {
    return document.getElementById(id); 
}

var calculate_click = function() {
    var Length = parseFloat( $("Length").value );
    var Width  = parseFloat( $("Width").value );

    $("Area").value = "";
    $("Perimeter").value = "";

    if ( isNaN(Length) || Length <= 0 ) {
        alert("Subtotal must be a number that is zero or more!");
    } else if ( isNaN(Width) || Width <= 0 ) {
        alert("Width must be a number that is zero or more!");
    } else {
        var Area = Width * Length;
        Area = parseFloat( Area.toFixed(2) );
        var Perimeter = (2 * Width) + (2 * Length);
		$("Area").value = Area;
        $("Perimeter").value = Perimeter.toFixed(2);
    }
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
	
    $("Length").focus();
}
