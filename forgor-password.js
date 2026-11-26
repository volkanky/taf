/* TAF Ecza password reset page. Keeps the original form and captcha. */
(function () {
  'use strict';
  const CSS = `
    body.taf-forgot{--taf-red:#d31820;--taf-ink:#293234;--taf-muted:#687376;margin:0;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-forgot *{box-sizing:border-box}
    body.taf-forgot .formlar-main-cart-main-container{display:block!important;opacity:1!important;visibility:visible!important;transform:none!important}
    body.taf-forgot .taf-forgot-nav{min-height:78px;margin:0;border:0;border-bottom:1px solid #efe4e5;background:#fff;box-shadow:none}
    body.taf-forgot .taf-forgot-nav>.container{display:flex;align-items:center;justify-content:space-between;width:min(100% - 40px,1240px);min-height:78px}
    body.taf-forgot .taf-forgot-nav .navbar-header{float:none}.taf-forgot-nav .navbar-brand{display:flex;align-items:center;height:auto;margin:0;padding:0}
    body.taf-forgot .taf-forgot-nav .navbar-brand img{display:block;width:180px!important;max-width:100%!important;height:auto!important;max-height:none!important}
    body.taf-forgot .taf-forgot-nav #navbar,body.taf-forgot .taf-forgot-nav .navbar-toggle{display:none!important}
    body.taf-forgot .taf-forgot-nav-actions{display:flex;align-items:center;gap:24px}
    body.taf-forgot .taf-forgot-nav-actions a{color:#465053;font-size:13px;font-weight:600;text-decoration:none}
    body.taf-forgot .taf-forgot-nav-actions a:hover,body.taf-forgot .taf-forgot-nav-actions .taf-phone{color:var(--taf-red)}
    body.taf-forgot .taf-forgot-main{width:min(100% - 40px,1100px);margin:48px auto 66px;padding:0}
    body.taf-forgot .taf-forgot-layout{display:grid;grid-template-columns:.94fr 1.06fr;min-height:600px;overflow:hidden;border:1px solid #f0e4e6;border-radius:26px;background:#fff;box-shadow:0 25px 70px rgba(70,36,40,.08)}
    body.taf-forgot .taf-forgot-art{position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:55px 46px;background:radial-gradient(circle at 72% 70%,#f4cbd0,transparent 36%),linear-gradient(145deg,#fff8f8,#f9e3e5)}
    body.taf-forgot .taf-forgot-art:after{content:'';position:absolute;right:-80px;bottom:-170px;width:430px;height:430px;border:1px solid rgba(205,85,94,.2);border-radius:50%;box-shadow:0 0 0 75px rgba(255,255,255,.12),0 0 0 150px rgba(255,255,255,.09)}
    body.taf-forgot .taf-forgot-art-copy,body.taf-forgot .taf-forgot-illustration{position:relative;z-index:1}
    body.taf-forgot .taf-forgot-art span{display:block;margin-bottom:18px;color:#a44249;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
    body.taf-forgot .taf-forgot-art h2{max-width:390px;margin:0;color:#2b3334;font-size:clamp(34px,4vw,49px);font-weight:700;letter-spacing:-.04em;line-height:1.1}
    body.taf-forgot .taf-forgot-art h2 em{color:var(--taf-red);font-style:normal}
    body.taf-forgot .taf-forgot-art p{max-width:330px;margin:18px 0 0;color:#6d686b;font-size:15px;line-height:1.55}
    body.taf-forgot .taf-forgot-illustration{display:block;align-self:center;width:min(100%,360px);height:auto;margin-top:22px}
    body.taf-forgot .taf-forgot-form-side{display:flex;align-items:center;padding:48px clamp(26px,5vw,70px)}
    body.taf-forgot .taf-forgot-card{width:100%;max-width:440px;margin:auto}
    body.taf-forgot .taf-forgot-heading{margin-bottom:26px}
    body.taf-forgot .taf-forgot-heading span{color:var(--taf-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
    body.taf-forgot .taf-forgot-heading h1{margin:8px 0 0;color:var(--taf-ink);font-size:34px;font-weight:700;letter-spacing:-.035em;line-height:1.2}
    body.taf-forgot .taf-forgot-heading p{margin:11px 0 0;color:var(--taf-muted);font-size:14px;line-height:1.5}
    body.taf-forgot .taf-forgot-card .panel{margin:0;border:0;box-shadow:none}.taf-forgot-card .panel-heading{display:none!important}
    body.taf-forgot .taf-forgot-card .panel-collapse{display:block!important;height:auto!important;visibility:visible!important}
    body.taf-forgot .taf-forgot-card .panel-body{padding:0;border:0}
    body.taf-forgot .taf-forgot-card .alert-info{margin:0 0 26px;padding:16px 18px;border:1px solid #f2dfe1;border-radius:12px;background:#fff7f8;color:#6d5559;font-size:13px;line-height:1.55}
    body.taf-forgot .taf-forgot-card form>.row,body.taf-forgot .taf-forgot-card form>.row>.col-md-12{margin:0;padding:0}
    body.taf-forgot .taf-forgot-card form>.row>.col-md-6{float:none;width:100%;margin:0 0 20px;padding:0}
    body.taf-forgot .taf-forgot-card label{display:block;margin:0 0 8px;color:#394345;font-size:13px;font-weight:650}
    body.taf-forgot .taf-forgot-card .form-control{width:100%;height:50px;padding:0 15px;border:1px solid #dfdddd;border-radius:11px;background:#fafafa;color:var(--taf-ink);font-size:14px;box-shadow:none}
    body.taf-forgot .taf-forgot-card .form-control:focus,body.taf-forgot .taf-forgot-card .captchafield:focus{border-color:#df8e94;outline:3px solid rgba(211,24,32,.1);background:#fff}
    body.taf-forgot .taf-forgot-card .help-block.with-errors{color:#b4151b;font-size:12px}
    body.taf-forgot .taf-forgot-card .captcha-area{margin:0!important;padding:0!important;border:0!important;box-shadow:none!important}
    body.taf-forgot .taf-forgot-card .p_captcha{display:grid;grid-template-columns:auto minmax(90px,1fr);gap:10px 14px;align-items:center;padding:16px;border:1px solid #eee1e3;border-radius:12px;background:#fffafa}
    body.taf-forgot .taf-forgot-card .toosmallinfo{grid-column:1/-1;color:#667073;font-size:12px;line-height:1.4}
    body.taf-forgot .taf-forgot-card .captcha_image img{float:none!important;display:block;max-width:120px;height:auto}
    body.taf-forgot .taf-forgot-card input.captchafield[type=text]{display:block;width:100%!important;min-width:90px!important;height:44px;margin:0!important;padding:0 12px;border:1px solid #dfdddd!important;border-radius:9px;background:#fff;font-size:17px;font-weight:700;letter-spacing:.25em;text-align:center}
    body.taf-forgot .taf-forgot-card button[name=customer_lostpassword_submit]{display:block;width:100%;min-height:51px;margin:0!important;padding:12px 20px;border:0;border-radius:11px;background:var(--taf-red);color:#fff;font-size:14px;font-weight:700;box-shadow:0 12px 24px rgba(211,24,32,.16)}
    body.taf-forgot .taf-forgot-card button[name=customer_lostpassword_submit]:hover{background:#ae1118}
    body.taf-forgot .taf-forgot-links{display:flex;justify-content:center;gap:16px;margin-top:23px;color:#687376;font-size:13px}
    body.taf-forgot .taf-forgot-links a{color:var(--taf-red);font-weight:700;text-decoration:none}
    body.taf-forgot .taf-forgot-links a:hover{text-decoration:underline}
    @media(max-width:760px){body.taf-forgot .taf-forgot-layout{grid-template-columns:1fr}body.taf-forgot .taf-forgot-art{min-height:190px;padding:26px}body.taf-forgot .taf-forgot-art h2{max-width:290px;font-size:28px}body.taf-forgot .taf-forgot-art p{max-width:265px;margin-top:8px;font-size:12px}body.taf-forgot .taf-forgot-illustration{position:absolute;right:-6px;bottom:-42px;width:185px;opacity:.68}body.taf-forgot .taf-forgot-form-side{padding:32px 25px}body.taf-forgot .taf-forgot-main{margin:24px auto 45px}}
    @media(max-width:440px){body.taf-forgot .taf-forgot-nav>.container{width:min(100% - 26px,1240px)}body.taf-forgot .taf-forgot-nav .navbar-brand img{width:145px!important}body.taf-forgot .taf-forgot-nav-actions{gap:12px}body.taf-forgot .taf-forgot-nav-actions .taf-phone{display:none}body.taf-forgot .taf-forgot-main{width:min(100% - 24px,1100px)}body.taf-forgot .taf-forgot-form-side{padding:28px 20px}body.taf-forgot .taf-forgot-heading h1{font-size:29px}}
  `;

  function init() {
    const body = document.body;
    const form = document.forms.lost_password_form;
    const main = document.querySelector('.formlar-main-cart-main-container');
    const panel = form?.closest('.panel.panel-default');
    if (!body.classList.contains('bodyforgotpassword') || !main || !panel || body.classList.contains('taf-forgot')) return;
    const style = document.createElement('style');
    style.id = 'taf-forgot-style';
    style.textContent = CSS;
    document.head.appendChild(style);

    const nav = document.querySelector('nav.navbar');
    if (nav) {
      nav.classList.add('taf-forgot-nav');
      const logo = nav.querySelector('.navbar-brand img');
      if (logo) { logo.alt = 'TAF Ecza'; logo.removeAttribute('style'); }
      const inner = nav.querySelector(':scope > .container');
      if (inner) {
        const actions = document.createElement('div');
        actions.className = 'taf-forgot-nav-actions';
        actions.innerHTML = '<a href="/">Ana Sayfa</a><a class="taf-phone" href="tel:+902122202208">0212 220 22 08</a>';
        inner.appendChild(actions);
      }
    }

    const layout = document.createElement('div');
    layout.className = 'taf-forgot-layout';
    layout.innerHTML = `<section class="taf-forgot-art" aria-label="Hesap güvenliği"><div class="taf-forgot-art-copy"><span>TAF Ecza hesabınız</span><h2>Hesabınıza <em>yeniden</em> erişin.</h2><p>Parola yenileme bağlantısını e-posta adresinize gönderelim.</p></div><svg class="taf-forgot-illustration" viewBox="0 0 400 300" role="img" aria-label="E-posta ve güvenlik kilidi çizimi" xmlns="http://www.w3.org/2000/svg"><circle cx="202" cy="153" r="126" fill="#fff8f8" stroke="#fff" stroke-width="3"/><rect x="71" y="109" width="258" height="162" rx="21" fill="#fff" stroke="#ead6d9" stroke-width="3"/><path d="m76 130 125 88 123-88" fill="none" stroke="#d58e95" stroke-width="5" stroke-linecap="round"/><path d="M153 98V71a49 49 0 0 1 98 0v27" fill="none" stroke="#2d3739" stroke-width="12" stroke-linecap="round"/><rect x="132" y="93" width="140" height="112" rx="20" fill="#cf1821"/><circle cx="202" cy="140" r="13" fill="#fff"/><path d="M202 148v20" stroke="#fff" stroke-width="8" stroke-linecap="round"/><circle cx="314" cy="49" r="8" fill="#f3bdc2"/></svg></section><section class="taf-forgot-form-side" aria-label="Parola yenileme"><div class="taf-forgot-card"><div class="taf-forgot-heading"><span>Parola yenileme</span><h1>Şifremi unuttum</h1><p>Kayıtlı e-posta adresinizi ve güvenlik kodunu girin.</p></div></div></section>`;
    const card = layout.querySelector('.taf-forgot-card');
    card.appendChild(panel);
    const links = document.createElement('div');
    links.className = 'taf-forgot-links';
    links.innerHTML = '<span>Şifrenizi hatırladınız mı?</span><a href="/?p=login">Giriş yapın</a>';
    card.appendChild(links);
    main.replaceChildren(layout);
    main.classList.remove('animsition');
    main.classList.add('taf-forgot-main');
    const captcha = form.querySelector('input[name=captcha3]');
    if (captcha) { captcha.setAttribute('aria-label', 'Güvenlik kodu'); captcha.setAttribute('maxlength', '3'); captcha.setAttribute('autocomplete', 'off'); captcha.removeAttribute('style'); }
    body.classList.add('taf-forgot');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
