const projects = {
  project1: {
    title: 'Poster',
    image: 'img/p1.jpg',
    description: '싱싱한 딸기의 달콤함과 활기찬 축제의 분위기를 시각적으로 담아낸 감성 포스터 디자인'
  },
  project2: {
    title: 'Brochure Design',
    image: 'img/p2.jpg',
    description: '신뢰감 있는 정보 전달을 위해 명확한 구조와 전문성을 담은 브로슈어 디자인'
  },
  project3: {
    title: 'Logo Design',
    image: 'img/p3.jpg',
    description: '따뜻하고 친근한 브랜드 이미지를 효과적으로 구축하는 로고 디자인'
  },
  project4: {
    title: 'Magazine Design',
    image: 'img/p4.jpg',
    description: '가독성과 균형감을 고려한 모던한 매거진 레이아웃 디자인'
  },
  project5: {
    title: 'Banner Design',
    image: 'img/p5.jpg',
    description: '디지털 환경에서 시선을 사로잡는 강렬한 SNS 배너 디자인'
  },
  project6: {
    title: 'Product Design',
    image: 'img/p6.jpg',
    description: '제품의 가치를 높이는 프리미엄 상세페이지 디자인'
  }
};

function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  if (!project) return;

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOutside(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

document.addEventListener('keydown', function (event) {
  const modal = document.getElementById('modal');

  if (event.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
