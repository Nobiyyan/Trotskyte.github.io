window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta-bg", // Disesuaikan dengan ID di HTML yang baru
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../image/background.jpg');
    /* rgba(0,0,0,0.4) akan membuat gambar 40% lebih gelap */
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0, // Transparan (bagus sekali untuk memunculkan gambar background)
    quantity: 3.0,
    speedLimit: 3.0, // Perbaikan typo bawaan (sebaiknya camelCase: speedLimit)
    birdSize: 2.0,
    color1: 0x4a90e2, // Opsional: kamu bisa tambahkan warna burungnya jika mau
    color2: 0x50e3c2,
  });
});
