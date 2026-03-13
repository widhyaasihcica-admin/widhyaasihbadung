// Newsletter
fetch("https://script.google.com/macros/s/AKfycbx6QeJwqwAGHAI9vSe-ZY-r6i8q0bSacdrV7BnOcylvy38nzi6ghnFzY9N9zWiYCNc6OQ/exec")
.then(res => res.json())
.then(data => {

const container = document.getElementById("newsletter-list");

data.forEach(file => {

const card = document.createElement("div");
card.className = "newsletter-card";

card.innerHTML = `
<iframe src="https://drive.google.com/file/d/${file.id}/preview"></iframe>
<div class="newsletter-name">${file.name}</div>
`;

container.appendChild(card);

});

});

// Program
const cards = document.querySelectorAll(".program-card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

cards.forEach(card=>{
observer.observe(card);
});


