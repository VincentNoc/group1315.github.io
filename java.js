const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
		burger.addEventListener('click', ()=>{
			//Toggle Nav
			nav.classList.toggle('nav-active');
			//animate links
		navLinks.forEach((link, index) =>{
			console.log(index);
			if (link.style.animation) {
				link.style.animation ='';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0}s`;
			}
		});
	});
	//Animate Links

}
navSlide();



//Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 1400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.getElementById("theresult").style.display="none";

function mark(){
 document.getElementById("quizpage").style.display="none";
 var c = 0;
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var q5 = document.quiz.q5.value;
  var q6 = document.quiz.q6.value;
  var q7 = document.quiz.q7.value;
  var q8 = document.quiz.q8.value;
  
  if (q1 == 1) {c++;};
  if (q2 == 3) {c++;};
  if (q3 == 2) {c++;};
  if (q4 == 4) {c++;};
  if (q5 == 2) {c++;};
  if (q6 == 1) {c++;};
  if (q7 == 4) {c++;};
  if (q8 == 3) {c++;};
  
  
 document.getElementById("theresult").style.display="block";
 
 if (c == 8){
document.getElementById("result").innerHTML = "Your Result is " + c + "/8. You have done well";
document.getElementById("try1").style.display="none";  
   } 
   else if (c == 6,7)  { document.getElementById("result").innerHTML = "Your Result is " + c + "/8. Oh very close you still got a bit to go you can do it.";    
      
  }
 	else if (c == 4,5)  { document.getElementById("result").innerHTML = "Your Result is " + c + "/8. Half way there, just a bit more.";    
     

 }
}

function tryagain(){
  document.getElementById("quizpage").style.display="block";
  document.getElementById("theresult").style.display="none";
}
