const ratingSection=document.getElementById("ratingSection");
const thankUSection=document.getElementById("thankUSection");
let selectedVal=document.getElementById("selectedValue");
let submitBtn=document.getElementById("Submit");
let buttons=document.querySelectorAll(".button");

buttons.forEach(button=>{
    button.onclick=()=>{
        let UserRating=button.getAttribute("value");
        selectedVal.innerHTML=UserRating;
    }
})
submitBtn.addEventListener('click',()=>{
    ratingSection.style.display="none";
    thankUSection.style.display="block";
})
