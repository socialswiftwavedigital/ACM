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

  {id:'fw-1',name:'Foaming Face Wash',cat:'Face Wash',price:550,desc:'Deep cleansing & refreshing foam'},
  {id:'fw-2',name:'Creamy Face Wash',cat:'Face Wash',price:600,desc:'Gentle nourishing cream cleanse'},
  {id:'fw-3',name:'Gel Face Wash (Transparent)',cat:'Face Wash',price:500,desc:'Purifying transparent gel formula'},
  {id:'fw-4',name:'Pearly Shine Face Wash',cat:'Face Wash',price:650,desc:'Pearl extracts for radiant glow'},
  {id:'fw-5',name:'Vitamin C Face Wash',cat:'Face Wash',price:650,desc:'Brightens & evens skin tone daily'},
  {id:'fw-6',name:'Vitamin B-3 Face Wash',cat:'Face Wash',price:620,desc:'Niacinamide for smooth clear skin'},
  {id:'fw-7',name:'Charcoal Face Wash',cat:'Face Wash',price:600,desc:'Deep pore cleansing with activated charcoal'},
  {id:'fw-8',name:'Brightening Face Wash',cat:'Face Wash',price:580,desc:'Glowing & luminous skin formula'},
  {id:'fw-9',name:'Men\'s Face Wash',cat:'Face Wash',price:600,desc:'Powerful deep cleanse for men\'s skin'},
  {id:'fw-10',name:'Rice Face Wash',cat:'Face Wash',price:580,desc:'Rice extract for soft & bright skin'},
  {id:'fw-11',name:'Turmeric Face Wash',cat:'Face Wash',price:570,desc:'Natural turmeric for clear glowing skin'},
  {id:'fw-12',name:'Herbal Face Wash',cat:'Face Wash',price:560,desc:'Natural herbs for gentle daily cleanse'},
  {id:'fw-13',name:'Anti Acne Face Wash',cat:'Face Wash',price:620,desc:'Fights acne & prevents future breakouts'},
  {id:'fw-14',name:'Gold Face Wash',cat:'Face Wash',price:750,desc:'24K gold for luxury skin brightening'},

  {id:'pj-1',name:'Colored Petroleum Jelly',cat:'Petroleum Jelly',price:380,desc:'Tinted lip & skin care'},
  {id:'pj-2',name:'Original Petroleum Jelly',cat:'Petroleum Jelly',price:350,desc:'Classic skin protection'},
  {id:'pj-3',name:'Scented Petroleum Jelly',cat:'Petroleum Jelly',price:400,desc:'Fragrant moisturizing jelly'},

  {id:'lot-1',name:'Brightening Lotion',cat:'Lotions',price:850,desc:'Evens tone & boosts skin radiance'},
  {id:'lot-2',name:'Niacinamide Lotion',cat:'Lotions',price:800,desc:'Minimizes pores & controls oil'},
  {id:'lot-3',name:'Vitamin C Lotion',cat:'Lotions',price:850,desc:'Brightens & protects with Vitamin C'},
  {id:'lot-4',name:'Vitamin E Lotion',cat:'Lotions',price:750,desc:'Antioxidant-rich deep moisturizer'},
  {id:'lot-5',name:'Cleansing Lotion',cat:'Lotions',price:700,desc:'Gentle cleanse & soft skin daily'},
  {id:'lot-6',name:'Honey Lotion',cat:'Lotions',price:780,desc:'Honey extracts for nourished skin'},
  {id:'lot-7',name:'Cocoa Butter Lotion',cat:'Lotions',price:800,desc:'Rich cocoa for smooth & supple skin'},
  {id:'lot-8',name:'Lavender Lotion',cat:'Lotions',price:750,desc:'Calming lavender for relaxed skin'},
  {id:'lot-9',name:'Aloe Vera Lotion',cat:'Lotions',price:700,desc:'Soothing & cooling aloe formula'},
  {id:'lot-10',name:'Multi-Purpose Lotion',cat:'Lotions',price:720,desc:'All-in-one formula for face & body'},

  {id:'sh-1',name:'Keratin Shampoo',cat:'Shampoo',price:900,desc:'Smoothens, repairs & strengthens hair'},
  {id:'sh-2',name:'Anti-Dandruff Shampoo',cat:'Shampoo',price:650,desc:'Eliminates dandruff & flakes effectively'},
  {id:'sh-3',name:'Sulfate-Free Shampoo',cat:'Shampoo',price:800,desc:'Gentle cleanse without harsh sulfates'},
  {id:'sh-4',name:'Herbal Shampoo',cat:'Shampoo',price:700,desc:'Natural herbs for healthy hair growth'},
  {id:'sh-5',name:'Onion Shampoo',cat:'Shampoo',price:750,desc:'Onion extract to reduce hair fall'},
  {id:'sh-6',name:'Egg Shampoo',cat:'Shampoo',price:720,desc:'Protein-rich formula for strong hair'},
  {id:'sh-7',name:'Rice Shampoo',cat:'Shampoo',price:680,desc:'Rice water for smooth & shiny hair'},
  {id:'sh-8',name:'Coconut Shampoo',cat:'Shampoo',price:700,desc:'Deep nourishment with coconut extracts'},
  {id:'sh-9',name:'Almond Shampoo',cat:'Shampoo',price:750,desc:'Almond oil for soft & silky hair'},
  {id:'sh-10',name:'Strengthening Shampoo',cat:'Shampoo',price:780,desc:'Fortifies & prevents hair breakage'},
  {id:'sh-11',name:'Men\'s Shampoo',cat:'Shampoo',price:700,desc:'Powerful scalp care for men\'s hair'},
];

function orderNow(name) {
  const msg = `Hello ACM Asia Cosmetics! 👋\n\nI would like to place an order for:\n📦 *${name}*\n📦 Quantity: 100+ pcs\n\nPlease share pricing and delivery details. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}
