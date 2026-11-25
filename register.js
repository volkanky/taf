/* TAF Ecza registration page redesign. Load on ?p=newuser after platform scripts. */
(function () {
  'use strict';

  const LOGO = 'https://www.tafecza.com/custom/header_left_1_0.png?rand=1795627973';

  const art = `
    <svg class="taf-register-illustration" viewBox="0 0 620 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="taf-register-art-title">
      <title id="taf-register-art-title">Bakım ürünleri ve bitkisel şekillerden oluşan vektörel çizim</title>
      <defs>
        <linearGradient id="tr-arch" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffaf9"/><stop offset="1" stop-color="#f5cdd1"/></linearGradient>
        <linearGradient id="tr-bottle" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".55" stop-color="#fffafa"/><stop offset="1" stop-color="#e9dedf"/></linearGradient>
        <linearGradient id="tr-red" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e72a31"/><stop offset="1" stop-color="#bc1017"/></linearGradient>
        <filter id="tr-shadow" x="-35%" y="-35%" width="170%" height="185%"><feDropShadow dx="0" dy="17" stdDeviation="17" flood-color="#a86369" flood-opacity=".17"/></filter>
      </defs>
      <circle cx="322" cy="266" r="226" fill="url(#tr-arch)" stroke="#fff" stroke-width="2"/>
      <path d="M107 415c56-23 91-60 107-116 21 31 15 65-9 94 26-10 49-35 62-62 15 38-8 72-40 91" fill="none" stroke="#af686b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
      <path d="M500 416c-34-33-50-77-49-122-25 23-27 59-13 88-21-15-35-36-45-58-18 31-3 69 24 92" fill="none" stroke="#ab5d62" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
      <ellipse cx="309" cy="474" rx="214" ry="29" fill="#dfa9ae" opacity=".32"/>
      <g filter="url(#tr-shadow)">
        <rect x="232" y="167" width="141" height="290" rx="24" fill="url(#tr-bottle)" stroke="#e2d0d2" stroke-width="2"/>
        <rect x="253" y="124" width="99" height="53" rx="8" fill="#faf2f3" stroke="#e0ced0" stroke-width="2"/>
        <rect x="270" y="104" width="65" height="22" rx="5" fill="#303738"/>
        <path d="M301 104V84c0-8 6-13 13-13h46c9 0 14-5 17-12" fill="none" stroke="#303738" stroke-width="11" stroke-linecap="round"/>
        <rect x="251" y="276" width="103" height="120" rx="11" fill="#fffafa" stroke="#f0e2e3"/>
        <rect x="274" y="300" width="56" height="5" rx="2.5" fill="url(#tr-red)"/>
        <rect x="266" y="320" width="72" height="3" rx="1.5" fill="#a5aaab" opacity=".55"/>
        <rect x="277" y="334" width="51" height="3" rx="1.5" fill="#a5aaab" opacity=".38"/>
        <circle cx="303" cy="367" r="11" fill="#f6dce0"/>
      </g>
      <g filter="url(#tr-shadow)">
        <path d="M396 263h86l-8 181c-.4 9-7 15-16 15h-38c-9 0-15-6-16-15l-8-181Z" fill="url(#tr-bottle)" stroke="#dfcdd0" stroke-width="2"/>
        <path d="M392 248h94v25h-94z" fill="#f8eeee" stroke="#dfcdd0" stroke-width="2"/>
        <rect x="405" y="227" width="67" height="21" rx="5" fill="url(#tr-red)"/>
        <rect x="408" y="319" width="63" height="75" rx="7" fill="#fff9f9" stroke="#f0e4e4"/>
        <rect x="422" y="340" width="35" height="4" rx="2" fill="#d61921"/>
        <rect x="417" y="355" width="45" height="3" rx="1.5" fill="#9da5a5" opacity=".46"/>
      </g>
      <g filter="url(#tr-shadow)">
        <rect x="117" y="365" width="126" height="92" rx="17" fill="url(#tr-bottle)" stroke="#e2d0d2" stroke-width="2"/>
        <rect x="109" y="344" width="142" height="30" rx="9" fill="#fff" stroke="#dfcdd0" stroke-width="2"/>
        <rect x="143" y="405" width="70" height="4" rx="2" fill="#d61921"/>
        <rect x="153" y="422" width="51" height="3" rx="1.5" fill="#a5aaab" opacity=".42"/>
      </g>
      <circle cx="154" cy="185" r="7" fill="#fff" opacity=".75"/>
      <circle cx="485" cy="166" r="5" fill="#e7a7ad" opacity=".8"/>
      <path d="M164 247v16m-8-8h16M492 211v14m-7-7h14" stroke="#d87b82" stroke-width="2" stroke-linecap="round" opacity=".65"/>
    </svg>`;

  function init() {
    const body = document.body;
    const form = document.getElementById('customer_register_form');
    const main = document.querySelector('.formlar-main-cart-main-container');
    if (!body.classList.contains('bodynewuser') || !form || !main || body.classList.contains('taf-register-ready')) return;

    const registerPanel = form.closest('.panel.panel-default');
    const oldLoginForm = document.getElementById('customerloginformpage');
    const loginPanel = oldLoginForm && oldLoginForm.closest('.panel.panel-default');
    if (!registerPanel) return;

    if (!document.getElementById('taf-register-style')) {
      const style = document.createElement('style');
      style.id = 'taf-register-style';
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');
        body.taf-register-ready{--tr-red:#d91319;--tr-ink:#292f30;--tr-muted:#6d7778;margin:0;background:#fbf8f8;color:var(--tr-ink);font-family:Jost,Arial,sans-serif}
        body.taf-register-ready *{box-sizing:border-box}
        body.taf-register-ready a{transition:color .2s,background .2s,border-color .2s,transform .2s}
        body.taf-register-ready a:focus-visible,body.taf-register-ready button:focus-visible,body.taf-register-ready input:focus-visible,body.taf-register-ready summary:focus-visible{outline:2px solid var(--tr-red)!important;outline-offset:3px}
        body.taf-register-ready .taf-register-nav{margin:0;border:0;border-bottom:1px solid #efe3e4;background:#fff;min-height:80px;box-shadow:none}
        body.taf-register-ready .taf-register-nav .container{width:min(100% - 48px,1280px);display:flex;align-items:center;justify-content:space-between;min-height:80px;padding:0}
        body.taf-register-ready .taf-register-nav .navbar-header{float:none;display:flex;align-items:center}
        body.taf-register-ready .taf-register-nav .navbar-brand{float:none;display:flex;align-items:center;height:auto;min-height:0;margin:0;padding:0}
        body.taf-register-ready .taf-register-nav .navbar-brand img{display:block!important;width:185px!important;max-width:100%!important;height:auto!important;max-height:none!important}
        body.taf-register-ready .taf-register-nav .navbar-toggle,body.taf-register-ready .taf-register-nav #navbar{display:none!important}
        body.taf-register-ready .taf-register-nav-actions{display:flex;align-items:center;gap:28px}
        body.taf-register-ready .taf-register-nav-actions a{font-size:13px;font-weight:600;text-decoration:none;color:#444e4f}
        body.taf-register-ready .taf-register-nav-actions a:hover{color:var(--tr-red)}
        body.taf-register-ready .taf-register-nav-actions .taf-nav-phone{display:flex;align-items:center;gap:7px;color:var(--tr-red)}
        body.taf-register-ready .taf-register-nav-actions svg{width:17px;height:17px}
        body.taf-register-ready .taf-register-shell{width:min(100% - 48px,1180px);margin:48px auto 60px;padding:0;background:transparent}
        body.taf-register-ready .taf-register-layout{display:grid;grid-template-columns:.86fr 1.14fr;min-height:890px;border:1px solid #f0e5e6;border-radius:27px;overflow:hidden;background:#fff;box-shadow:0 30px 75px rgba(83,45,48,.1),0 4px 14px rgba(83,45,48,.04)}
        body.taf-register-ready .taf-register-art{position:relative;overflow:hidden;min-height:100%;padding:54px 48px;background:radial-gradient(circle at 81% 68%,#f4cbd0 0,transparent 31%),linear-gradient(145deg,#fff7f7 3%,#fbe6e8 72%,#f8dfe2 100%)}
        body.taf-register-ready .taf-register-art:before{content:'';position:absolute;left:-130px;bottom:7%;width:390px;height:390px;border:1px solid rgba(218,102,110,.22);border-radius:50%;box-shadow:0 0 0 75px rgba(255,255,255,.15),0 0 0 150px rgba(255,255,255,.07)}
        body.taf-register-ready .taf-art-copy{position:relative;z-index:1;max-width:380px}
        body.taf-register-ready .taf-art-eyebrow{display:inline-flex;align-items:center;gap:9px;margin-bottom:22px;color:#a33d43;font-size:11px;font-weight:700;letter-spacing:.19em;text-transform:uppercase}
        body.taf-register-ready .taf-art-eyebrow:before{content:'';width:24px;height:2px;background:var(--tr-red);border-radius:3px}
        body.taf-register-ready .taf-register-art h2{margin:0;font-size:clamp(32px,3.7vw,47px);line-height:1.12;letter-spacing:-.035em;font-weight:600;color:#303434}
        body.taf-register-ready .taf-register-art h2 em{font-style:normal;color:var(--tr-red)}
        body.taf-register-ready .taf-register-art p{max-width:320px;margin:16px 0 0;color:#6e6567;font-size:15px;line-height:1.55}
        body.taf-register-ready .taf-register-illustration{position:absolute;left:50%;top:31%;transform:translateX(-50%);width:min(112%,580px);height:auto}
        body.taf-register-ready .taf-art-footnote{position:absolute;left:48px;bottom:40px;max-width:300px;color:#966a6d;font-size:12px;line-height:1.5}
        body.taf-register-ready .taf-register-form-side{padding:50px clamp(32px,4.6vw,64px);background:#fff}
        body.taf-register-ready .taf-register-card{width:100%;max-width:610px;margin:auto}
        body.taf-register-ready .taf-register-card .panel{margin:0;border:0;border-radius:0;box-shadow:none;background:transparent}
        body.taf-register-ready .taf-register-card .panel-heading{display:none!important}
        body.taf-register-ready .taf-register-card .panel-collapse{display:block!important;height:auto!important;visibility:visible!important}
        body.taf-register-ready .taf-register-card .panel-body{padding:0;border:0}
        body.taf-register-ready .taf-register-heading{margin-bottom:32px}
        body.taf-register-ready .taf-register-heading span{display:block;margin-bottom:10px;color:var(--tr-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
        body.taf-register-ready .taf-register-heading h1{margin:0;color:var(--tr-ink);font-size:35px;line-height:1.15;letter-spacing:-.03em;font-weight:600}
        body.taf-register-ready .taf-register-heading p{margin:12px 0 0;color:var(--tr-muted);font-size:14px;line-height:1.55}
        body.taf-register-ready #customer_register_form{padding:0!important;margin:0}
        body.taf-register-ready #customer_register_form>.row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px 16px;margin:0}
        body.taf-register-ready #customer_register_form>.row:before,body.taf-register-ready #customer_register_form>.row:after{display:none!important;content:none!important}
        body.taf-register-ready #customer_register_form>.row>.col-md-6,body.taf-register-ready #customer_register_form>.row>.col-md-12{float:none;width:auto;padding:0;min-width:0}
        body.taf-register-ready #customer_register_form>.row>.col-md-12,body.taf-register-ready #customer_register_form>.row>small{grid-column:1/-1}
        body.taf-register-ready #customer_register_form>.row>small{margin-top:-4px;color:#8d9494;font-size:11px}
        body.taf-register-ready #customer_register_form .form-group{margin:0;min-height:0}
        body.taf-register-ready #customer_register_form label.has-float-label{position:static!important;display:flex!important;flex-direction:column-reverse;gap:8px;width:100%;min-height:0;margin:0}
        body.taf-register-ready #customer_register_form label.has-float-label>span{position:static!important;display:block!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;transform:none!important;width:auto!important;margin:0!important;padding:0!important;background:transparent!important;color:#374142!important;font-size:13px!important;font-weight:600!important;line-height:1.25!important;opacity:1!important}
        body.taf-register-ready #customer_register_form label.has-float-label>span:after{display:none!important;content:none!important}
        body.taf-register-ready #customer_register_form .form-control{display:block;width:100%;height:49px;border:1px solid #dedfdf;border-radius:10px;background:#fafafa;padding:0 14px;color:var(--tr-ink);font-size:14px;box-shadow:none;transition:border-color .2s,background .2s,box-shadow .2s}
        body.taf-register-ready #customer_register_form .form-control:focus{border-color:#df8d92;background:#fff;box-shadow:0 0 0 4px rgba(217,19,25,.07)}
        body.taf-register-ready #customer_register_form .form-control::placeholder{color:#a4aaab;opacity:1}
        body.taf-register-ready #customer_register_form .has-error .form-control{border-color:var(--tr-red)}
        body.taf-register-ready #customer_register_form .help-block.with-errors{margin-top:5px;font-size:12px;color:#bc1419}
        body.taf-register-ready #customer_register_form .iti{width:100%}
        body.taf-register-ready #customer_register_form .country-phone-cont input{width:100%!important}
        body.taf-register-ready #customer_register_form .taf-password-group{position:relative}
        body.taf-register-ready #customer_register_form .taf-password-group .form-control{padding-right:78px}
        body.taf-register-ready #customer_register_form .taf-password-toggle{position:absolute;right:8px;bottom:8px;z-index:2;min-height:32px;border:0;border-radius:7px;background:transparent;padding:4px 8px;color:#6b7475;font-size:12px;font-weight:600;cursor:pointer}
        body.taf-register-ready #customer_register_form .taf-password-toggle:hover{background:#fff1f2;color:var(--tr-red)}
        body.taf-register-ready #customer_register_form .form-check.checkbox{display:flex!important;align-items:center!important;gap:10px;min-height:0;margin:0!important;padding:12px 14px!important;border:1px solid #eee3e4;border-radius:10px;background:#fbf9f9}
        body.taf-register-ready #customer_register_form .form-check.checkbox input[type=checkbox]{position:static!important;align-self:center!important;flex:none;width:16px;height:16px;margin:0!important;accent-color:var(--tr-red)}
        body.taf-register-ready #customer_register_form .form-check.checkbox label{display:block;margin:0!important;padding:0;color:#566061;font-size:12px;font-weight:400;line-height:1.45;cursor:pointer}
        body.taf-register-ready #customer_register_form .form-check.checkbox a{color:var(--tr-red);font-weight:600;text-decoration:underline}
        body.taf-register-ready #customer_register_form .p_captcha{display:grid;grid-template-columns:1fr auto;align-items:center;gap:11px 15px;margin-top:1px;padding:15px 16px;border:1px solid #eadfe0;border-radius:11px;background:#fffafa}
        body.taf-register-ready #customer_register_form .taf-captcha-title{grid-column:1/-1;color:#374142;font-size:13px;font-weight:600}
        body.taf-register-ready #customer_register_form .toosmallinfo{grid-column:1/-1;color:#697173;font-size:12px;line-height:1.4}
        body.taf-register-ready #customer_register_form .captcha_image{display:block;min-width:0}
        body.taf-register-ready #customer_register_form .captcha_image img{float:none!important;display:block;max-width:100%;height:auto}
        body.taf-register-ready #customer_register_form .captcha_input{display:flex;flex-direction:column;align-items:flex-start;gap:7px}
        body.taf-register-ready #customer_register_form .taf-captcha-label{display:block;color:#374142;font-size:12px;font-weight:600;line-height:1.25;white-space:nowrap}
        body.taf-register-ready #customer_register_form input[name=captcha0]{display:block;width:138px!important;min-width:138px!important;height:46px;margin:0!important;padding:0 10px;border:1px solid #d99a9f!important;border-radius:9px;background:#fff;color:var(--tr-ink);font-size:18px;text-align:center;letter-spacing:.15em;outline:none}
        body.taf-register-ready #customer_register_form input[name=captcha0]:focus{border-color:#df8d92!important;box-shadow:0 0 0 4px rgba(217,19,25,.07)}
        body.taf-register-ready #customer_register_form .clearcss{display:none}
        body.taf-register-ready #customer_register_form button[name=ok]{display:block;width:100%;height:50px;margin:0;border:1px solid var(--tr-red)!important;border-radius:11px;background:var(--tr-red)!important;color:#fff!important;font-size:14px;font-weight:700;letter-spacing:.02em;box-shadow:0 9px 18px rgba(217,19,25,.17);transition:background .2s,transform .2s,box-shadow .2s}
        body.taf-register-ready #customer_register_form button[name=ok]:hover{background:#b90e15!important;border-color:#b90e15!important;transform:translateY(-1px);box-shadow:0 12px 21px rgba(217,19,25,.22)}
        body.taf-register-ready #customer_register_form button[name=ok]~br,body.taf-register-ready #customer_register_form .taf-submit-row>br{display:none}
        body.taf-register-ready .taf-existing-account{margin-top:27px;border-top:1px solid #ece7e7;padding-top:22px}
        body.taf-register-ready .taf-existing-account summary{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none;cursor:pointer;color:#505a5b;font-size:13px;font-weight:500}
        body.taf-register-ready .taf-existing-account summary::-webkit-details-marker{display:none}
        body.taf-register-ready .taf-existing-account summary strong{display:inline-flex;align-items:center;justify-content:center;flex:none;min-height:42px;padding:0 17px;border:1px solid var(--tr-red);border-radius:9px;background:var(--tr-red);color:#fff!important;font-size:12px;font-weight:700;box-shadow:0 7px 15px rgba(217,19,25,.15);transition:background .2s,transform .2s}
        body.taf-register-ready .taf-existing-account summary:hover strong{background:#b90e15;transform:translateY(-1px)}
        body.taf-register-ready .taf-existing-account summary:after{display:none!important;content:none!important}
        body.taf-register-ready .taf-existing-account .panel{margin-top:20px;padding:20px;border:1px solid #eee3e4;border-radius:12px;background:#fffafa}
        body.taf-register-ready .taf-existing-account #customerloginformpage{padding:0!important}
        body.taf-register-ready .taf-existing-account #customerloginformpage .row{margin:0}
        body.taf-register-ready .taf-existing-account .login-with-password{display:grid;gap:12px}
        body.taf-register-ready .taf-existing-account .login-with-password>.col-md-6,body.taf-register-ready .taf-existing-account .login-with-password>.col-md-12{float:none;width:100%;padding:0}
        body.taf-register-ready .taf-existing-account .form-group{min-height:0;margin:0}
        body.taf-register-ready .taf-existing-account .form-group label{margin:0 0 7px;color:#374142;font-size:12px;font-weight:600}
        body.taf-register-ready .taf-existing-account .form-control{height:42px;border:1px solid #dedfdf;border-radius:8px;box-shadow:none}
        body.taf-register-ready .taf-existing-account .checkbox input{position:static;margin:0 7px 0 0;accent-color:var(--tr-red)}
        body.taf-register-ready .taf-existing-account .checkbox label{font-weight:400}
        body.taf-register-ready .taf-existing-account #customer_login_submit{width:100%;height:43px;margin:3px 0 0!important;border-color:var(--tr-red)!important;border-radius:9px;background:var(--tr-red)!important;color:#fff!important}
        body.taf-register-ready .taf-existing-account .sifunuttum{color:var(--tr-red);font-size:12px}
        body.taf-register-ready .taf-existing-account .uyeOlmadan,body.taf-register-ready .taf-existing-account hr{display:none}
        body.taf-register-ready footer.footer:not(.taf-footer-ready){margin:0;padding:22px 0 14px;border-top:1px solid #eee4e5;background:#fff;color:#6b7475}
        body.taf-register-ready footer.footer:not(.taf-footer-ready) h3{margin:0 0 10px;border:0;padding:0;color:#303738;font-size:14px}
        body.taf-register-ready footer.footer:not(.taf-footer-ready) p{font-size:12px;line-height:1.55}
        @media(max-width:980px){body.taf-register-ready .taf-register-layout{grid-template-columns:.78fr 1.22fr}body.taf-register-ready .taf-register-art{padding:40px 30px}body.taf-register-ready .taf-register-art h2{font-size:35px}body.taf-register-ready .taf-register-form-side{padding:42px 30px}body.taf-register-ready .taf-art-footnote{left:30px}}
        @media(max-width:720px){
          body.taf-register-ready .taf-register-nav,body.taf-register-ready .taf-register-nav .container{min-height:68px}
          body.taf-register-ready .taf-register-nav .container{width:min(100% - 32px,1280px)}
          body.taf-register-ready .taf-register-nav .navbar-brand img{width:150px!important}
          body.taf-register-ready .taf-register-nav-actions{gap:12px}
          body.taf-register-ready .taf-register-nav-actions .taf-nav-phone{display:none}
          body.taf-register-ready .taf-register-nav-actions a{font-size:12px}
          body.taf-register-ready .taf-register-shell{width:min(100% - 28px,520px);margin:25px auto 38px}
          body.taf-register-ready .taf-register-layout{grid-template-columns:1fr;min-height:0;border-radius:19px}
          body.taf-register-ready .taf-register-art{min-height:172px;padding:24px 27px}
          body.taf-register-ready .taf-art-eyebrow{margin-bottom:9px;font-size:9px}
          body.taf-register-ready .taf-register-art h2{max-width:230px;font-size:25px}
          body.taf-register-ready .taf-register-art p{max-width:215px;margin-top:8px;font-size:11px;line-height:1.4}
          body.taf-register-ready .taf-register-illustration{left:auto;right:-29px;top:auto;bottom:-65px;transform:none;width:55%}
          body.taf-register-ready .taf-art-footnote{display:none}
          body.taf-register-ready .taf-register-form-side{padding:34px 24px 30px}
          body.taf-register-ready .taf-register-heading{margin-bottom:24px}
          body.taf-register-ready .taf-register-heading h1{font-size:29px}
          body.taf-register-ready #customer_register_form>.row{grid-template-columns:1fr;gap:15px}
          body.taf-register-ready #customer_register_form>.row>.col-md-12,body.taf-register-ready #customer_register_form>.row>small{grid-column:auto}
          body.taf-register-ready #customer_register_form .p_captcha{grid-template-columns:1fr auto}
          body.taf-register-ready #customer_register_form input[name=captcha0]{width:110px!important;min-width:110px!important}
        }
        @media(prefers-reduced-motion:reduce){body.taf-register-ready *,body.taf-register-ready *:before,body.taf-register-ready *:after{transition:none!important;animation:none!important}}
      `;
      document.head.appendChild(style);
    }

    const nav = document.querySelector('nav.navbar.navbar-default');
    if (nav) {
      nav.classList.add('taf-register-nav');
      const logo = nav.querySelector('.navbar-brand img');
      if (logo) { logo.src = LOGO; logo.alt = 'TAF Ecza'; logo.removeAttribute('style'); }
      const navInner = nav.querySelector(':scope > .container');
      if (navInner) {
        const links = document.createElement('div');
        links.className = 'taf-register-nav-actions';
        links.innerHTML = `<a href="/">Ana Sayfa</a><a class="taf-nav-phone" href="tel:+902122202208"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/></svg>0212 220 22 08</a>`;
        navInner.appendChild(links);
      }
    }

    const layout = document.createElement('div');
    layout.className = 'taf-register-layout';
    layout.innerHTML = `
      <section class="taf-register-art" aria-label="TAF Ecza bakım seçkisi">
        <div class="taf-art-copy"><span class="taf-art-eyebrow">TAF Ecza</span><h2>Bakım yolculuğunuz <em>burada</em> başlar.</h2><p>Hesabınızı oluşturun, size uygun bakım ürünlerini keşfetmeye başlayın.</p></div>
        ${art}
        <span class="taf-art-footnote">TAF Ecza · Cilt, saç ve kişisel bakım seçkisi</span>
      </section>
      <section class="taf-register-form-side" aria-label="Yeni üyelik formu"><div class="taf-register-card"></div></section>`;
    const card = layout.querySelector('.taf-register-card');
    const heading = document.createElement('div');
    heading.className = 'taf-register-heading';
    heading.innerHTML = '<span>Yeni hesap</span><h1>Aramıza katılın</h1><p>Üyelik için bilgilerinizi doldurun. Zorunlu alanlar yıldızla işaretlidir.</p>';
    card.appendChild(heading);
    card.appendChild(registerPanel);
    if (loginPanel) {
      const details = document.createElement('details');
      details.className = 'taf-existing-account';
      details.innerHTML = '<summary>Zaten hesabınız var mı? <strong>Giriş yapın</strong></summary>';
      details.appendChild(loginPanel);
      card.appendChild(details);
    } else {
      const loginLink = document.createElement('a');
      loginLink.href = '/?p=login';
      loginLink.textContent = 'Zaten hesabınız var mı? Giriş yapın';
      card.appendChild(loginLink);
    }
    main.replaceChildren(layout);
    main.classList.add('taf-register-shell');

    const fields = form.querySelector(':scope > .row');
    if (fields) fields.classList.add('taf-register-fields');
    const requiredNote = fields && fields.querySelector(':scope > small');
    if (requiredNote) requiredNote.textContent = 'Şifre en az 6 karakter olmalıdır. * işaretli alanlar zorunludur.';
    const contractLink = form.querySelector('[data-target="#uyelik-sozlesmesi"]');
    if (contractLink) contractLink.textContent = 'Sözleşmeyi görüntüle';
    const submit = form.querySelector('button[name="ok"]');
    if (submit) submit.closest('.col-md-12')?.classList.add('taf-submit-row');

    [['customer_name','given-name'],['customer_surname','family-name'],['customer_email','email'],['customer_telephone1','tel'],['customer_password','new-password'],['customer_password_repeat','new-password']].forEach(([id, value]) => {
      const input = form.querySelector(`#${id}`);
      if (input) input.setAttribute('autocomplete', value);
    });

    ['customer_password','customer_password_repeat'].forEach((id) => {
      const input = form.querySelector(`#${id}`);
      const group = input && input.closest('.form-group');
      if (!input || !group) return;
      group.classList.add('taf-password-group');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'taf-password-toggle';
      button.textContent = 'Göster';
      button.setAttribute('aria-label', id === 'customer_password' ? 'Şifreyi göster' : 'Şifre tekrarını göster');
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const showing = input.type === 'password';
        input.type = showing ? 'text' : 'password';
        button.textContent = showing ? 'Gizle' : 'Göster';
        button.setAttribute('aria-label', `${id === 'customer_password' ? 'Şifreyi' : 'Şifre tekrarını'} ${showing ? 'gizle' : 'göster'}`);
        button.setAttribute('aria-pressed', String(showing));
        input.focus();
      });
      group.appendChild(button);
    });

    const captcha = form.querySelector('.p_captcha');
    if (captcha) {
      const title = document.createElement('strong');
      title.className = 'taf-captcha-title';
      title.textContent = 'Güvenlik doğrulaması';
      captcha.prepend(title);
      const captchaInput = captcha.querySelector('input[name="captcha0"]');
      if (captchaInput) {
        captchaInput.id = 'taf-captcha-code';
        captchaInput.placeholder = 'Kodu yazın';
        captchaInput.setAttribute('aria-label', 'Resimdeki güvenlik kodunu girin');
        captchaInput.setAttribute('autocomplete', 'off');
        const caption = document.createElement('label');
        caption.className = 'taf-captcha-label';
        caption.htmlFor = captchaInput.id;
        caption.textContent = 'Güvenlik kodunu girin';
        captchaInput.parentElement?.prepend(caption);
      }
    }

    body.classList.add('taf-register-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
