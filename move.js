var thing = document.querySelector(".thing");
var thing2 = document.querySelector(".thing2");
var thing3 = document.querySelector(".thing3");
var thing4 = document.querySelector(".thing4");
var player = document.querySelector(".player");
var num = 0;
var numberTwo= 0;
var blloo = 2;
var blloo2 = 2;
var blloo3 = 2;
var blloo4 = 2;
var dead = false;
var once = true;
var james = num + 60;
var portalblue = true;
var david = 0;
var onceagian = true;
var mon = 250;
var level1 = true;
var level2var = false;
var immortal = false;
var level2num = 1333;
var badbreath = false;
var papa = Math.floor(Math.random() * 2);
let raindrops = document.querySelectorAll(".balloon");
var i = 0;
var j = 0;
var d = new Date();
console.log(d);
var h = d.getHours();
var m = d.getMinutes();
console.log(h);
console.log(m);
if (h > 6 && h < 18) {
	console.log("hello");
}

if (h < 6 || h > 18) {
	console.log("goodbye");
}
	function bob2() { 
		for (i = 0; i < 21; i++) { 
	raindrops[i].style.display = "block";
	raindrops[i].style.left = Math.floor(Math.random() * 285) + "px";
	raindrops[i].style.top = Math.floor(Math.random() * 500) + "px";
	if (i == 20) { 
		badbreath = true;
}
}
}

window.addEventListener('load', () => {
player.style.left = + 150 + 'px';
thing.style.left = + 126 + 'px';
thing.style.top = + 10 + 'px';
thing2.style.left = + 22 + 'px';
thing2.style.top = + 10 + 'px';
thing3.style.left = + 230 + 'px';
thing3.style.top = + 10 + 'px';
thing4.style.top = + 10 + 'px';
thing4.style.left = + 334 + 'px';
thing3.style.backgroundImage = "url(elevatorup.jpg.png)";
});


function honk() {
	console.log("1");
}
function move() {


if (badbreath === true) {
				for (j= 0; j < 21; j++) { 
					papa = Math.floor(Math.random() * 10);
	if (papa == 0) {raindrops[j].style.left = parseInt(raindrops[j].style.left) - 1 + "px";}
	if (papa > 0) {raindrops[j].style.left = parseInt(raindrops[j].style.left) + 2 + "px";}
	raindrops[j].style.top = parseInt(raindrops[j].style.top) + 20 + "px";
	if (parseInt(raindrops[j].style.top) > 500) {

		papa = Math.floor(Math.random() * 3);
		raindrops[j].style.top = "-75px";
		raindrops[j].style.left = Math.floor(Math.random() * 285) + "px";
		if (papa == 0) {raindrops[j].style.backgroundImage = "url(Bba.png)";}
		if (papa == 1) {raindrops[j].style.backgroundImage = "url(Rba.png)";}
		if (papa == 2) {raindrops[j].style.backgroundImage = "url(Gba.png)";}
		if (papa != 1 && papa != 0 && papa != 2) {alert("checkmate");}
	}
	}
}

numberTwo = Math.floor(Math.random() * 4);
num++;
david++;

     //elevator middle
    if (num == 700) {
console.log(num);
 }
 if (num == 750) {
console.log(num);
 }
 if (num == 800) {
console.log(num);
 }
 if (num == 850) {
console.log(num);
 }
 if (num == 900) {
console.log(num);
 }
 if (num == 950) {
console.log(num);
 }
 if (num == 1000) {
console.log(num);
 }
 if (num == 1050) {
console.log(num);
 }
 if (num == 1100) {
winner();
 }
  if (num == 1150) {
winner();
 }

if (num == 1200) {
winner();
 }
     if (num > 50) {
if (parseInt(thing.style.top) == 0) {blloo = 1; setTimeout(function(){blloo = 2;}, 1333);}
if (parseInt(thing.style.top) == 450) {	blloo = 4; setTimeout(function(){blloo = 3;}, 1333);}

if (blloo == 2) {
	thing.style.top = parseInt(thing.style.top) + 10 + 'px'; 
	thing.style.backgroundImage = "url(elevator.jpg)";
	}

else if (blloo == 3) {
	thing.style.backgroundImage = "url(elevatorup.jpg.png)";
	thing.style.top = parseInt(thing.style.top) - 10 + 'px';  
	}

			else if (blloo == 1) {
		thing.style.backgroundImage = "url(elevatorup.jpg.png)";
		thing.style.top = "10px";
	}

		else if (blloo == 4) {
		thing.style.top = "440px";
	}
if(parseInt(player.style.left) == 150) {
	if(parseInt(thing.style.top) > 390) {
		deadguy();
	}
    }
}
   //next elevator
   //elevator left side
   if (num > 10) {
if (parseInt(thing2.style.top) == 0) {blloo2 = 1; setTimeout(function(){blloo2 = 2;}, level2num);}
if (parseInt(thing2.style.top) == 450) {blloo2 = 4; setTimeout(function(){blloo2 = 3;}, level2num);}

if (blloo2 == 2) {
	thing2.style.top = parseInt(thing2.style.top) + 10 + 'px'; 
	thing2.style.backgroundImage = "url(elevator.jpg)";
	}

else if (blloo2 == 3) {
	thing2.style.backgroundImage = "url(elevatorup.jpg.png)";
	thing2.style.top = parseInt(thing2.style.top) - 10 + 'px';  
	}
		else if (blloo2 == 1) {
		thing2.style.backgroundImage = "url(elevatorup.jpg.png)";
		thing2.style.top = "10px";
	}

		else if (blloo2 == 4) {
		thing2.style.top = "440px";
	}
	if(parseInt(player.style.left) == 50) {
	if(parseInt(thing2.style.top) > 390) {
		deadguy();
	}
    }
}

    //next elevator
    //elevator right side
    if (num > 10) {
if (parseInt(thing3.style.top) == 0 || parseInt(thing3.style.top) == 10) {blloo3 = 1; setTimeout(function(){blloo3 = 2;}, 1333);}
if (parseInt(thing3.style.top) == 450) {blloo3 = 4; setTimeout(function(){blloo3 = 3;}, 1333);}
if (blloo3 == 2) {
	thing3.style.top = parseInt(thing3.style.top) + 15 + 'px'; 
	thing3.style.backgroundImage = "url(elevator.jpg.png)";
	}

else if (blloo3 == 3) {
	thing3.style.backgroundImage = "url(elevatorup.jpg.png)";
	thing3.style.top = parseInt(thing3.style.top) - 15 + 'px';  
	}
	else if (blloo3 == 1) {
		thing3.style.backgroundImage = "url(elevatorup.jpg.png)";
		thing3.style.top = "15px";
	}

		else if (blloo3 == 4) {
		thing3.style.top = "435px";
	}
	if(parseInt(player.style.left) == 250) {
	if(parseInt(thing3.style.top) > 390) {
		deadguy();
	}
    }
}
// next
    if (level2var === true) {
if (parseInt(thing4.style.top) == 0 || parseInt(thing4.style.top) == 10) {blloo4 = 1; setTimeout(function(){blloo4 = 2;}, level2num);}
if (parseInt(thing4.style.top) == 450) {blloo4 = 4; setTimeout(function(){blloo4 = 3;}, level2num);}
if (blloo4 == 2) {
	thing4.style.top = parseInt(thing4.style.top) + 15 + 'px'; 
	thing4.style.backgroundImage = "url(elevator.jpg.png)";
	}

else if (blloo4 == 3) {
	thing4.style.backgroundImage = "url(elevatorup.jpg.png)";
	thing4.style.top = parseInt(thing4.style.top) - 15 + 'px';  
	}
	else if (blloo4 == 1) {
		thing4.style.backgroundImage = "url(elevatorup.jpg.png)";
		thing4.style.top = "15px";
	}

		else if (blloo4 == 4) {
		thing4.style.top = "435px"; 
	}
	if(parseInt(player.style.left) == 350) {
	if(parseInt(thing4.style.top) > 390) {
		deadguy();
	}
    }
}
	if (num == 600 && dead === false) {
		document.querySelector(".portal").style.display = "block";
	}
if(david > 10) {
	david = 0;
	switch(portalblue) {
    case true: portalblue = false; document.querySelector(".portal").style.backgroundImage = "url('blueportal.png')"; break;
    case false: portalblue = true; document.querySelector(".portal").style.backgroundImage = "url('red.png')"; break;
}
}

if(parseInt(player.style.left) == 250 && num > 600 && onceagian === true) {
	level2();
    }

}



