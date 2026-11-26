/* TAF Ecza product detail design. Load after the store's own scripts. */
(function () {
  'use strict';

  const STYLE_ID = 'taf-product-detail-style';
  const css = `
    body.taf-product-detail{--taf-red:#cf161e;--taf-ink:#263033;--taf-muted:#687275;--taf-line:#ece2e3;--taf-blush:#fff2f3;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-product-detail main{padding-bottom:34px}
    body.taf-product-detail .taf-product-crumb{padding-top:26px!important;margin-top:0!important;padding-bottom:20px!important}
    body.taf-product-detail .taf-product-crumb-card{border:1px solid #f0e4e5!important;border-radius:18px!important;background:linear-gradient(110deg,#fff8f8,#fff)!important;box-shadow:none!important;padding:18px 24px!important}
    body.taf-product-detail .taf-product-crumb-card > div{align-items:center}
    body.taf-product-detail .taf-product-crumb-card .text-2xl{font-size:15px!important;line-height:1.3!important;letter-spacing:.01em;color:var(--taf-red)!important;font-weight:700!important}
    body.taf-product-detail .taf-product-crumb-card nav ol{justify-content:flex-start!important;flex-wrap:wrap;gap:3px 0}
    body.taf-product-detail .taf-product-crumb-card nav a{color:#687275!important;text-decoration:none!important;font-size:12px}
    body.taf-product-detail .taf-product-crumb-card nav a:hover{color:var(--taf-red)!important}
    body.taf-product-detail .taf-product-hero{padding-bottom:0!important}
    body.taf-product-detail .taf-product-card{border:1px solid #eee6e7!important;border-radius:26px!important;box-shadow:0 20px 60px rgba(56,33,36,.055)!important;padding:clamp(18px,3.5vw,48px)!important;background:#fff!important}
    body.taf-product-detail .taf-product-columns{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4.5vw,70px);align-items:start}
    body.taf-product-detail .taf-product-gallery,body.taf-product-detail .taf-product-info{width:auto!important;min-width:0;padding:0!important}
    body.taf-product-detail .taf-product-gallery{position:relative}
    body.taf-product-detail .taf-product-gallery > .flex-1{width:min(100%,470px);aspect-ratio:4/5;margin-inline:auto;background:radial-gradient(circle at 50% 36%,#fff 0,#fff9f9 53%,#fbedef 100%);border:1px solid #f3e5e6;border-radius:22px;overflow:hidden;display:grid;place-items:center}
    body.taf-product-detail .taf-product-gallery figure.with-zoom{width:100%;height:100%;min-height:0;margin:0!important;display:grid;place-items:center;background-image:none!important;cursor:default}
    body.taf-product-detail .taf-product-gallery figure.with-zoom img{display:block;width:100%!important;height:100%!important;max-height:none!important;object-fit:contain;object-position:center;padding:clamp(18px,2.5vw,34px);background-image:none!important;opacity:1!important;mix-blend-mode:normal;transition:transform .3s ease}
    body.taf-product-detail .taf-product-gallery figure.with-zoom:not(:hover) img{transform:scale(1)}
    body.taf-product-detail .taf-product-gallery .favorite{top:16px!important;right:16px!important;z-index:2;padding:11px!important;border:1px solid #f1e1e3;border-radius:50%!important;box-shadow:0 8px 24px rgba(73,38,43,.08)}
    body.taf-product-detail .taf-product-gallery .favorite svg{width:20px;height:20px}
    body.taf-product-detail .taf-product-gallery > .pt-8{padding-top:14px!important}
    body.taf-product-detail .taf-product-gallery .detail-photo-view{display:flex!important;flex-wrap:wrap;gap:10px!important}
    body.taf-product-detail .taf-product-gallery .detail-photo-view li{width:68px;height:84px;padding:4px;background:#fff;border:1px solid #ebdfe1;border-radius:12px;transition:border-color .2s,box-shadow .2s}
    body.taf-product-detail .taf-product-gallery .detail-photo-view li.active,body.taf-product-detail .taf-product-gallery .detail-photo-view li:hover{border-color:var(--taf-red);box-shadow:0 0 0 3px rgba(207,22,30,.08)}
    body.taf-product-detail .taf-product-gallery .detail-photo-view a,body.taf-product-detail .taf-product-gallery .detail-photo-view img{display:block;width:100%;height:100%;object-fit:contain}
    body.taf-product-detail .taf-product-info{display:block!important}
    body.taf-product-detail .taf-product-info > div:first-child{padding-top:0!important}
    body.taf-product-detail .taf-product-eyebrow{display:flex;align-items:center;gap:8px;margin:0 0 12px;color:var(--taf-red);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
    body.taf-product-detail .taf-product-eyebrow:before{content:'';width:22px;height:2px;background:var(--taf-red);border-radius:2px}
    body.taf-product-detail .taf-product-rating{margin-bottom:12px!important;color:#879092;font-size:13px}
    body.taf-product-detail .taf-product-rating .stars{color:#dfb1b6}
    body.taf-product-detail .taf-product-title{font-size:clamp(25px,2.8vw,38px)!important;line-height:1.18!important;letter-spacing:-.035em;font-weight:700!important;color:var(--taf-ink)!important;border:0!important;padding:0!important;margin:0 0 20px!important;font-family:inherit!important}
    body.taf-product-detail .taf-product-subtitle{font-size:15px;line-height:1.55;color:var(--taf-muted);margin:-8px 0 20px}
    body.taf-product-detail .taf-product-stock{width:max-content!important;max-width:100%;display:inline-flex!important;align-items:center;padding:7px 12px!important;border:1px solid #d8ecdb;border-radius:999px;background:#f5faf5;color:#35804b!important;font-size:12px!important;font-weight:700;letter-spacing:.045em}
    body.taf-product-detail .taf-product-stock span{width:7px!important;height:7px!important;background:#55ad69!important;margin-right:8px!important}
    body.taf-product-detail .taf-product-prices{display:flex;flex-direction:column;gap:2px;margin-top:18px}
    body.taf-product-detail .taf-product-prices li{margin:0!important}
    body.taf-product-detail .taf-product-prices .line-through{color:#929a9d!important;font-size:15px!important;text-decoration-color:#bdc2c4}
    body.taf-product-detail .taf-product-prices strong{font-size:clamp(30px,3vw,40px)!important;line-height:1.2;color:var(--taf-red)!important;font-weight:700!important;font-family:inherit!important;letter-spacing:-.025em}
    body.taf-product-detail .taf-product-buy-wrap{padding-top:20px!important}
    body.taf-product-detail .taf-product-buy{display:grid!important;grid-template-columns:128px minmax(0,1fr);gap:12px!important;width:100%;margin:0!important;align-items:stretch!important}
    body.taf-product-detail .taf-product-buy > div:last-child{min-width:0}
    body.taf-product-detail .taf-product-quantity{width:100%;min-height:54px;flex-wrap:nowrap!important;justify-content:space-between;border:1px solid #e5dfe0!important;border-radius:12px!important;background:#fff}
    body.taf-product-detail .taf-product-quantity button{height:52px;min-width:34px;padding:0!important;background:#fff!important;color:var(--taf-ink);font-size:22px;line-height:1;border:0}
    body.taf-product-detail .taf-product-quantity button:hover{color:var(--taf-red)}
    body.taf-product-detail .taf-product-quantity input{width:38px!important;min-width:0!important;margin:0!important;padding:0!important;background:#fff!important;border:0!important;border-radius:0!important;text-align:center;font-size:16px!important;color:var(--taf-ink)!important}
    body.taf-product-detail .taf-product-add{width:100%;min-height:54px;gap:10px!important;border-radius:12px!important;background:var(--taf-red)!important;color:#fff!important;font-size:14px!important;font-weight:700!important;letter-spacing:.035em;padding:12px 20px!important;box-shadow:0 12px 26px rgba(207,22,30,.18);transition:background .2s,transform .2s,box-shadow .2s}
    body.taf-product-detail .taf-product-add:hover{background:#ae1118!important;transform:translateY(-2px);box-shadow:0 16px 30px rgba(207,22,30,.22)}
    body.taf-product-detail .taf-product-support{display:flex;align-items:center;gap:10px;margin-top:16px;padding:12px 14px;background:#fff8f8;border:1px solid #f4e5e7;border-radius:12px;color:#626e70;font-size:13px;line-height:1.4}
    body.taf-product-detail .taf-product-support svg{flex:none;width:18px;height:18px;color:var(--taf-red)}
    body.taf-product-detail .taf-product-support a{color:var(--taf-red);font-weight:700;text-decoration:none;white-space:nowrap}
    body.taf-product-detail .taf-product-support a:hover{text-decoration:underline}
    body.taf-product-detail .taf-product-actions{display:flex!important;flex-wrap:wrap;gap:8px 18px;border-top:1px solid var(--taf-line);padding-top:16px;margin-top:18px}
    body.taf-product-detail .taf-product-actions li{display:inline-flex;align-items:center}
    body.taf-product-detail .taf-product-actions li.hidden{display:none!important}
    body.taf-product-detail .taf-product-actions a{color:#657073!important;font-size:13px!important;line-height:1.4;text-decoration:none}
    body.taf-product-detail .taf-product-actions a:hover{color:var(--taf-red)!important}
    body.taf-product-detail .taf-product-actions svg{width:17px;height:17px;margin-right:7px;color:var(--taf-red)}
    body.taf-product-detail .taf-product-barcode{font-size:12px;color:#8a9294;padding:14px 0 0!important}
    body.taf-product-detail .taf-product-barcode td{padding:2px 8px 2px 0!important;color:#8a9294!important;font-weight:400!important}
    body.taf-product-detail .taf-product-empty-campaign{display:none!important}
    body.taf-product-detail .taf-product-tabs{margin-top:30px!important;margin-bottom:36px!important}
    body.taf-product-detail .taf-product-tabs > div{margin-top:0!important;border-radius:20px!important}
    body.taf-product-detail .taf-product-tabs .tab-anchor{gap:8px!important;white-space:normal!important;flex-wrap:wrap;padding-bottom:12px}
    body.taf-product-detail .taf-product-tabs .tab-anchor li a{display:inline-flex;align-items:center;min-height:43px;padding:10px 18px!important;background:#fff!important;color:#5d686a!important;border:1px solid #eddddd!important;border-radius:999px!important;font-size:13px!important;font-weight:700!important;letter-spacing:.02em;text-decoration:none;transition:all .2s}
    body.taf-product-detail .taf-product-tabs .tab-anchor li.active a,body.taf-product-detail .taf-product-tabs .tab-anchor li a.active,body.taf-product-detail .taf-product-tabs .tab-anchor li a:hover{background:var(--taf-red)!important;border-color:var(--taf-red)!important;color:#fff!important}
    body.taf-product-detail .taf-product-tabs .tab-detail-content{border:1px solid #eee4e5;border-radius:20px!important;box-shadow:0 14px 38px rgba(55,29,33,.04);padding:clamp(22px,3vw,38px)!important;color:#394346!important}
    body.taf-product-detail .taf-product-tabs .tab-detail-content h2,body.taf-product-detail .taf-product-tabs .tab-detail-content h3{color:var(--taf-ink)!important;letter-spacing:-.02em}
    body.taf-product-detail .taf-product-tabs .tab-detail-content p[style*="background"]{background:#fff7f8!important;border-left:3px solid var(--taf-red)!important;border-radius:9px!important}
    body.taf-product-detail .taf-product-tabs .tab-detail-content table{max-width:100%;font-size:14px}
    body.taf-product-detail .taf-product-tabs .tab-detail-content table th{background:#fff7f8!important}
    body.taf-product-detail .taf-zoom-button{position:absolute;right:16px;bottom:16px;z-index:2;display:grid;place-items:center;width:38px;height:38px;border:1px solid #eddfe1;border-radius:50%;background:#fff;color:var(--taf-ink);box-shadow:0 8px 22px rgba(46,26,29,.09);cursor:pointer}
    body.taf-product-detail .taf-zoom-button:hover{color:var(--taf-red)}
    body.taf-product-detail .taf-zoom-button svg{width:19px;height:19px}
    .taf-product-lightbox[hidden]{display:none!important}
    .taf-product-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(23,29,31,.8)}
    .taf-product-lightbox img{max-width:min(88vw,700px);max-height:88vh;object-fit:contain;background:#fff;border-radius:16px;box-shadow:0 25px 80px rgba(0,0,0,.25)}
    .taf-product-lightbox button{position:absolute;top:18px;right:18px;display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:50%;background:#fff;color:#263033;font-size:28px;line-height:1;cursor:pointer}
    body.taf-product-detail .taf-product-basket-modal{position:fixed!important;inset:0!important;z-index:10000!important;overflow-y:auto!important}
    body.taf-product-detail .taf-product-basket-modal.hidden,body.taf-product-detail .taf-product-basket-modal .basket-popup.hidden{display:none}
    body.taf-product-detail .taf-product-basket-modal > div:first-child{display:flex!important;align-items:center!important;justify-content:center!important;min-height:100vh;padding:20px!important}
    body.taf-product-detail .taf-product-basket-modal > div:first-child > .transition-opacity{position:fixed!important;inset:0!important;background:rgba(31,36,38,.65)!important;backdrop-filter:blur(5px)}
    body.taf-product-detail .taf-product-basket-modal > div:first-child > span{display:none!important}
    body.taf-product-detail .taf-product-basket-modal > div:first-child > div.relative{position:relative!important;display:block!important;flex:none!important;width:min(100%,650px)!important;max-width:650px!important;max-height:calc(100vh - 40px);margin:0!important;overflow-y:auto!important;border:1px solid #f0dddf;border-radius:24px!important;background:#fff;box-shadow:0 28px 80px rgba(34,24,27,.22)!important}
    body.taf-product-detail .taf-product-basket-modal > div:first-child > div.relative:before{content:'';position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,var(--taf-red),#f3a9af);z-index:1}
    body.taf-product-detail .taf-product-basket-modal .basket-popup{padding:34px!important;background:linear-gradient(145deg,#fff9f9,#fff 45%)!important;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-product-detail .taf-product-basket-modal .basket-popup .text-xl{display:flex;align-items:center;gap:13px;margin:0 36px 10px 0;color:var(--taf-ink)!important;font-size:22px!important;font-weight:700!important;line-height:1.3}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success .text-xl:before{content:'✓';display:grid;place-items:center;flex:none;width:42px;height:42px;border-radius:50%;background:#eaf7ee;color:#388750;font-size:24px;font-weight:700}
    body.taf-product-detail .taf-product-basket-modal .basket-popup hr{border-color:#f0e4e5!important;opacity:1!important;margin:17px 0!important}
    body.taf-product-detail .taf-product-basket-modal .taf-modal-close{position:absolute;top:17px;right:17px;z-index:2;display:grid;place-items:center;width:36px;height:36px;border:1px solid #eee0e2;border-radius:50%;background:#fff;color:#687275;font-size:24px;line-height:1;cursor:pointer}
    body.taf-product-detail .taf-product-basket-modal .taf-modal-close:hover{color:var(--taf-red);border-color:#e8c4c8}
    body.taf-product-detail .taf-product-basket-modal .taf-modal-preview{display:flex;align-items:center;gap:16px;margin-bottom:21px;padding:11px;border:1px solid #f1e6e7;border-radius:15px;background:#fff}
    body.taf-product-detail .taf-product-basket-modal .taf-modal-preview img{width:64px;height:80px;flex:none;object-fit:contain;border-radius:9px;background:#fff9f9}
    body.taf-product-detail .taf-product-basket-modal .taf-modal-preview span{color:#354043;font-size:14px;font-weight:650;line-height:1.4}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(180px,210px);gap:22px;align-items:end}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:first-child{padding:17px 19px;border:1px solid #f0e4e5;border-radius:14px;background:#fff7f8;color:#536064;font-size:13px;line-height:1.55}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:first-child .text-custom-50{color:#536064!important}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success .cart-total-price{color:var(--taf-red);font-size:18px;font-weight:700}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:last-child{display:grid;gap:9px}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:last-child a{display:flex!important;align-items:center;justify-content:center;min-height:43px;margin:0!important;padding:10px 16px!important;border:1px solid #e8c9cd;border-radius:11px!important;background:#fff!important;color:var(--taf-red)!important;font-size:13px!important;font-weight:700!important;text-decoration:none;box-shadow:none!important}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:last-child a[href*="showcustomerbasket"]{border-color:var(--taf-red);background:var(--taf-red)!important;color:#fff!important}
    body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child > div:last-child a:hover{filter:brightness(.94)}
    body.taf-product-detail .taf-product-basket-modal .mainVariantHTMLDiv,body.taf-product-detail .taf-product-basket-modal .mainComplexDataHTMLDiv{display:block;width:100%;color:#465154}
    body.taf-product-detail .taf-product-basket-modal .basket-popup select,body.taf-product-detail .taf-product-basket-modal .basket-popup input{max-width:100%;border:1px solid #e9dadd;border-radius:10px;background:#fff;color:var(--taf-ink)}
    body.taf-product-detail .taf-product-basket-modal .basket-popup button{border-radius:10px}
    @media(max-width:640px){body.taf-product-detail .taf-product-basket-modal > div:first-child{padding:12px!important}body.taf-product-detail .taf-product-basket-modal > div:first-child > div.relative{max-height:calc(100vh - 24px);border-radius:18px!important}body.taf-product-detail .taf-product-basket-modal .basket-popup{padding:24px 18px!important}body.taf-product-detail .taf-product-basket-modal .basket-popup .text-xl{font-size:19px!important}body.taf-product-detail .taf-product-basket-modal .basket-popup-success > div:last-child{grid-template-columns:1fr;gap:14px}body.taf-product-detail .taf-product-basket-modal .taf-modal-close{top:12px;right:12px}}
    @media(max-width:900px){body.taf-product-detail .taf-product-columns{grid-template-columns:1fr;gap:28px}}
    @media(max-width:640px){body.taf-product-detail .taf-product-crumb{padding-top:12px!important;padding-bottom:12px!important}body.taf-product-detail .taf-product-crumb-card{padding:14px 16px!important}body.taf-product-detail .taf-product-crumb-card .text-2xl{text-align:left!important}body.taf-product-detail .taf-product-card{border-radius:18px!important;padding:16px!important}body.taf-product-detail .taf-product-gallery figure.with-zoom img{padding:16px}body.taf-product-detail .taf-product-gallery .detail-photo-view li{width:56px;height:70px}body.taf-product-detail .taf-product-title{font-size:26px!important}body.taf-product-detail .taf-product-buy{grid-template-columns:112px minmax(0,1fr)}body.taf-product-detail .taf-product-add{padding:10px!important;font-size:12px!important}body.taf-product-detail .taf-product-support{flex-wrap:wrap}body.taf-product-detail .taf-product-tabs .tab-anchor li a{font-size:11px!important;padding:8px 12px!important;min-height:38px}}
    @media(prefers-reduced-motion:reduce){body.taf-product-detail .taf-product-add,body.taf-product-detail .taf-product-gallery figure.with-zoom img{transition:none!important}}
  `;

  function icon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M10.5 7.5v6M7.5 10.5h6"/></svg>';
  }

  function init() {
    const main = document.querySelector('main');
    const figure = main && main.querySelector('figure.with-zoom');
    const addButton = main && main.querySelector('.addbasketbutton[id^="addbasketbutton"]');
    const tabs = main && main.querySelector('.tab-anchor[data-target="tab-detail-content"]');
    if (!main || !figure || !addButton || !tabs || document.body.classList.contains('taf-product-detail')) return;

    const gallery = figure.closest('.flex-1')?.parentElement;
    const columns = gallery?.parentElement;
    const info = gallery?.nextElementSibling;
    const card = columns?.parentElement;
    const hero = card?.parentElement;
    if (!gallery || !columns || !info || !card || !hero) return;

    const prices = info.querySelector('[id^="divprice"]')?.closest('ul');
    const buy = addButton.closest('[id^="addbasketbuttonquantity"]');
    const title = Array.from(info.querySelectorAll('div')).find(el =>
      el.classList.contains("font-['Jost']") && el.className.includes('border-b-') && el.textContent.trim().length > 10
    );
    const crumbCard = main.querySelector('nav ol')?.closest('.bg-white.rounded-xl');
    const tabsContainer = tabs.closest('.container');
    if (!buy || !title) return;

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = css;
      document.head.appendChild(style);
    }

    document.body.classList.add('taf-product-detail');
    gallery.classList.add('taf-product-gallery');
    figure.querySelector('img.with-zoom')?.classList.remove('with-zoom');
    columns.classList.add('taf-product-columns');
    info.classList.add('taf-product-info');
    card.classList.add('taf-product-card');
    hero.classList.add('taf-product-hero');
    if (crumbCard) {
      crumbCard.classList.add('taf-product-crumb-card');
      crumbCard.parentElement?.classList.add('taf-product-crumb');
    }
    if (tabsContainer) tabsContainer.classList.add('taf-product-tabs');

    title.classList.add('taf-product-title');
    title.setAttribute('role', 'heading');
    title.setAttribute('aria-level', '1');
    const productName = addButton.dataset.productName?.trim();
    const originalTitle = title.textContent.trim();
    if (productName && originalTitle.startsWith(productName)) {
      const description = originalTitle.slice(productName.length).replace(/^\s*[-–—]\s*/, '').trim();
      if (description) {
        title.textContent = productName;
        const subtitle = document.createElement('p');
        subtitle.className = 'taf-product-subtitle';
        subtitle.textContent = description;
        title.after(subtitle);
      }
    }
    const brand = typeof window.ps_brand === 'string' ? window.ps_brand.trim() : '';
    const eyebrow = document.createElement('div');
    eyebrow.className = 'taf-product-eyebrow';
    eyebrow.textContent = brand || 'TAF Ecza seçkisi';
    title.before(eyebrow);

    const rating = title.previousElementSibling?.previousElementSibling;
    if (rating?.querySelector('.stars')) rating.classList.add('taf-product-rating');
    const stock = Array.from(info.querySelectorAll('div')).find(el =>
      el.className.includes('inline-flex') && el.textContent.trim().length < 40 && /STOKTA|TÜKENDİ/i.test(el.textContent)
    );
    if (stock) stock.classList.add('taf-product-stock');
    if (prices) prices.classList.add('taf-product-prices');
    buy.classList.add('taf-product-buy');
    buy.parentElement?.classList.add('taf-product-buy-wrap');
    buy.querySelector('.addbasketbuttonquantity.quantity-input')?.classList.add('taf-product-quantity');
    addButton.classList.add('taf-product-add');
    info.querySelector('.detail-buttons')?.classList.add('taf-product-actions');
    info.querySelector('table')?.parentElement?.classList.add('taf-product-barcode');
    const campaign = info.querySelector('.mainCampaignHTMLDiv');
    if (campaign) {
      const updateCampaign = () => campaign.classList.toggle('taf-product-empty-campaign',
        !campaign.textContent.trim() && !campaign.querySelector('a, button')
      );
      updateCampaign();
      new MutationObserver(updateCampaign).observe(campaign, { childList: true, subtree: true, characterData: true });
    }

    const support = document.createElement('div');
    support.className = 'taf-product-support';
    support.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8a8 8 0 0 1 16 0v7a2 2 0 0 1-2 2h-2v-7h4M4 10h4v7H6a2 2 0 0 1-2-2v-5ZM12 20h3a3 3 0 0 0 3-3"/></svg><span>Ürün veya sipariş hakkında sorunuz mu var?</span><a href="tel:+902122202208">0212 220 22 08</a>';
    buy.insertAdjacentElement('afterend', support);

    const basketModal = document.querySelector('.basket-modal');
    const basketDialog = basketModal?.querySelector(':scope > div > div.relative');
    if (basketModal && basketDialog && !basketModal.classList.contains('taf-cart-modal')) {
      basketModal.classList.add('taf-product-basket-modal');
      basketDialog.setAttribute('role', 'dialog');
      basketDialog.setAttribute('aria-modal', 'true');
      basketDialog.setAttribute('aria-label', 'Sepete ekleme');
      const modalClose = document.createElement('button');
      modalClose.type = 'button';
      modalClose.className = 'taf-modal-close';
      modalClose.setAttribute('aria-label', 'Pencereyi kapat');
      modalClose.textContent = '×';
      modalClose.addEventListener('click', function () { basketModal.style.display = 'none'; });
      basketDialog.appendChild(modalClose);

      const success = basketDialog.querySelector('.basket-popup-success');
      if (success) {
        const preview = document.createElement('div');
        preview.className = 'taf-modal-preview';
        const previewImage = document.createElement('img');
        const previewName = document.createElement('span');
        previewName.textContent = productName || title.textContent.trim();
        previewImage.alt = previewName.textContent;
        preview.append(previewImage, previewName);
        success.querySelector('hr')?.insertAdjacentElement('afterend', preview);
        const updatePreview = () => {
          const currentImage = figure.querySelector('img');
          if (currentImage) previewImage.src = currentImage.dataset.usablesrc || currentImage.src;
        };
        updatePreview();
        addButton.addEventListener('click', updatePreview);
      }
    }

    const zoomButton = document.createElement('button');
    zoomButton.type = 'button';
    zoomButton.className = 'taf-zoom-button';
    zoomButton.setAttribute('aria-label', 'Ürün görselini büyüt');
    zoomButton.innerHTML = icon();
    figure.parentElement.appendChild(zoomButton);
    const lightbox = document.createElement('div');
    lightbox.className = 'taf-product-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Ürün görseli');
    const close = document.createElement('button');
    close.type = 'button';
    close.setAttribute('aria-label', 'Görseli kapat');
    close.textContent = '×';
    const enlarged = document.createElement('img');
    lightbox.append(close, enlarged);
    document.body.appendChild(lightbox);

    function hideLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      zoomButton.focus();
    }
    zoomButton.addEventListener('click', function () {
      const current = figure.querySelector('img');
      if (!current) return;
      enlarged.src = current.dataset.usablesrc || current.src;
      enlarged.alt = current.alt || 'Ürün görseli';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      close.focus();
    });
    close.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) hideLightbox();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !lightbox.hidden) hideLightbox();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
