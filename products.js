const WHATSAPP = '923001234567';

const PRODUCTS = [
  {id:'cream-1',name:'Vitamin C Cream',cat:'Creams',price:950,desc:'Brightens skin & boosts radiance with Vitamin C'},
  {id:'cream-2',name:'Anti Aging Cream',cat:'Creams',price:1200,desc:'Reduces fine lines & restores youthful skin'},
  {id:'cream-3',name:'Anti Acne Cream',cat:'Creams',price:900,desc:'Clears acne & prevents future breakouts'},
  {id:'cream-4',name:'Anti Freckles Cream',cat:'Creams',price:1000,desc:'Fades freckles & evens skin tone'},
  {id:'cream-5',name:'Vitamin B-3 Cream',cat:'Creams',price:1100,desc:'Niacinamide formula for smooth & clear skin'},

  {id:'serum-1',name:'Hyaluronic Acid Serum',cat:'Serums',price:1800,desc:'Deep hydration & plumping effect'},
  {id:'serum-2',name:'Salicylic Acid Serum',cat:'Serums',price:1500,desc:'Unclogs pores & clears breakouts'},
  {id:'serum-3',name:'Zinc PCA Serum',cat:'Serums',price:1400,desc:'Controls oil & reduces blemishes'},
  {id:'serum-4',name:'Alpha Arbutin Serum',cat:'Serums',price:1600,desc:'Fades dark spots & evens skin tone'},
  {id:'serum-5',name:'Vitamin C Serum',cat:'Serums',price:1500,desc:'Brightens skin & boosts radiance'},
  {id:'serum-6',name:'Vitamin B-5 Serum',cat:'Serums',price:1450,desc:'Deep moisture & skin barrier repair'},
  {id:'serum-7',name:'Glutathione Serum',cat:'Serums',price:1900,desc:'Whitening & antioxidant protection'},
  {id:'serum-8',name:'Niacinamide Serum',cat:'Serums',price:1400,desc:'Minimizes pores & controls oil'},

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

function orderNow(name) {
  const msg = `Hello ACM Asia Cosmetics! 👋\n\nI would like to place an order for:\n📦 *${name}*\n📦 Quantity: 100+ pcs\n\nPlease share pricing and delivery details. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}
