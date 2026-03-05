;(function(){
  const $ = (s, ctx=document) => ctx.querySelector(s);
  const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

  function ensureBackdrop(){
    let bd = $('#backdrop');
    if(!bd){
      bd = document.createElement('div');
      bd.id = 'backdrop';
      bd.className = 'backdrop';
      document.body.appendChild(bd);
    }
    return bd;
  }

  function closeNav(nav, hb, bd){
    if(nav){ nav.classList.remove('open'); }
    if(hb){ hb.setAttribute('aria-expanded','false'); hb.classList.remove('is-open'); }
    if(bd){ bd.classList.remove('show'); }
  }

  function openNav(nav, hb, bd){
    if(nav){ nav.classList.add('open'); }
    if(hb){ hb.setAttribute('aria-expanded','true'); hb.classList.add('is-open'); }
    if(bd){ bd.classList.add('show'); }
  }

  function initNav(){
    const hb = $('.hamburger');
    const nav = $('#primary-nav');
    const bd = ensureBackdrop();
    if(!nav || !hb) return;
    hb.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hb.classList.toggle('is-open', isOpen);
      hb.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      bd.classList.toggle('show', isOpen);
    });
    bd.addEventListener('click', () => closeNav(nav, hb, bd));
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeNav(nav, hb, bd);
    });
    $$('#primary-nav a').forEach(a=>a.addEventListener('click', ()=>closeNav(nav, hb, bd)));
  }

  function setActiveLinks(){
    const path = location.pathname.split('/').pop() || 'index.html';
    $$('#primary-nav a').forEach(a=>{
      const href = a.getAttribute('href');
      if(href && href.endsWith(path)) a.classList.add('active');
    });
  }

  function initTheme(){
    const key = 'pp-theme';
    const current = localStorage.getItem(key) || 'light';
    if(current === 'dark') document.documentElement.setAttribute('data-theme','dark');
    const t = $('#themeToggle');
    if(t){
      t.addEventListener('click', ()=>{
        const on = document.documentElement.getAttribute('data-theme') === 'dark';
        if(on){
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem(key,'light');
        } else {
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem(key,'dark');
        }
      });
    }
  }

  function initToTop(){
    let btn = $('.to-top');
    if(!btn){
      btn = document.createElement('button');
      btn.className = 'to-top';
      btn.setAttribute('aria-label','Na vrh');
      btn.innerHTML = '↑';
      document.body.appendChild(btn);
    }
    const toggle = () => {
      if(window.scrollY > 300){ btn.classList.add('show'); }
      else { btn.classList.remove('show'); }
    };
    window.addEventListener('scroll', toggle);
    btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
    toggle();
  }

  function fixLogo(){
    const img = $('#logo');
    if(img){
      const v = 'v=20260305';
      const base = 'planetpoints.png';
      img.src = base + (base.includes('?') ? '&' : '?') + v;
      img.decoding = 'async';
      img.loading = 'eager';
    }
  }

  function registerSW(){
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('service-worker.js').catch(()=>{});
    }
  }

  function initForms(){
    const newsletter = document.querySelector('#newsletter form');
    if(newsletter){
      newsletter.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email = newsletter.querySelector('input[type="email"]');
        const val = email && email.value.trim();
        if(!val || !/^\S+@\S+\.\S+$/.test(val)){
          alert('Unesite ispravan email.');
          return;
        }
        alert('Hvala! Uskoro ćete primati novosti.');
        newsletter.reset();
      });
    }
    const contact = document.querySelector('.form-container form');
    if(contact){
      contact.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = contact.querySelector('input[name="name"]');
        const email = contact.querySelector('input[name="email"]');
        const msg = contact.querySelector('textarea[name="message"]');
        if(!name.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value.trim()) || !msg.value.trim()){
          alert('Molimo popunite sva polja ispravno.');
          return;
        }
        alert('Poruka poslata! Odgovorićemo uskoro.');
        contact.reset();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initNav();
    setActiveLinks();
    initTheme();
    initToTop();
    fixLogo();
    registerSW();
    initForms();
  });
})(); 
