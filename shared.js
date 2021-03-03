// DOM Selecting
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const navMobile = document.querySelector('.mobile-nav');
const btnsChoosePlan = Array.from(document.querySelectorAll('.plan .btn'));
const btnCloseModal = document.querySelector('.modal__action--negative');
const btnToggle = document.querySelector('.toggle-button');

btnsChoosePlan.forEach(btn =>
  btn.addEventListener('click', function () {
    backdrop.style.display = 'block';
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 10);
    modal.classList.add('open-modal');
  })
);

[backdrop, btnCloseModal].forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', function () {
    backdrop.classList.remove('open');
    setTimeout(function () {
      backdrop.style.display = 'none';
    }, 500);

    navMobile.classList.remove('open-mobile-nav');
    setTimeout(() => {
      navMobile.style.display = 'none';
    }, 500);
    if (modal) {
      modal.classList.remove('open-modal');
    }
  });
});

btnToggle.addEventListener('click', function () {
  navMobile.style.display = 'block';
  setTimeout(() => {
    navMobile.classList.add('open-mobile-nav');
  }, 10);
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);
});
