function openModal(actor) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const img = document.getElementById("modal-img");
  const desc = document.getElementById("modal-desc");

  if (actor === "leejinwook") {
    title.textContent = "Lee Jin Wook";
    img.src = "/img/leejinwookk.jpg";
    desc.textContent = "Aktor Korea Selatan yang dikenal dengan peran - peran karismatik. Ia berperan sebagai Yook Seok Hun, pengacara kepala tim litigasi yang dingin dan perfeksional.";
  } else if (actor === "jungchaeyeon") {
    title.textContent = "Jung Chae Yeon";
    img.src = "/img/jungchaeyeonn.jpg";
    desc.textContent = "Aktris Korea Selatan yang berperan sebagai Kang Hyo Min, pengacara pemula penuh emangat dengan idealisme tinggi.";
  }

  modal.style.display = "block";
  modal.querySelector(".modal-content").style.animation = "popUp 0.4s ease-out";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};