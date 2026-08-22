const year = new Date().getFullYear();

const shared = {
  meta: {
    brandName: "KSDigital",
    email: "hello@ksdigital.mn",
    year,
  },
};

export const dictionaries = {
  // ============================================================
  // ENGLISH
  // ============================================================

  en: {
    meta: {
      ...shared.meta,
      studioType: "Digital Design & Development Studio",
      location: "Ulaanbaatar, Mongolia",
      title: "KSDigital — Digital Design & Development",
      description:
        "KSDigital is a digital studio based in Ulaanbaatar, Mongolia. We design and build modern websites, web applications, and custom digital products.",
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
      navIndex: "// NAVIGATION",
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
        { label: "Products", href: "#templates" },
        { label: "Contact", href: "#contact" },
      ],

      cta: {
        label: "Start a Project",
        href: "#contact",
      },
    },

    hero: {
      ariaLabel: "Hero Introduction",
      scrollCueAria: "Scroll down to the About section",
      statusBadge: "Taking projects for Q3 / Q4 2026",
      slotsOpen: "2 PROJECT SLOTS OPEN",
      webglTag: "WebGL · 60 FPS",

      headlineWords: [
        "Bespoke design.",
        "Solid engineering.",
        "Exceptional web.",
      ],

      subheadline:
        "A digital studio from Ulaanbaatar. We design and build fast websites, web applications, and custom digital products that look great and work even better.",

      primaryCta: {
        label: "Start a Project",
        href: "#contact",
      },

      secondaryCta: {
        label: "View Our Work",
        href: "#work",
      },

      scrollIndicator: "SCROLL TO EXPLORE",

      telemetry: [
        {
          label: "Based In",
          value: "Ulaanbaatar, Mongolia",
        },
        {
          label: "Specialization",
          value: "Web Development & UI/UX",
        },
        {
          label: "Stack",
          value: "React · GSAP · WebGL",
        },
      ],
    },

    marquee: [
      "Web Design",
      "Web Development",
      "UI/UX Design",
      "Motion Design",
      "E-Commerce",
      "Brand Identity",
      "Performance",
      "Digital Products",
    ],

    about: {
      label: "01 — About",
      heading: "Small team. Big standards.",

      body: "KSDigital is an independent digital studio based in Ulaanbaatar. We keep our team small, take on a limited number of projects, and focus on making every detail count — from the first idea to the final line of code.",

      stats: [
        {
          value: "40+",
          label: "Projects",
        },
        {
          value: "98",
          label: "Avg. Lighthouse",
        },
        {
          value: "6",
          label: "Years of Experience",
        },
        {
          value: "12",
          label: "Week Sprints",
        },
      ],
    },

    services: {
      label: "02 — Services",
      heading: "What we <em>do</em>.",

      items: [
        {
          index: "01",
          title: "Brand & UI/UX",
          copy: "We create visual identities, websites, and interfaces that feel clean, consistent, and made for your brand.",
          tags: ["Branding", "UI/UX", "Design Systems"],
        },

        {
          index: "02",
          title: "Web Development",
          copy: "Fast, responsive, and reliable websites built with modern technologies and a strong focus on performance.",
          tags: ["React", "Next / Vite", "CMS"],
        },

        {
          index: "03",
          title: "Motion & 3D",
          copy: "Animations, interactive effects, and 3D experiences that make your website more engaging without getting in the way.",
          tags: ["GSAP", "Three.js", "WebGL"],
        },

        {
          index: "04",
          title: "Digital Products",
          copy: "From dashboards and admin panels to SaaS platforms and custom web applications, we build products that are easy to use and ready to grow.",
          tags: ["SaaS", "Auth", "APIs"],
        },
      ],
    },

    work: {
      label: "03 — Selected Work",
      heading: "A few things we've built.",

      items: [
        {
          index: "01",
          year: "2026",
          title: "Nomad Reserve",
          category: "Private Banking",
          tags: ["Product", "Motion"],
          tone: "lime",
        },

        {
          index: "02",
          year: "2025",
          title: "Altai Atelier",
          category: "Luxury Travel",
          tags: ["Brand", "Editorial"],
          tone: "stone",
        },

        {
          index: "03",
          year: "2025",
          title: "Khaan Commerce",
          category: "E-Commerce",
          tags: ["Development", "3D"],
          tone: "ink",
        },

        {
          index: "04",
          year: "2024",
          title: "Orbit OS",
          category: "Digital Platform",
          tags: ["SaaS", "UI/UX"],
          tone: "ember",
        },
      ],
    },

    process: {
      label: "04 — Process",
      heading: "Simple process. Better results.",

      steps: [
        {
          index: "01",
          title: "Discover",
          copy: "We learn about your business, your audience, and what you actually need.",
        },

        {
          index: "02",
          title: "Plan",
          copy: "We define the structure, visual direction, features, and technology before development begins.",
        },

        {
          index: "03",
          title: "Build",
          copy: "Design and development happen together. You see progress, give feedback, and stay involved.",
        },

        {
          index: "04",
          title: "Launch",
          copy: "We test everything, optimize performance, and launch a finished product that is ready to use.",
        },
      ],
    },

    templates: {
      label: "05 — Products",
      heading: "Ready to use. Easy to <em>make yours</em>.",

      items: [
        {
          title: "Atelier",
          type: "Agency Template",
          price: "$190",
          note: "Dark editorial design with smooth interactions",
        },

        {
          title: "Ledger",
          type: "SaaS Template",
          price: "$240",
          note: "Dashboard and landing page system",
        },

        {
          title: "North",
          type: "Portfolio Template",
          price: "$160",
          note: "Clean cinematic case-study layout",
        },
      ],
    },

    contact: {
      label: "06 — Contact",
      heading: "Let's build something great.",

      body: "Have an idea, a new business, or a project that needs a better digital experience? Tell us about it. We'll get back to you within two business days.",

      email: shared.meta.email,

      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@studio.com",
        project: "Project",
        projectPlaceholder: "Tell us about your project",
        submit: "Send Message",
        sent: "Message received — we'll be in touch soon",
      },
    },
  },

  // ============================================================
  // MONGOLIAN
  // ============================================================

  mn: {
    meta: {
      ...shared.meta,
      studioType: "Дижитал дизайн ба хөгжүүлэлтийн студи",
      location: "Улаанбаатар, Монгол",
      title: "KSDigital — Дижитал дизайн ба хөгжүүлэлт",

      description:
        "KSDigital нь Улаанбаатар хотод байрладаг дижитал студи. Бид орчин үеийн вэбсайт, вэб аппликейшн болон захиалгат дижитал бүтээгдэхүүн бүтээдэг.",

      status: {
        isAvailable: true,
        text: "Шинэ төсөл хүлээн авч байна",
      },
    },

    ui: {
      homeAria: "KSDigital нүүр хуудас",
      navAria: "Үндсэн цэс",
      footerNavAria: "Хөл хэсгийн цэс",
      openMenu: "Цэс нээх",
      closeMenu: "Цэс хаах",
      navIndex: "// НАВИГАЦИ",
      studioTime: "Улаанбаатарын студийн цаг",
      studioSuffix: "Студи",
      rights: "Бүх эрх хуулиар хамгаалагдсан",
      langEn: "EN",
      langMn: "MN",
      langAria: "Сайтын хэл",
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
      scrollCueAria: "Бидний тухай хэсэг рүү гүйлгэх",
      statusBadge: "2026 оны III / IV улирлын төсөл хүлээн авч байна",
      slotsOpen: "2 ТӨСӨЛ АВАХ БОЛОМЖТОЙ",
      webglTag: "WebGL · 60 FPS",

      headlineWords: [
        "Захиалгат дизайн.",
        "Чанартай хөгжүүлэлт.",
        "Онцгой вэб.",
      ],

      subheadline:
        "Улаанбаатар дахь дижитал студи. Бид хурдан, гоё, хэрэглэхэд хялбар вэбсайт, вэб аппликейшн болон захиалгат дижитал бүтээгдэхүүн бүтээнэ.",

      primaryCta: {
        label: "Төсөл эхлүүлэх",
        href: "#contact",
      },

      secondaryCta: {
        label: "Төслүүд үзэх",
        href: "#work",
      },

      scrollIndicator: "ГҮЙЛГЭЖ ТАНИЛЦАХ",

      telemetry: [
        {
          label: "Байршил",
          value: "Улаанбаатар, Монгол",
        },
        {
          label: "Чиглэл",
          value: "Web Development & UI/UX",
        },
        {
          label: "Технологи",
          value: "React · GSAP · WebGL",
        },
      ],
    },

    marquee: [
      "Вэб дизайн",
      "Вэб хөгжүүлэлт",
      "UI/UX дизайн",
      "Моушн дизайн",
      "Цахим худалдаа",
      "Брэнд дизайн",
      "Гүйцэтгэлийн оновчлол",
      "Дижитал бүтээгдэхүүн",
    ],

    about: {
      label: "01 — Бидний тухай",
      heading: "Цөөн хүн. Өндөр стандарт.",

      body: "KSDigital бол Улаанбаатар хотод байрладаг бие даасан дижитал студи. Бид нэг дор цөөн төсөл авч, санаанаас нь эхлээд эцсийн код хүртэл бүх зүйлд анхаарч ажилладаг.",

      stats: [
        {
          value: "40+",
          label: "Төсөл",
        },
        {
          value: "98",
          label: "Дундаж Lighthouse",
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
      label: "02 — Үйлчилгээ",
      heading: "Бид юу <em>хийдэг</em> вэ?",

      items: [
        {
          index: "01",
          title: "Брэнд ба UI/UX",
          copy: "Таны брэндэд тохирсон лого, өнгө төрх, вэбсайт болон цэвэрхэн, хэрэглэхэд хялбар интерфейс бүтээнэ.",
          tags: ["Брэндинг", "UI/UX", "Дизайн систем"],
        },

        {
          index: "02",
          title: "Вэб хөгжүүлэлт",
          copy: "Орчин үеийн технологи ашиглан хурдан, responsive, найдвартай вэбсайт болон вэб аппликейшн хөгжүүлнэ.",
          tags: ["React", "Next / Vite", "CMS"],
        },

        {
          index: "03",
          title: "Моушн ба 3D",
          copy: "Вэбсайтыг илүү сонирхолтой болгох animation, интерактив эффект болон 3D шийдлүүдийг бүтээнэ.",
          tags: ["GSAP", "Three.js", "WebGL"],
        },

        {
          index: "04",
          title: "Дижитал бүтээгдэхүүн",
          copy: "Dashboard, admin panel, SaaS платформ болон захиалгат вэб аппликейшн зэрэг өсөж хөгжих боломжтой бүтээгдэхүүн бүтээнэ.",
          tags: ["SaaS", "Auth", "API"],
        },
      ],
    },

    work: {
      label: "03 — Сонгосон төслүүд",
      heading: "Бидний хийсэн ажлуудаас.",

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
          category: "Luxury аялал",
          tags: ["Брэнд", "Редакц"],
          tone: "stone",
        },

        {
          index: "03",
          year: "2025",
          title: "Khaan Commerce",
          category: "Цахим худалдаа",
          tags: ["Хөгжүүлэлт", "3D"],
          tone: "ink",
        },

        {
          index: "04",
          year: "2024",
          title: "Orbit OS",
          category: "Дижитал платформ",
          tags: ["SaaS", "UI/UX"],
          tone: "ember",
        },
      ],
    },

    process: {
      label: "04 — Процесс",
      heading: "Энгийн процесс. Илүү сайн үр дүн.",

      steps: [
        {
          index: "01",
          title: "Судлах",
          copy: "Таны бизнес, хэрэглэгчид болон яг юу хэрэгтэй байгааг ойлгож авна.",
        },

        {
          index: "02",
          title: "Төлөвлөх",
          copy: "Хөгжүүлэлт эхлэхээс өмнө сайтын бүтэц, дизайн, функц болон технологио тодорхойлно.",
        },

        {
          index: "03",
          title: "Бүтээх",
          copy: "Дизайн болон хөгжүүлэлтийг зэрэг явуулна. Та ажлын явцыг харж, санал өгч, шийдвэр бүрт оролцоно.",
        },

        {
          index: "04",
          title: "Нэвтрүүлэх",
          copy: "Бүх зүйлийг шалгаж, хурд болон ажиллагааг сайжруулаад бэлэн бүтээгдэхүүнийг нээлтэд гаргана.",
        },
      ],
    },

    templates: {
      label: "05 — Бүтээгдэхүүн",
      heading: "Бэлэн загвар. Өөрийнхөөрөө <em>ашигла</em>.",

      items: [
        {
          title: "Atelier",
          type: "Agency Template",
          price: "$190",
          note: "Dark дизайн, smooth animation, интерактив эффект",
        },

        {
          title: "Ledger",
          type: "SaaS Template",
          price: "$240",
          note: "Dashboard болон landing page-ийн нэгдсэн загвар",
        },

        {
          title: "North",
          type: "Portfolio Template",
          price: "$160",
          note: "Цэвэрхэн, cinematic portfolio загвар",
        },
      ],
    },

    contact: {
      label: "06 — Холбоо барих",
      heading: "Хамтдаа гоё зүйл бүтээцгээе.",

      body: "Шинэ санаа, бизнес эсвэл илүү сайн дижитал шийдэл хэрэгтэй төсөл байна уу? Бидэнд төслийнхөө талаар хэлээрэй. Ажлын хоёр өдрийн дотор эргэн холбогдоно.",

      email: shared.meta.email,

      form: {
        name: "Нэр",
        namePlaceholder: "Таны нэр",
        email: "Имэйл",
        emailPlaceholder: "you@studio.com",
        project: "Төсөл",
        projectPlaceholder: "Төслийнхөө талаар бичнэ үү",
        submit: "Илгээх",
        sent: "Хүлээн авлаа — удахгүй холбогдоно",
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
