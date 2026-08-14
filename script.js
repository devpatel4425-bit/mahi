// ==========================================
// MAHI BIRTHDAY COUNTDOWN
// Birthday: 21 August 2026 - 12:00 AM
// ==========================================

const birthday = new Date(
    "August 21, 2026 00:00:00"
).getTime();


// Countdown

const countdownTimer = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;


    // Birthday reached

    if (distance <= 0) {

        clearInterval(countdownTimer);

        document.getElementById("countdown").style.display = "none";

        document.querySelector(".small-text").style.display = "none";

        document.querySelector(".message").style.display = "none";

        document.getElementById("birthday").style.display = "block";

        startConfetti();

        return;
    }


    // Calculate time

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // Display

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}, 1000);


// ==========================================
// SURPRISE BUTTON
// ==========================================

const surpriseButton =
    document.getElementById("surpriseBtn");

const surprise =
    document.getElementById("surprise");


surpriseButton.addEventListener("click", () => {

    if (surprise.style.display === "block") {

        surprise.style.display = "none";

        surpriseButton.textContent =
            "🎁 Open Your Surprise";

    } else {

        surprise.style.display = "block";

        surpriseButton.textContent =
            "💖 Hide Surprise";

    }

});


// ==========================================
// CONFETTI
// ==========================================

function startConfetti() {

    const canvas =
        document.getElementById("confetti");

    const ctx =
        canvas.getContext("2d");


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const pieces = [];


    for (let i = 0; i < 180; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height
                - canvas.height,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 4 + 2,

            rotation: Math.random() * 360,

            rotationSpeed:
                Math.random() * 8 - 4

        });

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y += piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            if (piece.y > canvas.height) {

                piece.y = -20;

                piece.x =
                    Math.random() * canvas.width;
            }


            ctx.save();

            ctx.translate(
                piece.x,
                piece.y
            );

            ctx.rotate(
                piece.rotation * Math.PI / 180
            );


            ctx.fillStyle =
                `hsl(${Math.random() * 360},100%,65%)`;


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size
            );


            ctx.restore();

        });


        requestAnimationFrame(animate);
    }


    animate();
}


// Keep canvas correct after resizing

window.addEventListener("resize", () => {

    const canvas =
        document.getElementById("confetti");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
const birthdaySong = document.getElementById("birthdaySong");
const musicBtn = document.getElementById("musicBtn");

birthdaySong.volume = 0.5;

musicBtn.addEventListener("click", () => {

    if (birthdaySong.paused) {

        birthdaySong.play();

        musicBtn.textContent = "🔊 Song Playing";

    } else {

        birthdaySong.pause();

        musicBtn.textContent = "🎵 Play Song";

    }

});