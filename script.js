/*
 script.js - local images, safe loading, modal details, Top10, search/filter
*/
const cars = [
  {id:1, brand:'Bugatti', name:'Bugatti Chiron Super Sport', priceNum:3900000, img:'images/Bugatti_Chiron_.jpg', desc:'Vận tốc tối đa ~490 km/h.'},
  {id:2, brand:'Bugatti', name:'Bugatti Centodieci', priceNum:9000000, img:'images/bugatti_centodieci.jpg', desc:'Phiên bản kỷ niệm cực giới hạn.'},
  {id:3, brand:'Bugatti', name:'Bugatti Divo', priceNum:5800000, img:'images/Bugatti_Divo.jpg', desc:'Tối ưu khí động học và hiếm có.'},
  {id:4, brand:'Bugatti', name:'Bugatti Veyron', priceNum:1700000, img:'images/Bugatti_Veyron.jpg', desc:'Kinh điển tốc độ.'},
  {id:5, brand:'Ferrari', name:'Ferrari LaFerrari', priceNum:1400000, img:'images/ferrari_laferrari.jpg', desc:'Siêu xe hybrid hiệu suất cao.'},
  {id:6, brand:'Ferrari', name:'Ferrari F40', priceNum:1500000, img:'images/Ferrari_F40.jpg', desc:'Siêu phẩm cổ điển.'},
  {id:7, brand:'Ferrari', name:'Ferrari SF90 Stradale', priceNum:624000, img:'images/Ferrari_SF90.jpg', desc:'Hybrid hiệu suất cao.'},
  {id:8, brand:'Ferrari', name:'Ferrari 812 Superfast', priceNum:340000, img:'images/Ferrari_812.jpg', desc:'V12 mạnh mẽ.'},
  {id:9, brand:'Lamborghini', name:'Lamborghini Aventador', priceNum:393000, img:'images/Lamborghini_Aventador.jpg', desc:'Động cơ V12.'},
  {id:10, brand:'Lamborghini', name:'Lamborghini Huracan', priceNum:261000, img:'images/Lamborghini_Huracan.jpg', desc:'Động cơ V10.'},
  {id:11, brand:'Lamborghini', name:'Lamborghini Centenario', priceNum:1900000, img:'images/Lamborghini_Centenario.jpg', desc:'Phiên bản kỷ niệm hiếm.'},
  {id:12, brand:'McLaren', name:'McLaren P1', priceNum:1150000, img:'images/McLaren_P1.jpg', desc:'Hybrid, công nghệ đường đua.'},
  {id:13, brand:'McLaren', name:'McLaren 720S', priceNum:299000, img:'images/McLaren_720S.jpg', desc:'Hiệu năng và khí động học.'},
  {id:14, brand:'McLaren', name:'McLaren Senna', priceNum:1000000, img:'images/McLaren_Senna.jpg', desc:'Tập trung hiệu năng track.'},
  {id:15, brand:'McLaren', name:'McLaren Elva', priceNum:1700000, img:'images/McLaren_Elva.jpg', desc:'Roadster không kính chắn gió.'},
  {id:16, brand:'Porsche', name:'Porsche 918 Spyder', priceNum:845000, img:'images/porsche_918.jpg', desc:'Hybrid hiệu năng cao.'},
  {id:17, brand:'Porsche', name:'Porsche 911 GT2 RS', priceNum:293000, img:'images/porsche_911_gt2rs.jpg', desc:'Phiên bản hiệu năng cao.'},
  {id:18, brand:'Porsche', name:'Porsche 911 Turbo S', priceNum:203000, img:'images/porsche_911_turbos.jpg', desc:'Công nghệ và tốc độ.'},
  {id:19, brand:'Koenigsegg', name:'Koenigsegg Jesko', priceNum:2800000, img:'images/koenigsegg_jesko.jpg', desc:'Siêu xe Thụy Điển.'},
  {id:20, brand:'Koenigsegg', name:'Koenigsegg Agera RS', priceNum:2500000, img:'images/koenigsegg_agera_rs.jpg', desc:'Từng nắm kỷ lục tốc độ.'},
  {id:21, brand:'Pagani', name:'Pagani Huayra', priceNum:1400000, img:'images/pagani_huayra.jpg', desc:'Thiết kế thủ công.'},
  {id:22, brand:'Pagani', name:'Pagani Zonda', priceNum:1700000, img:'images/pagani_zonda.jpg', desc:'Siêu hiếm.'},
  {id:23, brand:'Aston Martin', name:'Aston Martin One-77', priceNum:1400000, img:'images/aston_one77.jpg', desc:'Sang trọng pha hiệu năng.'},
  {id:24, brand:'Aston Martin', name:'Aston Martin Valkyrie', priceNum:3000000, img:'images/aston_valkyrie.jpg', desc:'Hợp tác F1.'},
  {id:25, brand:'Mercedes-AMG', name:'Mercedes-AMG One', priceNum:2700000, img:'images/mercedes_amg_one.jpg', desc:'Công nghệ F1 cho đường phố.'},
  {id:26, brand:'Rolls-Royce', name:'Rolls-Royce Sweptail', priceNum:13000000, img:'images/rolls_sweptail.jpg', desc:'Bespoke cao cấp.'},
  {id:27, brand:'Bentley', name:'Bentley Mulliner Bacalar', priceNum:1900000, img:'images/bentley_bacalar.jpg', desc:'One-off siêu sang.'},
  {id:28, brand:'Rolls-Royce', name:'Rolls-Royce La Rose Noire Droptail', priceNum:30000000, img:'images/rolls_rose.jpg', desc:'Là chiếc đầu tiên trong series Droptail 4 chiếc. Thiết kế lấy cảm hứng từ hoa hồng Black Baccara.'},
  {id:29, brand:'Rolls-Royce', name:'Rolls-Royce Arcadia Droptail', priceNum:28000000, img:'images/rolls_arcadia.jpg', desc:'Chiếc thứ ba trong series Droptail. Lấy cảm hứng từ vùng đất Arcadia thần thoại Hy Lạp, biểu tượng của sự bình yên.'},
  {id:30, brand:'Hennessey', name:'Hennessey Venom F5', priceNum:2100000, img:'images/hennessey_venom_f5.jpg', desc:'Phá kỷ lục tốc độ.'},
  {id:31, brand:'Zenvo', name:'Zenvo TSR-S', priceNum:1900000, img:'images/zenvo_tsrs.jpg', desc:'Siêu hiếm.'},
  {id:32, brand:'De Tomaso', name:'De Tomaso P72', priceNum:1200000, img:'images/de_tomaso_p72.jpg', desc:'Thiết kế cổ điển hiện đại.'},
  {id:33, brand:'Audi', name:'Audi R8 V10 Plus', priceNum:200000, img:'images/audi_r8.jpg', desc:'V10, sử dụng hàng ngày.'},
  {id:34, brand:'Nissan', name:'Nissan GT-R Nismo', priceNum:215000, img:'images/nissan_gtr.jpg', desc:'Hiệu năng cao.'},
  {id:35, brand:'Ford', name:'Ford GT', priceNum:500000, img:'images/ford_gt.jpg', desc:'Di sản đua.'},
  {id:36, brand:'Bentley', name:'Bentley State Limousine', priceNum:15000000, img:'images/bentley_limousine.jpg', desc:'Đây là chiếc Bentley đắt nhất mọi thời đại, được hãng Mulliner (bộ phận cá nhân hóa của Bentley) sản xuất riêng cho Nữ hoàng Elizabeth II.'},
  {id:37, brand:'Audi', name:'Audi Avus Quattro Concept 1991', priceNum:3000000, img:'images/audi_avus.jpg', desc:'Nổi bật với thân xe làm hoàn toàn bằng nhôm đánh bóng.'},
  {id:38, brand:'BMW', name:'BMW M8 Competition', priceNum:140000, img:'images/bmw_m8.jpg', desc:'GT hiệu năng cao.'},
  {id:39, brand:'Lexus', name:'Lexus LFA', priceNum:375000, img:'images/lexus_lfa.jpg', desc:'V10, âm thanh đặc trưng.'},
  {id:40, brand:'Toyota', name:'Toyota Supra GR', priceNum:55000, img:'images/toyota_supra.jpg', desc:'Sport coupe.'},
  {id:41, brand:'Toyota', name:'Toyota 2000GT (1967 – 1970)', priceNum:1200000, img:'images/toyota_2000gt.jpg', desc:'Đây là siêu xe thể thao đầu tiên của Nhật Bản, được xem là một biểu tượng trong lịch sử xe hơi.'}
];
// placeholder SVG data URL
const placeholderDataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="20">No image</text></svg>'
);

