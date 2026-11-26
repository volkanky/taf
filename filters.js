/* TAF Ecza category filters. Keeps ProjeSoft's filter and AJAX handlers intact. */
(function () {
  'use strict';

  const CSS = `
    body.taf-filters-ready{--taf-red:#cf161e;--taf-ink:#273033;--taf-muted:#6d777a;--taf-line:#eee3e4;font-family:'Jost','Avenir Next',sans-serif}
    body.taf-filters-ready .filtreWrap{min-width:0}
    body.taf-filters-ready .taf-filter-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 2px 14px}
    body.taf-filters-ready .taf-filter-top h2{margin:0;color:var(--taf-ink);font-size:20px;font-weight:700;letter-spacing:-.025em}
    body.taf-filters-ready .taf-filter-clear{border:0;background:transparent;color:var(--taf-red);font:600 12px 'Jost','Avenir Next',sans-serif;cursor:pointer}
    body.taf-filters-ready .taf-filter-clear:disabled{opacity:.45;cursor:default}
    body.taf-filters-ready .taf-filter-close{display:none;width:34px;height:34px;border:1px solid var(--taf-line);border-radius:50%;background:#fff;color:var(--taf-ink);font-size:24px;line-height:1;cursor:pointer}
    body.taf-filters-ready .taf-category-panel,body.taf-filters-ready .taf-filter-panel{background:#fff!important;border:1px solid var(--taf-line)!important;border-radius:17px!important;box-shadow:0 12px 35px rgba(57,31,34,.045)!important;padding:18px!important;margin-bottom:16px!important}
    body.taf-filters-ready .filtreWrap > div.flex{margin-bottom:0!important}
    body.taf-filters-ready .taf-category-panel h3,body.taf-filters-ready .taf-filter-panel .taf-filter-title{color:var(--taf-ink)!important;font-size:13px!important;font-weight:700!important;letter-spacing:.08em;text-transform:uppercase;margin:0 0 10px!important;line-height:1.3}
    body.taf-filters-ready .taf-category-panel h3:before,body.taf-filters-ready .taf-filter-panel .taf-filter-title:before{content:'';display:inline-block;width:5px;height:14px;margin-right:9px;vertical-align:-2px;border-radius:3px;background:var(--taf-red)}
    body.taf-filters-ready .taf-category-panel .categoryItemList li{border-color:#f1eaeb!important}
    body.taf-filters-ready .taf-category-panel .categoryItemList a{display:block!important;padding:8px 10px!important;border-radius:8px;color:#586467!important;font-size:13px!important;line-height:1.35;text-decoration:none;transition:color .2s,background .2s}
    body.taf-filters-ready .taf-category-panel .categoryItemList a:hover,body.taf-filters-ready .taf-category-panel .categoryItemList a.taf-current-category{background:#fff0f1;color:var(--taf-red)!important;font-weight:700}
    body.taf-filters-ready .taf-filter-panel ul{list-style:none!important;margin:0!important;padding:0!important}
    body.taf-filters-ready .taf-filter-panel li.my-2{margin:0!important}
    body.taf-filters-ready .taf-filter-panel a.filteroptionclick,body.taf-filters-ready .taf-filter-panel a.pricefilteroptionclick{display:flex!important;align-items:center;justify-content:flex-start!important;gap:10px;width:100%;min-height:36px;padding:7px 4px!important;color:#586467!important;font-size:12px!important;font-weight:500!important;line-height:1.35;text-decoration:none!important;text-transform:none;transition:color .2s}
    body.taf-filters-ready .taf-filter-panel a.filteroptionclick:hover,body.taf-filters-ready .taf-filter-panel a.pricefilteroptionclick:hover{color:var(--taf-red)!important}
    body.taf-filters-ready .taf-filter-panel a.filteroptionclick:before,body.taf-filters-ready .taf-filter-panel a.pricefilteroptionclick:before{content:'';display:grid;place-items:center;flex:none;width:17px;height:17px;border:1px solid #cfd3d4;border-radius:5px;background:#fff;color:#fff;font-size:12px;line-height:1;transition:all .2s}
    body.taf-filters-ready .taf-filter-panel a.filteroptionclick.clickedfilter,body.taf-filters-ready .taf-filter-panel a.pricefilteroptionclick.clickedfilter{color:var(--taf-red)!important;font-weight:700!important}
    body.taf-filters-ready .taf-filter-panel a.filteroptionclick.clickedfilter:before,body.taf-filters-ready .taf-filter-panel a.pricefilteroptionclick.clickedfilter:before{content:'✓';background:var(--taf-red);border-color:var(--taf-red)}
    body.taf-filters-ready .taf-filter-panel a.show-more{color:var(--taf-red)!important;font-size:12px;font-weight:700;text-decoration:none!important;padding:10px 3px 2px!important}
    body.taf-filters-ready .taf-filter-panel #pricefilterhtml{display:block}
    body.taf-filters-ready .taf-filter-panel #pricefilterhtml li{list-style:none;margin:0!important}
    body.taf-filters-ready .filtreleBtn a{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px!important;border:1px solid #e8d7d9!important;border-radius:11px;background:#fff8f9!important;color:var(--taf-red);font-weight:700;font-size:13px;cursor:pointer}
    body.taf-filters-ready .filtreleBtn a:before{content:'☷';font-size:17px;line-height:1}
    body.taf-filters-ready .taf-filter-backdrop{display:none}
    @media(max-width:1024px){body.taf-filters-ready.taf-filters-open{overflow:hidden}body.taf-filters-ready .filtreleBtn{display:flex!important}body.taf-filters-ready .filtreWrap{position:fixed!important;top:0!important;left:-100%!important;width:min(88vw,370px)!important;height:100vh!important;max-height:100vh;overflow-y:auto!important;background:#faf8f8!important;padding:18px!important;z-index:1001!important;visibility:hidden!important;opacity:0!important;box-shadow:12px 0 40px rgba(35,25,28,.16)!important;transition:left .25s,opacity .25s,visibility .25s}body.taf-filters-ready .filtreWrap.active{left:0!important;visibility:visible!important;opacity:1!important}body.taf-filters-ready .taf-filter-close{display:grid;place-items:center}body.taf-filters-ready .taf-filter-top h2{margin-right:auto}body.taf-filters-ready.taf-filters-open .taf-filter-backdrop{display:block;position:fixed;inset:0;z-index:1000;background:rgba(28,29,31,.42)}}
    @media(min-width:1025px){body.taf-filters-ready .filtreWrap{width:25%!important}}
  `;

  function init() {
    const parent = document.querySelector('main .productListParent');
    const aside = parent?.querySelector('.filtreWrap');
    const list = parent?.querySelector('#mainProductListContainer');
    if (!parent || !aside || !list || document.body.classList.contains('taf-filters-ready')) return;

    const style = document.createElement('style');
    style.id = 'taf-filters-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    document.body.classList.add('taf-filters-ready');
    aside.setAttribute('aria-label', 'Ürün filtreleri');

    const categoryPanel = aside.querySelector('.categoryItemList')?.parentElement;
    categoryPanel?.classList.add('taf-category-panel');
    aside.querySelectorAll('ul.show-more-list').forEach(group => {
      group.parentElement?.classList.add('taf-filter-panel');
      group.querySelector('li')?.classList.add('taf-filter-title');
    });
    const current = location.pathname.replace(/\/$/, '');
    aside.querySelectorAll('.categoryItemList a[href]').forEach(link => {
      if (new URL(link.href, location.href).pathname.replace(/\/$/, '') === current) {
        link.classList.add('taf-current-category');
        link.setAttribute('aria-current', 'page');
      }
    });

    const top = document.createElement('div');
    top.className = 'taf-filter-top';
    const heading = document.createElement('h2');
    heading.textContent = 'Filtreler';
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'taf-filter-clear';
    clear.textContent = 'Temizle';
    clear.disabled = true;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'taf-filter-close';
    close.setAttribute('aria-label', 'Filtreleri kapat');
    close.textContent = '×';
    top.append(heading, clear, close);
    aside.prepend(top);

    const backdrop = document.createElement('div');
    backdrop.className = 'taf-filter-backdrop';
    document.body.appendChild(backdrop);
    const mobileToggle = parent.querySelector('.filtreleBtn a');
    mobileToggle?.setAttribute('role', 'button');
    mobileToggle?.setAttribute('tabindex', '0');

    function update() {
      const selected = aside.querySelectorAll('.filteroptionclick.clickedfilter,.pricefilteroptionclick.clickedfilter').length;
      clear.disabled = selected === 0;
      const label = selected ? `Temizle (${selected})` : 'Temizle';
      if (clear.textContent !== label) clear.textContent = label;
      const open = aside.classList.contains('active');
      document.body.classList.toggle('taf-filters-open', open);
      mobileToggle?.setAttribute('aria-expanded', String(open));
    }
    function closeFilters() {
      aside.classList.remove('active');
      update();
      mobileToggle?.focus();
    }
    clear.addEventListener('click', function () {
      if (clear.disabled) return;
      aside.querySelectorAll('.filteroptionclick.clickedfilter,.pricefilteroptionclick.clickedfilter').forEach(option => option.classList.remove('clickedfilter'));
      if (typeof window.runFiltering === 'function') window.runFiltering(null);
      update();
    });
    close.addEventListener('click', closeFilters);
    backdrop.addEventListener('click', closeFilters);
    mobileToggle?.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        mobileToggle.click();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && aside.classList.contains('active')) closeFilters();
    });
    new MutationObserver(update).observe(aside, { attributes: true, attributeFilter: ['class'], childList: true, subtree: true });
    update();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
