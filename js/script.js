(function(){

	document.getElementById("change").addEventListener("click", changeColor);

	function changeColor() {
		// Randomise the hsla numbers
		var min = 0;
		var max = 360;

		var a = Math.floor( Math.random() * (max - min +1) + min);
		var b = Math.floor( Math.random() * (100 - 0 +1) + min);
		var c = Math.floor( Math.random() * (100 - 0 +1) + min);
		var d = Math.floor(Math.random() * 10) / 10;

		// Turns the hsla numbers in strings
		var aString = a.toString();
		var bString = b.toString();
		var cString = c.toString();
		var dString = d.toString();
		var contrastColor = a;

		// Makes the Saturation and Level strings a percentage to be read by CSS
		bString += '%';
		cString += '%';
		var colorString = 'hsla(' + [aString,bString,cString,dString].join(',') + ')';
		
		// Creates an inverse of the Hue
		if(a < 180) {
			contrastColor += 180;
			contrastColor.toString();
		} else {
			contrastColor -= 180;
			contrastColor.toString();
		}

		// Creates inverse of saturation and level
		var invB = 100 - b;
		var invC = 100 - c; 
		invB.toString();
		invC.toString();
		invB += '%';
		invC += '%';


		// Not happy with the complimentary colour, doesn't seem to correspond to 180 degree flip of Hue
		/*var contrastColorString = 'hsla(' + [contrastColor,invB,invC,1 - dString].join(',') + ')';*/
		var contrastColorString = 'hsla(' + [contrastColor,invB,invC,dString].join(',') + ')';
		console.log("this is the colorString: " + colorString);
		console.log("this is the contrastColor: " + contrastColor);
		console.log("this is the string for the title: " + contrastColorString);


		// Select the Elements and style the CSS
		var titleContrast = document.getElementById("contrast");
		var body = document.body;

		body.style.backgroundColor= colorString;

		body.style.color = contrastColorString;
		document.getElementById("change").style.color = contrastColorString;

	}



})();