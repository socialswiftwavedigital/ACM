const WHATSAPP = '923255129241';

const PRODUCTS = [
  {id:'cream-1',name:'Vitamin C Cream',cat:'Creams',price:950,desc:'Brightens skin & boosts radiance with Vitamin C',img:'images/cream-vitamin-c.png'},
  {id:'cream-2',name:'Anti Aging Cream',cat:'Creams',price:1200,desc:'Reduces fine lines & restores youthful skin',img:'images/cream-anti-aging.png'},
  {id:'cream-3',name:'Anti Acne Cream',cat:'Creams',price:900,desc:'Clears acne & prevents future breakouts',img:'images/cream-anti-acne.png'},
  {id:'cream-4',name:'Anti Freckles Cream',cat:'Creams',price:1000,desc:'Fades freckles & evens skin tone',img:'images/cream-anti-freckles.png'},
  {id:'cream-5',name:'Vitamin B-3 Cream',cat:'Creams',price:1100,desc:'Niacinamide formula for smooth & clear skin',img:'images/cream-vitamin-b3.png'},

  {id:'serum-1',name:'Hyaluronic Acid Serum',cat:'Serums',price:1800,desc:'Deep hydration & plumping effect',img:'images/serum-hyaluronic.png'},
  {id:'serum-2',name:'Salicylic Acid Serum',cat:'Serums',price:1500,desc:'Unclogs pores & clears breakouts',img:'images/serum-salicylic.png'},
  {id:'serum-3',name:'Zinc PCA Serum',cat:'Serums',price:1400,desc:'Controls oil & reduces blemishes',img:'images/serum-zinc-pca.png'},
  {id:'serum-4',name:'Alpha Arbutin Serum',cat:'Serums',price:1600,desc:'Fades dark spots & evens skin tone',img:'images/serum-alpha-arbutin.png'},
  {id:'serum-5',name:'Vitamin C Serum',cat:'Serums',price:1500,desc:'Brightens skin & boosts radiance',img:'images/serum-vitamin-c.png'},
  {id:'serum-6',name:'Vitamin B-5 Serum',cat:'Serums',price:1450,desc:'Deep moisture & skin barrier repair',img:'images/serum-vitamin-b5.png'},
  {id:'serum-7',name:'Glutathione Serum',cat:'Serums',price:1900,desc:'Whitening & antioxidant protection',img:'images/serum-glutathione.png'},
  {id:'serum-8',name:'Niacinamide Serum',cat:'Serums',price:1400,desc:'Minimizes pores & controls oil',img:'images/serum-niacinamide.png'},

  {id:'fw-1',name:'Foaming Face Wash',cat:'Face Wash',price:550,desc:'Deep cleansing & refreshing foam',img:'images/fw-foaming.png'},
  {id:'fw-2',name:'Creamy Face Wash',cat:'Face Wash',price:600,desc:'Gentle nourishing cream cleanse',img:'images/fw-creamy.png'},
  {id:'fw-3',name:'Gel Face Wash (Transparent)',cat:'Face Wash',price:500,desc:'Purifying transparent gel formula',img:'images/fw-gel.png'},
  {id:'fw-4',name:'Pearly Shine Face Wash',cat:'Face Wash',price:650,desc:'Pearl extracts for radiant glow',img:'images/fw-pearly-shine.png'},
  {id:'fw-5',name:'Vitamin C Face Wash',cat:'Face Wash',price:650,desc:'Brightens & evens skin tone daily',img:'images/fw-vitaminc.png'},
  {id:'fw-6',name:'Vitamin B-3 Face Wash',cat:'Face Wash',price:620,desc:'Niacinamide for smooth clear skin',img:'images/fw-vitaminb3.png'},
  {id:'fw-7',name:'Charcoal Face Wash',cat:'Face Wash',price:600,desc:'Deep pore cleansing with activated charcoal',img:'images/fw-charcoal.png'},
  {id:'fw-8',name:'Brightening Face Wash',cat:'Face Wash',price:580,desc:'Glowing & luminous skin formula',img:'images/fw-brightening.png'},
  {id:'fw-9',name:'Men\'s Face Wash',cat:'Face Wash',price:600,desc:'Powerful deep cleanse for men\'s skin',img:'images/fw-mens.png'},
  {id:'fw-10',name:'Rice Face Wash',cat:'Face Wash',price:580,desc:'Rice extract for soft & bright skin',img:'images/fw-rice.png'},
  {id:'fw-11',name:'Turmeric Face Wash',cat:'Face Wash',price:570,desc:'Natural turmeric for clear glowing skin',img:'images/fw-turmeric.png'},
  {id:'fw-12',name:'Herbal Face Wash',cat:'Face Wash',price:560,desc:'Natural herbs for gentle daily cleanse',img:'images/fw-herbal.png'},
  {id:'fw-13',name:'Anti Acne Face Wash',cat:'Face Wash',price:620,desc:'Fights acne & prevents future breakouts',img:'images/fw-anti-acne.png'},
  {id:'fw-14',name:'Gold Face Wash',cat:'Face Wash',price:750,desc:'24K gold for luxury skin brightening',img:'images/fw-gold.png'},

  {id:'pj-1',name:'Colored Petroleum Jelly',cat:'Petroleum Jelly',price:380,desc:'Tinted lip & skin care',img:'images/pj-colored.png'},
  {id:'pj-2',name:'Original Petroleum Jelly',cat:'Petroleum Jelly',price:350,desc:'Classic skin protection',img:'images/pj-original.png'},
  {id:'pj-3',name:'Scented Petroleum Jelly',cat:'Petroleum Jelly',price:400,desc:'Fragrant moisturizing jelly',img:'images/pj-scented.png'},

  {id:'lot-1',name:'Brightening Lotion',cat:'Lotions',price:850,desc:'Evens tone & boosts skin radiance',img:'images/lot-brightening.png'},
  {id:'lot-2',name:'Niacinamide Lotion',cat:'Lotions',price:800,desc:'Minimizes pores & controls oil',img:'images/lot-niacinamide.png'},
  {id:'lot-3',name:'Vitamin C Lotion',cat:'Lotions',price:850,desc:'Brightens & protects with Vitamin C',img:'images/lot-vitamin-c.png'},
  {id:'lot-4',name:'Vitamin E Lotion',cat:'Lotions',price:750,desc:'Antioxidant-rich deep moisturizer',img:'images/lot-vitamin-e.png'},
  {id:'lot-5',name:'Cleansing Lotion',cat:'Lotions',price:700,desc:'Gentle cleanse & soft skin daily',img:'images/lot-cleansing.png'},
  {id:'lot-6',name:'Honey Lotion',cat:'Lotions',price:780,desc:'Honey extracts for nourished skin',img:'images/lot-honey.png'},
  {id:'lot-7',name:'Cocoa Butter Lotion',cat:'Lotions',price:800,desc:'Rich cocoa for smooth & supple skin',img:'images/lot-cocoa-butter.png'},
  {id:'lot-8',name:'Lavender Lotion',cat:'Lotions',price:750,desc:'Calming lavender for relaxed skin',img:'images/lot-lavender.png'},
  {id:'lot-9',name:'Aloe Vera Lotion',cat:'Lotions',price:700,desc:'Soothing & cooling aloe formula',img:'images/lot-aloe-vera.png'},
  {id:'lot-10',name:'Multi-Purpose Lotion',cat:'Lotions',price:720,desc:'All-in-one formula for face & body',img:'images/lot-multi-purpose.png'},

  {id:'sh-1',name:'Keratin Shampoo',cat:'Shampoo',price:900,desc:'Smoothens, repairs & strengthens hair',img:'images/sh-keratin.png'},
  {id:'sh-2',name:'Anti-Dandruff Shampoo',cat:'Shampoo',price:650,desc:'Eliminates dandruff & flakes effectively',img:'images/sh-anti-dandruff.png'},
  {id:'sh-3',name:'Sulfate-Free Shampoo',cat:'Shampoo',price:800,desc:'Gentle cleanse without harsh sulfates',img:'images/sh-sulfate-free.png'},
  {id:'sh-4',name:'Herbal Shampoo',cat:'Shampoo',price:700,desc:'Natural herbs for healthy hair growth',img:'images/sh-herbal.png'},
  {id:'sh-5',name:'Onion Shampoo',cat:'Shampoo',price:750,desc:'Onion extract to reduce hair fall',img:'images/sh-onion.png'},
  {id:'sh-6',name:'Egg Shampoo',cat:'Shampoo',price:720,desc:'Protein-rich formula for strong hair',img:'images/sh-egg.png'},
  {id:'sh-7',name:'Rice Shampoo',cat:'Shampoo',price:680,desc:'Rice water for smooth & shiny hair',img:'images/sh-rice.png'},
  {id:'sh-8',name:'Coconut Shampoo',cat:'Shampoo',price:700,desc:'Deep nourishment with coconut extracts',img:'images/sh-coconut.png'},
  {id:'sh-9',name:'Almond Shampoo',cat:'Shampoo',price:750,desc:'Almond oil for soft & silky hair',img:'images/sh-almond.png'},
  {id:'sh-10',name:'Strengthening Shampoo',cat:'Shampoo',price:780,desc:'Fortifies & prevents hair breakage',img:'images/sh-strengthening.png'},
  {id:'sh-11',name:'Men\'s Shampoo',cat:'Shampoo',price:700,desc:'Powerful scalp care for men\'s hair',img:'images/sh-mens.png'},

  {id:'bk-1',name:'Baby Lotion',cat:'Baby & Kids',price:650,desc:'Gentle moisturizing lotion for soft baby skin',img:'images/bk-lotion.png'},
  {id:'bk-2',name:'Baby Cream',cat:'Baby & Kids',price:600,desc:'Nourishing cream for delicate baby skin',img:'images/bk-cream.png'},
  {id:'bk-3',name:'Baby Shampoo',cat:'Baby & Kids',price:550,desc:'Tear-free gentle formula for baby hair',img:'images/bk-shampoo.png'},
  {id:'bk-4',name:'Baby Face Wash',cat:'Baby & Kids',price:520,desc:'Mild cleansing for baby\'s sensitive face',img:'images/bk-facewash.png'},
  {id:'bk-5',name:'Baby Body Wash',cat:'Baby & Kids',price:580,desc:'Soft & gentle full-body baby wash',img:'images/bk-body-wash.png'},
  {id:'bk-6',name:'Baby Oil',cat:'Baby & Kids',price:500,desc:'Pure moisturizing oil for baby massage',img:'images/bk-oil.png'},
  {id:'bk-7',name:'Baby Petroleum Jelly',cat:'Baby & Kids',price:400,desc:'Safe & gentle skin protection for babies',img:'images/bk-pjelly.png'},
  {id:'bk-8',name:'Kids Shampoo',cat:'Baby & Kids',price:580,desc:'Fun & gentle shampoo for kids\' hair',img:'images/bk-kids-shampoo.png'},
];

function orderNow(name) {
  const msg = `Hello ACM Asia Cosmetics! 👋\n\nI would like to place an order for:\n📦 *${name}*\n📦 Quantity: 100+ pcs\n\nPlease share pricing and delivery details. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}
