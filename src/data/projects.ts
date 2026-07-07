import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "jfpkpm",
    title: "JFPKPM",
    summary: {
      en: "A government workforce management system for the Ministry of Investment and Downstreaming / BKPM, where I contributed as Technical PIC and Full-stack Developer.",
      id: "Sistem pengelolaan jabatan fungsional untuk Kementerian Investasi dan Hilirisasi / BKPM, dengan kontribusi saya sebagai Technical PIC dan Full-stack Developer.",
    },
    year: "2024—2026",
    role: {
      en: "Technical PIC & Full-stack Developer",
      id: "Technical PIC & Full-stack Developer",
    },
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "REST API"],
    liveUrl: "https://jfpkpm.bkpm.go.id/",
    cover: {
      src: "/jfpkpm.png",
      alt: {
        en: "JFPKPM dashboard landing page for the Ministry of Investment and Downstreaming / BKPM",
        id: "Landing page dashboard JFPKPM Kementerian Investasi dan Hilirisasi / BKPM",
      },
      width: 1920,
      height: 958,
    },
    gallery: [
      {
        src: "/jfpkpm.png",
        alt: {
          en: "JFPKPM public homepage with publication cards and service navigation",
          id: "Homepage publik JFPKPM dengan kartu publikasi dan navigasi layanan",
        },
        width: 1920,
        height: 958,
      },
    ],
    theme: {
      accent: "#0aa998",
      surface: "#071715",
      foreground: "#f2fffb",
    },
    narrative: [
      {
        label: { en: "Overview", id: "Ringkasan" },
        title: {
          en: "A government service platform with many moving parts.",
          id: "Platform layanan pemerintah dengan alur yang cukup kompleks.",
        },
        body: {
          en: "JFPKPM supports the management of functional roles for the Ministry of Investment and Downstreaming / BKPM. The work required understanding the service flow, clarifying requirements with the client, and translating operational needs into application features.",
          id: "JFPKPM mendukung pengelolaan jabatan fungsional di Kementerian Investasi dan Hilirisasi / BKPM. Pekerjaan ini membutuhkan pemahaman alur layanan, klarifikasi kebutuhan bersama klien, dan penerjemahan proses operasional menjadi fitur aplikasi.",
        },
      },
      {
        label: { en: "Role", id: "Peran" },
        title: {
          en: "Technical PIC across discussion, planning, and implementation.",
          id: "Technical PIC dari diskusi, perencanaan, sampai implementasi.",
        },
        body: {
          en: "I served as the Technical PIC while also contributing as a Full-stack Developer. My responsibilities covered regular client meetings, requirement clarification, business process analysis, technical solution design, and coordination around how features should be built.",
          id: "Saya berperan sebagai Technical PIC sekaligus berkontribusi sebagai Full-stack Developer. Tanggung jawab saya mencakup meeting rutin dengan klien, klarifikasi kebutuhan, analisis proses bisnis, desain solusi teknis, dan koordinasi bagaimana fitur sebaiknya dibangun.",
        },
      },
      {
        label: { en: "Contribution", id: "Kontribusi" },
        title: {
          en: "Connecting database, API, backend logic, and interface work.",
          id: "Menghubungkan database, API, backend logic, dan pekerjaan antarmuka.",
        },
        body: {
          en: "The implementation work included database table design, backend service development, REST API implementation, frontend UI development, feature testing, and post-development support after the features were delivered.",
          id: "Pekerjaan implementasi mencakup desain tabel database, pengembangan backend service, implementasi REST API, pembangunan UI frontend, testing fitur, dan support setelah fitur selesai dikembangkan.",
        },
      },
    ],
  },
  {
    slug: "fluentstack",
    title: "FluentStack",
    displayTitle: ["Fluent", "Stack"],
    summary: {
      en: "A self-built e-learning platform for tech skills and English, combining roadmap-based lessons, quizzes, practice blocks, and real user progress tracking.",
      id: "Platform e-learning buatan sendiri untuk belajar skill teknologi dan bahasa Inggris, dengan roadmap, lesson, quiz, practice block, dan progress pengguna yang tersimpan secara real.",
    },
    role: {
      en: "Solo Product Engineer & Full-stack Developer",
      id: "Solo Product Engineer & Full-stack Developer",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "Auth",
    ],
    liveUrl: "https://fluentstack.vercel.app/",
    cover: {
      src: "/fluentstack.png",
      alt: {
        en: "FluentStack e-learning homepage with roadmap, progress simulation, and learning tracks",
        id: "Homepage e-learning FluentStack dengan roadmap, simulasi progres, dan track belajar",
      },
      width: 1920,
      height: 957,
    },
    gallery: [
      {
        src: "/fluentstack.png",
        alt: {
          en: "FluentStack landing page showing technology and English learning tracks",
          id: "Landing page FluentStack yang menampilkan track belajar teknologi dan bahasa Inggris",
        },
        width: 1920,
        height: 957,
      },
    ],
    theme: {
      accent: "#22c7f6",
      surface: "#08111b",
      foreground: "#eff7ff",
    },
    narrative: [
      {
        label: { en: "Overview", id: "Ringkasan" },
        title: {
          en: "A passion project for structured, reading-first learning.",
          id: "Passion project untuk belajar secara terarah lewat membaca.",
        },
        body: {
          en: "FluentStack is an e-learning platform I built to help people learn technology skills and English for tech careers through guided roadmaps, short lessons, quizzes, and hands-on practice blocks.",
          id: "FluentStack adalah platform e-learning yang saya bangun untuk membantu orang belajar skill teknologi dan English for tech careers melalui roadmap terarah, lesson singkat, quiz, dan practice block.",
        },
      },
      {
        label: { en: "Product direction", id: "Arah produk" },
        title: {
          en: "Designing the learning path, not just the interface.",
          id: "Merancang alur belajar, bukan hanya antarmuka.",
        },
        body: {
          en: "I researched the curriculum for each roadmap myself, then shaped the content into tracks that are easier to follow for learners who prefer reading before practicing.",
          id: "Saya meriset sendiri kurikulum untuk setiap roadmap, lalu menyusunnya menjadi track yang lebih mudah diikuti oleh pengguna yang nyaman belajar lewat membaca sebelum praktik.",
        },
      },
      {
        label: { en: "Full-stack build", id: "Pengembangan full-stack" },
        title: {
          en: "From auth and data models to progress tracking.",
          id: "Dari auth dan data model sampai progress tracking.",
        },
        body: {
          en: "I designed and implemented the product end to end with Next.js, TypeScript, Tailwind CSS, Supabase, Prisma, PostgreSQL, and authentication. User progress, XP, streaks, and quiz scores are stored as real user data in Supabase.",
          id: "Saya merancang dan membangun produk ini secara end to end dengan Next.js, TypeScript, Tailwind CSS, Supabase, Prisma, PostgreSQL, dan authentication. Progress, XP, streak, dan skor quiz tersimpan sebagai data pengguna sungguhan di Supabase.",
        },
      },
      {
        label: { en: "Interface system", id: "Sistem antarmuka" },
        title: {
          en: "A learning dashboard that makes progress visible.",
          id: "Dashboard belajar yang membuat progress mudah terlihat.",
        },
        body: {
          en: "The interface combines a focused dark learning environment, track cards, progress indicators, and theme options so learners can see where they are and continue from the next useful step.",
          id: "Antarmukanya menggabungkan lingkungan belajar gelap yang fokus, kartu track, indikator progres, dan pilihan tema agar pengguna bisa melihat posisi belajar mereka dan lanjut ke langkah berikutnya.",
        },
      },
    ],
  },
  {
    slug: "komplekita",
    title: "KOMPLEKITA",
    summary: {
      en: "A residential management application where I contributed as a Backend Developer, focusing on database tables, REST API endpoints, data flows, testing, and Postman documentation.",
      id: "Aplikasi pengelolaan hunian tempat saya berkontribusi sebagai Backend Developer, dengan fokus pada tabel database, endpoint REST API, alur data, testing, dan dokumentasi Postman.",
    },
    role: { en: "Backend Developer", id: "Backend Developer" },
    stack: ["AdonisJS", "PostgreSQL", "REST API", "Postman"],
    liveUrl: "https://komplekita.id/landing",
    cover: {
      src: "/komplekita.png",
      alt: {
        en: "KOMPLEKITA landing page for residential management",
        id: "Landing page KOMPLEKITA untuk pengelolaan hunian",
      },
      width: 1920,
      height: 958,
    },
    gallery: [
      {
        src: "/komplekita.png",
        alt: {
          en: "KOMPLEKITA public website with residential management hero section",
          id: "Website publik KOMPLEKITA dengan hero section pengelolaan hunian",
        },
        width: 1920,
        height: 958,
      },
    ],
    theme: {
      accent: "#2ea7f2",
      surface: "#071323",
      foreground: "#f2f8ff",
    },
    narrative: [
      {
        label: { en: "Overview", id: "Ringkasan" },
        title: {
          en: "Backend support for a residential management product.",
          id: "Dukungan backend untuk produk pengelolaan hunian.",
        },
        body: {
          en: "KOMPLEKITA is a residential management application for handling complex operational needs. My contribution focused on backend work that supported frontend and mobile application development.",
          id: "KOMPLEKITA adalah aplikasi pengelolaan hunian untuk membantu kebutuhan operasional kompleks. Kontribusi saya berfokus pada pekerjaan backend yang mendukung pengembangan frontend dan aplikasi mobile.",
        },
      },
      {
        label: { en: "Contribution", id: "Kontribusi" },
        title: {
          en: "Designing tables, endpoints, and data flows.",
          id: "Merancang tabel, endpoint, dan alur data.",
        },
        body: {
          en: "I worked on database table design, backend endpoint development, REST API implementation, and data flow integration so the client applications could consume the right data consistently.",
          id: "Saya mengerjakan desain tabel database, pengembangan endpoint backend, implementasi REST API, dan integrasi alur data agar aplikasi client bisa menggunakan data dengan konsisten.",
        },
      },
      {
        label: { en: "API quality", id: "Kualitas API" },
        title: {
          en: "Testing APIs and documenting them for other teams.",
          id: "Testing API dan mendokumentasikannya untuk tim lain.",
        },
        body: {
          en: "The work also included API testing and Postman documentation, making the backend easier to verify, integrate, and continue across frontend and mobile development.",
          id: "Pekerjaan ini juga mencakup testing API dan dokumentasi Postman, sehingga backend lebih mudah diverifikasi, diintegrasikan, dan dilanjutkan oleh pengembangan frontend maupun mobile.",
        },
      },
    ],
  },
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
