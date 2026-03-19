/* ═══════════════════════════════════════
   SOLARIS — JS GLOBAL
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll ── */
  const hdr = document.getElementById('hdr');
  if (hdr) {
    window.addEventListener('scroll', () => {
      hdr.classList.toggle('sc', window.scrollY > 60);
    });
  }

  /* ── Menú hamburger mobile ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.toggle('active');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    // Cerrar al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.querySelectorAll('span').forEach(s => {
          s.style.transform = ''; s.style.opacity = '';
        });
      });
    });
  }

  /* ── Reveal on scroll ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(el => obs.observe(el));

  /* ── Slider antes/después ── */
  document.querySelectorAll('[data-slider]').forEach(slider => {
    const before = slider.querySelector('.gi-before');
    const line   = slider.querySelector('.gi-line');
    const handle = slider.querySelector('.gi-handle');
    // Fijar el ancho de la imagen "antes" para que no se deforme al recortar
    const afterImg = slider.querySelector('.gi-after img');
    const beforeImg = slider.querySelector('.gi-before img');

    function setPos(pct) {
      pct = Math.max(5, Math.min(95, pct));
      before.style.width = pct + '%';
      line.style.left    = pct + '%';
      handle.style.left  = pct + '%';
      // Evitar que la imagen del before se deforme
      beforeImg.style.width  = slider.offsetWidth + 'px';
      beforeImg.style.height = slider.offsetHeight + 'px';
      beforeImg.style.objectFit = 'cover';
      beforeImg.style.position  = 'absolute';
      beforeImg.style.top = '0';
      beforeImg.style.left = '0';
    }

    // Init al 50%
    setPos(50);
    window.addEventListener('resize', () => setPos(
      parseFloat(before.style.width) || 50
    ));

    let dragging = false;

    function startDrag(e) {
      dragging = true;
      slider.classList.add('dragging');
      e.preventDefault();
    }
    function stopDrag() {
      dragging = false;
      slider.classList.remove('dragging');
    }
    function onMove(clientX) {
      if (!dragging) return;
      const rect = slider.getBoundingClientRect();
      const pct  = ((clientX - rect.left) / rect.width) * 100;
      setPos(pct);
    }

    // Mouse
    slider.addEventListener('mousedown',  startDrag);
    window.addEventListener('mouseup',    stopDrag);
    window.addEventListener('mousemove',  e => onMove(e.clientX));

    // Touch
    slider.addEventListener('touchstart', e => { startDrag(e); }, { passive: false });
    window.addEventListener('touchend',   stopDrag);
    window.addEventListener('touchmove',  e => onMove(e.touches[0].clientX), { passive: true });
  });
  document.querySelectorAll('.fq').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.fi');
      const isOpen = item.classList.contains('op');
      document.querySelectorAll('.fi.op').forEach(i => i.classList.remove('op'));
      if (!isOpen) item.classList.add('op');
    });
  });

  /* ── Formulario de contacto ── */
  document.querySelectorAll('form[data-contact]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-sub');
      const original = btn.textContent;
      btn.textContent = '✅ ¡Solicitud enviada! Nos ponemos en contacto pronto.';
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  });

  /* ── Nav: marcar página activa ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

});
