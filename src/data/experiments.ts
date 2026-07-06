import type { Experiment } from "@/types/experiment"

export const experiments: Experiment[] = [
  {
    slug: "kinetic-type",
    title: { en: "Kinetic Type", id: "Tipografi Kinetik" },
    summary: {
      en: "Typography that responds to pointer position without sacrificing readability.",
      id: "Tipografi yang merespons posisi pointer tanpa mengorbankan keterbacaan.",
    },
    category: { en: "Motion system", id: "Sistem motion" },
    accent: "#4f7cff",
    preview: { en: "MOVE / TYPE", id: "GERAK / TIPE" },
  },
  {
    slug: "image-distortion",
    title: { en: "Image Distortion", id: "Distorsi Gambar" },
    summary: {
      en: "A layered media treatment inspired by shader displacement and RGB splitting.",
      id: "Pengolahan media berlapis yang terinspirasi oleh shader displacement dan pemisahan RGB.",
    },
    category: { en: "Visual interaction", id: "Interaksi visual" },
    accent: "#ff6b8a",
    preview: { en: "REFRACT", id: "REFRAKSI" },
  },
  {
    slug: "particle-field",
    title: { en: "Particle Field", id: "Medan Partikel" },
    summary: {
      en: "A responsive field that bends around the cursor and settles when idle.",
      id: "Medan responsif yang melengkung mengikuti kursor dan kembali tenang saat diam.",
    },
    category: { en: "Pointer study", id: "Studi pointer" },
    accent: "#5ce1c6",
    preview: { en: "GRAVITY", id: "GRAVITASI" },
  },
  {
    slug: "spring-controls",
    title: { en: "Spring Controls", id: "Kontrol Pegas" },
    summary: {
      en: "Tactile controls with momentum, constraints, and natural spring feedback.",
      id: "Kontrol taktil dengan momentum, batas gerak, dan respons pegas yang alami.",
    },
    category: { en: "Interaction physics", id: "Fisika interaksi" },
    accent: "#ffae45",
    preview: { en: "DRAG ME", id: "GESER" },
  },
]
