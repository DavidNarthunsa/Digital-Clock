const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');

function currentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const noon = hours >= 12 ? 'PM' : 'AM';
    
    // format 24 hrs to 12 hrs
    const hrsFormat = hours % 12 || 12;

    hrs.innerHTML = hrsFormat.toString().padStart(2, '0');
    min.innerHTML = minutes.toString().padStart(2, '0');
    sec.innerHTML = seconds.toString().padStart(2, '0');
    ampm.innerHTML = noon;
}

setInterval(currentTime, 1000);

currentTime();