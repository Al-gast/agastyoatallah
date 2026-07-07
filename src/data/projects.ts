import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "senja-solusi",
    title: "Senja Solusi",
    summary: {
      en: "A focused company website where oversized typography, motion, and a dark visual system carry the brand.",
      id: "Website perusahaan yang mengandalkan tipografi besar, motion, dan visual gelap untuk membawa karakter brand.",
    },
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    stack: ["Vue.js", "Tailwind CSS"],
    liveUrl: "https://senja.co.uk",
    cover: {
      src: "/senja.png",
      alt: { en: "Senja Solusi website", id: "Website Senja Solusi" },
      width: 1920,
      height: 911,
    },
    gallery: [
      {
        src: "/senja.png",
        alt: {
          en: "Senja Solusi landing page with oversized typography",
          id: "Landing page Senja Solusi dengan tipografi berukuran besar",
        },
        width: 1920,
        height: 911,
      },
    ],
    theme: {
      accent: "#ff7a21",
      surface: "#15100d",
      foreground: "#fff8f2",
    },
    narrative: [
      {
        label: { en: "Overview", id: "Ringkasan" },
        title: {
          en: "A concise site with a strong first impression.",
          id: "Website ringkas dengan kesan pertama yang kuat.",
        },
        body: {
          en: "The website introduces Senja Solutions through one focused flow. Large type leads the hierarchy, while motion keeps the page lively without making the content harder to follow.",
          id: "Website ini memperkenalkan Senja Solutions melalui satu alur yang fokus. Tipografi besar membentuk hierarki, sementara motion membuat halaman tetap hidup tanpa mengganggu isi utamanya.",
        },
      },
      {
        label: { en: "Interface direction", id: "Arah antarmuka" },
        title: {
          en: "Let typography do most of the talking.",
          id: "Membiarkan tipografi menjadi elemen utama.",
        },
        body: {
          en: "Oversized headlines, a restrained dark canvas, and a focused orange accent create a clear visual rhythm without relying on a dense set of components.",
          id: "Headline besar, latar gelap, dan aksen jingga membentuk ritme visual yang jelas tanpa membutuhkan terlalu banyak komponen.",
        },
      },
    ],
  },
  {
    slug: "noovoleum",
    title: "Noovoleum",
    summary: {
      en: "A responsive product website for Noovoleum's used cooking oil collection ecosystem, built with Vue.js and Tailwind CSS.",
      id: "Website produk responsif untuk ekosistem pengumpulan minyak jelantah Noovoleum, dibangun dengan Vue.js dan Tailwind CSS.",
    },
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    stack: ["Vue.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://www.noovoleum.com/",
    cover: {
      src: "/noovoleum.png",
      alt: { en: "Noovoleum website", id: "Website Noovoleum" },
      width: 1920,
      height: 913,
    },
    gallery: [
      {
        src: "/noovoleum.png",
        alt: {
          en: "Noovoleum mission and UCO collection interface",
          id: "Antarmuka misi dan pengumpulan minyak jelantah Noovoleum",
        },
        width: 1920,
        height: 913,
      },
    ],
    theme: {
      accent: "#79b73b",
      surface: "#10150d",
      foreground: "#f7fff0",
    },
    narrative: [
      {
        label: { en: "Overview", id: "Ringkasan" },
        title: {
          en: "Explaining a new collection model without making it feel complicated.",
          id: "Menjelaskan cara pengumpulan baru tanpa membuatnya terasa rumit.",
        },
        body: {
          en: "The website introduces Noovoleum's used cooking oil collection service through a direct explanation, branded illustrations, and a step-by-step product story.",
          id: "Website ini memperkenalkan layanan pengumpulan minyak jelantah Noovoleum melalui penjelasan yang langsung, ilustrasi brand, dan alur produk yang bertahap.",
        },
      },
      {
        label: { en: "Interface direction", id: "Arah antarmuka" },
        title: {
          en: "A friendly visual system for a practical service.",
          id: "Visual yang ramah untuk layanan yang praktis.",
        },
        body: {
          en: "Green surfaces, clear content blocks, and illustrated collection steps connect the sustainability message to a service people can understand and use.",
          id: "Warna hijau, pembagian konten yang jelas, dan tahapan berilustrasi menghubungkan pesan keberlanjutan dengan layanan yang mudah dipahami dan digunakan.",
        },
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
