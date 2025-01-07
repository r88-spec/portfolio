document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (fullName === "" || email === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = `Thank you for contacting me, ${fullName}!`;

    // Clear form fields
    document.getElementById('contactForm').reset();
});


// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('mouseover', () => {
//     card.classList.toggle('flipped');
//   });
// });