function formatPriceLabel(car){
  if (car.priceNum) {
    if (car.priceNum >= 1000000) return (car.priceNum / 1000000).toFixed(1).replace('.0','') + ' triệu USD';
    return new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(car.priceNum);
  }
  return car.price || '';
}

// create img element with safe onerror
function makeImg(src, alt){
  const img = document.createElement('img');
  img.src = src || placeholderDataUrl;
  img.alt = alt || '';
  img.onerror = function(){ this.onerror = null; this.src = placeholderDataUrl; };
  return img;
}

// render cards
function renderCards(list){
  const grid = document.getElementById('carsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  if(list.length === 0){ grid.innerHTML = '<p>Không tìm thấy mẫu xe phù hợp.</p>'; return; }
  list.forEach(car => {
    const card = document.createElement('article');
    card.className = 'card';
    const imgEl = makeImg(car.img, car.name);
    const body = document.createElement('div');
    body.className = 'card-body';
    body.innerHTML = `<h3>${car.name}</h3><div class="price">${formatPriceLabel(car)}</div><div class="meta">${car.brand} · ${car.desc}</div>`;
    card.appendChild(imgEl);
    card.appendChild(body);
    card.tabIndex = 0;
    card.addEventListener('click', () => openModal(car));
    card.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openModal(car); });
    grid.appendChild(card);
  });
}

