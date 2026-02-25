function buildWAMessage(data) {
  return (
    "Salam sejahtera.\n\n" +
    "Info KBM Kelas XII TJKT 2 |\n" +
    "Hari: " +
    data.hari +
    "\n" +
    "Jam ke- " +
    data.jam +
    " (" +
    data.waktu +
    ")\n" +
    "Mapel: " +
    data.mapel +
    " |\n" +
    "Guru: " +
    data.guru +
    " |\n\n" +
    "Terima Kasih!"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-wa");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const nomor = this.dataset.wa;
      if (!nomor) {
        alert("Nomor WhatsApp belum diisi!");
        return;
      }

      const data = {
        hari: this.dataset.hari || "-",
        jam: this.dataset.jam || "-",
        waktu: this.dataset.waktu || "-",
        mapel: this.dataset.mapel || "-",
        guru: this.dataset.guru || "-",
      };

      const message = buildWAMessage(data);
      const url =
        "https://wa.me/" + nomor + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initWALinks();
});
