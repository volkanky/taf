/* TAF Ecza contact forms index and individual contact form pages. */
(function () {
  'use strict';
  const CSS = `
    body.taf-contact-page{--taf-red:#ce1720;--taf-ink:#293234;--taf-muted:#687376;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-contact-page main{padding:24px 0 62px;background:#faf8f8}
    body.taf-contact-page main>.container{width:min(100% - 40px,1160px)!important;max-width:1160px!important;margin:auto;padding:0!important}
    body.taf-contact-page main>.container:first-child{margin-bottom:20px}
    body.taf-contact-page .taf-contact-crumb{padding:21px 25px!important;border:1px solid #f0e3e5!important;border-radius:17px!important;background:linear-gradient(110deg,#fff7f8,#fff)!important;box-shadow:none!important}
    body.taf-contact-page .taf-contact-crumb .breadcrumb_title{margin:0 0 5px;color:var(--taf-ink)!important;font-size:clamp(25px,2.5vw,35px)!important;font-weight:700;letter-spacing:-.035em;text-align:left!important}
    body.taf-contact-page .taf-contact-crumb nav ol{justify-content:flex-start!important;flex-wrap:wrap}
    body.taf-contact-page .taf-contact-crumb nav a,body.taf-contact-page .taf-contact-crumb nav li{color:#6b7779!important;font-size:12px;text-decoration:none}
    body.taf-contact-page .taf-contact-content{padding:32px!important;border:1px solid #eee3e5!important;border-radius:22px!important;background:#fff!important;box-shadow:0 18px 50px rgba(58,30,35,.05)!important}
    body.taf-contact-page .taf-contact-intro{display:flex;align-items:end;justify-content:space-between;gap:18px;margin-bottom:24px;padding-bottom:23px;border-bottom:1px solid #f0e5e6}
    body.taf-contact-page .taf-contact-intro span{display:block;margin-bottom:8px;color:var(--taf-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
    body.taf-contact-page .taf-contact-intro h1{margin:0;color:var(--taf-ink);font-size:clamp(27px,3vw,38px);font-weight:700;letter-spacing:-.04em;line-height:1.15}
    body.taf-contact-page .taf-contact-intro p{margin:9px 0 0;color:var(--taf-muted);font-size:14px;line-height:1.5}
    body.taf-contact-page .taf-contact-intro a{display:inline-flex;align-items:center;gap:7px;min-height:40px;padding:9px 14px;border:1px solid #ecd1d4;border-radius:10px;background:#fff7f8;color:var(--taf-red);font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap}
    body.taf-contact-page .taf-contact-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important;margin:0!important}
    body.taf-contact-page .taf-contact-item{display:flex!important;min-width:0;min-height:145px;margin:0!important;padding:21px!important;border:1px solid #efe3e5;border-radius:16px;background:#fff;box-shadow:0 8px 20px rgba(59,33,37,.035);cursor:pointer;transition:transform .2s,border-color .2s,box-shadow .2s}
    body.taf-contact-page .taf-contact-item:hover{transform:translateY(-2px);border-color:#e5b9be;box-shadow:0 16px 30px rgba(70,32,38,.08)}
    body.taf-contact-page .taf-contact-item:focus-visible{outline:3px solid rgba(206,23,32,.19);outline-offset:2px}
    body.taf-contact-page .taf-contact-item>.flex-1{display:flex;flex-direction:column;min-width:0;margin:0!important;padding:0!important}
    body.taf-contact-page .taf-contact-icon{display:grid;place-items:center;width:36px;height:36px;margin-bottom:14px;border-radius:10px;background:#fff1f2;color:var(--taf-red)}
    body.taf-contact-page .taf-contact-icon svg{width:19px;height:19px}
    body.taf-contact-page .taf-contact-item .text-2xl{color:#354043!important;font-size:16px!important;font-weight:700!important;line-height:1.3}
    body.taf-contact-page .taf-contact-item a{display:inline-flex;align-items:center;gap:7px;margin-top:auto;padding-top:14px;color:var(--taf-red)!important;font-size:12px;font-weight:700;text-decoration:none}
    body.taf-contact-page .taf-contact-item a:after{content:'→';font-size:17px;line-height:1}
    body.taf-contact-page .taf-contact-item a:hover{text-decoration:underline}
    body.taf-contact-page .taf-contact-form>div.taf-contact-form-heading{margin:0 0 24px}
    body.taf-contact-page .taf-contact-form-heading span{display:block;margin-bottom:8px;color:var(--taf-red);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
    body.taf-contact-page .taf-contact-form-heading h1{margin:0;color:var(--taf-ink);font-size:31px;font-weight:700;letter-spacing:-.035em}
    body.taf-contact-page .taf-contact-form-heading p{margin:8px 0 0;color:var(--taf-muted);font-size:14px}
    body.taf-contact-page .taf-contact-form-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px 16px;max-width:760px}
    body.taf-contact-page .taf-contact-form-fields>.taf-contact-field{min-width:0;margin:0!important;padding:0!important}
    body.taf-contact-page .taf-contact-form-fields>.taf-contact-wide{grid-column:1/-1}
    body.taf-contact-page .taf-contact-field label,body.taf-contact-page .taf-contact-field>span{display:block;width:auto;margin:0 0 8px;padding:0;color:#394345!important;font-size:13px;font-weight:650}
    body.taf-contact-page .taf-contact-field input,body.taf-contact-page .taf-contact-field textarea{display:block;width:100%!important;max-width:none!important;margin:0!important;padding:12px 14px!important;border:1px solid #dedfdf!important;border-radius:10px!important;background:#fafafa!important;color:var(--taf-ink)!important;font-size:14px!important;box-shadow:none!important}
    body.taf-contact-page .taf-contact-field input{height:48px}
    body.taf-contact-page .taf-contact-field textarea{min-height:100px;resize:vertical}
    body.taf-contact-page .taf-contact-field input:focus,body.taf-contact-page .taf-contact-field textarea:focus{border-color:#dd8d93!important;outline:3px solid rgba(206,23,32,.1)!important;background:#fff!important}
    body.taf-contact-page .taf-contact-form .taf-contact-legacy-extras{display:none!important}
    body.taf-contact-page .taf-contact-form .p_captcha{display:grid;grid-template-columns:auto minmax(90px,160px);gap:10px 14px;align-items:center;max-width:430px;margin:22px 0;padding:16px;border:1px solid #eee1e3;border-radius:12px;background:#fffafa}
    body.taf-contact-page .taf-contact-form .toosmallinfo{grid-column:1/-1;color:#667073;font-size:12px;line-height:1.4}
    body.taf-contact-page .taf-contact-form .captcha_image img{float:none!important;display:block;max-width:120px;height:auto}
    body.taf-contact-page .taf-contact-form input.captchafield[type=text]{display:block;width:100%!important;min-width:90px!important;height:44px;margin:0!important;padding:0 12px;border:1px solid #dfdddd!important;border-radius:9px;background:#fff;color:var(--taf-ink);font-size:17px;font-weight:700;letter-spacing:.25em;text-align:center}
    body.taf-contact-page .taf-contact-form a.modal-button{display:inline-flex;align-items:center;justify-content:center;min-width:180px;min-height:47px;margin:0!important;padding:11px 22px!important;border:0;border-radius:10px!important;background:var(--taf-red)!important;color:#fff!important;font-size:14px!important;font-weight:700!important;text-decoration:none;box-shadow:0 10px 23px rgba(206,23,32,.16)}
    body.taf-contact-page .taf-contact-form a.modal-button:hover{background:#a90f17!important}
    body.taf-contact-page .taf-contact-help{max-width:760px;margin-top:24px;padding:19px 21px;border:1px solid #f0e1e3;border-radius:13px;background:#fff8f8;color:#576467;font-size:13px;line-height:1.5}
    body.taf-contact-page .taf-contact-help strong{display:block;margin-bottom:5px;color:#354043;font-size:14px}
    body.taf-contact-page .taf-contact-help a{color:var(--taf-red);font-weight:700;text-decoration:none}
    @media(max-width:700px){body.taf-contact-page main{padding:15px 0 45px}body.taf-contact-page main>.container{width:min(100% - 24px,1160px)!important}body.taf-contact-page .taf-contact-crumb{padding:17px!important}body.taf-contact-page .taf-contact-content{padding:21px!important;border-radius:17px!important}body.taf-contact-page .taf-contact-intro{align-items:start;flex-direction:column}body.taf-contact-page .taf-contact-grid{grid-template-columns:1fr!important}body.taf-contact-page .taf-contact-item{min-height:130px}body.taf-contact-page .taf-contact-form-fields{grid-template-columns:1fr}body.taf-contact-page .taf-contact-form-fields>.taf-contact-wide{grid-column:auto}}
    @media(prefers-reduced-motion:reduce){body.taf-contact-page .taf-contact-item{transition:none!important}}
  `;
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>';

  function init() {
    const body = document.body;
    const main = document.querySelector('main');
    const crumbTitle = main?.querySelector('.breadcrumb_title');
    const content = main ? main.querySelectorAll(':scope > .container > .bg-white')[1] : null;
    if (!main || !crumbTitle || !content || !/contact/.test(location.search) || body.classList.contains('taf-contact-page')) return;
    const style = document.createElement('style');
    style.id = 'taf-contact-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    crumbTitle.closest('.bg-white')?.classList.add('taf-contact-crumb');
    content.classList.add('taf-contact-content');
    const form = content.querySelector('form#contactform');
    if (form) {
      form.classList.add('taf-contact-form');
      const heading = document.createElement('div');
      heading.className = 'taf-contact-form-heading';
      heading.innerHTML = '<span>TAF Ecza destek</span><h1>Size nasıl yardımcı olabiliriz?</h1><p>Bilgilerinizi ve mesajınızı yazın; ilgili ekibimiz size dönüş yapsın.</p>';
      form.prepend(heading);
      const fieldControls = Array.from(form.querySelectorAll('input:not([type=hidden]):not(.captchafield),textarea,select'));
      if (fieldControls.length) {
        const grid = document.createElement('div');
        grid.className = 'taf-contact-form-fields';
        heading.after(grid);
        const seen = new Set();
        fieldControls.forEach((control, index) => {
          const wrapper = control.closest('.block.mt-4');
          if (!wrapper || seen.has(wrapper)) return;
          seen.add(wrapper);
          wrapper.classList.add('taf-contact-field');
          if (control.tagName === 'TEXTAREA') wrapper.classList.add('taf-contact-wide');
          if (!control.id) control.id = `taf-contact-field-${index + 1}`;
          const oldLabel = wrapper.querySelector(':scope > span, :scope > label');
          if (oldLabel) {
            const label = document.createElement('label');
            label.htmlFor = control.id;
            label.textContent = oldLabel.textContent.trim();
            oldLabel.replaceWith(label);
          }
          grid.append(wrapper);
        });
        const legacy = Array.from(form.querySelectorAll('.block.mt-4.mr-4')).find(node => node.textContent.includes("{{ getParam('siteinfo_address') }}"));
        if (legacy) {
          let group = legacy;
          while (group.parentElement !== form && group.parentElement) group = group.parentElement;
          if (group !== form && !group.querySelector('input,textarea,select,.p_captcha')) group.classList.add('taf-contact-legacy-extras');
          else form.querySelectorAll('.block.mt-4.mr-4').forEach(node => { if (node.textContent.includes('{{ getParam(')) node.classList.add('taf-contact-legacy-extras'); });
        }
      }
      const captcha = form.querySelector('input.captchafield[type=text]');
      if (captcha) { captcha.setAttribute('aria-label', 'Güvenlik kodu'); captcha.setAttribute('maxlength', '3'); captcha.setAttribute('autocomplete', 'off'); captcha.removeAttribute('style'); }
      const help = document.createElement('div');
      help.className = 'taf-contact-help';
      help.innerHTML = '<strong>Doğrudan görüşmek ister misiniz?</strong>Sipariş ve ürün desteği için <a href="tel:+902122202208">0212 220 22 08</a> numarasını arayabilirsiniz.';
      form.append(help);
    } else {
      const grid = content.querySelector('.grid.sm\\:grid-cols-2');
      if (!grid) return;
      grid.classList.add('taf-contact-grid');
      const intro = document.createElement('div');
      intro.className = 'taf-contact-intro';
      intro.innerHTML = '<div><span>TAF Ecza · Size yardımcı olalım</span><h1>İletişim formları</h1><p>İhtiyacınıza uygun formu seçin, talebinizi doğru ekibe iletelim.</p></div><a href="tel:+902122202208">0212 220 22 08</a>';
      content.insertBefore(intro, grid);
      grid.querySelectorAll(':scope > .col-span-1').forEach(card => {
        const link = card.querySelector('a[href]');
        const inner = card.querySelector('.flex-1');
        if (!link || !inner) return;
        card.classList.add('taf-contact-item');
        const glyph = document.createElement('span');
        glyph.className = 'taf-contact-icon';
        glyph.innerHTML = icon;
        inner.prepend(glyph);
        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.addEventListener('click', event => { if (!event.target.closest('a')) location.href = link.href; });
        card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); link.click(); } });
      });
    }
    body.classList.add('taf-contact-page');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
