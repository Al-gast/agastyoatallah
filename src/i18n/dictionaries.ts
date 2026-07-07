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
    title: "Agastyo Atallah | Software Engineer",
    description:
      "The experience, selected work, and interface experiments of Agastyo Atallah, a software engineer based in Bandung.",
    labTitle: "Interface Lab | Agastyo Atallah",
    labDescription:
      "Small interface experiments in typography, motion, pointer input, and visual feedback.",
    experienceTitle: "Experience | Agastyo Atallah",
    experienceDescription:
      "Agastyo Atallah's experience building government systems, internal tools, e-procurement, and public-facing products.",
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
    label: "Choose language",
    english: "Use English",
    indonesian: "Use Indonesian",
  },
  theme: {
    toLight: "Use light theme",
    toDark: "Use dark theme",
  },
  hero: {
    kicker: "Software Engineer",
    titleBefore: "I build reliable digital products with",
    titleEmphasis: "clear interfaces",
    titleAfter: ".",
    intro:
      "I'm Agastyo, a software engineer based in Bandung. I work across product flows, APIs, interfaces, and deployment—keeping the experience simple, usable, and dependable.",
    explore: "See my experience",
    conversation: "Talk about a project",
    location: "Bandung, Indonesia",
    focus: "Product / Web / Software Engineering",
    scroll: "Scroll to continue",
  },
  work: {
    eyebrow: "02 / Selected work",
    heading: "A few products I've helped build.",
    intro:
      "Selected projects where I can share the interface decisions, technical approach, and work behind the final screen.",
    selected: "Selected work",
    read: "View case study",
  },
  lab: {
    eyebrow: "03 / Interface lab",
    heading: "A place to test how interfaces move and respond.",
    intro:
      "Small experiments in typography, motion, pointer input, and visual feedback—built to learn, not just to decorate.",
    open: "Explore all experiments",
  },
  capabilities: {
    eyebrow: "Capabilities",
    heading: "How I contribute to a product.",
    intro:
      "I care most about the interface, but I use the wider product context to make it work better.",
    items: [
      {
        title: "Frontend engineering",
        body:
          "Responsive interfaces, reusable components, clear states, and interaction details that remain consistent as the product grows.",
      },
      {
        title: "Product understanding",
        body:
          "Understanding the user flow and business process before deciding how the solution should work.",
      },
      {
        title: "Full-stack delivery",
        body:
          "Connecting the interface to APIs, databases, authentication, testing, and deployment.",
      },
      {
        title: "Quality & accessibility",
        body:
          "Treating performance, accessibility, error states, and keyboard support as part of the main work.",
      },
    ],
  },
  experience: {
    eyebrow: "01 / Experience",
    heading: "Experience timeline",
    viewAll: "See the full timeline",
    emptyTitle: "The experience timeline is not available yet.",
    emptyBody:
      "Verified roles and contributions will appear here once the details are ready.",
    present: "Present",
    relatedWork: "Related work",
    contribution: "What I worked on",
    stack: "Tools & technology",
    pageEyebrow: "Experience / 2022—2026",
    pageHeading: "The context behind the work.",
    pageIntro:
      "A closer look at the teams, systems, and responsibilities that shaped how I approach product engineering today.",
    back: "Back to the homepage",
    workCta: "See selected work",
    contactCta: "Talk about a project",
  },
  about: {
    eyebrow: "04 / About",
    location: "Based in Bandung / Indonesia",
    heading: "I care about how a product works, not only how it looks.",
    body:
      "My work usually sits between product needs, technical systems, and the interface people use every day. I like making that connection feel clear, practical, and reliable.",
    hello: "Send me a note",
    principles: [
      {
        title: "Understand the flow first.",
        body:
          "Good software starts with the real workflow, constraints, and people using it.",
      },
      {
        title: "Keep the main path clear.",
        body: "Users should always know what to do next.",
      },
      {
        title: "Build for real use.",
        body:
          "A good product needs to be fast, accessible, resilient, and easy to maintain.",
      },
    ],
  },
  contact: {
    eyebrow: "05 / Contact",
    heading: "Have a product problem worth solving?",
    subheading:
      "Tell me what you're building, where it feels stuck, and what a good result looks like.",
    preferEmail: "Prefer email?",
  },
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "Message",
    messagePlaceholder:
      "A little context about the product, team, or role is enough.",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks—your message has been sent. I'll reply as soon as I can.",
    error:
      "The form could not send your message. You can reach me directly by email.",
  },
  footer: {
    role: "Software Engineer",
    email: "Email",
  },
  labPage: {
    eyebrow: "Interface Lab / 01—04",
    headingBefore: "Small experiments for interactions you can",
    headingEmphasis: "feel",
    intro:
      "A collection of hands-on studies in motion, input, typography, and feedback. Each one tests a small interaction idea directly in the browser.",
    back: "Back to the homepage",
    enough: "Ready for the product work?",
    seeWork: "See selected work",
  },
  caseStudy: {
    eyebrow: "Case study",
    visit: "Open live website",
    role: "Role",
    year: "Year",
    stack: "Stack",
    gallery: "Gallery",
    outcome: "Outcome",
    next: "Next case study",
    sections: "Case study sections",
    notFoundEyebrow: "404 / Project not found",
    notFoundHeading: "This case study is not part of the portfolio.",
    returnWork: "Back to selected work",
  },
  cursor: { view: "Open" },
}

