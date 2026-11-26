/* TAF Ecza guest order tracking page. Keeps the platform form endpoint. */
(function () {
  'use strict';
  const CSS = `
    body.taf-order-page{--taf-red:#cf1720;--taf-ink:#293234;--taf-muted:#687376;background:#faf8f8;color:var(--taf-ink);font-family:'Jost','Avenir Next',sans-serif}
    body.taf-order-page main{min-height:calc(100vh - 270px)!important;padding:34px 0 60px;background:#faf8f8!important}
    body.taf-order-page main>.container{width:min(100% - 40px,1120px)!important;max-width:1120px!important;margin:auto;padding:0!important}
    body.taf-order-page .taf-order-shell{width:100%;max-width:none!important;margin:0!important}
    body.taf-order-page .taf-order-layout{display:grid;grid-template-columns:.96fr 1.04fr;min-height:610px;overflow:hidden;border:1px solid #f0e4e6;border-radius:26px;background:#fff;box-shadow:0 25px 70px rgba(66,35,39,.075)}
    body.taf-order-page .taf-order-art{position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:53px 47px;background:radial-gradient(circle at 75% 75%,#f5cbd0,transparent 34%),linear-gradient(145deg,#fff8f8,#f9e3e5)}
    body.taf-order-page .taf-order-art:after{content:'';position:absolute;right:-120px;bottom:-155px;width:470px;height:470px;border:1px solid rgba(205,85,94,.19);border-radius:50%;box-shadow:0 0 0 82px rgba(255,255,255,.12),0 0 0 164px rgba(255,255,255,.08)}
    body.taf-order-page .taf-order-art-copy,body.taf-order-page .taf-order-art svg{position:relative;z-index:1}
    body.taf-order-page .taf-order-art .eyebrow{display:block;margin-bottom:18px;color:#a44249;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
    body.taf-order-page .taf-order-art h2{max-width:390px;margin:0;color:#2b3334;font-size:clamp(36px,4vw,50px);font-weight:700;letter-spacing:-.04em;line-height:1.09}
    body.taf-order-page .taf-order-art h2 em{color:var(--taf-red);font-style:normal}
    body.taf-order-page .taf-order-art p{max-width:330px;margin:17px 0 0;color:#6d686b;font-size:15px;line-height:1.55}
    body.taf-order-page .taf-order-art svg{align-self:center;width:min(100%,360px);height:auto;margin-top:16px}
    body.taf-order-page .taf-order-card{display:flex;flex-direction:column;justify-content:center;min-width:0;margin:0!important;padding:48px clamp(28px,5vw,65px)!important;border:0!important;border-radius:0!important;box-shadow:none!important;background:#fff!important}
    body.taf-order-page .taf-order-card>div:first-child{margin:0 0 27px;padding:0!important;border:0!important}
    body.taf-order-page .taf-order-card h1{margin:0;color:var(--taf-ink)!important;font-size:33px!important;font-weight:700!important;letter-spacing:-.035em;line-height:1.2}
    body.taf-order-page .taf-order-card p{margin-top:11px!important;color:var(--taf-muted)!important;font-size:14px!important;line-height:1.55}
    body.taf-order-page .taf-order-card form{padding:0!important;margin:0!important}
    body.taf-order-page .taf-order-card form>div{margin-bottom:18px}
    body.taf-order-page .taf-order-card label{display:block;margin:0 0 8px;color:#394345!important;font-size:13px;font-weight:650}
    body.taf-order-page .taf-order-card input[type=email],body.taf-order-page .taf-order-card input[name=ordercode]{display:block;width:100%;height:50px!important;padding:0 15px!important;border:1px solid #dedfdf!important;border-radius:11px!important;background:#fafafa!important;color:var(--taf-ink)!important;font-size:14px!important;box-shadow:none!important}
    body.taf-order-page .taf-order-card input:focus{border-color:#df8e94!important;outline:3px solid rgba(207,23,32,.1)!important;background:#fff!important}
    body.taf-order-page .taf-order-card .help-block.with-errors{color:#b4151b;font-size:12px}
    body.taf-order-page .taf-order-card .p_captcha{display:grid;grid-template-columns:auto minmax(90px,1fr);gap:10px 14px;align-items:center;padding:16px;border:1px solid #eee1e3;border-radius:12px;background:#fffafa}
    body.taf-order-page .taf-order-card .toosmallinfo{grid-column:1/-1;color:#667073;font-size:12px;line-height:1.4}
    body.taf-order-page .taf-order-card .captcha_image img{float:none!important;display:block;max-width:120px;height:auto}
    body.taf-order-page .taf-order-card input.captchafield[type=text]{display:block;width:100%!important;min-width:90px!important;height:44px;margin:0!important;padding:0 12px;border:1px solid #dfdddd!important;border-radius:9px;background:#fff;font-size:17px;font-weight:700;letter-spacing:.25em;text-align:center}
    body.taf-order-page .taf-order-card button[name=customerordertracking]{display:flex;width:100%;min-height:51px;margin:0;padding:12px 20px!important;border:0;border-radius:11px!important;background:var(--taf-red)!important;color:#fff!important;font-size:14px;font-weight:700;box-shadow:0 12px 24px rgba(207,23,32,.16)}
    body.taf-order-page .taf-order-card button[name=customerordertracking]:hover{background:#aa1118!important}
    body.taf-order-page .taf-order-support{margin:17px 0 0;color:#727d7f;font-size:13px;text-align:center}
    body.taf-order-page .taf-order-support a{color:var(--taf-red);font-weight:700;text-decoration:none}
    @media(max-width:760px){body.taf-order-page main{padding:20px 0 48px}body.taf-order-page main>.container{width:min(100% - 24px,1120px)!important}body.taf-order-page .taf-order-layout{grid-template-columns:1fr;border-radius:19px}body.taf-order-page .taf-order-art{min-height:186px;padding:26px}body.taf-order-page .taf-order-art h2{max-width:290px;font-size:29px}body.taf-order-page .taf-order-art p{max-width:260px;margin-top:8px;font-size:12px}body.taf-order-page .taf-order-art svg{position:absolute;right:-15px;bottom:-74px;width:200px;opacity:.65}body.taf-order-page .taf-order-card{padding:32px 25px!important}body.taf-order-page .taf-order-card h1{font-size:29px!important}}
  `;

  function init() {
    const body = document.body;
    const form = document.forms.show_offline_order;
    const shell = form?.closest('.max-w-xl');
    const card = form?.parentElement;
    if (!form || !shell || !card || body.classList.contains('taf-order-page')) return;
    const style = document.createElement('style');
    style.id = 'taf-order-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    shell.classList.add('taf-order-shell');
    card.classList.add('taf-order-card');
    const layout = document.createElement('div');
    layout.className = 'taf-order-layout';
    layout.innerHTML = `<section class="taf-order-art" aria-label="Sipariş takibi"><div class="taf-order-art-copy"><span class="eyebrow">TAF Ecza · Sipariş desteği</span><h2>Siparişinizin <em>izini</em> birlikte sürelim.</h2><p>Sipariş kodunuz ve e-posta adresinizle güncel durumunu kolayca görüntüleyin.</p></div><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paket ve teslimat yolu çizimi"><circle cx="200" cy="145" r="126" fill="#fff8f8" stroke="#fff" stroke-width="3"/><path d="M48 233c33-28 63-27 88-8s49 22 72-7 43-41 76-20 49 12 68-8" fill="none" stroke="#d89097" stroke-width="4" stroke-dasharray="4 12" stroke-linecap="round"/><path d="m116 102 85-38 86 38v106l-86 43-85-43V102Z" fill="#fff" stroke="#e8cfd2" stroke-width="3"/><path d="m116 102 85 44 86-44M201 146v105M159 82l87 43" fill="none" stroke="#dba5aa" stroke-width="3"/><path d="m170 171 20 20 37-40" fill="none" stroke="#ce1720" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="324" cy="82" r="18" fill="#ce1720"/><circle cx="324" cy="82" r="6" fill="#fff"/></svg></section>`;
    shell.replaceChildren(layout);
    layout.appendChild(card);
    const heading = card.querySelector('h1');
    if (heading) heading.textContent = 'Siparişimi takip et';
    const codeLabel = form.querySelector('label[for=ordercode]');
    if (codeLabel) codeLabel.textContent = 'Sipariş Kodu';
    const captcha = form.querySelector('input[name=captcha10]');
    if (captcha) { captcha.setAttribute('aria-label', 'Güvenlik kodu'); captcha.setAttribute('maxlength', '3'); captcha.setAttribute('autocomplete', 'off'); captcha.removeAttribute('style'); }
    const support = document.createElement('p');
    support.className = 'taf-order-support';
    support.innerHTML = 'Yardıma mı ihtiyacınız var? <a href="tel:+902122202208">0212 220 22 08</a>';
    card.appendChild(support);
    body.classList.add('taf-order-page');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
