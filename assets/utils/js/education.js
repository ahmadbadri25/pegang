const section = document.querySelectorAll('div[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.education-sidebar-body .education-list .education-item a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.education-sidebar-body .education-list .education-item a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

const menuToggleButtonEl = document.getElementById('menu-toggle');
const educationSidebarEl = document.getElementById('education-sidebar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    educationSidebarEl.classList.remove('show');
    menuToggleButtonEl.checked = false;
  }
});

menuToggleButtonEl.addEventListener('click', () => {
  educationSidebarEl.classList.toggle('show');

  if (window.scrollY > 0) {
    educationSidebarEl.style.top = `${window.scrollY + 60.8}px`;
  }

  const section = document.querySelectorAll('div[id]');

  window.addEventListener('scroll', navHighlighter);

  function navHighlighter() {
    let scrollY = window.pageXOffset;

    section.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;

      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.education-sidebar-body .education-list .education-item a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.education-sidebar-body .education-list .education-item a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  }
});
