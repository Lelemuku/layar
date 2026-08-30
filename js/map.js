// map.js - inisialisasi peta
function initMap(){ const bounds=[[-85,-Infinity],[85,Infinity]]; mapObj=L.map('map',{center:[-2.5,118.5],zoom:5,zoomControl:false,worldCopyJump:true,minZoom:4,maxZoom:19,maxBounds:bounds,maxBoundsViscosity:1.0}); L.control.zoom({position:'topright'}).addTo(mapObj); setTimeout(enhanceAccessibility,0); _initSatelit(); _applyLabel('dark'); mapObj.on('mousemove',e=>{ document.getElementById('coord-chip').textContent=`📡 ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`; }); }
function _initSatelit(){ if(currentSatelitLayer)return; const t=SATELIT_LAYER; currentSatelitLayer=L.tileLayer(t.url,{attribution:t.attr,...t.opts}).addTo(mapObj); const applyFilter=()=>{ mapObj.getPanes().tilePane?.querySelectorAll('.leaflet-tile').forEach(el=>{ if(!el.closest?.('.leaflet-overlay-pane')) el.style.filter=t.filter; }); }; currentSatelitLayer.on('load',applyFilter); applyFilter(); }
function _applyLabel(mode){ if(currentLabelLayer){ mapObj.removeLayer(currentLabelLayer); currentLabelLayer=null; } const l=LABEL_LAYERS[mode]||LABEL_LAYERS.dark; currentLabelLayer=L.tileLayer(l.url,{attribution:l.attr,...l.opts}).addTo(mapObj); currentThemeMode=mode; }
function setThemeMode(mode,btn){ isDark=(mode==='dark'); document.documentElement.setAttribute('data-theme',isDark?'dark':'light'); document.getElementById('theme-toggle').textContent=isDark?'🌙':'☀️'; localStorage.setItem('lm-theme',mode); _applyLabel(mode); document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active')); if(btn)btn.classList.add('active'); }
function flyTo(lat,lng,z){ mapObj.flyTo([lat,lng],z,{duration:1.2}); }
const fly=flyTo;
function flyBounds(bounds){ mapObj.flyToBounds(L.latLngBounds(L.latLng(bounds[0][0],bounds[0][1]),L.latLng(bounds[1][0],bounds[1][1])),{duration:1.4,padding:[20,20]}); }
// expose ke global
window.mapObj = mapObj;
window.flyTo = flyTo;
window.flyBounds = flyBounds;