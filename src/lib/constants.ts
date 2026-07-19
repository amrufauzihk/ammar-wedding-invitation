export const BACKGROUND_MUSIC_YOUTUBE_ID = "2e0BMACvymo";
export const BACKGROUND_MUSIC_YOUTUBE_URL =
  "https://www.youtube.com/watch?v=2e0BMACvymo";
export const BACKGROUND_MUSIC_START_SECONDS = 15;

export const COUPLE = {
  groom: "Ammar Fauzan",
  bride: "No Name",
} as const;

export const WEDDING_DATE = "Saturday, 15 November 2026";

export const WEDDING_QUOTE =
  "Two souls, one heart — united in love, blessed by family, and guided by faith.";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#couple", label: "Couple" },
  { href: "#event", label: "Event" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#wishes", label: "Wishes" },
  { href: "#gift", label: "Gift" },
] as const;

export const BRIDE_GROOM = {
  groom: {
    name: COUPLE.groom,
    description:
      "A gentle soul with a warm smile, devoted to family and guided by faith and tradition.",
    parents: {
      father: "Bapak [Nama Ayah]",
      mother: "Ibu [Nama Ibu]",
    },
    photo: "/images/groom-placeholder.svg",
  },
  bride: {
    name: COUPLE.bride,
    description:
      "Graceful and kind-hearted, bringing light and joy to every moment she shares.",
    parents: {
      father: "Bapak [Nama Ayah]",
      mother: "Ibu [Nama Ibu]",
    },
    photo: "/images/bride-placeholder.svg",
  },
} as const;

export const EVENTS = [
  {
    id: "akad",
    title: "Akad Nikah",
    date: "Saturday, 15 November 2026",
    time: "08:00 WITA",
    location: "[Nama Masjid / Venue Akad]",
    address: "[Alamat lengkap akad nikah]",
    mapsUrl: "https://maps.google.com/?q=Makassar",
  },
  {
    id: "reception",
    title: "Wedding Reception",
    date: "Saturday, 15 November 2026",
    time: "11:00 – 14:00 WITA",
    location: "[Nama Venue Resepsi]",
    address: "[Alamat lengkap resepsi]",
    mapsUrl: "https://maps.google.com/?q=Makassar",
  },
] as const;

export const LOVE_STORY = [
  {
    year: "2019",
    title: "First Meet",
    description:
      "Our paths crossed unexpectedly, and a simple conversation blossomed into something beautiful.",
  },
  {
    year: "2021",
    title: "Relationship",
    description:
      "Through laughter, patience, and shared dreams, our bond grew deeper with each passing day.",
  },
  {
    year: "2025",
    title: "Engagement",
    description:
      "With the blessings of our families, we promised to walk life's journey together forever.",
  },
  {
    year: "2026",
    title: "Wedding",
    description:
      "Today we celebrate love — a union of two hearts, two families, and one eternal promise.",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery-1.svg", alt: "Couple moment 1" },
  { src: "/images/gallery-2.svg", alt: "Couple moment 2" },
  { src: "/images/gallery-3.svg", alt: "Couple moment 3" },
  { src: "/images/gallery-4.svg", alt: "Couple moment 4" },
  { src: "/images/gallery-5.svg", alt: "Couple moment 5" },
  { src: "/images/gallery-6.svg", alt: "Couple moment 6" },
] as const;

export const GIFT_INFO = {
  bankName: "Bank [Nama Bank]",
  accountName: COUPLE.groom,
  accountNumber: "1234567890",
  qrisLabel: "Scan QRIS",
} as const;

export const CLOSING = {
  thankYou:
    "Thank you for being part of our special day. Your presence, prayers, and warm wishes mean the world to us.",
  bugisClosing:
    "Matoanna bise' ri kalawa' — semoga kebahagiaan kita senantiasa diberkahi.",
} as const;
