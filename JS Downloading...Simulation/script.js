let progress = 0;
let interval; // global so both buttons can access

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const status = document.getElementById("status");

// ▶️ Start Download
startBtn.addEventListener("click", () => {
    status.textContent = "Downloading...";

    interval = setInterval(() => {
        progress++;

        progressBar.style.width = progress + "%";
        percent.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            status.textContent = "Download Complete ✅";
        }
    }, 500);
});

// ⛔ Stop Download
stopBtn.addEventListener("click", () => {
    clearInterval(interval); // stops the download
    status.textContent = "Download Paused ⏸️";
});