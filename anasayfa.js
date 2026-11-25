/* TAF Ecza header redesign. Load after the page's existing scripts. */
(function () {
  'use strict';

  const LOGO = 'https://www.tafecza.com/custom/header_left_1_0.png?rand=1795627973';
  const PHONE = '02122202208';

  const icon = (name) => {
    const paths = {
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      user: '<circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c.5-3.5 2.8-5.3 6.5-5.3s6 1.8 6.5 5.3"/>',
      bag: '<path d="M4.5 8h15l-1 12h-13l-1-12Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
      phone: '<path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/>',
      menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
      close: '<path d="M5 5l14 14M19 5 5 19"/>',
      chevron: '<path d="m9 18 6-6-6-6"/>'
    };
    return `<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  };

  function init() {
    const header = document.querySelector('header.relative.z-10');
    if (!header || header.classList.contains('taf-header-ready')) return;

    const sourceNav = header.querySelector('.categoryItemList.mobileMenuParent');
    const sourceForm = header.querySelector('.searchBarParent form');
    if (!sourceNav || !sourceForm) return;

    const categories = Array.from(sourceNav.children).map((item) => {
      const link = item.querySelector(':scope > a');
      if (!link) return null;
      const children = Array.from(item.querySelectorAll(':scope > ul > li > a'))
        .map((child) => ({ label: child.textContent.trim(), href: child.getAttribute('href') }));
      return { label: link.textContent.trim(), href: link.getAttribute('href'), children };
    }).filter(Boolean);

    const safeHref = (href) => href && /^(\/|\?)/.test(href) ? href : '#';
    const makeLink = (label, href, className) => {
      const a = document.createElement('a');
      a.className = className;
      a.href = safeHref(href);
      a.textContent = label;
      return a;
    };

    if (!document.getElementById('taf-header-v2-style')) {
      const style = document.createElement('style');
      style.id = 'taf-header-v2-style';
      style.textContent = `
        .taf-header-ready{position:relative;z-index:40!important}
        .taf-header-ready > :not(.taf-header-v2){display:none!important}
        .taf-header-v2{--taf-red:#d91319;--taf-dark:#252a2a;--taf-muted:#697173;--taf-pink:#fff1f2;--taf-line:#e9e7e7;color:var(--taf-dark);background:#fff;font-family:Jost,Arial,sans-serif;box-shadow:0 5px 24px rgba(37,42,42,.055)}
        .taf-header-v2 *{box-sizing:border-box}
        .taf-header-v2 button,.taf-header-v2 input{font:inherit}
        .taf-header-v2 a{text-decoration:none}
        .taf-header-v2 .taf-container{width:min(100% - 40px,1360px);margin-inline:auto}
        .taf-header-v2 .taf-utility{background:var(--taf-pink);border-bottom:1px solid #f8e4e6;font-size:12px;letter-spacing:.025em}
        .taf-header-v2 .taf-utility-inner{min-height:34px;display:flex;align-items:center;justify-content:space-between;gap:18px}
        .taf-header-v2 .taf-utility-note{color:#8a5052;font-weight:500}
        .taf-header-v2 .taf-utility-links{display:flex;align-items:center;gap:24px;color:#634c4d}
        .taf-header-v2 .taf-utility-links a{color:inherit;display:inline-flex;align-items:center;gap:7px;white-space:nowrap}
        .taf-header-v2 .taf-utility-links svg{width:15px;height:15px;color:var(--taf-red)}
        .taf-header-v2 .taf-main{display:flex;align-items:center;gap:clamp(18px,3vw,48px);min-height:104px}
        .taf-header-v2 .taf-logo{display:block;flex:0 0 clamp(178px,17vw,225px)}
        .taf-header-v2 .taf-logo img{display:block;width:100%;height:auto;object-fit:contain}
        .taf-header-v2 .taf-search{flex:1;min-width:0;max-width:650px}
        .taf-header-v2 .taf-search form{position:relative;width:100%;margin:0}
        .taf-header-v2 .taf-search form > div:first-of-type{display:block!important;position:relative!important;width:100%!important;color:var(--taf-dark)!important}
        .taf-header-v2 .taf-search input[type=search]{display:block;width:100%!important;max-width:none!important;height:52px!important;padding:0 65px 0 22px!important;border:1px solid #dedede!important;border-radius:14px!important;background:#f8f8f8!important;color:var(--taf-dark)!important;font-size:14px!important;outline:none!important;box-shadow:none!important;transition:border-color .2s,background .2s,box-shadow .2s}
        .taf-header-v2 .taf-search input[type=search]::placeholder{color:#8b9293;opacity:1}
        .taf-header-v2 .taf-search input[type=search]:focus{background:#fff!important;border-color:#e7a4a8!important;box-shadow:0 0 0 4px rgba(217,19,25,.07)!important}
        .taf-header-v2 .taf-search button[type=submit]{position:absolute!important;top:5px!important;right:5px!important;margin:0!important;width:42px!important;height:42px!important;padding:0!important;border:0!important;border-radius:11px!important;display:grid!important;place-items:center!important;background:var(--taf-red)!important;color:#fff!important;cursor:pointer;transition:background .2s,transform .2s}
        .taf-header-v2 .taf-search button[type=submit]:hover{background:#b60d13!important;transform:translateY(-1px)}
        .taf-header-v2 .taf-search button[type=submit] svg{width:19px;height:19px}
        .taf-header-v2 .taf-search .header-autocomplete{position:absolute!important;top:100%;left:0;right:0;width:100%;z-index:80!important}
        .taf-header-v2 .taf-search .header-autocomplete.opened{opacity:1!important;visibility:visible!important;transform:none!important}
        .taf-header-v2 .taf-search .header-autocomplete > div{position:relative!important;left:auto!important;margin-top:8px!important;border:1px solid var(--taf-line)!important;border-radius:15px!important;box-shadow:0 18px 45px rgba(34,34,34,.13)!important;padding:16px!important}
        .taf-header-v2 .taf-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;margin-left:auto}
        .taf-header-v2 .taf-action{height:50px;display:flex;align-items:center;gap:11px;white-space:nowrap;color:var(--taf-dark);border:1px solid var(--taf-line);border-radius:13px;padding:0 14px;background:#fff;transition:border-color .2s,background .2s,transform .2s}
        .taf-header-v2 .taf-action:hover{border-color:#edc2c4;background:#fff8f8;transform:translateY(-1px)}
        .taf-header-v2 .taf-action-icon{position:relative;display:grid;place-items:center;color:var(--taf-red)}
        .taf-header-v2 .taf-action-text{display:flex;flex-direction:column;line-height:1.15;gap:3px}
        .taf-header-v2 .taf-action-text small{font-size:11px;color:var(--taf-muted);font-weight:400}
        .taf-header-v2 .taf-action-text strong{font-size:13px;font-weight:600}
        .taf-header-v2 .taf-cart-count{position:absolute;top:-11px;right:-11px;min-width:18px;height:18px;padding:0 4px;display:grid;place-items:center;border-radius:50px;background:var(--taf-red);color:#fff;font-size:10px;font-style:normal;line-height:1}
        .taf-header-v2 .taf-nav-shell{border-top:1px solid var(--taf-line);border-bottom:1px solid var(--taf-line);background:#fff}
        .taf-header-v2 .taf-nav-row{display:flex;align-items:center;min-height:49px;gap:20px;position:relative}
        .taf-header-v2 .taf-category-button{height:36px;border:0;border-radius:9px;padding:0 13px;background:var(--taf-red);color:#fff;display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap}
        .taf-header-v2 .taf-category-button svg{width:17px;height:17px}
        .taf-header-v2 .taf-nav-links{display:flex;align-items:center;gap:clamp(15px,2vw,30px);overflow-x:auto;scrollbar-width:none;white-space:nowrap;min-width:0}
        .taf-header-v2 .taf-nav-links::-webkit-scrollbar{display:none}
        .taf-header-v2 .taf-nav-links a{display:block;padding:15px 0;color:#3a4141;font-size:13px;font-weight:500;transition:color .2s}
        .taf-header-v2 .taf-nav-links a:hover{color:var(--taf-red)}
        .taf-header-v2 .taf-panel{position:absolute;z-index:70;top:calc(100% + 1px);left:0;width:min(820px,100%);background:#fff;border:1px solid var(--taf-line);border-radius:0 0 18px 18px;box-shadow:0 22px 45px rgba(36,42,42,.15);padding:20px}
        .taf-header-v2 .taf-panel[hidden],.taf-header-v2 .taf-scrim[hidden]{display:none!important}
        .taf-header-v2 .taf-panel-heading{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--taf-red);font-weight:700;margin:0 0 13px}
        .taf-header-v2 .taf-panel-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px 22px}
        .taf-header-v2 .taf-panel-grid a{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 7px;border-bottom:1px solid #f1eeee;color:#303738;font-size:13px}
        .taf-header-v2 .taf-panel-grid a:hover{color:var(--taf-red);background:#fff7f7}
        .taf-header-v2 .taf-panel-grid svg{width:15px;height:15px;flex:none;color:#aaafb0}
        .taf-header-v2 .taf-mobile-extra{display:none}
        .taf-header-v2 .taf-mobile-menu,.taf-header-v2 .taf-panel-close{display:none}
        .taf-header-v2 .taf-scrim{display:none}
        .taf-header-v2 :focus-visible{outline:2px solid var(--taf-red)!important;outline-offset:3px}
        @media(max-width:1080px){.taf-header-v2 .taf-main{gap:22px}.taf-header-v2 .taf-logo{flex-basis:175px}.taf-header-v2 .taf-action{padding:0 11px}.taf-header-v2 .taf-action-text small{display:none}.taf-header-v2 .taf-action-text strong{font-size:12px}}
        @media(max-width:767px){
          .taf-header-v2 .taf-container{width:min(100% - 28px,1360px)}
          .taf-header-v2 .taf-utility-inner{min-height:30px;justify-content:center}
          .taf-header-v2 .taf-utility-note{display:none}
          .taf-header-v2 .taf-utility-links{display:flex;font-size:11px}
          .taf-header-v2 .taf-utility-links a:first-child{display:none}
          .taf-header-v2 .taf-main{min-height:0;display:grid;grid-template-columns:38px 1fr auto;gap:0 10px;padding-top:14px;padding-bottom:13px}
          .taf-header-v2 .taf-mobile-menu{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--taf-line);border-radius:10px;background:#fff;color:var(--taf-dark);cursor:pointer}
          .taf-header-v2 .taf-logo{width:145px;max-width:100%;justify-self:start}
          .taf-header-v2 .taf-actions{gap:6px}
          .taf-header-v2 .taf-action{height:38px;width:38px;padding:0;justify-content:center;border:0}
          .taf-header-v2 .taf-action-text{display:none}
          .taf-header-v2 .taf-action-icon svg{width:22px;height:22px}
          .taf-header-v2 .taf-search{grid-column:1/-1;grid-row:2;margin-top:13px;max-width:none;width:100%}
          .taf-header-v2 .taf-search input[type=search]{height:46px!important;border-radius:11px!important;padding-left:16px!important;font-size:13px!important}
          .taf-header-v2 .taf-search button[type=submit]{width:36px!important;height:36px!important;border-radius:8px!important}
          .taf-header-v2 .taf-nav-shell{display:none}
          .taf-header-v2 .taf-scrim:not([hidden]){display:block;position:fixed;inset:0;z-index:89;background:rgba(27,32,33,.42)}
          .taf-header-v2 .taf-panel{position:fixed;top:0;left:0;bottom:0;width:min(86vw,360px);max-width:100%;overflow-y:auto;z-index:90;border:0;border-radius:0 18px 18px 0;padding:22px 18px 30px;box-shadow:12px 0 40px rgba(25,25,25,.18)}
          .taf-header-v2 .taf-panel-top{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
          .taf-header-v2 .taf-panel-heading{margin:0}
          .taf-header-v2 .taf-panel-close{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:8px;background:var(--taf-pink);color:var(--taf-red);cursor:pointer}
          .taf-header-v2 .taf-panel-grid{display:block}
          .taf-header-v2 .taf-panel-grid a{font-size:14px;padding:13px 7px}
          .taf-header-v2 .taf-mobile-extra{display:grid;gap:10px;margin-top:23px;padding:16px 5px 0;border-top:1px solid var(--taf-line)}
          .taf-header-v2 .taf-mobile-extra a{font-size:13px;color:#4f5859}
        }
      `;
      document.head.appendChild(style);
    }

    const shell = document.createElement('div');
    shell.className = 'taf-header-v2';
    shell.innerHTML = `
      <div class="taf-utility"><div class="taf-container taf-utility-inner">
        <span class="taf-utility-note">Cildinize iyi gelen bakım, TAF Ecza'da.</span>
        <div class="taf-utility-links"><a href="/?p=showorder&mode=normal&nologin">Sipariş Takibi</a><a href="tel:+902122202208">${icon('phone')} Sipariş Destek: 0212 220 22 08</a></div>
      </div></div>
      <div class="taf-container taf-main">
        <button class="taf-mobile-menu" type="button" aria-label="Kategorileri aç" aria-controls="taf-category-panel" aria-expanded="false">${icon('menu')}</button>
        <a class="taf-logo" href="/" aria-label="TAF Ecza ana sayfa"><img src="${LOGO}" alt="TAF Ecza" width="225" height="63"></a>
        <div class="taf-search"></div>
        <div class="taf-actions">
          <a class="taf-action taf-account" href="/?p=login" aria-label="Üye girişi"><span class="taf-action-icon">${icon('user')}</span><span class="taf-action-text"><small>Hoş geldiniz</small><strong>Giriş / Üye Ol</strong></span></a>
          <a class="taf-action taf-cart" href="/sepetimigoster.html" aria-label="Sepetim"><span class="taf-action-icon">${icon('bag')}<em class="taf-cart-count basket-counter"><span class="cart-counter">0</span></em></span><span class="taf-action-text"><small>Alışverişiniz</small><strong>Sepetim</strong></span></a>
        </div>
      </div>
      <div class="taf-nav-shell"><nav class="taf-container taf-nav-row" aria-label="Ana kategoriler">
        <button class="taf-category-button" type="button" aria-controls="taf-category-panel" aria-expanded="false">${icon('menu')} Tüm Kategoriler</button>
        <div class="taf-nav-links"></div>
      </nav></div>
      <div class="taf-scrim" hidden></div>
      <div class="taf-container" style="position:relative"><div class="taf-panel" id="taf-category-panel" hidden>
        <div class="taf-panel-top"><p class="taf-panel-heading">Kategorileri keşfedin</p><button class="taf-panel-close" type="button" aria-label="Kategorileri kapat">${icon('close')}</button></div>
        <nav class="taf-panel-grid" aria-label="Tüm kategoriler"></nav>
        <div class="taf-mobile-extra"><a href="/?p=showorder&mode=normal&nologin">Sipariş Takibi</a><a href="tel:+902122202208">Sipariş Destek: 0212 220 22 08</a></div>
      </div></div>`;

    const search = shell.querySelector('.taf-search');
    search.appendChild(sourceForm);
    const searchInput = sourceForm.querySelector('input[type="search"]');
    if (searchInput) {
      searchInput.placeholder = 'Ürün, marka veya kategori ara';
      searchInput.setAttribute('aria-label', 'Ürün, marka veya kategori ara');
    }
    const searchButton = sourceForm.querySelector('button[type="submit"]');
    if (searchButton) {
      searchButton.innerHTML = icon('search');
      searchButton.setAttribute('aria-label', 'Ara');
    }

    const navLinks = shell.querySelector('.taf-nav-links');
    const panelGrid = shell.querySelector('.taf-panel-grid');
    categories.forEach(({ label, href }) => {
      navLinks.appendChild(makeLink(label, href, 'taf-nav-link'));
      const panelLink = makeLink(label, href, 'taf-panel-link');
      panelLink.insertAdjacentHTML('beforeend', icon('chevron'));
      panelGrid.appendChild(panelLink);
    });

    const originalAccount = header.querySelector('.loginAndCart a');
    const account = shell.querySelector('.taf-account');
    if (originalAccount && originalAccount.getAttribute('href')) account.href = originalAccount.getAttribute('href');
    if (typeof window.ps_logged_cust_id !== 'undefined' && String(window.ps_logged_cust_id) !== '0') {
      account.setAttribute('aria-label', 'Hesabım');
      account.querySelector('strong').textContent = 'Hesabım';
    }

    const originalCount = header.querySelector('.loginAndCart .cart-counter');
    const newCount = shell.querySelector('.taf-cart-count .cart-counter');
    if (originalCount) {
      newCount.textContent = originalCount.textContent.trim() || '0';
      new MutationObserver(() => { newCount.textContent = originalCount.textContent.trim() || '0'; })
        .observe(originalCount, { childList: true, characterData: true, subtree: true });
    }

    header.appendChild(shell);
    header.classList.add('taf-header-ready');

    const panel = shell.querySelector('.taf-panel');
    const scrim = shell.querySelector('.taf-scrim');
    const toggles = shell.querySelectorAll('[aria-controls="taf-category-panel"]');
    const setOpen = (open) => {
      panel.hidden = !open;
      scrim.hidden = !open;
      toggles.forEach((button) => button.setAttribute('aria-expanded', String(open)));
      document.body.style.overflow = open && matchMedia('(max-width: 767px)').matches ? 'hidden' : '';
    };
    toggles.forEach((button) => button.addEventListener('click', () => setOpen(panel.hidden)));
    shell.querySelector('.taf-panel-close').addEventListener('click', () => setOpen(false));
    scrim.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !panel.hidden) setOpen(false); });
    document.addEventListener('click', (event) => {
      if (!panel.hidden && !shell.contains(event.target)) setOpen(false);
    });
    window.addEventListener('resize', () => {
      if (!panel.hidden) setOpen(false);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
