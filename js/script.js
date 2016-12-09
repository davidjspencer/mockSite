(function(){

	document.getElementById("change").addEventListener("click", changeColor);

	function changeColor() {
		var min = 0;
		var max = 255;

		var a = Math.floor( Math.random() * (max - min +1) + min);
		var b = Math.floor( Math.random() * (max - min +1) + min);
		var c = Math.floor( Math.random() * (max - min +1) + min);

		console.log(a);
		console.log(b);
		console.log(c);

		document.body.style.backgroundColor= 'rgb(' + [a,b,c].join(',') + ')';
		

	}



})();