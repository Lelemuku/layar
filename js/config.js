// config.js - konstanta global
const CFG = {
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbybY32nXiUKVh3zwytuB264rxJ4OM5Ewx6lKMfDDxicPCNlz39yYmEJyEtvsoPcKCJU/exec',
  feeds: ['https://kabar.lelemuku.com/feeds/posts/default?alt=rss&max-results=150'],
  refreshMs: 5 * 60 * 1000,
};
const CATS = [
  {id:'breaking',color:'#f85149',glow:'rgba(248,81,73,.5)',
   kw:['gempa','tsunami','banjir','longsor','kebakaran','bencana','ledakan','demo','bentrok','korban','meninggal','evakuasi','penembakan','terkini','darurat','mendesak','konflik','serangan','operasi','tewas']},
  {id:'urgent',color:'#e3b341',glow:'rgba(227,179,65,.5)',
   kw:['korupsi','sidang','vonis','penangkapan','hukum','kriminal','ditangkap','tersangka','penggeledahan','asusila','pencabulan','pencurian','penahanan','polisi','jaksa']},
  {id:'info',color:'#3fb950',glow:'rgba(63,185,80,.5)',
   kw:['festival','budaya','wisata','peresmian','pelantikan','bantuan','beasiswa','prestasi','juara','program','pengembangan','investasi','ekonomi','bisnis','proyek','doktor','halal bihalal','naik tipe','award']},
];
const CAT_REG = {id:'regular',color:'#58a6ff',glow:'rgba(88,166,255,.5)'};
const SATELIT_LAYER = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  attr: 'Imagery &copy; Esri, Maxar, Earthstar Geographics | <a href="https://lelemuku.com">Lelemuku.com</a>',
  opts: { maxZoom:19 },
  filter: 'brightness(0.95) saturate(1.05)',
};
const LABEL_LAYERS = {
  dark: { url:'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', attr:'&copy; <a href="https://carto.com/">CARTO</a>', opts:{ subdomains:'abcd', maxZoom:20, opacity:0.90, pane:'overlayPane' } },
  light: { url:'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', attr:'&copy; <a href="https://carto.com/">CARTO</a>', opts:{ subdomains:'abcd', maxZoom:20, opacity:0.95, pane:'overlayPane' } },
};
const flashRegex = /\[(BREAKING|SEKILAS\s?INFO|PENTING|UPDATE)\]/i;