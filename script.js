// Fade-in animation on scroll with enhanced observer
const fadeSections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

fadeSections.forEach(section => observer.observe(section));

// Animate cards on intersection
const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInScale 0.6s ease-out';
      }, index * 80);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));

// Scroll to top button functionality
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
    scrollTopBtn.style.animation = 'fadeInScale 0.3s ease-out';
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Counter animation for numbers
function animateCounter(element, target, duration = 1500) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Navbar active link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  const navLinks = document.querySelectorAll('.navbar-nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add active state styling to navbar links
const navStyle = document.createElement('style');
navStyle.textContent = `
  .navbar-nav a.active {
    color: #00d4ff !important;
    font-weight: 600;
    border-bottom: 2px solid #00d4ff;
    transition: all 0.3s ease;
  }
  
  .navbar-nav a {
    transition: all 0.3s ease;
  }
  
  .navbar-nav a:hover {
    color: #00ffff !important;
    transform: translateY(-2px);
  }
`;
document.head.appendChild(navStyle);

// Smooth hover effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.animation = 'fadeInScale 0.2s ease-out';
  });
});

// Accordion animation enhancement
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-bs-target'));
    if (target) {
      target.style.animation = 'slideDown 0.4s ease-out';
    }
  });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-section');
  if (hero) {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
});

// Stagger animations for list items
document.querySelectorAll('.list-group-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

// Contact form validation and fake submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    const alertBox = document.getElementById("formAlert");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      alertBox.className = "alert alert-success mt-3";
      alertBox.textContent = "Thank you! Your inquiry has been submitted successfully.";
      alertBox.classList.remove("d-none");

      setTimeout(() => {
        form.reset();
        form.classList.remove("was-validated");
      }, 1500);
    });
  }
});
