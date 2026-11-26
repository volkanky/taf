/* TAF Ecza basket page. Leaves checkout, quantity and coupon forms intact. */
(function () {
  'use strict';
  const CSS = `
    body.taf-cart-page{--taf-red:#ce1720;--taf-ink:#293234;--taf-muted:#687376;margin:0;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-cart-page *{box-sizing:border-box}
    body.taf-cart-page #stepsCont{margin:0;padding:17px 0;border-bottom:1px solid #efe3e5;background:#fff;box-shadow:none}
    body.taf-cart-page #stepsCont>.container{display:flex;align-items:center;justify-content:space-between;width:min(100% - 40px,1180px);padding:0}
    body.taf-cart-page #stepsCont .logo-left-s{display:block;width:172px;max-width:100%!important;height:auto}
    body.taf-cart-page #stepsCont .step-indicator{display:none!important}
    body.taf-cart-page .taf-cart-steps{display:flex;align-items:center;gap:10px;margin-left:auto;color:#8b9698;font-size:12px;font-weight:700}
    body.taf-cart-page .taf-cart-steps span{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
    body.taf-cart-page .taf-cart-steps span:before{content:attr(data-step);display:grid;place-items:center;width:27px;height:27px;border:1px solid #e4dcde;border-radius:50%;background:#fff;color:#8b9698;font-size:11px}
    body.taf-cart-page .taf-cart-steps span:first-child{color:var(--taf-red)}
    body.taf-cart-page .taf-cart-steps span:first-child:before{border-color:var(--taf-red);background:var(--taf-red);color:#fff}
    body.taf-cart-page .taf-cart-steps span+span:after{content:'';order:-1;width:14px;height:1px;margin-right:2px;background:#e2dadd}
    body.taf-cart-page #stepsCont .step-indicator li{float:none;display:flex;align-items:center;margin:0;opacity:.56}
    body.taf-cart-page #stepsCont .step-indicator li.active{opacity:1}
    body.taf-cart-page #stepsCont .step-indicator li .caption{color:#596568;font-size:12px;font-weight:700;letter-spacing:.02em}
    body.taf-cart-page #stepsCont .step-indicator li.active .caption{color:var(--taf-red)}
    body.taf-cart-page .shopping-cart-main-container>.main-container{width:min(100% - 40px,1180px);min-height:calc(100vh - 270px);margin:0 auto;padding:34px 0 65px}
    body.taf-cart-page .taf-cart-intro{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:23px}
    body.taf-cart-page .taf-cart-intro span{display:block;margin-bottom:7px;color:var(--taf-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
    body.taf-cart-page .taf-cart-intro h1{margin:0;color:var(--taf-ink);font-size:clamp(30px,3vw,42px);font-weight:700;letter-spacing:-.04em;line-height:1.13}
    body.taf-cart-page .taf-cart-intro p{margin:9px 0 0;color:var(--taf-muted);font-size:14px}
    body.taf-cart-page .taf-cart-intro a{color:var(--taf-red);font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap}
    body.taf-cart-page .taf-cart-intro a:hover{text-decoration:underline}
    body.taf-cart-page .cart-top-cont{margin:0 0 22px;padding:0;background:transparent;border:0;box-shadow:none}
    body.taf-cart-page .cart-top-cont>.row{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0}
    body.taf-cart-page .cart-top-cont>.row:before,body.taf-cart-page .cart-top-cont>.row:after{display:none!important;content:none!important}
    body.taf-cart-page .cart-top-cont>.row>.col-md-3{float:none!important;display:block!important;position:static!important;order:0!important;grid-column:auto!important;width:auto!important;margin:0!important;padding:0!important;text-align:left!important}
    body.taf-cart-page .cart-top-bx{display:flex;flex-direction:column;justify-content:center;min-height:104px;margin:0;padding:19px 22px;border:1px solid #f0e3e5;border-radius:17px;background:#fff;box-shadow:0 8px 24px rgba(67,35,39,.04)}
    body.taf-cart-page .cart-top-bx>div{margin-bottom:5px;color:#697578;font-size:12px;font-weight:600}
    body.taf-cart-page .cart-top-bx h4{margin:0;color:#303a3c;font-size:24px;font-weight:700;letter-spacing:-.03em}
    body.taf-cart-page #totalpricediv-basket .cart-top-bx{border-color:#e9c5c9;background:linear-gradient(110deg,#fff4f5,#fff)}
    body.taf-cart-page #totalpricediv-basket .cart-top-bx h4{color:var(--taf-red)}
    body.taf-cart-page #cargocarttextdiv{margin:0!important;padding:0 5px;color:#62706e;font-size:12px}
    body.taf-cart-page .shopping-cart.desktop,body.taf-cart-page .shopping-cart.mobile{overflow:hidden;border:1px solid #efe2e4;border-radius:18px;background:#fff;box-shadow:0 12px 32px rgba(70,37,42,.045)}
    body.taf-cart-page .shopping-cart.desktop .table-responsive{margin:0}
    body.taf-cart-page .shopping-cart.desktop table{width:100%;margin:0;border:0;background:#fff}
    body.taf-cart-page .shopping-cart.desktop thead{background:#fff7f8}
    body.taf-cart-page .shopping-cart.desktop th{padding:18px 20px;border:0;border-bottom:1px solid #eee2e4;color:#627073;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    body.taf-cart-page .shopping-cart.desktop td{padding:20px;border-color:#f1e8e9;color:#334042;vertical-align:middle}
    body.taf-cart-page .shopping-cart img{max-height:95px;object-fit:contain}
    body.taf-cart-page .shopping-cart a:not(.btn){color:#324043;text-decoration:none}
    body.taf-cart-page .shopping-cart a:not(.btn):hover{color:var(--taf-red)}
    body.taf-cart-page .shopping-cart .quantityinput{width:64px;min-height:39px;border:1px solid #e5dfe0;border-radius:8px;text-align:center}
    body.taf-cart-page .shopping-cart .delete-btn{color:#a64148;cursor:pointer}
    body.taf-cart-page .shopping-cart.mobile>.title{padding:16px 19px;background:#fff7f8;color:#303b3d;font-size:15px;font-weight:700;letter-spacing:.04em}
    body.taf-cart-page .taf-cart-empty{display:grid;justify-items:center;gap:11px;margin:0;padding:55px 24px;border:1px solid #efe2e4;border-radius:18px;background:#fff;text-align:center;box-shadow:0 12px 32px rgba(70,37,42,.045)}
    body.taf-cart-page .taf-cart-empty[hidden]{display:none!important}
    body.taf-cart-page .taf-cart-empty svg{width:65px;height:65px;color:var(--taf-red)}
    body.taf-cart-page .taf-cart-empty h2{margin:6px 0 0;color:var(--taf-ink);font-size:24px;font-weight:700}
    body.taf-cart-page .taf-cart-empty p{max-width:440px;margin:0;color:var(--taf-muted);font-size:14px;line-height:1.5}
    body.taf-cart-page .taf-cart-empty a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;margin-top:8px;padding:10px 22px;border-radius:10px;background:var(--taf-red);color:#fff!important;font-size:13px;font-weight:700;text-decoration:none}
    body.taf-cart-page.taf-cart-is-empty .shopping-cart.desktop,body.taf-cart-page.taf-cart-is-empty .shopping-cart.mobile{display:none!important}
    body.taf-cart-page .graybox{margin:18px 0 0;padding:22px;border:1px solid #eee2e4;border-radius:17px;background:#fff;box-shadow:none}
    body.taf-cart-page.taf-cart-is-empty .graybox,body.taf-cart-page.taf-cart-is-empty #fixed-box-bottom{display:none!important}
    body.taf-cart-page .graybox h5{margin:0 0 13px!important;color:#354144;font-size:14px;font-weight:700}
    body.taf-cart-page .graybox .kuponKodu{display:flex;max-width:430px}
    body.taf-cart-page .graybox .kuponKodu input{height:44px;border:1px solid #e4dcde;border-radius:9px 0 0 9px;background:#fafafa;box-shadow:none}
    body.taf-cart-page .graybox .kuponKodu button{height:44px;padding:0 18px;border:0;border-radius:0 9px 9px 0;background:var(--taf-red);color:#fff;font-weight:700}
    body.taf-cart-page #fixed-box-bottom{position:sticky!important;bottom:0;z-index:20;margin:0;padding:12px 0;border-top:1px solid #eadcde;background:rgba(255,255,255,.96);box-shadow:0 -8px 30px rgba(56,31,34,.08);backdrop-filter:blur(12px)}
    body.taf-cart-page #fixed-box-bottom .container{width:min(100% - 40px,1180px)}
    body.taf-cart-page #fixed-box-bottom .fixedWrapper{display:flex;align-items:center;gap:10px;float:none;margin:0;padding:0}
    body.taf-cart-page #fixed-box-bottom .fixedWrapper a{float:none;display:inline-flex;align-items:center;justify-content:center;min-height:44px;margin:0!important;padding:10px 17px;border:1px solid #e4c5c9;border-radius:10px;background:#fff;color:#bd1820!important;font-size:13px;font-weight:700;text-decoration:none;animation:none!important;box-shadow:none}
    body.taf-cart-page #fixed-box-bottom .fixedWrapper .leavebasketandpay{margin-left:auto!important;border-color:var(--taf-red);background:var(--taf-red);color:#fff!important}
    body.taf-cart-page.taf-cart-is-empty #fixed-box-bottom .update-basket,body.taf-cart-page.taf-cart-is-empty #fixed-box-bottom .leavebasketandpay{display:none!important}
    @media(max-width:767px){body.taf-cart-page #stepsCont>.container{width:min(100% - 24px,1180px)}body.taf-cart-page #stepsCont .logo-left-s{width:125px}body.taf-cart-page .taf-cart-steps{gap:3px}body.taf-cart-page .taf-cart-steps span{font-size:0;gap:0}body.taf-cart-page .taf-cart-steps span:before{font-size:10px;width:23px;height:23px}body.taf-cart-page .taf-cart-steps span+span:after{width:6px;margin:0 3px}body.taf-cart-page .shopping-cart-main-container>.main-container{width:min(100% - 24px,1180px);padding:24px 0 50px}body.taf-cart-page .taf-cart-intro{align-items:start}body.taf-cart-page .taf-cart-intro a{display:none}body.taf-cart-page .cart-top-cont>.row{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}body.taf-cart-page #totalpricediv-basket{grid-column:1/-1}body.taf-cart-page .cart-top-bx{min-height:86px;padding:15px}body.taf-cart-page .cart-top-bx h4{font-size:20px}body.taf-cart-page #fixed-box-bottom .container{width:min(100% - 24px,1180px)}body.taf-cart-page #fixed-box-bottom .fixedWrapper{flex-wrap:wrap}body.taf-cart-page #fixed-box-bottom .fixedWrapper a{flex:1;font-size:12px}}
  `;

  function init() {
    const body = document.body;
    const shell = document.querySelector('.shopping-cart-main-container > .main-container');
    const desktop = shell?.querySelector('.shopping-cart.desktop');
    if (!body.classList.contains('bodyshowcustomerbasket') || !shell || !desktop || body.classList.contains('taf-cart-page')) return;
    const style = document.createElement('style');
    style.id = 'taf-cart-page-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    const stepsLogo = document.querySelector('#stepsCont .logo-left-s');
    if (stepsLogo) { stepsLogo.alt = 'TAF Ecza'; stepsLogo.removeAttribute('style'); }
    const stepsContainer = document.querySelector('#stepsCont > .container');
    if (stepsContainer) {
      const steps = document.createElement('div');
      steps.className = 'taf-cart-steps';
      steps.setAttribute('aria-label', 'Alışveriş adımları');
      steps.innerHTML = '<span data-step="1">Sepet</span><span data-step="2">Adres</span><span data-step="3">Ödeme</span><span data-step="4">Onay</span>';
      stepsContainer.appendChild(steps);
    }
    const intro = document.createElement('div');
    intro.className = 'taf-cart-intro';
    intro.innerHTML = '<div><span>TAF Ecza · Güvenli alışveriş</span><h1>Sepetim</h1><p>Ürünlerinizi gözden geçirin ve alışverişinizi tamamlayın.</p></div><a href="tel:+902122202208">Sipariş desteği: 0212 220 22 08</a>';
    shell.insertBefore(intro, shell.firstChild);
    const empty = document.createElement('div');
    empty.className = 'taf-cart-empty';
    empty.innerHTML = '<svg viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="36" cy="36" r="32" stroke="#f2cbd0"/><path d="M18 24h7l5 24h25l5-17H27M33 57h1m18 0h1"/></svg><h2>Sepetiniz henüz boş</h2><p>Bakım rutininize uygun ürünleri keşfedin; seçtikleriniz burada görünecek.</p><a href="/">Alışverişe Başla</a>';
    desktop.insertAdjacentElement('afterend', empty);
    function updateEmpty() {
      const rows = desktop.querySelectorAll('form[name=shopping_cart] tbody tr');
      const count = typeof window.json_basket_value?.cart_total_product_count === 'number' ? window.json_basket_value.cart_total_product_count : rows.length;
      const isEmpty = rows.length === 0 && count === 0;
      body.classList.toggle('taf-cart-is-empty', isEmpty);
      empty.hidden = !isEmpty;
    }
    updateEmpty();
    const tbody = desktop.querySelector('tbody');
    if (tbody) new MutationObserver(updateEmpty).observe(tbody, { childList: true });
    body.classList.add('taf-cart-page');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
