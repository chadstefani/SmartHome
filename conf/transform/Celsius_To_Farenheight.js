//*** This is used to transform the nest and other temps that show C******/

//Goes in the transform folder
(function(i) 
{
	//The following script converts °C to °F or °F to °C.
	//Example: Passing "21 F" (Case sensitive) will convert 21 °C to °F.
	//Example: Passing "40 C" (Case sensitive) will convert 40 °F to °C.
	var res = i.split(" ");
	
	//Check requested scale
	if(res[1] == "F"){
		var degrees = (res[0] * (9/5)) + 32;
		var scale = " F";
	} else if (res[1] == "C") {
		var degrees = (res[0] - 32) * (5/9);		
		var scale = " C";
	} else {
		//No scale passed
		var degrees = 1000;
		var scale = " ERROR";
	}
	
	//Return result with one decimal accuracy
	return +degrees.toFixed(1) + scale;
})(input)