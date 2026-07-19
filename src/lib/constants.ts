export const BACKGROUND_MUSIC_YOUTUBE_ID = "2e0BMACvymo";
export const BACKGROUND_MUSIC_YOUTUBE_URL =
  "https://www.youtube.com/watch?v=2e0BMACvymo";
export const BACKGROUND_MUSIC_START_SECONDS = 15;

export const GROOM_NAME = "Ammar Fauzan";
export const WEDDING_TITLE = "The Wedding of Ammar Fauzan";

export const WEDDING_DATE = "Saturday, 15 November 2026";

export const WEDDING_QUOTE =
  "A new chapter begins — blessed by family, guided by faith, and filled with gratitude.";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#groom", label: "Groom" },
  { href: "#event", label: "Event" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#wishes", label: "Wishes" },
  { href: "#gift", label: "Gift" },
] as const;

export const GROOM_PROFILE = {
  name: GROOM_NAME,
  description:
    "A gentle soul with a warm smile, devoted to family and guided by faith and tradition.",
  parents: {
    father: "Bapak [Nama Ayah]",
    mother: "Ibu [Nama Ibu]",
  },
  photo: "/images/groom-placeholder.svg",
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
  { src: "/images/gallery-1.svg", alt: "Wedding moment 1" },
  { src: "/images/gallery-2.svg", alt: "Wedding moment 2" },
  { src: "/images/gallery-3.svg", alt: "Wedding moment 3" },
  { src: "/images/gallery-4.svg", alt: "Wedding moment 4" },
  { src: "/images/gallery-5.svg", alt: "Wedding moment 5" },
  { src: "/images/gallery-6.svg", alt: "Wedding moment 6" },
] as const;

export const GIFT_INFO = {
  bankName: "Bank [Nama Bank]",
  accountName: GROOM_NAME,
  accountNumber: "1234567890",
  qrisLabel: "Scan QRIS",
} as const;

export const CLOSING = {
  thankYou:
    "Thank you for being part of this special day. Your presence, prayers, and warm wishes mean the world to us.",
  bugisClosing:
    "Matoanna bise' ri kalawa' — semoga kebahagiaan kita senantiasa diberkahi.",
} as const;
