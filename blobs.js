var rotation = 0;

// creating the shape
function create(){
	// making it morphing
	rotation += 40;
	var b = document.querySelector('#blob');
	var btn = document.querySelector('button');
  // 25-75 is a sweet spot! :D
	var r1 = random(25, 75);
	var r2 = random(25, 75);
	var r3 = random(25, 75);
	var r4 = random(25, 75);
	
  // calculate coordinates against the four sides
	var r11 = remain(r1);
	var r22 = remain(r2);
	var r33 = remain(r3);
	var r44 = remain(r4);
	
	// these coordinates has an awesome harmony. <3
	var coordinates = `${r1}% ${r11}% ${r22}% ${r2}% / ${r3}% ${r4}% ${r44}% ${r33}%`;
	b.style['border-radius'] = coordinates;
  
  // add some rotation for morph
	b.style['transform'] = 'rotate(' + rotation + 'deg)';
  
  // add anti-clockwise rotation to prevent child div being rotated
	image.style.setProperty('--r', -rotation + 'deg');
	btn.innerText = coordinates;
};

// common functions
function random(min, max){
	return Math.floor(min + Math.random() * (max - min)); // Math.round?
}

function remain(n){
	return 100 - n;
}
