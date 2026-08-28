const WHATSAPP = '923001234567'; // ← Update this number

const PRODUCTS = [
  {id:'cream-1',name:'Moisturizing Day Cream',cat:'Creams',price:850,desc:'All-day hydration & protection'},
  {id:'cream-2',name:'Anti-Aging Night Cream',cat:'Creams',price:1200,desc:'Reduces fine lines overnight'},
  {id:'cream-3',name:'Skin Brightening Cream',cat:'Creams',price:950,desc:'Evens tone & boosts radiance'},
  {id:'cream-4',name:'SPF 50 Sunscreen Cream',cat:'Creams',price:750,desc:'Broad-spectrum sun protection'},
  {id:'cream-5',name:'Deep Hydrating Cream',cat:'Creams',price:800,desc:'Intense moisture for dry skin'},
  {id:'cream-6',name:'Whitening Cream',cat:'Creams',price:1100,desc:'Advanced skin lightening formula'},

  {id:'serum-1',name:'Vitamin C Serum',cat:'Serums',price:1500,desc:'Brightens & evens skin tone'},
  {id:'serum-2',name:'Hyaluronic Acid Serum',cat:'Serums',price:1800,desc:'Deep hydration & plumping'},
  {id:'serum-3',name:'Retinol Night Serum',cat:'Serums',price:2000,desc:'Anti-aging overnight repair'},
  {id:'serum-4',name:'Niacinamide 10% Serum',cat:'Serums',price:1400,desc:'Minimizes pores, controls oil'},
  {id:'serum-5',name:'Collagen Boost Serum',cat:'Serums',price:1600,desc:'Firms & plumps skin texture'},
  {id:'serum-6',name:'Anti Dark Spot Serum',cat:'Serums',price:1700,desc:'Fades pigmentation & dark spots'},
  {id:'serum-7',name:'Glow Essence Serum',cat:'Serums',price:1350,desc:'Instant luminosity & radiance'},

  {id:'fw-1',name:'Foaming Face Wash',cat:'Face Wash',price:550,desc:'Deep cleansing & refreshing'},
  {id:'fw-2',name:'Creamy Face Wash',cat:'Face Wash',price:600,desc:'Gentle nourishing cleanse'},
  {id:'fw-3',name:'Gel Face Wash',cat:'Face Wash',price:500,desc:'Purifying oil control formula'},
  {id:'fw-4',name:'Pearly Shine Face Wash',cat:'Face Wash',price:650,desc:'Brightening radiance boost'},

  {id:'pj-1',name:'Original Petroleum Jelly',cat:'Petroleum Jelly',price:350,desc:'Classic skin protection'},
  {id:'pj-2',name:'Scented Petroleum Jelly',cat:'Petroleum Jelly',price:400,desc:'Fragrant moisturizing jelly'},
  {id:'pj-3',name:'Colored Petroleum Jelly',cat:'Petroleum Jelly',price:380,desc:'Tinted lip & skin care'},
  {id:'pj-4',name:'Unscented Petroleum Jelly',cat:'Petroleum Jelly',price:360,desc:'Fragrance-free formula'},

  {id:'lot-1',name:'Body Moisturizing Lotion',cat:'Lotions',price:700,desc:'All-day moisture for the body'},
  {id:'lot-2',name:'Whitening Body Lotion',cat:'Lotions',price:850,desc:'Visibly lightens skin tone'},
  {id:'lot-3',name:'Aloe Vera Lotion',cat:'Lotions',price:650,desc:'Soothing & cooling formula'},
  {id:'lot-4',name:'Vitamin E Lotion',cat:'Lotions',price:750,desc:'Antioxidant-rich moisturizer'},
  {id:'lot-5',name:'Anti-Stretch Mark Lotion',cat:'Lotions',price:950,desc:'Prevents & reduces marks'},
  {id:'lot-6',name:'Nourishing Hand Lotion',cat:'Lotions',price:600,desc:'Soft, smooth hands all day'},
  {id:'lot-7',name:'Deep Moisture Lotion',cat:'Lotions',price:780,desc:'Intense hydration formula'},
  {id:'lot-8',name:'Baby Soft Lotion',cat:'Lotions',price:700,desc:'Gentle for delicate skin'},
  {id:'lot-9',name:'Collagen Body Lotion',cat:'Lotions',price:880,desc:'Firms & tones skin texture'},

  {id:'sh-1',name:'Anti-Dandruff Shampoo',cat:'Shampoo',price:650,desc:'Eliminates dandruff & flakes'},
  {id:'sh-2',name:'Moisturizing Shampoo',cat:'Shampoo',price:600,desc:'Deep hydration for dry hair'},
  {id:'sh-3',name:'Hair Fall Control Shampoo',cat:'Shampoo',price:750,desc:'Strengthens & reduces fall'},
  {id:'sh-4',name:'Color Protection Shampoo',cat:'Shampoo',price:800,desc:'Preserves hair color vibrancy'},
  {id:'sh-5',name:'Keratin Shampoo',cat:'Shampoo',price:900,desc:'Smoothens & repairs hair'},
  {id:'sh-6',name:'Argan Oil Shampoo',cat:'Shampoo',price:850,desc:'Nourishes & adds shine'},
  {id:'sh-7',name:'Volumizing Shampoo',cat:'Shampoo',price:700,desc:'Boosts body & volume'},
  {id:'sh-8',name:'Scalp Care Shampoo',cat:'Shampoo',price:720,desc:'Balances scalp health'},
  {id:'sh-9',name:'Deep Cleanse Shampoo',cat:'Shampoo',price:680,desc:'Removes buildup & refreshes'},
  {id:'sh-10',name:'Nourishing Shampoo',cat:'Shampoo',price:630,desc:'Rich nutrition for all hair'},
];

