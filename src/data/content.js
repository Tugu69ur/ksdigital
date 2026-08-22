const year = new Date().getFullYear();

const shared = {
  meta: {
    brandName: "KSDigital",
    email: "hello@ksdigital.mn",
    year,
  },
};

export const dictionaries = {
  en: {
    meta: {
      ...shared.meta,
      studioType: "Digital Engineering & Design Studio",
      location: "Ulaanbaatar, Mongolia",
      title: "KSDigital — Digital Experiences & Web Development",
      description:
        "KSDigital is a premier digital studio based in Ulaanbaatar, Mongolia. We create high-performance bespoke websites, web applications, and custom digital platforms.",
      status: {
        isAvailable: true,
        text: "Available for new projects",
      },
    },

    ui: {
      homeAria: "KSDigital Home",
      navAria: "Main Navigation",
      footerNavAria: "Footer Navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      navIndex: "// NAVIGATION INDEX",
      studioTime: "Studio Time in Ulaanbaatar",
      studioSuffix: "Studio",
      rights: "All rights reserved",
      langEn: "EN",
      langMn: "MN",
      langAria: "Site language",
    },

    nav: {
      brand: "KSDigital",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Templates", href: "#templates" },
        { label: "Contact", href: "#contact" },
      ],
      cta: {
        label: "Start a Project",
        href: "#contact",
      },
    },

    hero: {
      ariaLabel: "Hero Introduction",
      scrollCueAria: "Scroll down to About section",
      statusBadge: "Available for Q3 / Q4 2026",
      slotsOpen: "2 SLOTS OPEN",
      webglTag: "WebGL · 60 FPS",

      headlineWords: [
        "Bespoke design.",
        "Relentless engineering.",
        "Exceptional web.",
      ],

      subheadline:
        "Independent digital craft studio in Ulaanbaatar. We construct ultra-fast websites, scalable applications, and custom digital ecosystems — engineered to feel inevitable.",

      primaryCta: {
        label: "Start a Project",
        href: "#contact",
      },

      secondaryCta: {
        label: "Explore Selected Work",
        href: "#work",
      },

      scrollIndicator: "SCROLL TO EXPLORE",

      telemetry: [
        {
          label: "Studio Hub",
          value: "Ulaanbaatar, MN",
        },
        {
          label: "Specialization",
          value: "Full-Stack Web & UI/UX",
        },
        {
          label: "Architecture",
          value: "React · GSAP · WebGL",
        },
      ],
    },

    marquee: [
      "Interface Architecture",
      "WebGL Atmospheres",
      "Motion Systems",
      "Headless Commerce",
      "Brand Identity",
      "Performance Engineering",
      "Product Platforms",
      "Editorial Layouts",
    ],

    about: {
      label: "01 — Studio",
      heading: "A small studio with an unreasonably high bar.",

      body: "KSDigital is not a factory. We take a handful of partners each quarter and treat every surface — type, motion, infrastructure — as a single instrument. Built in Ulaanbaatar. Shipped everywhere.",

      stats: [
        {
          value: "40+",
          label: "Launches",
        },
        {
          value: "98",
          label: "Avg. Lighthouse",
        },
        {
          value: "6",
          label: "Years in craft",
        },
        {
          value: "12",
          label: "Week sprints",
        },
      ],
    },

    services: {
      label: "02 — Capabilities",
      heading: "What we actually <em>build</em>.",

      items: [
        {
          index: "01",
          title: "Brand & Interface",
          copy: "Identity systems, typographic languages, and product UI that feel owned — not templated.",
          tags: ["Identity", "Design systems", "UI kits"],
        },

        {
          index: "02",
          title: "Web Engineering",
          copy: "React, edge delivery, and obsessive performance. Sites that load like they were waiting for you.",
          tags: ["React", "Next / Vite", "CMS"],
        },

        {
          index: "03",
          title: "Motion & 3D",
          copy: "GSAP timelines, scroll worlds, and WebGL set pieces that make the brand physically felt.",
          tags: ["GSAP", "Three.js", "Shaders"],
        },

        {
          index: "04",
          title: "Product Platforms",
          copy: "Dashboards, client portals, and internal tools with the same cinematic restraint as the marketing site.",
          tags: ["SaaS", "Auth", "APIs"],
        },
      ],
    },

    work: {
      label: "03 — Selected work",
      heading: "Projects we still talk about.",

      items: [
        {
          index: "01",
          year: "2026",
          title: "Nomad Reserve",
          category: "Private banking",
          tags: ["Product", "Motion"],
          tone: "lime",
        },

        {
          index: "02",
          year: "2025",
          title: "Altai Atelier",
          category: "Luxury expeditions",
          tags: ["Brand", "Editorial"],
          tone: "stone",
        },

        {
          index: "03",
          year: "2025",
          title: "Khaan Commerce",
          category: "Headless retail",
          tags: ["Engineering", "3D"],
          tone: "ink",
        },

        {
          index: "04",
          year: "2024",
          title: "Orbit OS",
          category: "Creative platform",
          tags: ["SaaS", "Interface"],
          tone: "ember",
        },
      ],
    },

    process: {
      label: "04 — Method",
      heading: "A sequence, not a scramble.",

      steps: [
        {
          index: "01",
          title: "Discover",
          copy: "Constraints, audience, and the one feeling the product must leave behind.",
        },

        {
          index: "02",
          title: "Architect",
          copy: "Information, motion language, and a technical spine before a single decorative pixel.",
        },

        {
          index: "03",
          title: "Craft",
          copy: "Type, interaction, and code in lockstep. Weekly cuts. No mystery weeks.",
        },

        {
          index: "04",
          title: "Launch",
          copy: "Hardening, analytics, and a handoff that still looks like we care six months later.",
        },
      ],
    },

    templates: {
      label: "05 — Products",
      heading: "Ready-made, still <em>bespoke</em>.",

      items: [
        {
          title: "Atelier",
          type: "Agency template",
          price: "$190",
          note: "Editorial dark, scroll-driven",
        },

        {
          title: "Ledger",
          type: "SaaS marketing",
          price: "$240",
          note: "Dashboard + landing system",
        },

        {
          title: "North",
          type: "Portfolio",
          price: "$160",
          note: "Case-study cinema layout",
        },
      ],
    },

    contact: {
      label: "06 — Contact",
      heading: "Let’s make something people screenshot.",

      body: "Tell us what you’re building. If it’s a fit, you’ll hear from us within two business days — not a funnel, a conversation.",

      email: shared.meta.email,

      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@studio.com",
        project: "Project",
        projectPlaceholder: "What are we building?",
        submit: "Send the brief",
        sent: "Received — we’ll reply soon",
      },
    },
  },

  // ============================================================
  // MONGOLIAN
  // ============================================================

  mn: {
    meta: {
      ...shared.meta,
      studioType: "Дижитал инженерчлэл ба дизайны студи",
      location: "Улаанбаатар, Монгол",
      title: "KSDigital — Дижитал туршлага ба вэб хөгжүүлэлт",

      description:
        "KSDigital нь Улаанбаатар дахь дижитал студи бөгөөд өндөр гүйцэтгэлтэй захиалгат вэбсайт, вэб аппликейшн, дижитал платформ бүтээдэг.",

      status: {
        isAvailable: true,
        text: "Шинэ төсөлд нээлттэй",
      },
    },

    ui: {
      homeAria: "KSDigital нүүр хуудас",
      navAria: "Үндсэн цэс",
      footerNavAria: "Хөл хэсгийн цэс",
      openMenu: "Үндсэн цэс нээх",
      closeMenu: "Үндсэн цэс хаах",
      navIndex: "// НАВИГАЦИ",
      studioTime: "Улаанбаатарын студийн цаг",
      studioSuffix: "Студи",
      rights: "Бүх эрх хуулиар хамгаалагдсан",
      langEn: "EN",
      langMn: "MN",
      langAria: "Сайтын хэл солих",
    },

    nav: {
      brand: "KSDigital",

      links: [
        {
          label: "Бидний тухай",
          href: "#about",
        },
        {
          label: "Үйлчилгээ",
          href: "#services",
        },
        {
          label: "Төслүүд",
          href: "#work",
        },
        {
          label: "Бүтээгдэхүүн",
          href: "#templates",
        },
        {
          label: "Холбоо барих",
          href: "#contact",
        },
      ],

      cta: {
        label: "Төсөл эхлүүлэх",
        href: "#contact",
      },
    },

    hero: {
      ariaLabel: "Үндсэн танилцуулга",
      scrollCueAria: "Бидний тухай хэсэг рүү доош гүйлгэх",
      statusBadge: "2026 оны III / IV улиралд нээлттэй",
      slotsOpen: "2 ЗАХИАЛГА БОЛОМЖТОЙ",
      webglTag: "WebGL · 60 FPS",

      headlineWords: [
        "Захиалгат дизайн.",
        "Шилдэг инженерчлэл.",
        "Онцгой дижитал шийдэл.",
      ],

      subheadline:
        "Улаанбаатар хот дахь бие даасан дижитал урлалын студи. Бид хэт өндөр хурдны вэбсайт, өргөтгөх боломжит аппликейшн, захиалгат дижитал экосистемийг төгс зохицолтойгоор урлан бүтээнэ.",

      primaryCta: {
        label: "Төсөл эхлүүлэх",
        href: "#contact",
      },

      secondaryCta: {
        label: "Сонгосон төслүүд",
        href: "#work",
      },

      scrollIndicator: "ДООШ ГҮЙЛГЭЖ ТАНИЛЦАХ",

      telemetry: [
        {
          label: "Студийн байршил",
          value: "Улаанбаатар, MN",
        },
        {
          label: "Үндсэн чиглэл",
          value: "Full-Stack Web & UI/UX",
        },
        {
          label: "Архитектур",
          value: "React · GSAP · WebGL",
        },
      ],
    },

    marquee: [
      "Интерфейсийн архитектур",
      "WebGL интерактив орчин",
      "Моушн систем",
      "Headless цахим худалдаа",
      "Брэндийн өнгө төрх",
      "Өндөр хурдны инженерчлэл",
      "Дижитал бүтээгдэхүүний платформ",
      "Редакцын онцгой зохиомж",
    ],

    about: {
      label: "01 — Студи",
      heading: "Өндөр шалгуур, төгс чанарыг эрхэмлэдэг бүтээлч студи.",

      body: "KSDigital бол конвейерийн үйлдвэр биш. Бид улирал бүр цөөн тооны хамтрагчтай нягт ажиллаж, үсгийн соёл, хөдөлгөөн, дэд бүтэц бүрийг нэгдмэл симфони мэт нарийн урладаг. Улаанбаатарт бүтээж, дэлхийд нийлүүлнэ.",

      stats: [
        {
          value: "40+",
          label: "Амжилттай нээлт",
        },
        {
          value: "98",
          label: "Дундаж Lighthouse оноо",
        },
        {
          value: "6",
          label: "Жилийн туршлага",
        },
        {
          value: "12",
          label: "7 хоногийн спринт",
        },
      ],
    },

    services: {
      label: "02 — Чадвар ба чиглэл",
      heading: "Бидний бодит <em>бүтээлүүд</em>.",

      items: [
        {
          index: "01",
          title: "Брэнд ба Интерфейс",
          copy: "Дахин давтагдашгүй өнгө төрх, үсгийн соёл болон загвар хуулбарлаагүй, өөрийн гэсэн онцлогтой бүтээгдэхүүний UI дизайн.",
          tags: ["Брэнд төсөл", "Дизайн систем", "UI кит"],
        },

        {
          index: "02",
          title: "Вэб инженерчлэл",
          copy: "React, edge технологи, хэт өндөр хурдны гүйцэтгэл. Хүлээлт үүсгэхгүйгээр агшин зуурт ачааллах шилдэг вэбүүд.",
          tags: ["React", "Next / Vite", "CMS"],
        },

        {
          index: "03",
          title: "Моушн ба 3D",
          copy: "GSAP хугацааны шугам, интерактив скролл болон брэндийг амьд мэт мэдрүүлэх WebGL визуал найруулга.",
          tags: ["GSAP", "Three.js", "Shaders"],
        },

        {
          index: "04",
          title: "Бүтээгдэхүүний платформ",
          copy: "Хяналтын самбар (dashboard), харилцагчийн портал, дотоод системүүдийг маркетинг сайттай ижил өндөр зэрэглэлд бүтээдэг.",
          tags: ["SaaS", "Auth", "API"],
        },
      ],
    },

    work: {
      label: "03 — Сонгосон төслүүд",
      heading: "Бидний бахархал болсон ажлууд.",

      items: [
        {
          index: "01",
          year: "2026",
          title: "Nomad Reserve",
          category: "Хувийн банк, санхүү",
          tags: ["Бүтээгдэхүүн", "Моушн"],
          tone: "lime",
        },

        {
          index: "02",
          year: "2025",
          title: "Altai Atelier",
          category: "Дээд зэрэглэлийн аялал",
          tags: ["Брэнд", "Редакци"],
          tone: "stone",
        },

        {
          index: "03",
          year: "2025",
          title: "Khaan Commerce",
          category: "Headless цахим худалдаа",
          tags: ["Инженерчлэл", "3D"],
          tone: "ink",
        },

        {
          index: "04",
          year: "2024",
          title: "Orbit OS",
          category: "Креатив платформ",
          tags: ["SaaS", "Интерфейс"],
          tone: "ember",
        },
      ],
    },

    process: {
      label: "04 — Арга барил",
      heading: "Тодорхой дэс дараалал. Санамсаргүй алхамгүй.",

      steps: [
        {
          index: "01",
          title: "Судалгаа",
          copy: "Хязгаарлалт, зорилтот хэрэглэгчид болон бүтээгдэхүүний төрүүлэх гол мэдрэмжийг тодорхойлно.",
        },

        {
          index: "02",
          title: "Архитектур",
          copy: "Нэг ч чимэглэлийн пиксел тавихаас өмнө мэдээллийн бүтэц, хөдөлгөөний хэл, технологийн суурийг босгоно.",
        },

        {
          index: "03",
          title: "Урлал",
          copy: "Үсгийн соёл, харилцан үйлдэл болон кодыг зэрэгцүүлэн хөгжүүлнэ. Долоо хоног бүрийн тайлан, нууц далд үе шатгүй.",
        },

        {
          index: "04",
          title: "Нээлт",
          copy: "Гүйцэтгэлийг бэхжүүлж, аналитик тохируулан, урт хугацааны найдвартай ажиллагааг баталгаажуулсан хүлээлгэн өгөх үйл явц.",
        },
      ],
    },

    templates: {
      label: "05 — Бүтээгдэхүүн",
      heading: "Бэлэн загвар, гэхдээ <em>онцгой шийдэл</em>.",

      items: [
        {
          title: "Atelier",
          type: "Агентлагийн загвар",
          price: "$190",
          note: "Редакцын харанхуй хэв маяг, интерактив скролл",
        },

        {
          title: "Ledger",
          type: "SaaS маркетинг",
          price: "$240",
          note: "Хяналтын самбар + нүүр хуудасны систем",
        },

        {
          title: "North",
          type: "Портфолио",
          price: "$160",
          note: "Кэйс судалгааны кино зохиомж",
        },
      ],
    },

    contact: {
      label: "06 — Холбоо барих",
      heading: "Бусдын анхаарлыг татаж, бахархал төрүүлэх зүйлсийг хамтдаа бүтээцгээе.",

      body: "Та ямар төсөл эхлүүлэхээр төлөвлөж байгаагаа хуваалцаарай. Хэрэв бидний чиглэл тохирвол ажлын хоёр өдрийн дотор эргэн холбогдоно — автомат юүлүүр биш, бодит яриа.",

      email: shared.meta.email,

      form: {
        name: "Нэр",
        namePlaceholder: "Таны нэр",
        email: "Имэйл хаяг",
        emailPlaceholder: "you@studio.com",
        project: "Төслийн мэдээлэл",
        projectPlaceholder: "Бид ямар төсөл хамтран бүтээх вэ?",
        submit: "Төслийн товч мэдээлэл илгээх",
        sent: "Хүлээн авлаа — тун удахгүй хариу өгнө",
      },
    },
  },
};

/**
 * Get content for a specific language.
 *
 * Usage:
 *   const content = getContent("en");
 *   const content = getContent("mn");
 */
export function getContent(language = "en") {
  return dictionaries[language] || dictionaries.en;
}

/**
 * Default English content.
 *
 * This allows:
 *   import { content } from "../data/content";
 */
export const content = dictionaries.en;

export default dictionaries;

