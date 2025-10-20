import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apps: {
        about: "About",
        experience: "Work Experience",
        projects: "Personal Projects",
        contact: "Contact",
        education: "Education",

      },
      ui: {
        close: "Close",
        contentOf: "Yo"
      },
      pages: {
        about: [
          { type: "p", text: "Hi! I'm a developer who loves building playful UIs." },
          { type: "img", src: "/painting-wallpaper.jpg", alt: "Painting wallpaper" },
          { type: "p", text: "This portfolio mimics a Linux desktop. Double-click icons to explore." }
        ],
        experience: [
          { type: "p", text: "Experience with React, TypeScript, Tailwind, and i18n." }
        ],
        projects: [
          { type: "p", text: "A selection of personal projects and experiments." },
          { type: "img", src: "/street-wallpaper.png", alt: "Street wallpaper" }
        ],
        contact: [
          { type: "p", text: "Feel free to reach out via social links in the taskbar or footer." }
        ],
        education: [
          { type: "p", text: "Education with React, TypeScript, Tailwind, and i18n.", className: "text-base font-semibold text-xl" },
          { type: "p", text: "Highlighted line using Tailwind utility classes.", className: "bg-yellow-100 rounded px-2 py-1" }
        ]
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  es: {
    translation: {
      apps: {
        about: "Acerca de",
        experience: "Experiencia Laboral",
        projects: "Proyectos personales",
        contact: "Contacto"
      },
      ui: {
        close: "Cerrar",
        contentOf: "Contenido de {{label}}"
      },
      pages: {
        about: [
          { type: "p", text: "¡Hola! Soy un desarrollador al que le encantan las UIs divertidas." },
          { type: "img", src: "/painting-wallpaper.jpg", alt: "Fondo de pintura" },
          { type: "p", text: "Este portfolio imita un escritorio Linux. Doble clic en los iconos para explorar." }
        ],
        experience: [
          
          { type: "p", text: "Acceleralia", className: "text-xl font-semibold px-2" },
          { type: "p", text: "Barcelona, España", className: "text-sm text-gray-500 px-2" },{ type: "p", text: "Full Stack Engineer (marzo 2025 – septiembre 2025)", className: "text-base font-semibold px-2" },
          { type: "p", text: "• Desarrollé proyectos web internos utilizando Vue.js, Node.js, Tailwind CSS, Docker y bases de datos relacionales, asegurando entornos consistentes y escalables.", className: "text-base px-2" },
          { type: "p", text: "• Creé una plataforma de inversión para startups, con frontend en Vue.js y Tailwind CSS, backend en Node.js, e integración de web scraping para recopilar datos en tiempo real, optimizando el proceso de evaluación de oportunidades.", className: "text-base px-2" },
          { type: "p", text: "• Participé en las fases iniciales de una aplicación de gestión de empleados, implementando funcionalidades para horarios, notificaciones, formación y comunicación interna, mejorando la eficiencia operativa del equipo.", className: "text-base px-2" },
          { type: "p", text: "• Diseñé y desarrollé una web para una academia de inglés con chatbots impulsados por ElevenLabs, enfocada en el aprendizaje conversacional interactivo, lo que incrementó la retención de usuarios mediante experiencias personalizadas.", className: "text-base px-2" },
          { type: "p", text: "• Mantuve comunicación directa con clientes para alinear requisitos y entregables, además de elaborar documentación técnica detallada para cada proyecto.", className: "text-base px-2" },
          { type: "p", text: "• Utilicé Docker para crear entornos de desarrollo y despliegue reproducibles, facilitando la colaboración y reduciendo tiempos de onboarding.", className: "text-base px-2" },
          { type: "p", text: "• Colaboré diariamente en equipo a través de Slack y gestioné versiones con Git, promoviendo prácticas ágiles y revisiones de código eficientes.", className: "text-base px-2 pb-2" },{ type: "p", text: "Desarrollador Web (octubre 2024 – marzo 2025)", className: "text-base font-semibold px-2" },
          { type: "p", text: "• Mantuve y creé páginas web con WordPress para diversos clientes, asegurando actualizaciones seguras y optimizaciones de rendimiento.", className: "text-base px-2" },
          { type: "p", text: "• Diseñé interfaces de usuario intuitivas utilizando Vue.js, CSS y Tailwind CSS, priorizando la usabilidad y el diseño responsive.", className: "text-base px-2" },
          { type: "p", text: "• Automaticé procesos de negocio con Voiceflow, integrando flujos conversacionales que redujeron el tiempo de respuesta manual en interacciones con usuarios.", className: "text-base px-2" },
          { type: "p", text: "• Gestioné el mantenimiento y creación de bases de datos MySQL, implementando consultas eficientes y backups regulares para garantizar la integridad de los datos.", className: "text-base px-2" },
          { type: "p", text: "• Documenté tareas y procesos detalladamente, y apoyé en la comunicación con clientes para resolver incidencias y proponer mejoras proactivas.", className: "text-base px-2 pb-4" }
          
          
          
        ],
        projects: [
          { type: "p", text: "Una selección de proyectos personales y experimentos." },
          { type: "img", src: "/street-wallpaper.png", alt: "Fondo de calle" }
        ],
        contact: [
          { type: "p", text: "Puedes contactarme por las redes en la barra o el pie." }
        ],
        education: [
          { type: "p", text: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web", className: "px-2 text-base font-semibold text-xl" },
          { type: "p", text: "Monlau Formación Profesional, España", className: "px-2 " },
          { type: "p", text: "2023 - 2025", className: "px-2" },
          { type: "p", text: "Mi educación formal para desarrollo de aplicaciones web, aunque también aprendí con cualquier recurso que pudiera encontrar por mi cuenta. Durante este periodo conseguí mi primer trabajo en el sector.", className: "text-base px-2 pb-4" },
          { type: "p", text: "Nuestro proyecto final 'Alumni', desarrollado en equipo, fue premiado como Mejor Proyecto de Informática 2024-2025 por NTT Data. Plataforma disponible en: https://alumni.alumnes-monlau.com", className: "text-base px-2 pb-4" },
          { type: "p", text: "Bachillerato de Ciencias Sociales", className: "px-2 text-base font-semibold text-xl" },
          { type: "p", text: "Escuela Gravi, España", className: "px-2 " },
          { type: "p", text: "2021 - 2023", className: "px-4" },
          { type: "p", text: "Inicialmente planeaba continuar en la universidad, pero descubrí que la formación profesional en desarrollo web encajaba mejor con mis intereses y mi forma de aprender.", className: "text-base px-2" },
        ]
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  ca: {
    translation: {
      apps: {
        about: "Sobre mi",
        experience: "Experiència Laboral",
        projects: "Projectes personals",
        contact: "Contacte"
      },
      ui: {
        close: "Tancar",
        contentOf: "Contingut de {{label}}"
      },
      pages: {
        about: [
          { type: "p", text: "Hola! Soc un desenvolupador apassionat per les interfícies divertides." },
          { type: "img", src: "/painting-wallpaper.jpg", alt: "Fons de pintura" },
          { type: "p", text: "Aquest portfoli imita un escriptori Linux. Fes doble clic als icones per explorar." }
        ],
        experience: [
          { type: "p", text: "Experiència amb React, TypeScript, Tailwind i i18n." }
        ],
        projects: [
          { type: "p", text: "Una selecció de projectes personals i experiments." },
          { type: "img", src: "/street-wallpaper.png", alt: "Fons de carrer" }
        ],
        contact: [
          { type: "p", text: "Contacta'm per les xarxes a la barra o al peu." }
        ]
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  ko: {
    translation: {
      apps: {
        about: "소개",
        experience: "경력",
        projects: "개인 프로젝트",
        contact: "연락처"
      },
      ui: {
        close: "닫기",
        contentOf: "{{label}} 내용"
      },
      pages: {
        about: [
          { type: "p", text: "안녕하세요! 재미있는 UI를 만드는 것을 좋아하는 개발자입니다." },
          { type: "img", src: "/painting-wallpaper.jpg", alt: "페인팅 배경" },
          { type: "p", text: "이 포트폴리오는 리눅스 데스크톱처럼 동작합니다. 아이콘을 더블 클릭해 보세요." }
        ],
        experience: [
          { type: "p", text: "React, TypeScript, Tailwind, i18n 사용 경험." }
        ],
        projects: [
          { type: "p", text: "개인 프로젝트와 실험 모음." },
          { type: "img", src: "/street-wallpaper.png", alt: "거리 배경" }
        ],
        contact: [
          { type: "p", text: "작업 표시줄 또는 바닥글의 링크로 연락주세요." }
        ]
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  }
} as const;

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const detected =
  saved ||
  (navigator.language.startsWith("es")
    ? "es"
    : navigator.language.startsWith("ca")
    ? "ca"
    : navigator.language.startsWith("ko")
    ? "ko"
    : "en");

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detected,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;