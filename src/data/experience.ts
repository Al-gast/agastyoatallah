import type { Experience } from "@/types/experience"

export const experienceEntries: Experience[] = [
  {
    id: "mediatama-kreasi-informatika",
    company: "PT. Mediatama Kreasi Informatika",
    role: { en: "Full-stack Developer", id: "Full-stack Developer" },
    location: {
      en: "Bandung, West Java, Indonesia",
      id: "Bandung, Jawa Barat, Indonesia",
    },
    startDate: "2024-03",
    endDate: "2026-06",
    summary: {
      en: "I worked end to end on applications for government services and internal operations. The work covered client discussions, workflow analysis, database and API design, UI implementation, testing, documentation, and post-release support.",
      id: "Di sini saya mengerjakan aplikasi untuk layanan pemerintah dan operasional internal secara end to end. Pekerjaannya mencakup diskusi kebutuhan dengan klien, memahami proses bisnis, merancang database dan API, membangun UI, melakukan testing, menulis dokumentasi, dan menangani support setelah rilis.",
    },
    contributions: [
      {
        en: "Served as Technical PIC for JFPKPM at the Ministry of Investment and Downstreaming / BKPM, handling most modules across frontend and backend.",
        id: "Menjadi Technical PIC untuk JFPKPM milik Kementerian Investasi dan Hilirisasi / BKPM, sekaligus menangani sebagian besar modul frontend dan backend.",
      },
      {
        en: "Translated client requirements and operational workflows into database structures, REST APIs, interface flows, and tested application features.",
        id: "Menerjemahkan kebutuhan klien dan alur operasional menjadi struktur database, REST API, alur antarmuka, serta fitur aplikasi yang teruji.",
      },
      {
        en: "Handled full-stack development for MKI-Hub and PRODIGY E-Procurement, and contributed to KOMPLEKITA as a backend developer.",
        id: "Menangani pengembangan full-stack untuk MKI-Hub dan PRODIGY E-Procurement, serta berkontribusi di KOMPLEKITA sebagai backend developer.",
      },
    ],
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "Go", "Svelte.js"],
    relatedProjectSlugs: ["jfpkpm", "komplekita"],
  },
  {
    id: "senja-solutions",
    company: "PT. Senja Solutions",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    employmentType: { en: "Full-time", id: "Full-time" },
    location: { en: "Bandung, Indonesia", id: "Bandung, Indonesia" },
    startDate: "2022-12",
    endDate: "2023-11",
    summary: {
      en: "My work focused on frontend development for KeDA Tech, Noovoleum / uCollect, and Senja Solutions. I built responsive screens, connected interfaces to REST APIs, and worked with designers and backend developers to keep the experience consistent across devices.",
      id: "Fokus saya ada di frontend untuk KeDA Tech, Noovoleum / uCollect, dan Senja Solutions. Saya membangun halaman yang responsif, menghubungkan UI dengan REST API, dan bekerja bersama designer serta backend developer agar pengalaman tetap konsisten di berbagai perangkat.",
    },
    contributions: [
      {
        en: "Built responsive and interactive interfaces from product and business requirements.",
        id: "Membangun antarmuka yang responsif dan interaktif berdasarkan kebutuhan produk dan bisnis.",
      },
      {
        en: "Implemented dynamic, data-driven screens and integrated them with REST APIs.",
        id: "Mengimplementasikan halaman dinamis berbasis data dan menghubungkannya dengan REST API.",
      },
      {
        en: "Worked with designers, backend developers, and project stakeholders to maintain UI consistency, accessibility, and reusable component standards.",
        id: "Bekerja bersama designer, backend developer, dan stakeholder proyek untuk menjaga konsistensi UI, aksesibilitas, dan standar reusable component.",
      },
    ],
    stack: ["Vue.js", "Tailwind CSS", "REST API"],
    relatedProjectSlugs: ["senja-solusi", "noovoleum"],
  },
  {
    id: "dumbways-indonesia",
    company: "DumbWays Indonesia",
    role: {
      en: "Full-stack Developer Trainee",
      id: "Full-stack Developer Trainee",
    },
    employmentType: { en: "Training program", id: "Program pelatihan" },
    startDate: "2022-07",
    endDate: "2022-11",
    summary: {
      en: "This is where I built my full-stack foundation through hands-on projects covering frontend, backend, databases, API integration, and deployment.",
      id: "Di sinilah saya membangun fondasi full-stack melalui project praktik yang mencakup frontend, backend, database, integrasi API, dan deployment.",
    },
    contributions: [
      {
        en: "Completed an intensive full-stack program with integrated project work across React, Go, PostgreSQL, and deployment.",
        id: "Menyelesaikan program full-stack intensif dengan project terintegrasi menggunakan React, Go, PostgreSQL, dan deployment.",
      },
    ],
    stack: ["React.js", "Tailwind CSS", "Go", "PostgreSQL"],
    relatedProjectSlugs: [],
  },
]
