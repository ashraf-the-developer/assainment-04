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
// let interviewCountMinace = 2;

let totalCount = 8;

document.getElementById("interview-card-btn").addEventListener("click", function () {

 
    interviewCount++;
    // interviewCountMinace--;
    totalCount--;

    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("Total-count").innerText = totalCount;

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

    `
    const card = document.querySelector(".card1");
    const add =document.getElementById("interview-div");
    add.appendChild(card);

    const noJob = document.getElementById("no-job-1");
    noJob.classList.add("hidden");
    const noJobReject = document.getElementById("no-job-2");
    noJobReject.classList.remove("hidden");

    // document.getElementById("rejected-card-btn").addEventListener("click", function(){
    //     document.getElementById("interview-count").innerText = interviewCountMinace;
        
        

    // })






});


// rejected

let rejectCount = 0;
let total = 8;

document.getElementById("rejected-card-btn").addEventListener("click", function () {

 
    rejectCount++;
    total--;

    document.getElementById("rejected-count").innerText = rejectCount;
    document.getElementById("Total-count").innerText = total;

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

     const card = document.querySelector(".card1");
    const add =document.getElementById("1st-parent");
    add.appendChild(card);

    const noJob = document.getElementById("no-job-1");
    noJob.classList.remove("hidden");
    const noJobReject = document.getElementById("no-job-2");
    noJobReject.classList.add("hidden");



});

document.querySelectorAll(".delete").forEach(icon => {
    icon.addEventListener("click", function () {
        const card = this.closest(".card1");
        card.remove();

        const noJob = document.getElementById("no-job-1");
    noJob.classList.remove("hidden");
    const noJobReject = document.getElementById("no-job-2");
    noJobReject.classList.remove("hidden");

    });


});



// card 2



document.querySelectorAll(".delete-2").forEach(icon => {
    icon.addEventListener("click", function () {
        const card = this.closest(".card2");
        card.remove();

        const noJob = document.getElementById("no-job-1");
    noJob.classList.remove("hidden");
    const noJobReject = document.getElementById("no-job-2");
    noJobReject.classList.remove("hidden");

    });


});




