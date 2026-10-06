// mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

// close the menu when I click a link
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// contact form
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const text = document.getElementById('message').value;

  if (name === '' || email === '' || text === '') {
    message.textContent = 'Please fill in all fields.';
    message.className = 'mt-4 text-sm text-red-400';
    return;
  }

  message.textContent = 'Thanks ' + name + '! We will reply soon.';
  message.className = 'mt-4 text-sm text-teal-400';
  form.reset();
});
