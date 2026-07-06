import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "senja-solusi",
    title: "Senja Solusi",
    summary: {
      en: "A one-page website built around a bold creative-company identity and the promise of bringing ideas to life.",
      id: "Website satu halaman dengan identitas perusahaan kreatif yang berani dan janji untuk menghidupkan berbagai ide.",
    },
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
          en: "A loud digital entrance for a creative company.",
          id: "Pintu masuk digital yang berani untuk perusahaan kreatif.",
        },
        body: {
          en: "The experience is built around a single, high-impact landing page where typography carries the identity and guides visitors through the company story.",
          id: "Pengalaman dibangun melalui landing page berdampak tinggi, dengan tipografi sebagai pembawa identitas sekaligus pemandu cerita perusahaan.",
        },
      },
      {
        label: { en: "Interface direction", id: "Arah antarmuka" },
        title: {
          en: "Type becomes the primary visual system.",
          id: "Tipografi menjadi sistem visual utama.",
        },
        body: {
          en: "Oversized headlines, a restrained black canvas, and a focused orange accent create hierarchy without relying on a dense collection of interface components.",
          id: "Headline besar, kanvas hitam yang tenang, dan aksen jingga terarah membentuk hierarki tanpa bergantung pada kumpulan komponen yang padat.",
        },
      },
    ],
  },
  {
    slug: "noovoleum",
    title: "Noovoleum",
    summary: {
      en: "A mission-led website explaining how technology and AI support used cooking oil collection from households and small producers.",
      id: "Website berbasis misi yang menjelaskan peran teknologi dan AI dalam pengumpulan minyak jelantah dari rumah tangga serta produsen kecil.",
    },
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
          en: "Making a circular-energy mission easy to understand.",
          id: "Membuat misi energi sirkular lebih mudah dipahami.",
        },
        body: {
          en: "The website introduces Noovoleum's used cooking oil collection ecosystem through a direct mission statement, branded illustration, and product-focused storytelling.",
          id: "Website memperkenalkan ekosistem pengumpulan minyak jelantah Noovoleum melalui pernyataan misi yang langsung, ilustrasi khas, dan cerita yang berfokus pada produk.",
        },
      },
      {
        label: { en: "Interface direction", id: "Arah antarmuka" },
        title: {
          en: "A visual system rooted in the product mission.",
          id: "Sistem visual yang berakar pada misi produk.",
        },
        body: {
          en: "Green-led surfaces, large brand moments, and illustrated collection steps connect the interface to sustainability without losing product clarity.",
          id: "Permukaan hijau, momen brand berskala besar, dan tahapan berilustrasi menghubungkan antarmuka dengan keberlanjutan tanpa mengurangi kejelasan produk.",
        },
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
