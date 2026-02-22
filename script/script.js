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
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");

});


interviewButton.addEventListener("click" , function(){
    interviewSection.classList.remove("hidden");
    allSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");

});

rejectedButton.addEventListener("click" , function(){
    rejectedSection.classList.remove("hidden");
    allSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
})



let interviewCount = 0;

document.getElementById("interview-card-btn").addEventListener("click", function () {

 
    interviewCount++;

    document.getElementById("interview-count").innerText = interviewCount;

    const badge = document.getElementById("badge");
    badge.innerText = "Interview";

    const b = document.getElementById("change-badge");
    b.style.cssText = `
        color: #10B981;
        background-color: transparent;
        border: 1px solid #10B981;
        padding: 15px;
        font-size: 18px;
        border-radius: 10px;
    `;




});


// reject

let rejectCount = 0;

document.getElementById("rejected-card-btn").addEventListener("click", function () {

 
    rejectCount++;

    document.getElementById("rejected-count").innerText = rejectCount;

    const badge = document.getElementById("badge");
    badge.innerText = "Rejected";

    const b = document.getElementById("change-badge");
    b.style.cssText = `
        color: #EF4444;
        background-color: transparent;
        border: 1px solid #EF4444;
        padding: 15px;
        font-size: 18px;
        border-radius: 10px;
    `;

    const noJobHide = document.getElementById("no-job");
    noJobHide.classList.add("hidden");
    const parentElement = document.getElementById("1st-parent");
    const child = document.getElementById("1st-child");

    parentElement.appendChild(child);




});





