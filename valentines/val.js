function playSound(soundFile) {
    try {
        const audio = new Audio(soundFile);
        audio.play().catch(err => console.error('Sound play error:', err));
    } catch (err) {
        console.error('Sound error:', err);
    }
}

function moveRandomEL(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.zIndex = '9999';
}

function createRandomImage() {

    const images = [
        'sad/sad.webp',
        'sad/sad2.webp',
        'sad/sad3.gif',
        'sad/sad4.webp',
        'sad/sad5.webp',
        'sad/sad6.webp',
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const img = document.createElement('img');
    img.src = randomImage;
    img.style.position = 'absolute';
    img.style.top = Math.floor(Math.random() * 80 + 10) + '%';
    img.style.left = Math.floor(Math.random() * 80 + 10) + '%';
    img.style.width = '100px';
    img.style.height = 'auto';
    img.style.zIndex = '1';

    document.body.appendChild(img);
}

const moveRandom = document.querySelectorAll('#move');

moveRandom.forEach(elm => {
    let clicked = false;
    elm.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Play sound only on first click
        if (!clicked) {
            playSound('sound/no.mp3');
            clicked = true;
        }
        
        moveRandomEL(e.target);
        createRandomImage();
    })
})
const yesBtn = document.getElementById('yes-btn');
if (yesBtn) {
    yesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        playSound('sound/yes.mp3');
        // Allow navigation to yes.html after sound plays
        setTimeout(function() {
            window.location.href = 'yes.html';
        }, 200);
    });
}