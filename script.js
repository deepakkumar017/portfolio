let projectBtn = document.querySelector("#pt-btn");
let skillBtn = document.querySelector("#sk-btn");
let skills = document.querySelector(".skills");
let project = document.querySelector(".project");




projectBtn.classList.remove("pt-btn");
project.classList.remove("show");


projectBtn.addEventListener("click", () => {
    projectBtn.classList.remove("pt-btn"); 
    skillBtn.classList.add("sk-btn");


    project.classList.remove("show");
    skills.classList.add("show");

});


skillBtn.addEventListener("click", () => {
    skillBtn.classList.remove("sk-btn");
    projectBtn.classList.add("pt-btn");
    skillBtn.addEventListener("click", () => {
        projectBtn.classList.add("pt-btn");
        });
    

    skills.classList.remove("hide");
    project.classList.add("show");
});