const animalDiv = document.getElementById("animal-div");
const animalButton = document.getElementById("show-animal");


animalButton.addEventListener('click',() => {
animalDiv.classList.toggle("hidden")});

const PowerDiv = document.getElementById("power-div");
const PowerButton = document.getElementById("show-power")

PowerButton.addEventListener('click',() => {
PowerDiv.classList.toggle("hidden")});
    
const SkillsDiv = document.getElementById("skills-div");
const SkillsButton = document.getElementById("show-skills");

SkillsButton.addEventListener('click',() => {
SkillsDiv.classList.toggle("hidden")});