import "server-only"

import type { Locale } from "@/i18n/config"

export type Dictionary = {
  metadata: {
    title: string
    description: string
    labTitle: string
    labDescription: string
    experienceTitle: string
    experienceDescription: string
  }
  nav: {
    work: string
    lab: string
    experience: string
    about: string
    contact: string
    menu: string
    close: string
    primaryLabel: string
  }
  language: {
    label: string
    english: string
    indonesian: string
  }
  theme: {
    toLight: string
    toDark: string
  }
  hero: {
    kicker: string
    titleBefore: string
    titleEmphasis: string
    titleAfter: string
    intro: string
    explore: string
    conversation: string
    location: string
    focus: string
    scroll: string
  }
  work: {
    eyebrow: string
    heading: string
    intro: string
    selected: string
    read: string
  }
  lab: {
    eyebrow: string
    heading: string
    intro: string
    open: string
  }
  capabilities: {
    eyebrow: string
    heading: string
    intro: string
    items: Array<{ title: string; body: string }>
  }
  experience: {
    eyebrow: string
    heading: string
    intro: string
    viewAll: string
    emptyTitle: string
    emptyBody: string
    present: string
    relatedWork: string
    contribution: string
    stack: string
    pageEyebrow: string
    pageHeading: string
    pageIntro: string
    back: string
    workCta: string
    contactCta: string
  }
  about: {
    eyebrow: string
    location: string
    heading: string
    body: string
    hello: string
    principles: Array<{ title: string; body: string }>
  }
  contact: {
    eyebrow: string
    heading: string
    subheading: string
    preferEmail: string
  }
  form: {
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
  }
  footer: {
    role: string
    email: string
  }
  labPage: {
    eyebrow: string
    headingBefore: string
    headingEmphasis: string
    intro: string
    back: string
    enough: string
    seeWork: string
  }
  caseStudy: {
    eyebrow: string
    visit: string
    role: string
    year: string
    stack: string
    gallery: string
    outcome: string
    next: string
    sections: string
    notFoundEyebrow: string
    notFoundHeading: string
    returnWork: string
  }
  cursor: {
    view: string
  }
}

