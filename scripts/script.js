const showAlertBtn = document.getElementById('showAlertBtn');
const customAlert = document.getElementById('customAlert');
const closeAlertBtn = document.getElementById('closeAlertBtn');
const alertMessage = document.getElementById('alertMessage');

showAlertBtn.addEventListener('click', () => {
    customAlert.style.display = 'block';
});

closeAlertBtn.addEventListener('click', () => {
    customAlert.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === customAlert) {
        customAlert.style.display = 'none';
    }
});
