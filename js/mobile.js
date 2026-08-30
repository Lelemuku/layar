// mobile.js - drawer system
function showBackdrop(){ const bd=$('mob-backdrop'); bd.style.display='block'; requestAnimationFrame(()=>bd.classList.add('vis')); }
function hideBackdrop(){ const bd=$('mob-backdrop'); bd.classList.remove('vis'); setTimeout(()=>{bd.style.display='none';},280); }
function openWireMob(){ closeFilterMob(false); $('wire-toggle-btn')?.setAttribute('aria-expanded','true'); $('wire-outer').classList.add('mob-open'); $('wire-close-mobile').style.display='flex'; showBackdrop(); document.body.style.overflow='hidden'; }
function closeWireMob(){ $('wire-toggle-btn')?.setAttribute('aria-expanded','false'); $('wire-outer').classList.remove('mob-open'); $('wire-close-mobile').style.display='none'; hideBackdrop(); document.body.style.overflow=''; }
function openFilterMob(){ closeWireMob(); const fm=$('filter-modal'); fm.style.display='block'; requestAnimationFrame(()=>fm.classList.add('fm-open')); showBackdrop(); document.body.style.overflow='hidden'; }
function closeFilterMob(backdrop=true){ const fm=$('filter-modal'); fm.classList.remove('fm-open'); setTimeout(()=>{fm.style.display='none';},320); if(backdrop){hideBackdrop(); document.body.style.overflow='';} }
function closeMobAll(){ $('wire-outer').classList.remove('mob-open'); $('wire-close-mobile').style.display='none'; const fm=$('filter-modal'); fm.classList.remove('fm-open'); setTimeout(()=>{fm.style.display='none';},320); hideBackdrop(); document.body.style.overflow=''; }
function toggleWireDesktop(){ wirePanelOpen=!wirePanelOpen; $('wire-panel').classList.toggle('collapsed',!wirePanelOpen); $('handle-arrow').textContent=wirePanelOpen?'▶':'◀'; $('wire-desk-btn')?.setAttribute('aria-expanded',wirePanelOpen?'true':'false'); $('wire-handle')?.setAttribute('aria-label',wirePanelOpen?'Tutup panel kabar berita':'Buka panel kabar berita'); }
function fmFilter(cat,el){ filterCat(cat,$('cat-'+cat)||{classList:{add:()=>{},remove:()=>{}}}); document.querySelectorAll('.fm-row').forEach(r=>{r.classList.remove('fm-active');r.querySelector('.fm-check').textContent='';}); el.classList.add('fm-active'); el.querySelector('.fm-check').textContent='✓'; document.querySelectorAll('.sb-item[id^="cat-"]').forEach(i=>i.classList.remove('active')); const sb=$('cat-'+cat); if(sb)sb.classList.add('active'); activeCat=cat; closeFilterMob(); }
function syncFmCounts(){ ['all','breaking','urgent','info','regular','world'].forEach(c=>{ const el=$('fmc-'+c); const src=$('cnt-'+c); if(el&&src)el.textContent=src.textContent; }); }
window.openWireMob=openWireMob;
window.closeWireMob=closeWireMob;
window.openFilterMob=openFilterMob;
window.closeFilterMob=closeFilterMob;
window.closeMobAll=closeMobAll;
window.toggleWireDesktop=toggleWireDesktop;
window.fmFilter=fmFilter;