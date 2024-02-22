const kedsomhedsknap = document.querySelector('.trykbutton');
const aktivitet = document.querySelector('.aktivitet');

kedsomhedsknap.addEventListener('click', klik)

function klik() {
    fetch('aktiviteter.json')
        .then(response => response.json())
        .then(data => {
            const aktiviteter = data.aktiviteter;
            const randomIndex = Math.floor(Math.random() * aktiviteter.length);
            const randomActivity = aktiviteter[randomIndex];
            aktivitet.textContent = `${randomActivity}`;
        })
        .catch(error => console.error('Fejl ved indlæsning af aktiviteter:', error));
    kedsomhedsknap.style.display = 'none';

    // Nulstil resultatet efter 3 sekunder
    setTimeout(() => {
        aktivitet.textContent = '';
        // Genopret knappens synlighed efter yderligere 1 sekund
        setTimeout(() => {
            kedsomhedsknap.style.display = 'block';
        }, 1000);
    }, 4000);
};