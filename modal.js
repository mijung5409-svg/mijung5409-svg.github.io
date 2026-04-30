function openModal(project) {
const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

let content = "";

if (project === "project1") {
content = "<h2>Poster</h2><p>포스터 디자인 설명</p>";
} else if (project === "project2") {
content = "<h2>Brochure</h2><p>브로슈어 설명</p>";
} else if (project === "project3") {
content = "<h2>Logo</h2><p>로고 디자인 설명</p>";
} else if (project === "project4") {
content = "<h2>Magazine</h2><p>매거진 설명</p>";
} else if (project === "project5") {
content = "<h2>Banner</h2><p>배너 설명</p>";
} else if (project === "project6") {
content = "<h2>Product</h2><p>제품 디자인 설명</p>";
}

body.innerHTML = content;
modal.style.display = "flex";
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

function closeModalOnOutside(e) {
if (e.target.id === "modal") {
closeModal();
}
}
