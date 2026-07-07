import type { Experiment } from "@/types/experiment"

export const experiments: Experiment[] = [
  {
    slug: "kinetic-type",
    title: { en: "Kinetic Type", id: "Tipografi Kinetik" },
    summary: {
      en: "Letters shift with pointer movement while the words stay readable.",
      id: "Huruf bergerak mengikuti pointer tanpa membuat teks sulit dibaca.",
    },
    category: { en: "Typography & motion", id: "Tipografi & motion" },
    accent: "#4f7cff",
    preview: { en: "MOVE / TYPE", id: "GERAK / TIPE" },
  },
  {
    slug: "image-distortion",
    title: { en: "Image Distortion", id: "Distorsi Gambar" },
    summary: {
      en: "Layered color and movement create a shader-like image response.",
      id: "Lapisan warna dan gerakan menghasilkan respons gambar yang terasa seperti shader.",
    },
    category: { en: "Image & feedback", id: "Gambar & feedback" },
    accent: "#ff6b8a",
    preview: { en: "REFRACT", id: "REFRAKSI" },
  },
  {
    slug: "particle-field",
    title: { en: "Particle Field", id: "Medan Partikel" },
    summary: {
      en: "Particles move away from the pointer, then settle back into place.",
      id: "Partikel menjauh dari pointer, lalu perlahan kembali ke posisinya.",
    },
    category: { en: "Pointer response", id: "Respons pointer" },
    accent: "#5ce1c6",
    preview: { en: "GRAVITY", id: "GRAVITASI" },
  },
  {
    slug: "spring-controls",
    title: { en: "Spring Controls", id: "Kontrol Pegas" },
    summary: {
      en: "Controls that respond with weight, momentum, and a natural return.",
      id: "Kontrol yang terasa memiliki bobot, momentum, dan gerakan kembali yang alami.",
    },
    category: { en: "Motion behavior", id: "Perilaku motion" },
    accent: "#ffae45",
    preview: { en: "DRAG ME", id: "GESER" },
  },
]
