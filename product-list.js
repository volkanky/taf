/* TAF Ecza category product grid. Preserves ProjeSoft's sort, cart and AJAX flow. */
(function () {
  'use strict';

  const CSS = `
    body.taf-product-list{--taf-red:#cf161e;--taf-ink:#273033;--taf-muted:#687275;--taf-line:#eee3e4;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-product-list main{padding-bottom:32px}
    body.taf-product-list .taf-list-heading{padding-top:24px!important;padding-bottom:20px!important;margin-top:0!important}
    body.taf-product-list .taf-list-heading-card{background:linear-gradient(110deg,#fff7f8,#fff)!important;border:1px solid #f0e3e5!important;border-radius:18px!important;box-shadow:none!important;padding:22px 26px!important}
    body.taf-product-list .taf-list-heading-card .text-2xl{font-size:clamp(24px,2.4vw,34px)!important;color:var(--taf-ink)!important;font-weight:700!important;letter-spacing:-.035em;line-height:1.15}
    body.taf-product-list .taf-list-heading-card nav ol{justify-content:flex-start!important;flex-wrap:wrap;gap:3px 0}
    body.taf-product-list .taf-list-heading-card nav a,body.taf-product-list .taf-list-heading-card nav li{color:#697477!important;font-size:12px;text-decoration:none}
    body.taf-product-list .taf-list-heading-card nav a:hover{color:var(--taf-red)!important}
    body.taf-product-list .listingGridStyleBtns{display:flex!important;align-items:center;gap:6px;margin-right:12px}
    body.taf-product-list .listingGridStyleBtns a{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:44px;padding:0 12px!important;border:1px solid #e9dcde;border-radius:11px;background:#fff;color:#566164;font-size:12px;font-weight:700;text-decoration:none;box-shadow:none!important;white-space:nowrap}
    body.taf-product-list .listingGridStyleBtns a:hover,body.taf-product-list .listingGridStyleBtns a[aria-pressed="true"]{border-color:#e7bdc1;background:#fff0f1;color:var(--taf-red)}
    body.taf-product-list .listingGridStyleBtns a:focus-visible{outline:3px solid rgba(207,22,30,.2);outline-offset:2px}
    body.taf-product-list .listingGridStyleBtns svg{display:block;width:17px;height:17px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    body.taf-product-list #listorderselect{min-width:205px;height:44px!important;margin:0!important;padding:0 36px 0 14px!important;border:1px solid #e9dcde!important;border-radius:11px!important;background-color:#fff!important;color:#394447!important;font-size:13px!important;font-weight:600;box-shadow:none!important;cursor:pointer}
    body.taf-product-list #listorderselect:focus{border-color:var(--taf-red)!important;outline:3px solid rgba(207,22,30,.11)!important}
    body.taf-product-list .productListParent{padding-top:0!important;align-items:flex-start}
    body.taf-product-list #mainProductListContainer{min-width:0}
    body.taf-product-list #mainProductListContainer .taf-product-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));align-items:stretch!important;gap:16px;overflow:visible!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:0!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .productBoxList{display:flex!important;flex-direction:column!important;align-items:stretch!important;width:100%!important;min-width:0;margin:0!important;padding:0!important;border:1px solid var(--taf-line)!important;border-radius:17px!important;background:#fff!important;overflow:hidden;box-shadow:0 10px 28px rgba(55,27,31,.045);transition:transform .22s,box-shadow .22s,border-color .22s}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .productBoxList:hover{transform:translateY(-3px);border-color:#ebc9cd!important;box-shadow:0 18px 38px rgba(65,25,31,.1)}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .productBoxList > .product-image{display:flex!important;flex:1 1 auto!important;flex-direction:column!important;align-items:stretch!important;min-width:0;position:relative}
    body.taf-product-list #mainProductListContainer .taf-product-grid .taf-product-image-link{display:block;width:100%;flex:none;overflow:hidden;cursor:pointer}
    body.taf-product-list #mainProductListContainer .taf-product-grid .taf-product-image-link:focus-visible{outline:3px solid rgba(207,22,30,.28);outline-offset:-4px}
    body.taf-product-list #mainProductListContainer .taf-product-grid .taf-product-image-link > img.block{display:block!important;width:100%!important;height:auto!important;aspect-ratio:10/11;max-height:none!important;object-fit:contain!important;object-position:center!important;padding:16px!important;background:radial-gradient(circle at center,#fff 40%,#fff9f9 100%);transition:transform .3s}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productBoxList:hover .taf-product-image-link > img.block{transform:scale(1.035)}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice{display:flex!important;flex:1 1 auto;flex-direction:column!important;align-items:stretch!important;gap:6px!important;grid-template-columns:none!important;text-align:left!important;background:#fff!important;border-radius:0!important;padding:10px 16px 6px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice h3{min-height:44px;margin:0;color:var(--taf-ink)!important;font-size:14px!important;line-height:1.42!important;font-weight:650!important;letter-spacing:-.01em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice h3 a{color:inherit!important;text-decoration:none}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice h3 a:hover{color:var(--taf-red)!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .stokDurumu{font-size:11px!important;color:#4b9360!important;font-weight:600;line-height:1.3}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice ul{display:flex;flex-direction:column;gap:2px;margin-top:auto;padding-top:8px}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice ul li{font-family:inherit!important;text-align:left!important;line-height:1.25}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice ul li.line-through{color:#9ba3a5!important;font-size:12px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice ul li:last-child{color:var(--taf-red)!important;font-size:21px!important;font-weight:700!important;letter-spacing:-.025em}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .productBoxList > div:last-child{margin-top:auto;padding:8px 16px 16px}
    body.taf-product-list #mainProductListContainer .taf-product-grid [id^="addbasketbuttonquantity"]{display:flex!important;flex-wrap:nowrap!important;align-items:stretch!important;gap:8px!important;width:100%;margin:0!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid [id^="addbasketbuttonquantity"] > div:last-child{flex:1;min-width:0}
    body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbuttonquantity.quantity-input{width:93px;min-width:93px;min-height:41px;flex-wrap:nowrap!important;justify-content:space-between;border:1px solid #e8dddf!important;border-radius:9px!important;background:#fff}
    body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbuttonquantity.quantity-input button{min-width:26px;padding:0!important;background:#fff!important;color:#344043;font-size:18px}
    body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbuttonquantity.quantity-input input{width:24px!important;min-width:0!important;margin:0!important;padding:0!important;border:0!important;background:#fff!important;border-radius:0!important;color:#263033!important;font-size:13px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbutton,body.taf-product-list #mainProductListContainer .taf-product-grid .noaddbasketbutton{display:flex!important;width:100%;min-height:41px;padding:8px 10px!important;gap:5px!important;border-radius:9px!important;background:var(--taf-red)!important;color:#fff!important;font-size:11px!important;font-weight:700!important;letter-spacing:.015em;text-align:center;box-shadow:none!important;text-decoration:none;transition:background .2s}
    body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbutton:hover{background:#a91118!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .noaddbasketbutton{background:#5e696c!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .taf-action-icon{display:block;width:17px;height:17px;min-width:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    body.taf-product-list #mainProductListContainer .taf-product-grid .outOfStock{z-index:2;top:12px!important;left:12px!important;right:auto!important;bottom:auto!important;width:auto!important;margin:0!important;background:#fff!important;color:#656f71!important;border:1px solid #e7e5e5;border-radius:999px;padding:4px 9px;font-size:10px;font-weight:700}
    body.taf-product-list #mainProductListContainer .taf-product-grid .outOfStock span{position:static!important;display:block!important;width:auto!important;line-height:1.25!important;background:transparent!important;color:#656f71!important;font-size:10px!important;text-transform:none!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid .taf-out-of-stock .stokDurumu,body.taf-product-list #mainProductListContainer .taf-product-grid .taf-out-of-stock .productNameAndPrice ul{display:none!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .loader,body.taf-product-list #mainProductListContainer .taf-product-grid > .containerEmptyListBody{grid-column:1/-1}
    body.taf-product-list #mainProductListContainer .taf-product-grid > .hidden{display:none!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view{grid-template-columns:minmax(0,1fr)!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList{flex-direction:row!important;align-items:center!important;min-height:196px}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList > .product-image{flex-direction:row!important;align-items:center!important;flex:1 1 auto!important;min-width:0}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .taf-product-image-link{width:190px;flex:0 0 190px}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .taf-product-image-link > img.block{height:190px!important;aspect-ratio:auto;padding:18px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .productNameAndPrice{min-width:0;padding:16px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .productNameAndPrice h3{min-height:0}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList > div:last-child{width:190px;flex:0 0 190px;margin:0!important;padding:16px!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view [id^="addbasketbuttonquantity"]{flex-direction:column!important}
    body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .addbasketbuttonquantity.quantity-input{width:100%;min-width:0}
    @media(max-width:1150px){body.taf-product-list #mainProductListContainer .taf-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:1024px){body.taf-product-list #mainProductListContainer{width:100%!important}body.taf-product-list .productListParent > div{margin-left:0!important;margin-right:0!important}}
    @media(max-width:640px){body.taf-product-list .taf-list-heading{padding-top:12px!important}body.taf-product-list .taf-list-heading-card{padding:17px!important}body.taf-product-list .taf-list-heading-card .text-2xl{text-align:left!important}body.taf-product-list .taf-list-heading-card > div{gap:12px;align-items:flex-start;flex-wrap:wrap}body.taf-product-list .listingGridStyleBtns{margin-right:8px}body.taf-product-list .listingGridStyleBtns a{min-height:40px;padding:0 9px!important;font-size:11px}body.taf-product-list #listorderselect{width:auto;min-width:0;max-width:100%;height:40px!important}body.taf-product-list #mainProductListContainer .taf-product-grid{gap:10px}body.taf-product-list #mainProductListContainer .taf-product-grid .taf-product-image-link > img.block{padding:10px!important}body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice{padding:8px 10px 4px!important}body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice h3{font-size:12px!important;min-height:50px}body.taf-product-list #mainProductListContainer .taf-product-grid .productNameAndPrice ul li:last-child{font-size:17px!important}body.taf-product-list #mainProductListContainer .taf-product-grid > .productBoxList > div:last-child{padding:7px 10px 10px}body.taf-product-list #mainProductListContainer .taf-product-grid [id^="addbasketbuttonquantity"]{flex-direction:column!important}body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbuttonquantity.quantity-input{width:100%;min-width:0}body.taf-product-list #mainProductListContainer .taf-product-grid .addbasketbutton,body.taf-product-list #mainProductListContainer .taf-product-grid .noaddbasketbutton{font-size:10px!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList{flex-direction:column!important;align-items:stretch!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList > .product-image{flex-direction:row!important;align-items:center!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .taf-product-image-link{width:118px;flex:0 0 118px}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .taf-product-image-link > img.block{height:145px!important;aspect-ratio:auto;padding:8px!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .productNameAndPrice{padding:10px!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view > .productBoxList > div:last-child{width:100%;flex:auto;padding:0 10px 10px!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view [id^="addbasketbuttonquantity"]{flex-direction:row!important}body.taf-product-list #mainProductListContainer .taf-product-grid.taf-list-view .addbasketbuttonquantity.quantity-input{width:85px;min-width:85px}}
    @media(max-width:360px){body.taf-product-list #mainProductListContainer .taf-product-grid{grid-template-columns:1fr}}
    @media(prefers-reduced-motion:reduce){body.taf-product-list #mainProductListContainer .taf-product-grid .productBoxList,body.taf-product-list #mainProductListContainer .taf-product-grid .taf-product-image-link > img.block{transition:none!important}}
  `;

  function icon(kind) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add('taf-action-icon');
    svg.innerHTML = {
      grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      list: '<path d="M9 6h12M9 12h12M9 18h12"/><path d="M3 6h2M3 12h2M3 18h2"/>',
      cart: '<circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l2.4 11.4a2 2 0 0 0 2 1.6h10a2 2 0 0 0 2-1.6L22 7H5"/>',
      bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>'
    }[kind];
    return svg;
  }

  function init() {
    const parent = document.querySelector('main .productListParent');
    const list = parent?.querySelector('#mainProductListContainer');
    const grid = list?.querySelector('.containerBody');
    if (!parent || !list || !grid || !grid.querySelector('.productBoxList') || document.body.classList.contains('taf-product-list')) return;

    const style = document.createElement('style');
    style.id = 'taf-product-list-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    document.body.classList.add('taf-product-list');
    grid.classList.add('taf-product-grid');
    const heading = parent.previousElementSibling;
    heading?.classList.add('taf-list-heading');
    heading?.querySelector('.bg-white.rounded-xl')?.classList.add('taf-list-heading-card');
    document.getElementById('listorderselect')?.setAttribute('aria-label', 'Ürünleri sırala');

    const gridButton = heading?.querySelector('.kutuluListeleBtn');
    const listButton = heading?.querySelector('.tabloListeleBtn');
    function setView(listView) {
      grid.classList.toggle('taf-list-view', listView);
      gridButton?.setAttribute('aria-pressed', String(!listView));
      listButton?.setAttribute('aria-pressed', String(listView));
    }
    [[gridButton, 'grid', 'Kart görünümü', false], [listButton, 'list', 'Liste görünümü', true]].forEach(([button, glyph, label, listView]) => {
      if (!button) return;
      button.replaceChildren(icon(glyph), document.createTextNode(listView ? 'Liste' : 'Kart'));
      button.setAttribute('role', 'button');
      button.setAttribute('aria-label', label);
      button.addEventListener('click', function (event) {
        event.preventDefault();
        setView(listView);
      });
      button.addEventListener('keydown', function (event) {
        if (event.key === ' ') {
          event.preventDefault();
          button.click();
        }
      });
    });
    setView(false);

    function enhanceCards() {
      grid.querySelectorAll('.productBoxList:not(.taf-product-card-ready)').forEach(card => {
        card.classList.add('taf-product-card-ready');
        const detailLink = card.querySelector('.productNameAndPrice h3 a[href]');
        const name = detailLink?.textContent.trim() || 'Ürün';
        const image = card.querySelector('.product-image > img');
        if (image) {
          if (!image.alt) image.alt = name;
          if (detailLink && !/^javascript:/i.test(detailLink.href)) {
            const imageLink = document.createElement('a');
            imageLink.className = 'taf-product-image-link';
            imageLink.href = detailLink.href;
            imageLink.setAttribute('aria-label', `${name} ürün detayına git`);
            image.replaceWith(imageLink);
            imageLink.appendChild(image);
          }
        }
        if (card.querySelector('.outOfStock')) {
          card.classList.add('taf-out-of-stock');
          const label = card.querySelector('.noaddbasketbutton span');
          if (label) label.textContent = 'Stok bildirimi al';
        }
        card.querySelectorAll('.addbasketbutton i.icofont-cart,.noaddbasketbutton i.icofont-cart').forEach(oldIcon => {
          oldIcon.replaceWith(icon(card.classList.contains('taf-out-of-stock') ? 'bell' : 'cart'));
        });
      });
    }
    enhanceCards();
    new MutationObserver(enhanceCards).observe(grid, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
