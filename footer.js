/* TAF Ecza footer redesign. Load after the existing page scripts. */
(function () {
  'use strict';

  const logoUrl = 'https://www.tafecza.com/custom/header_left_1_0.png?rand=1795627973';
  const safeHref = (href) => href && /^(\/|\?)/.test(href) ? href : '#';

  function icon(name) {
    const paths = {
      box: '<path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z"/><path d="m3 7 9 4 9-4M12 11v10"/>',
      track: '<path d="M3 5h12v12H3zM15 9h3l3 3v5h-6V9Z"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
      phone: '<path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/>',
      arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
      pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>'
    };
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  }

  function makeLink(label, href) {
    const link = document.createElement('a');
    link.href = safeHref(href);
    link.textContent = label;
    return link;
  }

  function init() {
    const footer = document.querySelector('footer');
    if (!footer || footer.classList.contains('taf-footer-ready')) return;

    const oldCredit = footer.lastElementChild;
    const oldPayment = footer.querySelector('img[src*="image-bank2"]');
    const oldServiceStrip = footer.previousElementSibling;
    const hasServiceStrip = oldServiceStrip && oldServiceStrip.querySelector('img[src*="ucretsizKargo"]');

    if (!document.getElementById('taf-footer-v2-style')) {
      const style = document.createElement('style');
      style.id = 'taf-footer-v2-style';
      style.textContent = `
        footer.taf-footer-ready{background:#fbf9f9;color:#292f30;font-family:Jost,Arial,sans-serif;border-top:1px solid #f1e5e6}
        footer.taf-footer-ready *{box-sizing:border-box}
        footer.taf-footer-ready .taf-footer-original{display:none!important}
        footer.taf-footer-ready a{text-decoration:none;color:inherit}
        footer.taf-footer-ready a:hover{color:#d91319}
        footer.taf-footer-ready .taf-footer-container{width:min(100% - 40px,1360px);margin-inline:auto}
        footer.taf-footer-ready .taf-footer-benefits{background:#fff1f2;border-bottom:1px solid #f7e2e4}
        footer.taf-footer-ready .taf-benefits-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));min-height:100px}
        footer.taf-footer-ready .taf-benefit{display:flex;align-items:center;justify-content:center;gap:14px;padding:20px 22px;min-width:0}
        footer.taf-footer-ready .taf-benefit + .taf-benefit{border-left:1px solid #f2dfe1}
        footer.taf-footer-ready .taf-benefit-icon{flex:none;display:grid;place-items:center;width:44px;height:44px;border:1px solid #f3c9cc;border-radius:13px;background:#fff8f8;color:#d91319}
        footer.taf-footer-ready .taf-benefit-icon svg{width:22px;height:22px}
        footer.taf-footer-ready .taf-benefit-copy{display:flex;flex-direction:column;gap:3px;min-width:0}
        footer.taf-footer-ready .taf-benefit-copy strong{font-size:14px;line-height:1.2;font-weight:600}
        footer.taf-footer-ready .taf-benefit-copy span{font-size:12px;line-height:1.35;color:#777072}
        footer.taf-footer-ready .taf-footer-main{display:grid;grid-template-columns:1.35fr .8fr 1fr 1.15fr;gap:clamp(26px,4vw,68px);padding-top:58px;padding-bottom:54px}
        footer.taf-footer-ready .taf-footer-brand img{display:block;width:min(100%,220px);height:auto;margin-bottom:22px}
        footer.taf-footer-ready .taf-footer-brand p{max-width:275px;margin:0;color:#697173;font-size:14px;line-height:1.65}
        footer.taf-footer-ready .taf-brand-rule{display:block;width:36px;height:3px;margin:21px 0 0;border-radius:3px;background:#d91319}
        footer.taf-footer-ready .taf-footer-col h2{margin:4px 0 22px;font-size:14px;line-height:1.3;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:#292f30}
        footer.taf-footer-ready .taf-footer-col ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}
        footer.taf-footer-ready .taf-footer-col li{font-size:14px;color:#5f696a;line-height:1.4}
        footer.taf-footer-ready .taf-footer-col a{transition:color .2s}
        footer.taf-footer-ready .taf-contact-list{display:grid;gap:15px}
        footer.taf-footer-ready .taf-contact-row{display:flex;align-items:flex-start;gap:10px;color:#5f696a;font-size:14px;line-height:1.5}
        footer.taf-footer-ready .taf-contact-row svg{flex:none;width:17px;height:17px;margin-top:2px;color:#d91319}
        footer.taf-footer-ready .taf-phone-link{display:inline-flex;align-items:center;gap:10px;padding:11px 15px;border:1px solid #ecc3c5;border-radius:11px;background:#fff;color:#bc1419!important;font-size:14px;font-weight:600;transition:background .2s,border-color .2s}
        footer.taf-footer-ready .taf-phone-link:hover{background:#fff1f2;border-color:#d91319}
        footer.taf-footer-ready .taf-phone-link svg{width:18px;height:18px}
        footer.taf-footer-ready .taf-footer-bottom{border-top:1px solid #e9e3e3;background:#fff}
        footer.taf-footer-ready .taf-bottom-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:74px}
        footer.taf-footer-ready .taf-copyright{font-size:12px;color:#788081;line-height:1.5}
        footer.taf-footer-ready .taf-payment img{display:block;max-width:min(100%,500px);max-height:42px;width:auto;height:auto;object-fit:contain}
        footer.taf-footer-ready .taf-platform-credit{padding:0 0 18px!important;width:100%!important;display:block!important;text-align:center!important;font-family:Jost,Arial,sans-serif!important;font-size:11px!important;line-height:1.5!important;color:#92999a!important}
        footer.taf-footer-ready .taf-platform-credit a,footer.taf-footer-ready .taf-platform-credit span{color:inherit!important;font-size:inherit!important;font-weight:inherit!important;text-decoration:none!important}
        footer.taf-footer-ready :focus-visible{outline:2px solid #d91319;outline-offset:3px}
        @media(max-width:1050px){footer.taf-footer-ready .taf-footer-main{grid-template-columns:1.15fr 1fr 1fr;gap:36px}footer.taf-footer-ready .taf-footer-brand{grid-column:1/-1}footer.taf-footer-ready .taf-footer-brand img{width:190px;margin-bottom:12px}footer.taf-footer-ready .taf-footer-brand p{max-width:520px}}
        @media(max-width:700px){
          footer.taf-footer-ready .taf-footer-container{width:min(100% - 32px,1360px)}
          footer.taf-footer-ready .taf-benefits-grid{grid-template-columns:1fr;min-height:0}
          footer.taf-footer-ready .taf-benefit{justify-content:flex-start;padding:14px 0}
          footer.taf-footer-ready .taf-benefit + .taf-benefit{border-left:0;border-top:1px solid #f2dfe1}
          footer.taf-footer-ready .taf-benefit-icon{width:38px;height:38px;border-radius:11px}
          footer.taf-footer-ready .taf-benefit-copy strong{font-size:13px}
          footer.taf-footer-ready .taf-benefit-copy span{font-size:11px}
          footer.taf-footer-ready .taf-footer-main{grid-template-columns:repeat(2,minmax(0,1fr));gap:34px 20px;padding-top:39px;padding-bottom:40px}
          footer.taf-footer-ready .taf-footer-brand{grid-column:1/-1}
          footer.taf-footer-ready .taf-footer-brand img{width:185px}
          footer.taf-footer-ready .taf-footer-col h2{font-size:12px;margin-bottom:16px}
          footer.taf-footer-ready .taf-footer-col li{font-size:13px}
          footer.taf-footer-ready .taf-footer-contact{grid-column:1/-1}
          footer.taf-footer-ready .taf-bottom-inner{flex-direction:column;align-items:flex-start;justify-content:center;gap:14px;padding-top:20px;padding-bottom:17px}
          footer.taf-footer-ready .taf-payment img{max-height:34px}
          footer.taf-footer-ready .taf-platform-credit{text-align:left!important;padding-bottom:18px!important}
        }
      `;
      document.head.appendChild(style);
    }

    const root = document.createElement('div');
    root.className = 'taf-footer-v2';
    root.innerHTML = `
      <div class="taf-footer-benefits"><div class="taf-footer-container taf-benefits-grid">
        <a class="taf-benefit" href="/?p=showorder&mode=normal&nologin"><span class="taf-benefit-icon">${icon('track')}</span><span class="taf-benefit-copy"><strong>Sipariş Takibi</strong><span>Siparişinizin durumunu kolayca görüntüleyin</span></span></a>
        <a class="taf-benefit" href="/cilt-bakimi"><span class="taf-benefit-icon">${icon('box')}</span><span class="taf-benefit-copy"><strong>Bakım Kategorileri</strong><span>Aradığınız ürünleri kategorilerde keşfedin</span></span></a>
        <a class="taf-benefit" href="tel:+902122202208"><span class="taf-benefit-icon">${icon('phone')}</span><span class="taf-benefit-copy"><strong>Sipariş Destek Hattı</strong><span>0212 220 22 08</span></span></a>
      </div></div>
      <div class="taf-footer-container taf-footer-main">
        <div class="taf-footer-brand"><a href="/" aria-label="TAF Ecza ana sayfa"><img src="${logoUrl}" alt="TAF Ecza" width="220" height="62" loading="lazy"></a><p>Cilt, saç, güneş ve kişisel bakım ürünlerini TAF Ecza'da keşfedin.</p><span class="taf-brand-rule" aria-hidden="true"></span></div>
        <nav class="taf-footer-col" aria-label="Alışveriş bağlantıları"><h2>Alışveriş</h2><ul class="taf-shopping-links"></ul></nav>
        <nav class="taf-footer-col" aria-label="Ürün kategorileri"><h2>Kategoriler</h2><ul class="taf-category-links"></ul></nav>
        <div class="taf-footer-col taf-footer-contact"><h2>İletişim</h2><div class="taf-contact-list">
          <a class="taf-phone-link" href="tel:+902122202208">${icon('phone')} 0212 220 22 08 ${icon('arrow')}</a>
          <a class="taf-contact-row" href="mailto:destek@tafecza.com">${icon('mail')} <span>destek@tafecza.com</span></a>
          <div class="taf-contact-row">${icon('pin')} <span>Darülaceze Caddesi No:15/C, Şişli, İstanbul</span></div>
          <a class="taf-contact-row" href="/?p=contact">İletişim formu ${icon('arrow')}</a>
        </div></div>
      </div>
      <div class="taf-footer-bottom"><div class="taf-footer-container taf-bottom-inner"><div class="taf-copyright"></div><div class="taf-payment"></div></div><div class="taf-footer-container taf-credit-slot"></div></div>`;

    const shopping = [
      ['Giriş / Üye Ol', '/?p=login'],
      ['Yeni Üyelik', '/?p=newuser'],
      ['Sipariş Takibi', '/?p=showorder&mode=normal&nologin'],
      ['Sepetim', '/sepetimigoster.html'],
      ['Şifremi Unuttum', '/?p=forgotpassword']
    ];
    const shoppingList = root.querySelector('.taf-shopping-links');
    shopping.forEach(([label, href]) => {
      const li = document.createElement('li');
      li.appendChild(makeLink(label, href));
      shoppingList.appendChild(li);
    });

    const sourceCategories = Array.from(document.querySelectorAll('.categoryItemList.mobileMenuParent > li > a'));
    const preferred = ['/cilt-bakimi', '/gunes-koruyucular', '/sac-bakimi', '/vitamin-ve-takviye-edici-gidalar', '/vucut-bakimi'];
    const categories = preferred.map((href) => sourceCategories.find((link) => link.getAttribute('href') === href)).filter(Boolean);
    const categoryList = root.querySelector('.taf-category-links');
    categories.forEach((link) => {
      const li = document.createElement('li');
      li.appendChild(makeLink(link.textContent.trim(), link.getAttribute('href')));
      categoryList.appendChild(li);
    });
    if (!categories.length) {
      [['Cilt Bakımı','/cilt-bakimi'],['Güneş Koruyucular','/gunes-koruyucular'],['Saç Bakımı','/sac-bakimi'],['Vitamin ve Mineral','/vitamin-ve-takviye-edici-gidalar']].forEach(([label,href]) => {
        const li = document.createElement('li');
        li.appendChild(makeLink(label, href));
        categoryList.appendChild(li);
      });
    }

    root.querySelector('.taf-copyright').textContent = `© ${new Date().getFullYear()} TAF Ecza. Tüm hakları saklıdır.`;
    if (oldPayment) root.querySelector('.taf-payment').appendChild(oldPayment);
    if (oldCredit && oldCredit.matches('div') && oldCredit.querySelector('a[href*="projesoft.com.tr"]')) {
      oldCredit.classList.add('taf-platform-credit');
      oldCredit.removeAttribute('style');
      root.querySelector('.taf-credit-slot').appendChild(oldCredit);
    }

    Array.from(footer.children).forEach((child) => child.classList.add('taf-footer-original'));
    footer.appendChild(root);
    footer.classList.add('taf-footer-ready');
    if (hasServiceStrip) oldServiceStrip.style.display = 'none';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