const id: Dictionary = {
  metadata: {
    title: "Agastyo Atallah | Software Engineer",
    description:
      "Pengalaman, karya pilihan, dan eksperimen antarmuka Agastyo Atallah, software engineer dari Bandung.",
    labTitle: "Lab Antarmuka | Agastyo Atallah",
    labDescription:
      "Eksperimen kecil seputar tipografi, motion, input pointer, dan feedback visual.",
    experienceTitle: "Pengalaman | Agastyo Atallah",
    experienceDescription:
      "Pengalaman Agastyo Atallah membangun sistem pemerintahan, aplikasi internal, e-procurement, dan produk untuk pengguna umum.",
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
    label: "Pilih bahasa",
    english: "Gunakan bahasa Inggris",
    indonesian: "Gunakan bahasa Indonesia",
  },
  theme: {
    toLight: "Gunakan tema terang",
    toDark: "Gunakan tema gelap",
  },
  hero: {
    kicker: "Software Engineer",
    titleBefore: "Saya membangun produk digital yang",
    titleEmphasis: "jelas",
    titleAfter: "dan bisa diandalkan.",
    intro:
      "Saya Agastyo, software engineer asal Bandung. Saya terbiasa mengerjakan alur produk, API, antarmuka, sampai deployment—dengan fokus membuat pengalaman yang sederhana, mudah dipakai, dan stabil.",
    explore: "Lihat pengalaman saya",
    conversation: "Diskusikan proyek",
    location: "Bandung, Indonesia",
    focus: "Produk / Web / Software Engineering",
    scroll: "Gulir untuk lanjut",
  },
  work: {
    eyebrow: "02 / Karya pilihan",
    heading: "Beberapa produk yang pernah saya bantu bangun.",
    intro:
      "Pilihan proyek yang bisa saya ceritakan lebih jauh—mulai dari keputusan antarmuka, pendekatan teknis, sampai proses di balik hasil akhirnya.",
    selected: "Karya pilihan",
    read: "Lihat studi kasus",
  },
  lab: {
    eyebrow: "03 / Lab antarmuka",
    heading: "Ruang untuk mencoba bagaimana antarmuka bergerak dan merespons.",
    intro:
      "Eksperimen kecil seputar tipografi, motion, input pointer, dan feedback visual—dibuat untuk belajar, bukan sekadar hiasan.",
    open: "Lihat semua eksperimen",
  },
  capabilities: {
    eyebrow: "Yang bisa saya bantu",
    heading: "Cara saya ikut membangun produk.",
    intro:
      "Perhatian utama saya ada di antarmuka, tetapi konteks produk secara utuh membantu saya membuatnya bekerja lebih baik.",
    items: [
      {
        title: "Frontend engineering",
        body:
          "Antarmuka responsif, reusable component, state yang jelas, dan detail interaksi yang tetap konsisten ketika produk berkembang.",
      },
      {
        title: "Memahami produk",
        body:
          "Memahami alur pengguna dan proses bisnis sebelum menentukan bagaimana solusinya dibangun.",
      },
      {
        title: "Full-stack delivery",
        body:
          "Menghubungkan frontend dengan API, database, autentikasi, testing, dan deployment.",
      },
      {
        title: "Kualitas & aksesibilitas",
        body:
          "Menjaga performa, aksesibilitas, error state, dan dukungan keyboard sebagai bagian dari pekerjaan utama.",
      },
    ],
  },
  experience: {
    eyebrow: "01 / Pengalaman",
    heading: "Linimasa pengalaman",
    viewAll: "Lihat perjalanan lengkap",
    emptyTitle: "Riwayat pengalaman belum tersedia.",
    emptyBody:
      "Peran dan kontribusi yang sudah terverifikasi akan ditampilkan setelah detailnya siap.",
    present: "Sekarang",
    relatedWork: "Karya terkait",
    contribution: "Yang saya kerjakan",
    stack: "Tools & teknologi",
    pageEyebrow: "Pengalaman / 2022—2026",
    pageHeading: "Konteks di balik setiap pekerjaan.",
    pageIntro:
      "Rangkuman tentang tim, sistem, dan tanggung jawab yang membentuk cara saya mengerjakan produk saat ini.",
    back: "Kembali ke homepage",
    workCta: "Lihat karya pilihan",
    contactCta: "Diskusikan proyek",
  },
  about: {
    eyebrow: "04 / Tentang",
    location: "Bandung / Indonesia",
    heading: "Saya peduli pada cara produk bekerja, bukan hanya tampilannya.",
    body:
      "Pekerjaan saya biasanya berada di antara kebutuhan produk, sistem teknis, dan antarmuka yang dipakai pengguna. Saya suka membuat hubungan itu terasa jelas, praktis, dan bisa diandalkan.",
    hello: "Kirim pesan",
    principles: [
      {
        title: "Pahami alurnya dulu.",
        body:
          "Software yang baik dimulai dari alur kerja nyata, batasan, dan orang yang akan menggunakannya.",
      },
      {
        title: "Buat jalur utama tetap jelas.",
        body: "Pengguna seharusnya selalu tahu langkah berikutnya.",
      },
      {
        title: "Bangun untuk pemakaian nyata.",
        body:
          "Produk yang baik perlu cepat, mudah diakses, tahan masalah, dan mudah dirawat.",
      },
    ],
  },
  contact: {
    eyebrow: "05 / Kontak",
    heading: "Punya masalah produk yang menarik untuk diselesaikan?",
    subheading:
      "Ceritakan apa yang sedang Anda bangun, bagian mana yang masih terasa rumit, dan hasil seperti apa yang ingin dicapai.",
    preferEmail: "Lebih nyaman lewat email?",
  },
  form: {
    name: "Nama",
    namePlaceholder: "Nama Anda",
    email: "Email",
    emailPlaceholder: "anda@perusahaan.com",
    message: "Pesan",
    messagePlaceholder:
      "Ceritakan sedikit tentang produk, tim, atau posisi yang sedang Anda tawarkan.",
    send: "Kirim pesan",
    sending: "Mengirim…",
    success:
      "Terima kasih, pesannya sudah terkirim. Saya akan membalas secepatnya.",
    error:
      "Pesannya belum berhasil terkirim. Anda tetap bisa menghubungi saya langsung lewat email.",
  },
  footer: {
    role: "Software Engineer",
    email: "Email",
  },
  labPage: {
    eyebrow: "Lab Antarmuka / 01—04",
    headingBefore: "Eksperimen kecil untuk interaksi yang bisa",
    headingEmphasis: "dirasakan",
    intro:
      "Kumpulan studi langsung seputar motion, input, tipografi, dan feedback. Setiap eksperimen menguji satu ide interaksi kecil langsung di browser.",
    back: "Kembali ke homepage",
    enough: "Ingin melihat hasil produk?",
    seeWork: "Lihat karya pilihan",
  },
  caseStudy: {
    eyebrow: "Studi kasus",
    visit: "Buka website",
    role: "Peran",
    year: "Tahun",
    stack: "Teknologi",
    gallery: "Galeri",
    outcome: "Hasil",
    next: "Studi kasus berikutnya",
    sections: "Bagian studi kasus",
    notFoundEyebrow: "404 / Proyek tidak ditemukan",
    notFoundHeading: "Studi kasus ini tidak tersedia di portfolio.",
    returnWork: "Kembali ke karya pilihan",
  },
  cursor: { view: "Buka" },
}

const dictionaries: Record<Locale, Dictionary> = { en, id }

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
