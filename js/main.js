// main.js - inisialisasi utama
document.addEventListener('DOMContentLoaded',function(){
  const saved=localStorage.getItem('lm-theme');
  if(saved==='light'){ isDark=false; document.documentElement.setAttribute('data-theme','light'); document.getElementById('theme-toggle').textContent='☀️'; }
  if(localStorage.getItem('lm-ad-strip-closed')==='true'){ document.getElementById('ad-strip')?.classList.add('ad-hidden'); }
  initMap();
  enhanceAccessibility();
  loadData();
  function tick(){ const w=new Date(Date.now()+7*3600000); document.getElementById('clock').textContent=w.toISOString().replace('T',' ').substring(0,19)+' WIB'; }
  tick(); setInterval(tick,1000);
  if(CFG.refreshMs>0) setInterval(loadData,CFG.refreshMs);
  document.addEventListener('click',handleOutsideClick);
  mapObj.on('popupopen',function(e){ try{ const popupEl=e.popup.getElement(); const adWrap=popupEl?.querySelector('.pu-ad-slot'); const adEl=adWrap?.querySelector('.adsbygoogle'); if(!adEl||!adWrap)return; if(!adEl.getAttribute('data-adsbygoogle-status')){ (window.adsbygoogle=window.adsbygoogle||[]).push({}); } watchAdSlot(adEl,adWrap,{timeout:4500,onSettle:()=>e.popup.update()}); }catch(err){console.warn('Ad slot popup gagal dimuat:',err.message);} });
  mapObj.on('popupclose', function(){ scrollHeaderIntoView(); });
  watchAdSlot(document.getElementById('ad-sidebar-ins'),document.getElementById('ad-sidebar-slot'));
  watchAdSlot(document.getElementById('ad-strip-ins'),document.getElementById('ad-strip'));
});
