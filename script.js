/*alert("hello");

var a=-10;

while(a<20){
	console.log(a);
	a++
}

*/
/*var a=5;
while(a<50){

	if(a%5==0 && a%3==0){
		console.log(a);
	}

a++;
}*/
/*
var string=prompt("are you there yet?");

while(string.indexOf("yes")===-1  && string.indexOf("yeah")===-1){
	var string=prompt("are you there yet?");

}



alert("Excellent"); */


/*
var input;
var array=[];
main();

function main(){
	input =prompt("Main: What would you like to do now? ");


	if(input==="new"){
		newA();
	}else if(input==="list"){
		list();
	}else if(input==="delete"){
		delet();
	}

}
function newA(){

	
	console.log(array);

	var inn=prompt("New : Enter what would you want to list in your todo list? ");
	array.push(inn);

	main();





}
function list(){
var count;
	array.forEach(function(values,i){
		count++
		console.log(i+" : " +values);
	})
	 
	main();
}

function delet(){
	var index=prompt("Enter the index you want to delete ?");
	array.splice(index,1);
	main();

}
*/
/*
var array=["1",2,3,4,5];
function printReverse(array){
	for (var i = array.length - 1; i >-1; i--) {
		console.log(array[i]);
	}
}
printReverse(array);*/


/*var array=["a","b","c","d","e"];
function printReverse(array){
	for (var i = array.length - 1; i >-1; i--) {
		console.log(array[i]);
	}
}
printReverse(array);*/
/*
var array=["b","b","c","d","e"];
function printReverse(array){
	for (var i = 0; i <array.length ; i++) {
		for (var j = 0; j <array.length ; j++) {
			if(array[i]===array[j] && i!==j){
				return true;
			}
		}
	}
	return false;
}
console.log(printReverse(array));
*/
/*
var array=[1,0,3,4,5,6,6];
function printReverse(array){
	for (var i = 0; i <array.length ; i++) {
		for (var j = 0; j <array.length ; j++) {
			if(array[i]===array[j] && i!==j){
				return true;
			}
		}
	}
	return false;
}
console.log(printReverse(array));
*/
/*
var array=[1,0,3,4,5,6,6];
var sum=0;
function printReverse(array){
	for (var i = 0; i <array.length ; i++) {
		sum+= array[i];
		}
		return sum;
	}
	
 
console.log(printReverse(array));
*/
/*
var array=[1,0,3,24,5,6,61];
var max=0;
function printReverse(array){
	for (var i = 0; i <array.length ; i++) {
		 if(array[i]>max){
		 	max=array[i];
		 }
		
	}
		return max;
}
	
 
console.log(printReverse(array));
*/

/*
var array=[
	{title: "forrest",rating: "2 star",status: "has watched"},
	{title: "fnew year",rating: "3 star",status: "not watched"},
	{title: "3 bai",rating: "4 star",status: "has watched"},
	{title: "cmps",rating: "5 star",status: "not seen"}



];

var movie={
	title:["happy new Year","Forrest Gump","By the way"],
	status:["watched","not watched"],
	rating:["1 star","2 star","3 star","4 star","5 star"]
};

array.forEach(function(indexValues){
	var string="You have ";

	if(values.status){
		string =string+ " have watched";
	}else{
		string +=" not watched";
	}

	console.log(indexValues.title+" & your rating is "+ indexValues.rating);

})*/
 
var button=document.querySelector("button");
var canTurnIntoBlack=true;



button.addEventListener("click",function(){
	if(canTurnIntoBlack){
document.body.style.backgroundColor="black";
		canTurnIntoBlack=false;
    }else{
        document.body.style.background="white"
        canTurnIntoBlack=true;
    }

     
});