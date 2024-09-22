function volume_sphere() {
    //Write your code here
let Radius = document.getElementById('radius');

let rvalue = parseFloat(radius.value);

	if (isNaN(rvalue) || rvalue<0) {
		document.getElementById('volume').value = 'NaN';
	}
	else{
		let volume = 4/3 * Math.PI * Math.pow(rvalue , 3);
		volume = volume.tofixed(4);
		document.getElementById('volume').value = volume;
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
