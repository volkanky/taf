/* TAF Ecza basket modal skin. Load after the storefront scripts. */
(function () {
  'use strict';

  const STYLE_ID = 'taf-add-to-cart-modal-style';
  const CSS = `
    html body .basket-modal.taf-cart-modal{position:fixed!important;inset:0!important;z-index:10000!important;overflow-y:auto!important;font-family:'Jost','Avenir Next',sans-serif;color:#293234}
    html body .basket-modal.taf-cart-modal.hidden,html body .basket-modal.taf-cart-modal .basket-popup.hidden{display:none}
    html body .basket-modal.taf-cart-modal > div:first-child{display:flex!important;align-items:center!important;justify-content:center!important;min-height:100vh;min-height:100svh;padding:24px!important}
    html body .basket-modal.taf-cart-modal > div:first-child > .transition-opacity{position:fixed!important;inset:0!important;background:rgba(31,35,38,.68)!important;backdrop-filter:blur(5px)}
    html body .basket-modal.taf-cart-modal > div:first-child > span{display:none!important}
    html body .basket-modal.taf-cart-modal .taf-cart-dialog{position:relative!important;display:block!important;flex:none!important;width:min(100%,620px)!important;max-width:620px!important;max-height:calc(100svh - 48px);margin:0!important;overflow-y:auto!important;border:1px solid #f0dcdf;border-radius:23px!important;background:#fff!important;box-shadow:0 30px 80px rgba(24,24,29,.25)!important}
    html body .basket-modal.taf-cart-modal .taf-cart-dialog:before{content:'';position:absolute;z-index:2;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#cc1720 0%,#ed8c96 68%,#f8d7da 100%)}
    html body .basket-modal.taf-cart-modal .basket-popup{padding:30px!important;background:linear-gradient(145deg,#fffafa 0%,#fff 54%)!important;color:#293234}
    html body .basket-modal.taf-cart-modal .taf-cart-close{position:absolute!important;z-index:4;top:17px;right:17px;display:grid!important;place-items:center;width:36px;height:36px;padding:0!important;border:1px solid #eadfe1!important;border-radius:50%!important;background:#fff!important;color:#5d696c!important;font-size:25px;line-height:1;cursor:pointer;box-shadow:0 4px 14px rgba(32,27,30,.06)}
    html body .basket-modal.taf-cart-modal .taf-cart-close:hover{border-color:#d6a8ad!important;color:#c9151e!important}
    html body .basket-modal.taf-cart-modal .taf-cart-close:focus-visible,html body .basket-modal.taf-cart-modal .taf-cart-actions a:focus-visible{outline:3px solid rgba(207,22,30,.27);outline-offset:3px}
    html body .basket-modal.taf-cart-modal .basket-popup .text-xl{display:flex;align-items:center;gap:13px;min-height:42px;margin:0 42px 0 0;color:#293234!important;font-size:clamp(19px,2vw,23px)!important;font-weight:700!important;line-height:1.25}
    html body .basket-modal.taf-cart-modal .basket-popup-success .text-xl:before{content:'✓';display:grid;place-items:center;flex:none;width:42px;height:42px;border-radius:50%;background:#eaf6ec;color:#418b54;font-size:25px;font-weight:700}
    html body .basket-modal.taf-cart-modal .basket-popup hr{margin:22px 0!important;border:0!important;border-top:1px solid #f0e4e6!important;opacity:1!important}
    html body .basket-modal.taf-cart-modal .taf-cart-preview{display:flex;align-items:center;gap:15px;margin-bottom:21px;padding:10px 13px;border:1px solid #f1e5e6;border-radius:15px;background:#fff}
    html body .basket-modal.taf-cart-modal .taf-cart-preview[hidden]{display:none!important}
    html body .basket-modal.taf-cart-modal .taf-cart-preview img{display:block;width:62px;height:78px;flex:none;object-fit:contain;border-radius:9px;background:#fff9f9}
    html body .basket-modal.taf-cart-modal .taf-cart-preview span{color:#354043;font-size:14px;font-weight:650;line-height:1.4}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-layout{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(175px,205px)!important;gap:18px!important;align-items:end!important}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-totals{padding:18px 20px!important;border:1px solid #f0e2e4;border-radius:14px;background:#fff7f8;color:#536064;font-size:13px;line-height:1.55}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-totals > div{color:#536064!important}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-totals strong{font-weight:700;color:#303c3e}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-totals .cart-total-price{color:#c9151e!important;font-size:18px;font-weight:700;white-space:nowrap}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-actions{display:grid!important;gap:9px!important}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-actions a{display:flex!important;align-items:center;justify-content:center;min-height:45px;margin:0!important;padding:10px 14px!important;border:1px solid #e5c4c8!important;border-radius:11px!important;background:#fff!important;color:#bf1921!important;font-size:13px!important;font-weight:700!important;line-height:1.3;text-align:center;text-decoration:none!important;box-shadow:none!important;transition:background .18s,color .18s,transform .18s}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-actions a:hover{background:#fff2f3!important;transform:translateY(-1px)}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-actions a[href*="showcustomerbasket"]{border-color:#c9151e!important;background:#c9151e!important;color:#fff!important}
    html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-actions a[href*="showcustomerbasket"]:hover{background:#a90e17!important}
    html body .basket-modal.taf-cart-modal .mainVariantHTMLDiv,html body .basket-modal.taf-cart-modal .mainComplexDataHTMLDiv{display:block;width:100%;color:#465154}
    html body .basket-modal.taf-cart-modal .basket-popup select,html body .basket-modal.taf-cart-modal .basket-popup input{max-width:100%;border:1px solid #e9dadd;border-radius:10px;background:#fff;color:#293234}
    @media(max-width:640px){html body .basket-modal.taf-cart-modal > div:first-child{padding:12px!important}html body .basket-modal.taf-cart-modal .taf-cart-dialog{max-height:calc(100svh - 24px);border-radius:18px!important}html body .basket-modal.taf-cart-modal .basket-popup{padding:25px 18px 18px!important}html body .basket-modal.taf-cart-modal .basket-popup .text-xl{font-size:19px!important}html body .basket-modal.taf-cart-modal .basket-popup-success .taf-cart-layout{grid-template-columns:1fr!important;gap:14px!important}html body .basket-modal.taf-cart-modal .taf-cart-close{top:12px;right:12px}}
    @media(prefers-reduced-motion:reduce){html body .basket-modal.taf-cart-modal .taf-cart-actions a{transition:none!important}}
  `;

  let lastProduct = null;

  function productFrom(trigger) {
    const card = trigger.closest('.productBoxList');
    const name = trigger.dataset.productName?.trim()
      || card?.querySelector('.productNameAndPrice h3 a')?.textContent.trim()
      || document.querySelector('.taf-product-title')?.textContent.trim()
      || '';
    const image = card?.querySelector('.product-image img')
      || document.querySelector('main figure.with-zoom img');
    return { name, image: image?.dataset.usablesrc || image?.currentSrc || image?.src || '' };
  }

  function init() {
    const modal = document.querySelector('.basket-modal');
    const dialog = modal?.querySelector(':scope > div > div.relative');
    const success = dialog?.querySelector('.basket-popup-success');
    if (modal?.classList.contains('taf-cart-modal')) return true;
    if (!modal || !dialog || !success) return false;

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    modal.classList.add('taf-cart-modal');
    dialog.classList.add('taf-cart-dialog');
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-label', 'Sepete ekleme');

    let close = dialog.querySelector('.taf-cart-close, .taf-modal-close');
    if (!close) {
      close = document.createElement('button');
      close.type = 'button';
      close.textContent = '×';
      dialog.appendChild(close);
    }
    close.classList.add('taf-cart-close');
    close.setAttribute('aria-label', 'Pencereyi kapat');
    close.addEventListener('click', () => { modal.style.display = 'none'; });

    const layout = success.querySelector(':scope > div:last-child');
    layout?.classList.add('taf-cart-layout');
    layout?.firstElementChild?.classList.add('taf-cart-totals');
    layout?.lastElementChild?.classList.add('taf-cart-actions');

    let preview = success.querySelector('.taf-cart-preview, .taf-modal-preview');
    if (!preview) {
      preview = document.createElement('div');
      const image = document.createElement('img');
      const name = document.createElement('span');
      preview.append(image, name);
      success.querySelector('hr')?.insertAdjacentElement('afterend', preview);
    }
    preview.classList.add('taf-cart-preview');
    const previewImage = preview.querySelector('img');
    const previewName = preview.querySelector('span');

    function renderProduct() {
      const product = lastProduct || productFrom(document.querySelector('main .addbasketbutton') || document.body);
      const hasProduct = !!(product?.name && product?.image);
      preview.hidden = !hasProduct;
      if (!hasProduct) return;
      previewName.textContent = product.name;
      previewImage.alt = product.name;
      previewImage.src = product.image;
    }

    document.addEventListener('click', event => {
      const trigger = event.target.closest?.('.addbasketbutton');
      if (!trigger) return;
      lastProduct = productFrom(trigger);
      renderProduct();
    }, true);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && getComputedStyle(modal).display !== 'none') modal.style.display = 'none';
    });
    renderProduct();
    return true;
  }

  function boot() {
    if (init()) return;
    const observer = new MutationObserver(() => { if (init()) observer.disconnect(); });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
