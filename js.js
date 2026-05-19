// ===================================================
//  script.js — KnockOut Boxing Club
// ===================================================

// -------- Header: добавляем класс при скролле --------
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// -------- Бургер-меню --------
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--active') ? 'hidden' : '';
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    document.body.style.overflow = '';
  });
});

// -------- Фото тренеров: показываем если загрузилось --------
document.querySelectorAll('.coaches__photo').forEach(img => {
  // Если фото уже загружено (кэш браузера)
  if (img.complete && img.naturalWidth > 0) {
    img.classList.add('loaded');
  }

  // Когда фото загрузилось — показываем его
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });

  // Если фото не загрузилось — оставляем заглушку
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});

// -------- Форма обратной связи --------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = '✓ Заявка отправлена!';
    btn.style.background = '#4CAF50';
    btn.style.borderColor = '#4CAF50';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Отправить заявку';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}