const CAT_COLORS = {
  'Creams':         {bg:'#0D2158', accent:'#DC2626'},
  'Serums':         {bg:'#1a1060', accent:'#DC2626'},
  'Face Wash':      {bg:'#0a3d62', accent:'#DC2626'},
  'Petroleum Jelly':{bg:'#1e3a5f', accent:'#DC2626'},
  'Lotions':        {bg:'#0D2158', accent:'#DC2626'},
  'Shampoo':        {bg:'#12285c', accent:'#DC2626'},
};

const Cart = {
  get() { try { return JSON.parse(localStorage.getItem('acm_cart')||'[]'); } catch { return []; } },
  save(items) { try { localStorage.setItem('acm_cart', JSON.stringify(items)); } catch {} },
  add(product, qty=1) {
    const items = this.get();
    const ex = items.find(i=>i.id===product.id);
    if (ex) ex.qty += qty; else items.push({id:product.id,name:product.name,cat:product.cat,price:product.price,qty});
    this.save(items); this.badge(); this.toast(product.name);
  },
  remove(id) { this.save(this.get().filter(i=>i.id!==id)); this.badge(); },
  setQty(id, qty) {
    const items=this.get(); const item=items.find(i=>i.id===id);
    if(!item) return; item.qty=qty; if(item.qty<1) return this.remove(id);
    this.save(items); this.badge();
  },
  count() { return this.get().reduce((s,i)=>s+i.qty,0); },
  total() { return this.get().reduce((s,i)=>s+i.price*i.qty,0); },
  badge() {
    document.querySelectorAll('.cart-badge').forEach(b=>{
      const c=this.count(); b.textContent=c; b.style.display=c?'flex':'none';
    });
  },
  toast(name) {
    let t=document.getElementById('acm-toast');
    if(!t){ t=document.createElement('div'); t.id='acm-toast'; document.body.appendChild(t); }
    t.textContent='✓ '+name+' added to cart';
    t.className='acm-toast show';
    clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2600);
  },
  checkout() {
    const items=this.get();
    if(!items.length){alert('Your cart is empty!');return;}
    let msg='🛍️ *Order — ACM Asia Cosmetics & Manufactures*\n\n*Products:*\n';
    items.forEach(i=>{ msg+=`• ${i.name} × ${i.qty}  =  Rs. ${(i.price*i.qty).toLocaleString()}\n`; });
    msg+=`\n*Total: Rs. ${this.total().toLocaleString()}*\n\nPlease confirm my order. Thank you! 🙏`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  }
};

document.addEventListener('DOMContentLoaded', ()=>Cart.badge());
