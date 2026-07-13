/**
 * Photography sources.
 *
 * `real()` points at Hayden Furniture Depot's own showroom photography,
 * pulled from haydendepot.com and hosted locally in /public/images/real.
 * `unsplash()` is a stock placeholder used only where no real photo of that
 * category exists yet (dining room, home office, statement mirrors, pendant
 * lighting close-up) — swap these for real photos as they become available.
 */

function real(filename: string) {
  return `/images/real/${filename}`;
}

function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export const heroImage = {
  src: real("living-loft-window.jpg"),
  alt: "Hayden Furniture Depot showroom vignette: a tan leather sofa beneath exposed brick and warm loft windows",
};

export const roomCategoryImages = {
  livingRoom: real("living-fireplace-bright.jpg"),
  bedroom: real("bedroom-tufted.jpg"),
  diningRoom: unsplash("1617806118233-18e1de247200"), // no real dining-room photo available yet
  mattresses: real("bedroom-tufted.jpg"),
  lighting: real("living-brick-blue-sofa.jpg"),
  artwork: real("living-bison-art.jpg"),
  homeDecor: real("coffee-table-detail.jpg"),
  accentFurniture: real("living-local-shelf.jpg"),
  homeOffice: unsplash("1524758631624-e2822e304c36"), // no real home-office photo available yet
};

export const shopByRoom = [
  { room: "Living Room", image: real("living-fireplace-bright.jpg") },
  { room: "Bedroom", image: real("bedroom-tufted.jpg") },
  { room: "Dining Room", image: unsplash("1617104551722-3b2d51366400") }, // no real dining-room photo available yet
  { room: "Home Office", image: unsplash("1524758631624-e2822e304c36") }, // no real home-office photo available yet
];

export const featuredCollections = [
  {
    title: "The Coeur d'Alene Living Collection",
    subtitle: "Exposed brick, warm leather, loft-style light",
    image: real("living-loft-window.jpg"),
  },
  {
    title: "Blue Velvet & Brick Collection",
    subtitle: "A tufted loveseat against reclaimed brick",
    image: real("living-brick-blue-sofa.jpg"),
  },
  {
    title: "Serene Bedroom Collection",
    subtitle: "Restful tones for a better night's sleep",
    image: real("bedroom-tufted.jpg"),
  },
  {
    title: "Gallery Wall & Accents Collection",
    subtitle: "Statement art paired with leather seating",
    image: real("living-bison-art.jpg"),
  },
  {
    title: "Fireside Living Collection",
    subtitle: "Bright, open, and built for gathering",
    image: real("living-fireplace-bright.jpg"),
  },
];

export const decorGrid = [
  { title: "Wall Art & Gallery Walls", image: real("living-bison-art.jpg") },
  { title: "Accent Décor", image: real("coffee-table-detail.jpg") },
  { title: "Statement Mirrors", image: unsplash("1631679706909-1844bbd07221") }, // no real mirror photo available yet
  { title: "Framed Artwork", image: real("living-brick-blue-sofa.jpg") },
  { title: "Pendant & Ambient Lighting", image: unsplash("1600585152220-90363fe7e115") }, // no real lighting close-up available yet
  { title: "Living Room Styling", image: real("living-local-shelf.jpg") },
];

export const aboutImages = {
  story: real("living-loft-window.jpg"),
  community: real("living-local-shelf.jpg"),
  delivery: real("sofa-detail-cream.jpg"),
  showroom: real("living-fireplace-bright.jpg"),
};

export const contactImage = real("sofa-detail-cream.jpg");
