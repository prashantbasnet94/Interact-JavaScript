

var span=document.querySelectorAll("span");
for(var i=0;i<span.length;i++){
	span[i].style.fontSize="50px";
}
var p1score=0;
var p2score=0;
var run=true;

button=document.querySelectorAll("button");
input=document.querySelector("input");

function code1(){
	if(run){
		p1score++;
		span[0].textContent=p1score;
		if(p1score> input.value-1){
			span[0].style.color="green"
			run=false;

			document.querySelector("p").textContent="Game won by player 1"

		}
		
		;		 }
	}
	function code2(){
		if(run){
		p2score++;
		span[1].textContent=p2score;
		if(p2score>input.value-1){
			span[1].style.color="green"
			run=false;
			
			document.querySelector("p").textContent="Game won by player 2"
			
		}
		
		;		 }
	}
	function code3(){
		p1score=0;
		p2score=0;
		span[0].textContent=p1score;
		span[1].textContent=p1score;
	 
		  document.querySelector("p").textContent="Game played of round "+input.value;
 	span[0].style.color="black";
 	span[1].style.color="black";
		run=true;
	}

function code4(){
   document.querySelector("p").textContent="Game played of round "+input.value;
 	span[0].style.color="black";
 	span[1].style.color="black";
}


	button[0].addEventListener("click",code1);
	button[1].addEventListener("click",code2);
	button[2].addEventListener("click",code3);
	input.addEventListener("change",code4);