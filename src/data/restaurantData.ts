import { MenuItem, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Zaify's",
  tagline: "Authentic Taste, Made With Passion",
  address: "57-B, Commercial Market, Satellite Town, Rawalpindi, Pakistan",
  shortAddress: "57-B, Commercial Market, Satellite Town, Rawalpindi",
  phone: "0300-6165529",
  phoneRaw: "+923006165529",
  email: "zaifysrestaurant@gmail.com",
  timing: "12:00 PM – 1:00 AM (Monday to Sunday)",
  facebook: "https://www.facebook.com/zaifys.restaurant/",
  instagram: "https://www.instagram.com/zaifysrestaurant/",
  whatsappUrl: "https://wa.me/923006165529?text=Hi%20Zaify's!%20I%20would%20like%20to%20inquire%20about%20a%20table%20or%20menu.",
  mapsUrl: "https://maps.google.com/?q=57-B+Commercial+Market+Satellite+Town+Rawalpindi+Pakistan",
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main Course' },
  { id: 'bbq', label: 'BBQ / Grills' },
  { id: 'rice', label: 'Rice' },
  { id: 'drinks', label: 'Drinks & Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: "Zaify's Crispy Wings",
    description: "Crispy coated chicken wings glazed with our tangy homemade sweet-spice sauce.",
    price: "Rs. 750",
    category: 'starters',
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 's2',
    name: "Golden Chicken Strips",
    description: "Tender boneless chicken strips fried to a crisp golden crunch, served with honey mustard dip.",
    price: "Rs. 690",
    category: 'starters',
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 's3',
    name: "Cheesy Garlic Naan Bites",
    description: "Tandoor baked mini naan slices infused with roasted garlic, melted mozzarella & fresh coriander.",
    price: "Rs. 520",
    category: 'starters',
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 's4',
    name: "Special Hot & Sour Soup",
    description: "Classic rich broth prepared with shredded chicken, fresh mushrooms, sweet corn and egg drop.",
    price: "Rs. 480",
    category: 'starters',
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  },

  // Main Course
  {
    id: 'm1',
    name: "Desi Murgh Karahi",
    description: "Prepared in traditional iron wok with fresh ripe tomatoes, ginger, green chilies and desi ghee.",
    price: "Rs. 1,650",
    category: 'main',
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    popular: true,
    spicy: true,
  },
  {
    id: 'm2',
    name: "Zaify's Special Makhni Handi",
    description: "Silky boneless chicken cooked in an authentic earthen handi with butter and mild aromatic herbs.",
    price: "Rs. 1,750",
    category: 'main',
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 'm3',
    name: "Mutton Roghan Josh",
    description: "Tender prime mutton cuts slow-cooked in a Kashmiri spiced gravy with caramelized onions.",
    price: "Rs. 2,350",
    category: 'main',
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 'm4',
    name: "Paneer Reshmi Karahi",
    description: "Fresh cottage paneer cubes simmered in a spiced creamy tomato and bell pepper reduction.",
    price: "Rs. 1,190",
    category: 'main',
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
  },

  // BBQ / Grills
  {
    id: 'b1',
    name: "Chicken Malai Boti",
    description: "Succulent boneless chicken skewers marinated overnight in fresh dairy cream, yogurt & white pepper.",
    price: "Rs. 1,050",
    category: 'bbq',
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 'b2',
    name: "Reshmi Seekh Kabab",
    description: "Charcoal grilled fine minced chicken kebabs blended with brown onions, royal spices and mint.",
    price: "Rs. 950",
    category: 'bbq',
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 'b3',
    name: "Grilled Mutton Chops",
    description: "Prime mutton ribs marinated with raw papaya, roasted cumin and live charcoal smoke.",
    price: "Rs. 2,150",
    category: 'bbq',
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 'b4',
    name: "Charcoal Fish Tikka",
    description: "Fresh boneless fish fillets spiced with carom seeds (ajwain), lemon and roasted ground masala.",
    price: "Rs. 1,450",
    category: 'bbq',
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
  },

  // Rice
  {
    id: 'r1',
    name: "Zaify's Special Dum Biryani",
    description: "Fragrant aged sella basmati rice layered with spiced chicken, mint leaves, saffron and prunes.",
    price: "Rs. 890",
    category: 'rice',
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 'r2',
    name: "Mutton Kabuli Pulao",
    description: "Traditional Afghan style long rice enriched with stock, glazed sweet carrots and golden raisins.",
    price: "Rs. 1,590",
    category: 'rice',
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 'r3',
    name: "Chinese Chicken Fried Rice",
    description: "Wok-tossed aromatic rice with crisp garden vegetables, shredded chicken and light soy seasoning.",
    price: "Rs. 690",
    category: 'rice',
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
  },

  // Drinks & Desserts
  {
    id: 'd1',
    name: "Fresh Mint Margarita",
    description: "Handcrafted chilled drink with muddled organic mint, fresh lime juice and sparkling soda.",
    price: "Rs. 380",
    category: 'drinks',
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    popular: true,
  },
  {
    id: 'd2',
    name: "Traditional Kulfa Matka Kheer",
    description: "Rich slow-cooked rice dessert infused with condensed milk, crushed pistachios and saffron.",
    price: "Rs. 420",
    category: 'drinks',
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 'd3',
    name: "Zaify's Kashmiri Pink Chai",
    description: "Traditional slow-brewed pink tea with clotted cream, crushed green pistachios and almonds.",
    price: "Rs. 280",
    category: 'drinks',
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 'd4',
    name: "Fresh Seasonal Fruit Shake",
    description: "Thick creamy shake blended with fresh chilled seasonal fruits and natural milk.",
    price: "Rs. 390",
    category: 'drinks',
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: "Signature Desi Murgh Karahi",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g2',
    title: "Live Charcoal BBQ Skewers",
    category: "Grills",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g3',
    title: "Zaify's Saffron Dum Biryani",
    category: "Rice Specialties",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g4',
    title: "Tandoori Fresh Roti & Roghani Naan",
    category: "Clay Oven",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g5',
    title: "Welcoming & Comfortable Dining",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g6',
    title: "Tender Chicken Malai Boti",
    category: "BBQ",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g7',
    title: "Chilled Fresh Mint Cooler",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 'g8',
    title: "Artisanal Dessert Treat",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
  },
];
