/* TAF Ecza login page redesign. Load on ?p=login after the platform scripts. */
(function () {
  'use strict';

  const LOGO = 'https://www.tafecza.com/custom/header_left_1_0.png?rand=1795627973';

  const illustration = `
    <svg class="taf-login-illustration" viewBox="0 0 640 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="taf-art-title">
      <title id="taf-art-title">Cilt bakım ürünlerinden oluşan vektörel çizim</title>
      <defs>
        <linearGradient id="taf-arch" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffdfd"/><stop offset="1" stop-color="#fbdfe2"/></linearGradient>
        <linearGradient id="taf-bottle" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".52" stop-color="#fffafa"/><stop offset="1" stop-color="#eadfe0"/></linearGradient>
        <linearGradient id="taf-jar" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#f1e8e8"/></linearGradient>
        <linearGradient id="taf-red" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e72d33"/><stop offset="1" stop-color="#b80f17"/></linearGradient>
        <filter id="taf-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="17" stdDeviation="17" flood-color="#9d5960" flood-opacity=".16"/></filter>
      </defs>
      <circle cx="370" cy="249" r="205" fill="url(#taf-arch)"/>
      <circle cx="370" cy="249" r="205" fill="none" stroke="#fff" stroke-width="2"/>
      <path d="M148 373c37-18 78-30 118-33M451 361c38 9 71 21 101 39" fill="none" stroke="#e8a9ae" stroke-width="2" opacity=".75"/>
      <ellipse cx="341" cy="448" rx="212" ry="28" fill="#e7b9bd" opacity=".36"/>
      <path d="M125 412c23-32 43-64 49-111 22 16 25 44 8 72 30-30 46-58 47-90 25 22 23 56 2 84 21-13 39-33 47-52 12 33-10 63-40 82" fill="none" stroke="#b46d70" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".52"/>
      <path d="M511 403c-23-36-31-69-24-107-26 15-34 46-24 75-24-31-33-62-26-91-27 21-33 53-17 81-18-13-31-28-39-45-13 30 2 62 29 83" fill="none" stroke="#ae6468" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
      <g filter="url(#taf-shadow)">
        <rect x="238" y="149" width="129" height="276" rx="24" fill="url(#taf-bottle)" stroke="#e7d5d6" stroke-width="2"/>
        <rect x="257" y="109" width="91" height="51" rx="8" fill="#f8f2f2" stroke="#dfced0" stroke-width="2"/>
        <rect x="271" y="92" width="63" height="22" rx="5" fill="#31383a"/>
        <path d="M298 92V72c0-7 6-12 12-12h45c10 0 17-5 20-14" fill="none" stroke="#31383a" stroke-width="11" stroke-linecap="round"/>
        <rect x="253" y="263" width="99" height="111" rx="11" fill="#fffafa" stroke="#f4e5e6"/>
        <rect x="275" y="286" width="55" height="4" rx="2" fill="#d91b22"/>
        <rect x="268" y="304" width="69" height="3" rx="1.5" fill="#9da5a5" opacity=".52"/>
        <rect x="276" y="318" width="53" height="3" rx="1.5" fill="#9da5a5" opacity=".36"/>
        <circle cx="303" cy="346" r="9" fill="#f7d9dc"/>
      </g>
      <g filter="url(#taf-shadow)">
        <rect x="387" y="227" width="114" height="193" rx="17" fill="url(#taf-bottle)" stroke="#e3d1d2" stroke-width="2"/>
        <rect x="398" y="205" width="92" height="30" rx="7" fill="#f6eeee" stroke="#decbcd" stroke-width="2"/>
        <rect x="406" y="191" width="76" height="17" rx="5" fill="url(#taf-red)"/>
        <rect x="403" y="272" width="83" height="90" rx="8" fill="#fff9f9" stroke="#f4e5e6"/>
        <rect x="422" y="294" width="46" height="4" rx="2" fill="#d91b22"/>
        <rect x="417" y="311" width="56" height="3" rx="1.5" fill="#a1a7a7" opacity=".45"/>
        <rect x="423" y="325" width="44" height="3" rx="1.5" fill="#a1a7a7" opacity=".32"/>
      </g>
      <g filter="url(#taf-shadow)">
        <rect x="134" y="328" width="116" height="93" rx="17" fill="url(#taf-jar)" stroke="#e5d3d4" stroke-width="2"/>
        <rect x="127" y="308" width="130" height="29" rx="10" fill="#fff" stroke="#e4d2d3" stroke-width="2"/>
        <path d="M143 353h99" stroke="#f2e1e2" stroke-width="2"/>
        <rect x="158" y="370" width="69" height="4" rx="2" fill="#d91b22"/>
        <rect x="166" y="385" width="53" height="3" rx="1.5" fill="#a1a7a7" opacity=".45"/>
      </g>
      <circle cx="176" cy="169" r="8" fill="#fff" opacity=".75"/>
      <circle cx="495" cy="125" r="5" fill="#e9aeb4" opacity=".8"/>
      <path d="M500 165v17m-8-8h16M146 238v14m-7-7h14" stroke="#d6757c" stroke-width="2" stroke-linecap="round" opacity=".62"/>
    </svg>`;

  function init() {
    const body = document.body;
    const form = document.getElementById('customerloginformpage');
    const main = document.querySelector('.formlar-main-cart-main-container');
    if (!body.classList.contains('bodylogin') || !form || !main || body.classList.contains('taf-login-ready')) return;

    const panel = form.closest('.panel.panel-default');
    if (!panel) return;

    if (!document.getElementById('taf-login-style')) {
      const style = document.createElement('style');
      style.id = 'taf-login-style';
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');
        body.taf-login-ready{--taf-red:#d91319;--taf-ink:#292f30;--taf-muted:#6d7778;--taf-blush:#fff1f2;margin:0;background:#fbf8f8;color:var(--taf-ink);font-family:Jost,Arial,sans-serif}
        body.taf-login-ready *{box-sizing:border-box}
        body.taf-login-ready a{transition:color .2s,background .2s,border-color .2s,transform .2s}
        body.taf-login-ready a:focus-visible,body.taf-login-ready button:focus-visible,body.taf-login-ready input:focus-visible{outline:2px solid var(--taf-red)!important;outline-offset:3px}
        body.taf-login-ready .taf-login-nav{margin:0;border:0;border-bottom:1px solid #efe3e4;background:#fff;min-height:80px;box-shadow:none}
        body.taf-login-ready .taf-login-nav .container{width:min(100% - 48px,1280px);display:flex;align-items:center;justify-content:space-between;min-height:80px;padding:0}
        body.taf-login-ready .taf-login-nav .navbar-header{float:none;display:flex;align-items:center}
        body.taf-login-ready .taf-login-nav .navbar-brand{float:none;display:flex;align-items:center;height:auto;min-height:0;margin:0;padding:0}
        body.taf-login-ready .taf-login-nav .navbar-brand img{display:block!important;width:185px!important;max-width:100%!important;height:auto!important;max-height:none!important}
        body.taf-login-ready .taf-login-nav .navbar-toggle,body.taf-login-ready .taf-login-nav #navbar{display:none!important}
        body.taf-login-ready .taf-login-nav-actions{display:flex;align-items:center;gap:28px}
        body.taf-login-ready .taf-login-nav-actions a{font-size:13px;font-weight:600;text-decoration:none;color:#444e4f}
        body.taf-login-ready .taf-login-nav-actions a:hover{color:var(--taf-red)}
        body.taf-login-ready .taf-login-nav-actions .taf-nav-phone{display:flex;align-items:center;gap:7px;color:var(--taf-red)}
        body.taf-login-ready .taf-login-nav-actions svg{width:17px;height:17px}
        body.taf-login-ready .taf-login-shell{width:min(100% - 48px,1130px);min-height:calc(100vh - 260px);margin:50px auto 58px;padding:0;background:transparent}
        body.taf-login-ready .taf-login-layout{display:grid;grid-template-columns:1.02fr .98fr;min-height:590px;border:1px solid #f0e5e6;border-radius:27px;overflow:hidden;background:#fff;box-shadow:0 30px 75px rgba(83,45,48,.1),0 4px 14px rgba(83,45,48,.04)}
        body.taf-login-ready .taf-login-art{position:relative;overflow:hidden;min-height:590px;padding:54px 52px;background:radial-gradient(circle at 85% 79%,#f5cbd0 0,transparent 33%),linear-gradient(145deg,#fff7f7 3%,#fbe6e8 72%,#f8dfe2 100%)}
        body.taf-login-ready .taf-login-art:before{content:'';position:absolute;left:-115px;bottom:-165px;width:360px;height:360px;border:1px solid rgba(218,102,110,.22);border-radius:50%;box-shadow:0 0 0 70px rgba(255,255,255,.16),0 0 0 145px rgba(255,255,255,.08)}
        body.taf-login-ready .taf-art-copy{position:relative;z-index:1;max-width:430px}
        body.taf-login-ready .taf-art-eyebrow{display:inline-flex;align-items:center;gap:9px;margin-bottom:22px;color:#a33d43;font-size:11px;font-weight:700;letter-spacing:.19em;text-transform:uppercase}
        body.taf-login-ready .taf-art-eyebrow:before{content:'';width:24px;height:2px;background:var(--taf-red);border-radius:3px}
        body.taf-login-ready .taf-login-art h2{max-width:390px;margin:0;font-size:clamp(32px,3.8vw,48px);line-height:1.11;letter-spacing:-.035em;font-weight:600;color:#303434}
        body.taf-login-ready .taf-login-art h2 em{font-style:normal;color:var(--taf-red)}
        body.taf-login-ready .taf-login-art p{max-width:320px;margin:16px 0 0;color:#6e6567;font-size:15px;line-height:1.55}
        body.taf-login-ready .taf-login-illustration{position:absolute;right:-22px;bottom:-26px;width:100%;max-width:570px;height:auto}
        body.taf-login-ready .taf-login-form-side{display:flex;align-items:center;justify-content:center;padding:54px clamp(30px,5.5vw,76px);background:#fff}
        body.taf-login-ready .taf-login-card{width:100%;max-width:420px}
        body.taf-login-ready .taf-login-card .panel{margin:0;border:0;border-radius:0;box-shadow:none;background:transparent}
        body.taf-login-ready .taf-login-card .panel-heading{display:none!important}
        body.taf-login-ready .taf-login-card .panel-collapse{display:block!important;height:auto!important;visibility:visible!important}
        body.taf-login-ready .taf-login-card .panel-body{padding:0;border:0}
        body.taf-login-ready .taf-form-heading{margin-bottom:34px}
        body.taf-login-ready .taf-form-heading span{display:block;margin-bottom:10px;color:var(--taf-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
        body.taf-login-ready .taf-form-heading h1{margin:0;color:var(--taf-ink);font-size:35px;line-height:1.15;letter-spacing:-.03em;font-weight:600}
        body.taf-login-ready .taf-form-heading p{margin:12px 0 0;color:var(--taf-muted);font-size:14px;line-height:1.55}
        body.taf-login-ready #customerloginformpage{padding:0!important;margin:0}
        body.taf-login-ready #customerloginformpage>.row{margin:0}
        body.taf-login-ready #customerloginformpage .login-with-password{display:grid;grid-template-columns:1fr 1fr;column-gap:16px;row-gap:0}
        body.taf-login-ready #customerloginformpage .login-with-password>.col-md-6,body.taf-login-ready #customerloginformpage .login-with-password>.col-md-12{float:none;width:auto;padding:0;min-width:0}
        body.taf-login-ready #customerloginformpage .taf-field-email,body.taf-login-ready #customerloginformpage .taf-field-password,body.taf-login-ready #customerloginformpage .taf-field-submit{grid-column:1/-1}
        body.taf-login-ready #customerloginformpage .taf-field-email{margin-bottom:17px}
        body.taf-login-ready #customerloginformpage .taf-field-password{margin-bottom:14px}
        body.taf-login-ready #customerloginformpage .form-group{margin:0;min-height:0}
        body.taf-login-ready #customerloginformpage label:not(.form-check-label){display:block;margin:0 0 8px;color:#374142;font-size:13px;font-weight:600}
        body.taf-login-ready #customerloginformpage .form-control{display:block;width:100%;height:50px;border:1px solid #dedfdf;border-radius:11px;background:#fafafa;padding:0 16px;color:var(--taf-ink);font-size:14px;box-shadow:none;transition:border-color .2s,background .2s,box-shadow .2s}
        body.taf-login-ready #customerloginformpage .form-control:focus{border-color:#df8d92;background:#fff;box-shadow:0 0 0 4px rgba(217,19,25,.07)}
        body.taf-login-ready #customerloginformpage .form-control::placeholder{color:#a4aaab;opacity:1}
        body.taf-login-ready #customerloginformpage .has-error .form-control{border-color:#d91319}
        body.taf-login-ready #customerloginformpage .help-block.with-errors{margin-top:5px;font-size:12px;color:#bc1419}
        body.taf-login-ready .taf-password-control{position:relative}
        body.taf-login-ready .taf-password-control .form-control{padding-right:85px!important}
        body.taf-login-ready .taf-password-toggle{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:0;border-radius:7px;background:transparent;padding:7px 9px;color:#6b7475;font-size:12px;font-weight:600;cursor:pointer}
        body.taf-login-ready .taf-password-toggle:hover{background:#fff1f2;color:var(--taf-red)}
        body.taf-login-ready #customerloginformpage .taf-field-remember .form-group,body.taf-login-ready #customerloginformpage .taf-field-forgot .form-group{display:flex;align-items:center;min-height:34px}
        body.taf-login-ready #customerloginformpage .taf-field-forgot .form-group{justify-content:flex-end;text-align:right}
        body.taf-login-ready #customerloginformpage .taf-field-remember input[type=checkbox]{position:static;margin:0 8px 0 0;accent-color:var(--taf-red);width:15px;height:15px}
        body.taf-login-ready #customerloginformpage .taf-field-remember label{margin:0;color:#5f6869;font-size:12px;font-weight:400;cursor:pointer}
        body.taf-login-ready #customerloginformpage .sifunuttum{padding:0!important;color:#c0161d;font-size:12px;font-weight:600;text-decoration:none}
        body.taf-login-ready #customerloginformpage .sifunuttum:hover{text-decoration:underline}
        body.taf-login-ready #customer_login_submit{display:block;width:100%;height:50px;margin:23px 0 0!important;border:1px solid var(--taf-red)!important;border-radius:11px;background:var(--taf-red)!important;color:#fff!important;font-size:14px;font-weight:700;letter-spacing:.02em;box-shadow:0 9px 18px rgba(217,19,25,.17);transition:background .2s,transform .2s,box-shadow .2s}
        body.taf-login-ready #customer_login_submit:hover{background:#b90e15!important;border-color:#b90e15!important;transform:translateY(-1px);box-shadow:0 12px 21px rgba(217,19,25,.22)}
        body.taf-login-ready #customerloginformpage>hr{margin:28px 0 24px;border-color:#ececec}
        body.taf-login-ready #customerloginformpage .taf-empty-row{display:none}
        body.taf-login-ready .taf-register-label{margin:0 0 11px;color:#6e7778;font-size:13px;text-align:center}
        body.taf-login-ready #customerloginformpage .taf-register-row{display:flex;flex-direction:column-reverse;gap:12px}
        body.taf-login-ready #customerloginformpage .taf-register-row>.col-md-6{float:none;width:100%;padding:0}
        body.taf-login-ready #customerloginformpage .taf-register-row .btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:45px;margin:0;border:1px solid #e9c3c5;border-radius:10px;background:#fff;color:var(--taf-red)!important;font-size:13px;font-weight:600;box-shadow:none;text-decoration:none}
        body.taf-login-ready #customerloginformpage .taf-register-row .btn:hover{border-color:var(--taf-red);background:#fff6f6}
        body.taf-login-ready #customerloginformpage .taf-register-row .uyeOlmadan{min-height:25px;padding:2px;border:0;background:transparent;color:#7e8889!important;font-size:12px;font-weight:400}
        body.taf-login-ready #customerloginformpage .taf-register-row .uyeOlmadan:hover{color:var(--taf-red)!important;text-decoration:underline}
        body.taf-login-ready footer.footer:not(.taf-footer-ready){margin:0;padding:22px 0 14px;border-top:1px solid #eee4e5;background:#fff;color:#6b7475}
        body.taf-login-ready footer.footer:not(.taf-footer-ready) h3{margin:0 0 10px;border:0;padding:0;color:#303738;font-size:14px}
        body.taf-login-ready footer.footer:not(.taf-footer-ready) p{font-size:12px;line-height:1.55}
        @media(max-width:950px){body.taf-login-ready .taf-login-layout{grid-template-columns:.9fr 1.1fr}body.taf-login-ready .taf-login-art{padding:40px 30px}body.taf-login-ready .taf-login-art h2{font-size:36px}body.taf-login-ready .taf-login-form-side{padding:42px 34px}}
        @media(max-width:700px){
          body.taf-login-ready .taf-login-nav,body.taf-login-ready .taf-login-nav .container{min-height:68px}
          body.taf-login-ready .taf-login-nav .container{width:min(100% - 32px,1280px)}
          body.taf-login-ready .taf-login-nav .navbar-brand img{width:150px!important}
          body.taf-login-ready .taf-login-nav-actions{gap:12px}
          body.taf-login-ready .taf-login-nav-actions .taf-nav-phone{display:none}
          body.taf-login-ready .taf-login-nav-actions a{font-size:12px}
          body.taf-login-ready .taf-login-shell{width:min(100% - 28px,480px);min-height:0;margin:25px auto 38px}
          body.taf-login-ready .taf-login-layout{grid-template-columns:1fr;min-height:0;border-radius:19px}
          body.taf-login-ready .taf-login-art{min-height:176px;padding:24px 27px}
          body.taf-login-ready .taf-art-eyebrow{margin-bottom:10px;font-size:9px}
          body.taf-login-ready .taf-login-art h2{max-width:220px;font-size:25px;line-height:1.12}
          body.taf-login-ready .taf-login-art p{max-width:190px;margin-top:8px;font-size:11px;line-height:1.4}
          body.taf-login-ready .taf-login-illustration{width:57%;right:-17px;bottom:-63px}
          body.taf-login-ready .taf-login-form-side{padding:35px 25px 30px}
          body.taf-login-ready .taf-form-heading{margin-bottom:25px}
          body.taf-login-ready .taf-form-heading h1{font-size:29px}
          body.taf-login-ready #customerloginformpage .taf-field-remember label,body.taf-login-ready #customerloginformpage .sifunuttum{font-size:11px}
        }
        @media(prefers-reduced-motion:reduce){body.taf-login-ready *,body.taf-login-ready *:before,body.taf-login-ready *:after{transition:none!important;animation:none!important}}
      `;
      document.head.appendChild(style);
    }

    const nav = document.querySelector('nav.navbar.navbar-default');
    if (nav) {
      nav.classList.add('taf-login-nav');
      const navLogo = nav.querySelector('.navbar-brand img');
      if (navLogo) {
        navLogo.src = LOGO;
        navLogo.alt = 'TAF Ecza';
        navLogo.removeAttribute('style');
      }
      const navInner = nav.querySelector(':scope > .container');
      if (navInner) {
        const links = document.createElement('div');
        links.className = 'taf-login-nav-actions';
        links.innerHTML = `<a href="/">Ana Sayfa</a><a class="taf-nav-phone" href="tel:+902122202208"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/></svg>0212 220 22 08</a>`;
        navInner.appendChild(links);
      }
    }

    const layout = document.createElement('div');
    layout.className = 'taf-login-layout';
    layout.innerHTML = `
      <section class="taf-login-art" aria-label="TAF Ecza bakım seçkisi">
        <div class="taf-art-copy"><span class="taf-art-eyebrow">TAF Ecza</span><h2>Bakım rutininiz <em>burada</em> başlar.</h2><p>Hesabınıza giriş yapın, alışverişinize kaldığınız yerden devam edin.</p></div>
        ${illustration}
      </section>
      <section class="taf-login-form-side" aria-label="Üye girişi"><div class="taf-login-card"></div></section>`;

    const card = layout.querySelector('.taf-login-card');
    const heading = document.createElement('div');
    heading.className = 'taf-form-heading';
    heading.innerHTML = '<span>Hesabınız</span><h1>Tekrar hoş geldiniz</h1><p>Devam etmek için e-posta adresiniz ve şifrenizle giriş yapın.</p>';
    card.appendChild(heading);
    card.appendChild(panel);
    main.replaceChildren(layout);
    main.classList.add('taf-login-shell');

    const fields = form.querySelector('.login-with-password');
    if (fields) {
      const blocks = Array.from(fields.children);
      ['taf-field-email', 'taf-field-password', 'taf-field-remember', 'taf-field-forgot', 'taf-field-submit']
        .forEach((name, index) => { if (blocks[index]) blocks[index].classList.add(name); });
    }

    const password = form.querySelector('#cpassword');
    if (password) {
      const control = document.createElement('div');
      control.className = 'taf-password-control';
      password.parentNode.insertBefore(control, password);
      control.appendChild(password);
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'taf-password-toggle';
      toggle.textContent = 'Göster';
      toggle.setAttribute('aria-label', 'Şifreyi göster');
      toggle.setAttribute('aria-pressed', 'false');
      toggle.addEventListener('click', () => {
        const showing = password.type === 'password';
        password.type = showing ? 'text' : 'password';
        toggle.textContent = showing ? 'Gizle' : 'Göster';
        toggle.setAttribute('aria-label', showing ? 'Şifreyi gizle' : 'Şifreyi göster');
        toggle.setAttribute('aria-pressed', String(showing));
        password.focus();
      });
      control.appendChild(toggle);
    }

    const register = form.querySelector('a[href*="newuser"]');
    const registerRow = register && register.closest('.row');
    if (registerRow) {
      registerRow.classList.add('taf-register-row');
      const label = document.createElement('p');
      label.className = 'taf-register-label';
      label.textContent = 'Henüz hesabınız yok mu?';
      registerRow.parentNode.insertBefore(label, registerRow);
    }
    Array.from(form.querySelectorAll(':scope > .row')).forEach((row) => {
      if (!row.textContent.trim() && !row.querySelector('input,button,a')) row.classList.add('taf-empty-row');
    });

    body.classList.add('taf-login-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