// render top10
function renderTop10(){
  const sorted = cars.slice().sort((a,b)=> (b.priceNum||0)-(a.priceNum||0));
  const top10 = sorted.slice(0,10);
  const grid = document.getElementById('topGrid');
  const ol = document.getElementById('topList');
  if(ol){ ol.innerHTML = ''; top10.forEach((car,idx)=>{ const li=document.createElement('li'); li.innerHTML = `<img src="${car.img}" alt="${car.name}"><div><strong>${idx+1}. ${car.name}</strong><br/><span>${formatPriceLabel(car)}</span><br/><small>${car.brand} · ${car.desc}</small></div>`; ol.appendChild(li); }); }
  if(grid){ grid.innerHTML = ''; top10.forEach((car,idx)=>{ const card=document.createElement('div'); card.className='top-card'; const rank=document.createElement('div'); rank.className='rank'; rank.textContent=idx+1; const img=makeImg(car.img, car.name); const meta=document.createElement('div'); meta.className='top-meta'; meta.innerHTML = `<div style="font-weight:700;">${car.name}</div><div style="color:var(--accent);font-weight:700;margin:6px 0;">${formatPriceLabel(car)}</div><small style="color:var(--muted);">${car.brand} · ${car.desc}</small>`; card.appendChild(rank); card.appendChild(img); card.appendChild(meta); card.addEventListener('click', ()=>openModal(car)); grid.appendChild(card); }); }
}

// Modal
function openModal(car){
  const modal = document.getElementById('carModal');
  if(!modal) return;
  modal.querySelector('.modal-img').src = car.img || placeholderDataUrl;
  modal.querySelector('.modal-img').alt = car.name;
  modal.querySelector('.modal-title').textContent = car.name;
  modal.querySelector('.modal-price').textContent = formatPriceLabel(car);
  modal.querySelector('.modal-brand').textContent = car.brand;
  modal.querySelector('.modal-desc').textContent = car.desc || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const modal = document.getElementById('carModal');
  if(!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// search/filter
function filterCars(){
  const q = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  const brand = (document.getElementById('brandSelect')?.value || '').trim();
  const filtered = cars.filter(car=>{
    const matchQ = q === '' || car.name.toLowerCase().includes(q) || car.brand.toLowerCase().includes(q) || (car.desc && car.desc.toLowerCase().includes(q));
    const matchBrand = brand === '' || car.brand === brand;
    return matchQ && matchBrand;
  });
  renderCards(filtered);
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  renderCards(cars);
  renderTop10();

  document.getElementById('searchBtn')?.addEventListener('click', filterCars);
  document.getElementById('searchInput')?.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); filterCars(); }});
  document.getElementById('brandSelect')?.addEventListener('change', filterCars);
  document.getElementById('refreshBtn')?.addEventListener('click', (e)=>{ e.preventDefault(); renderTop10(); });

  // modal handlers
  document.querySelectorAll('.modal-close').forEach(b=>b.addEventListener('click', closeModal));
  document.querySelectorAll('#carModal .modal-backdrop').forEach(b=>b.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
});