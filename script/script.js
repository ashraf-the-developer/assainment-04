// all buttons
const allButton = document.getElementById("all-button");
const interviewButton = document.getElementById("interview-button");
const rejectedButton = document.getElementById ("rejected-button");

// all sections
const allSection = document.getElementById("all-section");
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");

// all button function

allButton.addEventListener("click", function(){
    allSection.classList.remove("hidden");

});


interviewButton.addEventListener("click" , function(){
    interviewSection.classList.remove("hidden");

});

rejectedButton.addEventListener("click" , function(){
    rejectedSection.classList.remove("hidden");
})