window.addEventListener('keyup', (e) => {
	if (e.keyCode === 39) {right();}
	if (e.keyCode === 37) {left();}
	if (e.keyCode === 73) {immortal = true;}
	if (e.keyCode === 85) {immortal = false;}
});

function bob() {
	if (once === true) {
		once = false;
   setInterval(move, 66);
}
}


function deadguy() {
	if (immortal === false) {
    	if(onceagian === true) {
 	onceagian = false;
		dead = true;
		player.style.backgroundImage = "url(adudesmuch.png)";
		document.querySelector(".loserscreen").style.display = "block";
		setTimeout(function(){ }, 1000);
    }
}
}

function level2() {
	onceagian = false;
	setTimeout(function(){
	document.querySelector("#r").style.opacity = "1";
	document.querySelector(".portal").style.display = "none";
	 document.querySelector(".land").style.backgroundColor = "yellow";
	document.querySelector("#land2").style.backgroundColor = "yellow";
	document.querySelector("#land3").style.backgroundColor = "yellow";
	    document.querySelector("#r").style.backgroundColor = "yellow";
	document.querySelector("body").style.filter = "invert(100%)";
	mon = 350;
	level2var = true; onceagian = true; level1 = false;
	 }, 400);
}
function right() {
	if (dead === false) { if( parseInt(player.style.left) < mon) {player.style.left = parseInt(player.style.left) + 100 + 'px';}}
}
function left() {
	if (dead === false) { if( parseInt(player.style.left) > 50) { player.style.left = parseInt(player.style.left) - 100 + 'px';}}
}

function startover() {
 document.querySelector(".loserscreen").style.display = "none"; 
 num = 0;
blloo = 2;
blloo2 = 2;
blloo3 = 2;
blloo4 = 2;
dead = false;
david = 0;
onceagian = true;
immortal = false;
thing.style.top = + 10 + 'px';
thing2.style.top = + 10 + 'px';
thing3.style.top = + 10 + 'px';
thing4.style.top = + 10 + 'px';
player.style.backgroundImage = "url(adude.png)";
level2num = 2100;
if (level2var === true) {
	num = 600;
}
}

function winner() {
     bob2();
     immortal = true;
     document.querySelector(".winnerscreen").style.display = "block";
     setTimeout(function(){document.querySelector(".winnerscreen").style.color = "red"; }, 2000);
     setTimeout(function(){document.querySelector(".winnerscreen").style.color = "green"; }, 4000);
     setTimeout(function(){document.querySelector(".winnerscreen").style.color = "blue"; }, 6000);
     setTimeout(function(){document.querySelector(".winnerscreen").style.color = "black"; }, 8000);
     }
