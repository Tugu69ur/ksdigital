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
      studioType: "Websites for Mongolian Businesses",
      location: "Ulaanbaatar, Mongolia",
      title: "KSDigital — Websites for Mongolian Businesses",
      description:
        "KSDigital builds modern websites for Mongolian small and medium-sized businesses. Choose a ready-made template or get a custom design — and we can maintain your website after launch.",
      status: {
        isAvailable: true,
        text: "Accepting new projects",
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
        { label: "Templates", href: "#templates" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],

      cta: {
        label: "Start Your Website",
        href: "#contact",
      },
    },

    hero: {
      ariaLabel: "Hero Introduction",
      scrollCueAria: "Scroll down to the About section",
      statusBadge: "Accepting new projects",
      slotsOpen: "FREE INTRO CALL",
      webglTag: "Ulaanbaatar · Mongolia",

      headlineWords: [
        "We build websites",
        "for your",
        "business.",
      ],

      subheadline:
        "Modern, professional websites for Mongolian small and medium-sized businesses. Choose a ready-made template or work with us on a custom design — and we'll keep it running after launch.",

      primaryCta: {
        label: "Start Your Website",
        href: "#contact",
      },

      secondaryCta: {
        label: "View Templates",
        href: "#templates",
      },

      scrollIndicator: "SCROLL TO EXPLORE",

      telemetry: [
        {
          label: "Based In",
          value: "Ulaanbaatar, Mongolia",
        },
        {
          label: "Made For",
          value: "Small & Medium Businesses",
        },
        {
          label: "Your Options",
          value: "Custom Design or Template",
        },
      ],
    },

    marquee: [
      "Website Development",
      "Custom Design",
      "Ready-Made Templates",
      "Website Maintenance",
      "Mobile-First",
      "Fast Launch",
      "Local Support",
      "Fair Pricing",
    ],

    about: {
      label: "01 — About",
      heading: "The website team for Mongolian businesses.",

      body: "KSDigital is a Ulaanbaatar-based web studio with one clear focus: giving small and medium-sized businesses a professional website. No enterprise complexity, no technical jargon — we build it, launch it, and take care of it, so you can focus on running your business.",

      stats: [
        {
          value: "40+",
          label: "Websites Built",
        },
        {
          value: "10+",
          label: "Industries Served",
        },
        {
          value: "24h",
          label: "Response Time",
        },
        {
          value: "100%",
          label: "Local Team",
        },
      ],
    },

    services: {
      label: "02 — What We Do",
      heading: "Your business deserves a <em>website</em>.",

      intro:
        "We create professional websites for businesses that want to look better online, reach more customers, and make it easy for people to discover their products and services.",

      items: [
        {
          index: "01",
          title: "Website Development",
          copy: "A modern, responsive website for your business — fast on any device and built to turn visitors into customers.",
          tags: ["Restaurants", "Cafés", "Shops", "Hotels"],
        },

        {
          index: "02",
          title: "Custom Website Design",
          copy: "Tell us what you have in mind. We design a website around your brand, your customers, and the way you do business.",
          tags: ["Your Brand", "Your Style", "Your Features"],
        },

        {
          index: "03",
          title: "Ready-Made Templates",
          copy: "Browse our template library, pick a design you like, and we customize it with your content and branding. Faster to launch, easier on the budget.",
          tags: ["Pick a Design", "Faster Launch", "Lower Cost"],
        },

        {
          index: "04",
          title: "Website Maintenance",
          copy: "After launch, we keep your website updated — text, images, prices, products — and handle fixes and support whenever you need us.",
          tags: ["Updates", "Support", "Bug Fixes", "Small Changes"],
        },
      ],
    },

    ways: {
      label: "03 — Two Ways to Build",
      heading: "Two ways to get <em>your website</em>.",

      options: [
        {
          index: "01",
          kind: "custom",
          subtitle: "CUSTOM DESIGN",
          title: "Tell us what you want.",
          copy: "We discuss your business, understand what you need, and create a website design made specifically for you — your brand, your colors, your features.",
          points: [
            "Built around your brand",
            "Any features you need",
            "A unique look, no compromises",
          ],
          cta: {
            label: "Create My Website",
            href: "#contact",
          },
        },

        {
          index: "02",
          kind: "template",
          subtitle: "READY-MADE TEMPLATE",
          title: "Choose a design you already love.",
          copy: "Browse our ready-made templates, choose one, and we customize it with your content, colors, images, and logo. You launch faster and spend less.",
          points: [
            "Launch in days, not months",
            "Lower fixed price",
            "Proven designs, adapted to you",
          ],
          cta: {
            label: "Browse Templates",
            href: "#templates",
          },
        },
      ],
    },

    templates: {
      label: "04 — Our Work & Templates",
      heading: "Real websites, ready for <em>your business</em>.",

      intro:
        "Every example below is a starting point. Pick one and we adapt it to your brand and content — or use it as inspiration for a fully custom design.",

      categories: [
        "Restaurant",
        "Café",
        "Salon",
        "Fashion",
        "Business",
        "Services",
      ],

      items: [
        {
          title: "Roast",
          category: "Café",
          price: "From $150",
          note: "Warm menu-focused layout with gallery and opening hours",
        },

        {
          title: "Ember",
          category: "Restaurant",
          price: "From $180",
          note: "Menus, reservations and location for restaurants",
        },

        {
          title: "Velvet",
          category: "Salon",
          price: "From $150",
          note: "Service lists, prices and booking for beauty salons",
        },

        {
          title: "Atelier",
          category: "Fashion",
          price: "From $190",
          note: "Lookbooks and collections for clothing stores and brands",
        },

        {
          title: "Ledger",
          category: "Business",
          price: "From $170",
          note: "Clear company presentation for services and agencies",
        },

        {
          title: "Harbor",
          category: "Hotel",
          price: "From $200",
          note: "Rooms, photos and booking info for hotels and guesthouses",
        },
      ],
    },

    process: {
      label: "05 — How It Works",
      heading: "From first call to launch — <em>simply</em>.",

      steps: [
        {
          index: "01",
          title: "Talk",
          copy: "Tell us about your business and what you need. A short conversation is enough to get started.",
        },

        {
          index: "02",
          title: "Design",
          copy: "Choose a ready-made template or work with us on a custom design.",
        },

        {
          index: "03",
          title: "Build",
          copy: "We develop your website, add your content, and prepare everything for launch.",
        },

        {
          index: "04",
          title: "Launch",
          copy: "Your website goes live — fast, mobile-friendly, and ready for visitors.",
        },

        {
          index: "05",
          title: "Maintain",
          copy: "We stay by your side — updating and maintaining your website whenever you need us.",
        },
      ],
    },

    maintenance: {
      label: "06 — Maintenance",
      heading: "We don't disappear after <em>launch</em>.",

      body: "Your website needs to stay updated to stay useful. We provide ongoing maintenance and technical support, so you never have to worry about fixing or updating it yourself.",

      items: [
        { icon: "file", text: "Content Updates" },
        { icon: "image", text: "Image Changes" },
        { icon: "tag", text: "Price Updates" },
        { icon: "bug", text: "Bug Fixes" },
        { icon: "support", text: "Technical Support" },
        { icon: "wrench", text: "Small Improvements" },
      ],

      note: "Monthly maintenance plans available for every website we build — and websites we didn't.",

      cta: {
        label: "Ask About Maintenance",
        href: "#contact",
      },
    },

    why: {
      label: "07 — Why KSDigital",
      heading: "Simple reasons businesses <em>choose us</em>.",

      points: [
        {
          title: "Modern Design",
          copy: "Websites that look professional on desktop and mobile.",
        },

        {
          title: "Made for Your Business",
          copy: "Every website is adapted to your business and its customers.",
        },

        {
          title: "Ready-Made or Custom",
          copy: "Choose the approach that fits your budget and needs.",
        },

        {
          title: "Ongoing Support",
          copy: "We can maintain and improve your website after launch.",
        },

        {
          title: "Mongolian Business Focused",
          copy: "We're a local team that understands how local businesses work.",
        },
      ],
    },

    audience: {
      label: "08 — Who We Build For",
      heading: "Built for businesses <em>like yours</em>.",

      body: "If you own or run any of these, KSDigital was made for you.",

      categories: [
        { icon: "coffee", label: "Cafés" },
        { icon: "restaurant", label: "Restaurants" },
        { icon: "salon", label: "Salons" },
        { icon: "shop", label: "Shops" },
        { icon: "fashion", label: "Fashion" },
        { icon: "service", label: "Services" },
        { icon: "hotel", label: "Hotels" },
        { icon: "company", label: "Small Businesses" },
      ],
    },

    contact: {
      label: "09 — Contact",
      heading: "Ready to put your business <em>online?</em>",

      body: "Tell us about your business — we'll help you choose the right website and take care of everything from there. We usually reply within one business day.",

      email: shared.meta.email,

      primaryCta: {
        label: "Start a Project",
        href: `mailto:${shared.meta.email}`,
      },

      secondaryCta: {
        label: "Browse Templates",
        href: "#templates",
      },

      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@yourbusiness.mn",
        project: "Your Business",
        projectPlaceholder: "e.g. I own a café and need a website with our menu…",
        submit: "Send Message",
        sent: "Message received — we'll reply within one business day",
      },
    },
  },

  // ============================================================
  // MONGOLIAN
  // ============================================================

  mn: {
    meta: {
      ...shared.meta,
      studioType: "Монгол бизнесүүдийн вэбсайт",
      location: "Улаанбаатар, Монгол",
      title: "KSDigital — Таны бизнесийн вэбсайт",

      description:
        "KSDigital нь Монголын жижиг дунд бизнесүүдэд орчин үеийн вэбсайт бүтээдэг. Бэлэн загвар сонгох эсвэл захиалгат дизайн хийлгэж, нээлтийн дараа засвар үйлчилгээг хангана.",

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
          label: "Загварууд",
          href: "#templates",
        },
        {
          label: "Ажлын явц",
          href: "#process",
        },
        {
          label: "Холбоо барих",
          href: "#contact",
        },
      ],

      cta: {
        label: "Вэбсайт эхлүүлэх",
        href: "#contact",
      },
    },

    hero: {
      ariaLabel: "Үндсэн танилцуулга",
      scrollCueAria: "Бидний тухай хэсэг рүү гүйлгэх",
      statusBadge: "Шинэ төсөл хүлээн авч байна",
      slotsOpen: "ҮНЭГҮЙ ЗӨВЛӨГӨӨ",
      webglTag: "Улаанбаатар · Монгол",

      headlineWords: [
        "Таны бизнесийн",
        "вэбсайтыг",
        "бид бүтээнэ.",
      ],

      subheadline:
        "Монголын жижиг дунд бизнесүүдэд зориулсан орчин үеийн, мэргэжлийн вэбсайт. Бэлэн загвараас сонгох эсвэл бидэнтэй хамтран захиалгат дизайн хийлгээрэй — нээлтийн дараа ч бид дэмжлэг үзүүлсээр байна.",

      primaryCta: {
        label: "Вэбсайт эхлүүлэх",
        href: "#contact",
      },

      secondaryCta: {
        label: "Загварууд үзэх",
        href: "#templates",
      },

      scrollIndicator: "ГҮЙЛГЭЖ ТАНИЛЦАХ",

      telemetry: [
        {
          label: "Байршил",
          value: "Улаанбаатар, Монгол",
        },
        {
          label: "Конд зориулсан",
          value: "Жижиг дунд бизнесүүдэд",
        },
        {
          label: "Сонголт",
          value: "Захиалгат эсвэл бэлэн загвар",
        },
      ],
    },

    marquee: [
      "Вэбсайт бүтээх",
      "Захиалгат дизайн",
      "Бэлэн загварууд",
      "Засвар үйлчилгээ",
      "Мобайл эхний ээлж",
      "Хурдан нээлт",
      "Локал дэмжлэг",
      "Хүртээмжтэй үнэ",
    ],

    about: {
      label: "01 — Бидний тухай",
      heading: "Монгол бизнесүүдийн вэбсайтын баг.",

      body: "KSDigital бол Улаанбаатар дахь вэб студи. Бидний нэг л тодорхой зорилго байдаг — жижиг дунд бизнесүүдэд мэргэжлийн вэбсайт өгөх. Төвөгтэй корпораци биш — бид вэбсайтыг бүтээж, нээлтэд гаргаж, арчлан хадгалдаг тул та бизнесээ явахад л анхаараарай.",

      stats: [
        {
          value: "40+",
          label: "Бүтээсэн вэбсайт",
        },
        {
          value: "10+",
          label: "Салбар",
        },
        {
          value: "24h",
          label: "Хариу өгөх хугацаа",
        },
        {
          value: "100%",
          label: "Локал баг",
        },
      ],
    },

    services: {
      label: "02 — Бид юу хийдэг вэ?",
      heading: "Таны бизнесид вэбсайт <em>хэрэгтэй</em>.",

      intro:
        "Онлайнд илүү сайхан харагдах, илүү олон хэрэглэгчтэй болох, бүтээгдэхүүн үйлчилгээгээ хялбар таниулахыг хүссэн бизнесүүдэд бид мэргэжлийн вэбсайт бүтээж өгдөг.",

      items: [
        {
          index: "01",
          title: "Вэбсайт бүтээх",
          copy: "Таны бизнесийн орчин үеийн, responsive вэбсайт — аль ч төхөөрөмж дээр хурдан ажиллаж, хэрэглэгчийг үйлчлүүлэгч болгоход тусална.",
          tags: ["Ресторан", "Кафе", "Дэлгүүр", "Зочид буудал"],
        },

        {
          index: "02",
          title: "Захиалгат дизайн",
          copy: "Юу хүсэж байгаагаа хэлээрэй. Бид таны брэнд, хэрэглэгчид, ажлын арга барилд тохирсон дизайныг бүтээнэ.",
          tags: ["Таны брэнд", "Таны загвар", "Таны функц"],
        },

        {
          index: "03",
          title: "Бэлэн загварууд",
          copy: "Манай загварын сангаас таалагдсанаа сонгоод таны агуулга, брэндээр тохируулж өгье. Хурдан нээлт, бага зардал.",
          tags: ["Сонгох", "Хурдан нээлт", "Хямд өртөг"],
        },

        {
          index: "04",
          title: "Вэбсайтын засвар үйлчилгээ",
          copy: "Нээлтийн дараа ч бид сайтыг шинэлэг байлгана — текст, зураг, үнэ, бүтээгдэхүүн — шаардлагатай үед алдаа засаж, дэмжлэг үзүүлнэ.",
          tags: ["Шинэчлэл", "Дэмжлэг", "Алдаа засвар", "Жижиг өөрчлөлт"],
        },
      ],
    },

    ways: {
      label: "03 — Хоёр арга зам",
      heading: "Вэбсайт авах <em>хоёр арга</em>.",

      options: [
        {
          index: "01",
          kind: "custom",
          subtitle: "ЗАХИАЛГАТ ДИЗАЙН",
          title: "Юу хүсэж байгаагаа хэлээрэй.",
          copy: "Таны бизнесийг судалж, юу хэрэгтэйг ойлгоод яг танд зориулсан вэбсайт бүтээнэ — таны брэнд, өнгө, функцуудтай.",
          points: [
            "Таны брэндэд суурилсан",
            "Ямар ч функц нэмэх боломжтой",
            "Өвөрмөц загвар, ямар ч компромисргүй",
          ],
          cta: {
            label: "Надад вэбсайт бүтээцгээе",
            href: "#contact",
          },
        },

        {
          index: "02",
          kind: "template",
          subtitle: "БЭЛЭН ЗАГВАР",
          title: "Таалагдсан дизайнаа сонгоорой.",
          copy: "Бэлэн загваруудаас сонгоод таны агуулга, өнгө, зураг, логотой тохируулж өгье. Хурдан нээлт, бага зардалтай.",
          points: [
            "Сар биш, хоногоор нээлт",
            "Тогтоосон хямд үнэ",
            "Батлагдсан дизайн",
          ],
          cta: {
            label: "Загварууд үзэх",
            href: "#templates",
          },
        },
      ],
    },

    templates: {
      label: "04 — Ажлууд ба Загварууд",
      heading: "Таны бизнесэд <em>бэлэн</em> жинхэнэ вэбсайтууд.",

      intro:
        "Доорх жишээ бүр эхлэл цэг юм. Сонгоод таны брэнд, агуулгад тохируулж өгье — эсвэл бүрэн захиалгат дизайны санаагаа аваарай.",

      categories: [
        "Ресторан",
        "Кафе",
        "Салон",
        "Фэшн",
        "Бизнес",
        "Үйлчилгээ",
      ],

      items: [
        {
          title: "Roast",
          category: "Кафе",
          price: "$150-с",
          note: "Кофены шоп, кафе зориулсан дулаан меню галерей бүхий загвар",
        },

        {
          title: "Ember",
          category: "Ресторан",
          price: "$180-с",
          note: "Ресторанд зориулсан меню, захиалга, байршилтай загвар",
        },

        {
          title: "Velvet",
          category: "Салон",
          price: "$150-с",
          note: "Гоо сайхны салонд зориулсан үйлчилгээ, үнэ, цаг захиалгын загвар",
        },

        {
          title: "Atelier",
          category: "Фэшн",
          price: "$190-с",
          note: "Хувцасны дэлгүүр, брэндэд зориулсан коллекци, lookbook загвар",
        },

        {
          title: "Ledger",
          category: "Бизнес",
          price: "$170-с",
          note: "Үйлчилгээ, агентлаг зориулсан тодорхой компани танилцуулга",
        },

        {
          title: "Harbor",
          category: "Зочид буудал",
          price: "$200-с",
          note: "Зочид буудал, guesthouse зориулсан өрөө, зураг, захиалгын загвар",
        },
      ],
    },

    process: {
      label: "05 — Ажлын явц",
      heading: "Анхны уулзалтаас нээлт хүртэл — <em>энгийнээр</em>.",

      steps: [
        {
          index: "01",
          title: "Ярилцах",
          copy: "Бизнесийнхээ талаар юу хэрэгтэйгээ хэлээрэй. Богинохон яриа хангалттай.",
        },

        {
          index: "02",
          title: "Дизайн",
          copy: "Бэлэн загвар сонгох эсвэл бидэнтэй хамт захиалгат дизайн хийлгээрэй.",
        },

        {
          index: "03",
          title: "Бүтээх",
          copy: "Бид вэбсайтыг бүтээж, таны агуулгыг оруулаад нээлтэд бэлдэнэ.",
        },

        {
          index: "04",
          title: "Нээх",
          copy: "Вэбсайт тань нээлтээ хийнэ — хурдан, мобайлтой, хэрэглэгчдэд бэлэн.",
        },

        {
          index: "05",
          title: "Арчлах",
          copy: "Бид хажууд байна — хэрэгцээтэй үед бүрд шинэчлэл, засвар үйлчилгээ хийнэ.",
        },
      ],
    },

    maintenance: {
      label: "06 — Засвар үйлчилгээ",
      heading: "Нээлтийн дараа ч бид <em>хаядаггүй</em>.",

      body: "Вэбсайт тань шинэлэг байж л ажилладаг. Бид тогтмол засвар үйлчилгээ, техникийн дэмжлэг үзүүлдэг тул та өөрөө засаж, шинэчлэх талаар санаа зовох хэрэггүй.",

      items: [
        { icon: "file", text: "Агуулгын шинэчлэл" },
        { icon: "image", text: "Зургийн солилт" },
        { icon: "tag", text: "Үнийн шинэчлэл" },
        { icon: "bug", text: "Алдааг засах" },
        { icon: "support", text: "Техникийн дэмжлэг" },
        { icon: "wrench", text: "Жижиг сайжруулалт" },
      ],

      note: "Бүтээсэн вэбсайт бүрт — мөн бусдын вэбсайтад ч — сарын засвар үйлчилгээний төлөвлөгөө байдаг.",

      cta: {
        label: "Засвар үйлчилгээ асуух",
        href: "#contact",
      },
    },

    why: {
      label: "07 — Яагаад KSDigital?",
      heading: "Бизнесүүд биднийг <em>сонгодог</em> энгийн шалтгаанууд.",

      points: [
        {
          title: "Орчин үеийн дизайн",
          copy: "Десктоп болон мобайл дээр мэргэжлийн харагдах вэбсайт.",
        },

        {
          title: "Таны бизнесэд зориулсан",
          copy: "Вэбсайт бүр таны бизнес, хэрэглэгчидтэй тохирсон.",
        },

        {
          title: "Бэлэн эсвэл захиалгаат",
          copy: "Таны бюджет, хэрэгцээнд тохирсон аргыг сонгоорой.",
        },

        {
          title: "Байнгын дэмжлэг",
          copy: "Нээлтийн дараа ч вэбсайтыг арчлан сайжруулж болно.",
        },

        {
          title: "Монгол бизнесэд төвлөрсөн",
          copy: "Бид орон нутгийн баг бөгөөд локал бизнесийг ойлгодог.",
        },
      ],
    },

    audience: {
      label: "08 — Хэнд зориулсан вэ?",
      heading: "Тантай адил <em>бизнесүүдэд</em>.",

      body: "Эдгээрийн аль нэгийг эзэмшдэг, удирддаг бол KSDigital танд зориулагдсан.",

      categories: [
        { icon: "coffee", label: "Кафенүүд" },
        { icon: "restaurant", label: "Ресторанууд" },
        { icon: "salon", label: "Салонууд" },
        { icon: "shop", label: "Дэлгүүрүүд" },
        { icon: "fashion", label: "Фэшн" },
        { icon: "service", label: "Үйлчилгээ" },
        { icon: "hotel", label: "Зочид буудлууд" },
        { icon: "company", label: "Жижиг бизнесүүд" },
      ],
    },

    contact: {
      label: "09 — Холбоо барих",
      heading: "Бизнесээ <em>онлайнд</em> гаргацгаая.",

      body: "Бизнесийнхээ талаар бидэнд хэлээрэй — зөв вэбсайтыг сонгоход тусалж, цаашдын бүх ажлыг хариуцна. Ажлын нэг өдрийн дотор хариу өгдөг.",

      email: shared.meta.email,

      primaryCta: {
        label: "Төсөл эхлүүлэх",
        href: `mailto:${shared.meta.email}`,
      },

      secondaryCta: {
        label: "Загварууд үзэх",
        href: "#templates",
      },

      form: {
        name: "Нэр",
        namePlaceholder: "Таны нэр",
        email: "Имэйл",
        emailPlaceholder: "you@business.mn",
        project: "Таны бизнес",
        projectPlaceholder: "Жишээ нь: Надад кафе байгаа, меню бүхий вэбсайт хэрэгтэй…",
        submit: "Илгээх",
        sent: "Хүлээн авлаа — нэг ажлын өдрийн дотор хариу өгнө",
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