const en: Dictionary = {
  metadata: {
    title: "Agastyo Atallah | Frontend-focused Full-stack Developer",
    description:
      "Selected work and interface experiments by Agastyo Atallah, a frontend-focused full-stack developer based in Bandung, Indonesia.",
    labTitle: "Interface Lab | Agastyo Atallah",
    labDescription:
      "Interactive studies in motion, typography, image treatment, and interface physics.",
    experienceTitle: "Experience | Agastyo Atallah",
    experienceDescription:
      "Professional experience, contributions, and selected product work by Agastyo Atallah.",
  },
  nav: {
    work: "Work",
    lab: "Lab",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    primaryLabel: "Primary navigation",
  },
  language: {
    label: "Change language",
    english: "Switch to English",
    indonesian: "Switch to Indonesian",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  hero: {
    kicker: "Frontend-focused full-stack developer",
    titleBefore: "I build digital products that",
    titleEmphasis: "feel",
    titleAfter: "as good as they work.",
    intro:
      "I'm Agastyo, a software engineer in Bandung. I work across the stack, with a particular obsession for interfaces, interaction, and the details people actually touch.",
    explore: "Explore selected work",
    conversation: "Start a conversation",
    location: "Bandung, Indonesia",
    focus: "Interfaces / Systems / Products",
    scroll: "Scroll to explore",
  },
  work: {
    eyebrow: "01 / Selected work",
    heading: "Work that lives beyond the mockup.",
    intro: "Selected digital experiences, presented as products rather than thumbnails.",
    selected: "Selected work",
    read: "Read case study",
  },
  lab: {
    eyebrow: "02 / Interface lab",
    heading: "Small experiments. Serious attention to feel.",
    intro: "Live studies in motion, input, type, and visual response.",
    open: "Open the full lab",
  },
  capabilities: {
    eyebrow: "03 / What I bring",
    heading: "More than a list of tools.",
    intro:
      "A frontend specialty backed by the engineering range to ship complete products.",
    items: [
      {
        title: "Interface craft",
        body:
          "Responsive layouts, interaction design, motion systems, and the final polish that makes an interface feel intentional.",
      },
      {
        title: "Product engineering",
        body:
          "Translating product goals into maintainable components, clear states, and systems that can grow with a team.",
      },
      {
        title: "Full-stack delivery",
        body:
          "Connecting the interface to data, APIs, and deployment so the experience works beyond the presentation layer.",
      },
      {
        title: "Performance & access",
        body:
          "Treating speed, semantics, keyboard support, and reduced-motion paths as part of the design—not cleanup work.",
      },
    ],
  },
  experience: {
    eyebrow: "04 / Experience",
    heading: "The work behind the interface.",
    intro:
      "A chronological view of the roles, contributions, and product contexts that shaped how I build.",
    viewAll: "View full experience",
    emptyTitle: "The professional timeline is being curated.",
    emptyBody:
      "Verified roles, dates, and contributions will appear here once the details are ready.",
    present: "Present",
    relatedWork: "Related work",
    contribution: "Selected contributions",
    stack: "Technology",
    pageEyebrow: "Experience / Timeline",
    pageHeading: "Products are built in context.",
    pageIntro:
      "A closer look at the teams, responsibilities, and technical decisions behind the work.",
    back: "Back to the overview",
    workCta: "Explore selected work",
    contactCta: "Start a conversation",
  },
  about: {
    eyebrow: "05 / About",
    location: "Based in Bandung / Indonesia",
    heading: "Curious across the stack. Particular about the interface.",
    body:
      "I enjoy turning ambiguous product ideas into clear, responsive experiences. The browser is where I do my most expressive work, while full-stack knowledge helps me make better product decisions end to end.",
    hello: "Say hello",
    principles: [
      {
        title: "Start with the user's path.",
        body: "Interaction and hierarchy should make the next step feel obvious.",
      },
      {
        title: "Build the system, then the moment.",
        body: "Reusable foundations make expressive details easier to sustain.",
      },
      {
        title: "Polish includes performance.",
        body: "A beautiful interface should remain quick, inclusive, and resilient.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / Contact",
    heading: "Have something interesting in mind?",
    subheading: "Let's turn it into an interface people want to use.",
    preferEmail: "Prefer email?",
  },
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "Message",
    messagePlaceholder: "Tell me a little about the opportunity or project.",
    send: "Send message",
    sending: "Sending…",
    success: "Message sent. I'll get back to you soon.",
    error: "Something went wrong. Please email me directly instead.",
  },
  footer: {
    role: "Frontend-focused full-stack developer",
    email: "Email",
  },
  labPage: {
    eyebrow: "Interface Lab / 01—04",
    headingBefore: "Experiments for the part of an interface you can",
    headingEmphasis: "feel",
    intro:
      "Small, live studies where motion and input are treated as product material—not decoration.",
    back: "Back to the overview",
    enough: "Enough experiments.",
    seeWork: "See the product work",
  },
  caseStudy: {
    eyebrow: "Case study",
    visit: "Visit live website",
    role: "Role",
    year: "Year",
    stack: "Stack",
    gallery: "Gallery",
    outcome: "Outcome",
    next: "Next project",
    sections: "Case study sections",
    notFoundEyebrow: "404 / Project not found",
    notFoundHeading: "This case study isn't in the archive.",
    returnWork: "Return to selected work",
  },
  cursor: { view: "View" },
}

const id: Dictionary = {
  metadata: {
    title: "Agastyo Atallah | Full-stack Developer Spesialis Frontend",
    description:
      "Karya pilihan dan eksperimen antarmuka Agastyo Atallah, full-stack developer dengan spesialisasi frontend dari Bandung, Indonesia.",
    labTitle: "Lab Antarmuka | Agastyo Atallah",
    labDescription:
      "Eksperimen interaktif dalam motion, tipografi, pengolahan gambar, dan fisika antarmuka.",
    experienceTitle: "Pengalaman | Agastyo Atallah",
    experienceDescription:
      "Pengalaman profesional, kontribusi, dan karya produk pilihan Agastyo Atallah.",
  },
  nav: {
    work: "Karya",
    lab: "Lab",
    experience: "Pengalaman",
    about: "Tentang",
    contact: "Kontak",
    menu: "Menu",
    close: "Tutup",
    primaryLabel: "Navigasi utama",
  },
  language: {
    label: "Ganti bahasa",
    english: "Ganti ke bahasa Inggris",
    indonesian: "Ganti ke bahasa Indonesia",
  },
  theme: {
    toLight: "Ganti ke tema terang",
    toDark: "Ganti ke tema gelap",
  },
  hero: {
    kicker: "Full-stack developer dengan spesialisasi frontend",
    titleBefore: "Saya membuat produk digital yang",
    titleEmphasis: "nyaman",
    titleAfter: "digunakan dan bekerja dengan baik.",
    intro:
      "Saya Agastyo, software engineer di Bandung. Saya bekerja di seluruh lapisan produk, dengan perhatian khusus pada antarmuka, interaksi, dan detail yang benar-benar disentuh pengguna.",
    explore: "Lihat karya pilihan",
    conversation: "Mulai percakapan",
    location: "Bandung, Indonesia",
    focus: "Antarmuka / Sistem / Produk",
    scroll: "Gulir untuk menjelajah",
  },
  work: {
    eyebrow: "01 / Karya pilihan",
    heading: "Karya yang hidup melampaui mockup.",
    intro: "Pengalaman digital pilihan yang ditampilkan sebagai produk, bukan sekadar gambar.",
    selected: "Karya pilihan",
    read: "Baca studi kasus",
  },
  lab: {
    eyebrow: "02 / Lab antarmuka",
    heading: "Eksperimen kecil. Perhatian besar pada rasa.",
    intro: "Studi langsung tentang motion, input, tipografi, dan respons visual.",
    open: "Buka seluruh lab",
  },
  capabilities: {
    eyebrow: "03 / Yang saya bawa",
    heading: "Lebih dari daftar teknologi.",
    intro:
      "Spesialisasi frontend dengan jangkauan engineering untuk mengirim produk secara utuh.",
    items: [
      {
        title: "Keahlian antarmuka",
        body:
          "Layout responsif, desain interaksi, sistem motion, dan sentuhan akhir yang membuat antarmuka terasa disengaja.",
      },
      {
        title: "Engineering produk",
        body:
          "Menerjemahkan tujuan produk menjadi komponen terawat, state yang jelas, dan sistem yang tumbuh bersama tim.",
      },
      {
        title: "Pengiriman full-stack",
        body:
          "Menghubungkan antarmuka dengan data, API, dan deployment agar pengalaman bekerja melampaui presentation layer.",
      },
      {
        title: "Performa & akses",
        body:
          "Memperlakukan kecepatan, semantik, keyboard, dan reduced motion sebagai bagian desain—bukan pekerjaan belakangan.",
      },
    ],
  },
  experience: {
    eyebrow: "04 / Pengalaman",
    heading: "Pekerjaan di balik antarmuka.",
    intro:
      "Kronologi peran, kontribusi, dan konteks produk yang membentuk cara saya membangun.",
    viewAll: "Lihat seluruh pengalaman",
    emptyTitle: "Linimasa profesional sedang dirapikan.",
    emptyBody:
      "Peran, periode, dan kontribusi terverifikasi akan tampil di sini setelah detailnya siap.",
    present: "Sekarang",
    relatedWork: "Karya terkait",
    contribution: "Kontribusi pilihan",
    stack: "Teknologi",
    pageEyebrow: "Pengalaman / Linimasa",
    pageHeading: "Produk selalu dibangun dalam sebuah konteks.",
    pageIntro:
      "Melihat lebih dekat tim, tanggung jawab, dan keputusan teknis di balik setiap karya.",
    back: "Kembali ke ringkasan",
    workCta: "Jelajahi karya pilihan",
    contactCta: "Mulai percakapan",
  },
  about: {
    eyebrow: "05 / Tentang",
    location: "Berbasis di Bandung / Indonesia",
    heading: "Penasaran pada seluruh stack. Sangat teliti pada antarmuka.",
    body:
      "Saya menikmati proses mengubah ide produk yang masih samar menjadi pengalaman yang jelas dan responsif. Browser adalah ruang paling ekspresif bagi saya, sementara pemahaman full-stack membantu saya mengambil keputusan produk yang lebih baik dari awal hingga akhir.",
    hello: "Mari berbicara",
    principles: [
      {
        title: "Mulai dari perjalanan pengguna.",
        body: "Interaksi dan hierarki harus membuat langkah berikutnya terasa jelas.",
      },
      {
        title: "Bangun sistemnya, lalu momennya.",
        body: "Fondasi yang dapat digunakan ulang membuat detail ekspresif lebih mudah dipertahankan.",
      },
      {
        title: "Polish juga berarti performa.",
        body: "Antarmuka yang indah harus tetap cepat, inklusif, dan tangguh.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / Kontak",
    heading: "Punya sesuatu yang menarik untuk dibuat?",
    subheading: "Mari mengubahnya menjadi antarmuka yang ingin terus digunakan orang.",
    preferEmail: "Lebih nyaman lewat email?",
  },
  form: {
    name: "Nama",
    namePlaceholder: "Nama Anda",
    email: "Email",
    emailPlaceholder: "anda@perusahaan.com",
    message: "Pesan",
    messagePlaceholder: "Ceritakan sedikit tentang peluang atau proyeknya.",
    send: "Kirim pesan",
    sending: "Mengirim…",
    success: "Pesan terkirim. Saya akan segera menghubungi Anda.",
    error: "Terjadi kendala. Silakan hubungi saya langsung lewat email.",
  },
  footer: {
    role: "Full-stack developer dengan spesialisasi frontend",
    email: "Email",
  },
  labPage: {
    eyebrow: "Lab Antarmuka / 01—04",
    headingBefore: "Eksperimen untuk bagian antarmuka yang bisa",
    headingEmphasis: "dirasakan",
    intro:
      "Studi kecil dan langsung, tempat motion serta input diperlakukan sebagai material produk—bukan dekorasi.",
    back: "Kembali ke ringkasan",
    enough: "Cukup bereksperimen.",
    seeWork: "Lihat karya produk",
  },
  caseStudy: {
    eyebrow: "Studi kasus",
    visit: "Kunjungi website",
    role: "Peran",
    year: "Tahun",
    stack: "Teknologi",
    gallery: "Galeri",
    outcome: "Hasil",
    next: "Proyek berikutnya",
    sections: "Bagian studi kasus",
    notFoundEyebrow: "404 / Proyek tidak ditemukan",
    notFoundHeading: "Studi kasus ini tidak ada di dalam arsip.",
    returnWork: "Kembali ke karya pilihan",
  },
  cursor: { view: "Lihat" },
}

const dictionaries: Record<Locale, Dictionary> = { en, id }

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
