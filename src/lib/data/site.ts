export const site = {
  name: "Hayden Furniture Depot",
  tagline: "Beautiful Furniture. Inspired Living.",
  subheading:
    "Discover quality furniture, home décor, artwork, and lighting to create a home you'll love.",
  phone: "+1 208-762-6854",
  phoneHref: "tel:+12087626854",
  email: "HaydenDepot@gmail.com",
  address: {
    line1: "310 W Haycraft Ave",
    city: "Coeur d'Alene",
    state: "ID",
    zip: "83815",
  },
  hours: [
    { days: "Monday – Saturday", time: "11:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/HaydenDepot/",
    instagram: "https://www.instagram.com/the_hayden_furniture_depot/?hl=en",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=310+W+Haycraft+Ave,+Coeur+d'Alene,+ID+83815&output=embed",
};

export const furnitureMegaMenu = [
  { name: "Living Room", href: "/furniture/living-room", description: "Sofas, sectionals & recliners" },
  { name: "Bedroom", href: "/furniture/bedroom", description: "Beds, dressers & nightstands" },
  { name: "Dining Room", href: "/furniture/dining-room", description: "Tables, chairs & servers" },
  { name: "Mattresses", href: "/furniture/mattresses", description: "Rest easy, every night" },
  { name: "Home Office", href: "/furniture/home-office", description: "Desks, chairs & storage" },
  { name: "Accent Furniture", href: "/furniture/accent-furniture", description: "Statement pieces" },
];

export const decorMegaMenu = [
  { name: "Artwork", href: "/home-decor/artwork", description: "Framed prints & originals" },
  { name: "Lighting", href: "/home-decor/lighting", description: "Floor, table & pendant" },
  { name: "Decorative Accessories", href: "/home-decor/accessories", description: "Mirrors, rugs & pillows" },
  { name: "Seasonal Collections", href: "/home-decor/seasonal", description: "Refresh every season" },
];

export const mainNav = [
  { name: "Home", href: "/" },
  { name: "Furniture", href: "/collections", megaMenu: furnitureMegaMenu },
  { name: "Home Décor", href: "/home-decor", megaMenu: decorMegaMenu },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
