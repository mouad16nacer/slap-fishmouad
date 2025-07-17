const video = document.getElementById("slap-video");
const slapBtn = document.getElementById("slap-btn");
const sound = document.getElementById("slap-sound");

// وقت الصفعة داخل الفيديو (اضبطه حسب الحالة)
const slapTime = 2.3;

slapBtn.addEventListener("click", () => {
  video.currentTime = 0;
  sound.pause();
  sound.currentTime = 0;

  video.play();

  // تحقق كل 100 مللي ثانية إن وصلنا للحظة الصفعة
  const interval = setInterval(() => {
    if (video.currentTime >= slapTime) {
      sound.play();
      clearInterval(interval); // نوقف التحقق
    }
  }, 100);
});

