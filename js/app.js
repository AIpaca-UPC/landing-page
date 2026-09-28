const translations = {
  en: {
    skip: "Skip to content", navBenefits: "Benefits", navHow: "How it works", navFaq: "FAQ", navContact: "Contact", navStart: "Explore Rumbo",
    eyebrow: "School transport coordination", heroTitle: "Confidence in every school trip.", heroText: "Rumbo centralizes trip status, pickup and delivery milestones, delays and incidents so families stay informed without distracting the driver.", heroPrimary: "Discover the benefits", heroSecondary: "Contact us",
    previewLabel: "Current trip", previewRoute: "Morning route", previewStatus: "In progress", stepPickup: "Pickup confirmed", stepRoute: "Trip in progress", stepArrival: "School arrival", previewUpdate: "Last update 07:31", previewPending: "Pending", previewNote: "Relevant events appear here in chronological order.",
    benefitsTitle: "Useful information without unnecessary noise", benefitsText: "Rumbo focuses on the events families and drivers need to coordinate the trip.",
    benefit1Title: "Clear trip status", benefit1Text: "Families can quickly see whether the student was picked up, the trip is in progress or the delivery was completed.",
    benefit2Title: "Relevant alerts", benefit2Text: "Delays and incidents are recorded once and communicated to the people who need to know.",
    benefit3Title: "Less repetitive coordination", benefit3Text: "Trip milestones reduce the need for repeated calls and scattered messages during the route.",
    howTitle: "How does Rumbo work?", howText: "A simple sequence of milestones keeps the trip understandable from start to finish.", how1Title: "Pickup", how1Text: "The driver confirms the student's pickup while the vehicle is stopped.", how2Title: "Trip", how2Text: "Families consult the current stage and the chronological trip timeline.", how3Title: "Delay or incident", how3Text: "An unexpected event can be recorded once and shared with the affected families.", how4Title: "Delivery", how4Text: "The delivery is confirmed and becomes part of the trip history.",
    segmentsTitle: "Designed for both sides of the trip", parentsLabel: "Parents / Tutors", parentsTitle: "Know what is happening without calling the driver.", parentsText: "Check the current status, review milestones, receive relevant alerts and keep control over notification preferences.", parentsCta: "I am a parent or tutor →", driversLabel: "Drivers", driversTitle: "Keep the route organized with fewer interruptions.", driversText: "Manage the route, students and important events with short actions designed for use while the vehicle is safely stopped.", driversCta: "I am a driver →",
    faqTitle: "Frequently asked questions", faqText: "Basic questions about the scope and use of Rumbo.", faq1Q: "Does Rumbo continuously track a child's location?", faq1A: "The initial scope focuses on confirmed trip states and milestones. Continuous GPS tracking is not required for the MVP.", faq2Q: "Who can consult a student's information?", faq2A: "The product is designed so that access is limited to authorized users according to their role and relationship with the student.", faq3Q: "Does the driver need to interact with Rumbo while driving?", faq3A: "No. Operational actions are designed to be short and performed while the vehicle is stopped.",
    contactEyebrow: "Contact", contactTitle: "Have a question about Rumbo?", contactText: "Send us a message. In this AV1 version the form validates and stores the request locally in the browser as prototype evidence.", terms: "Terms of Service", privacy: "Privacy Policy", nameLabel: "Name", emailLabel: "Email", messageLabel: "Message", send: "Send message", formSuccess: "Your request was registered in this AV1 prototype.", formError: "Complete the required fields with valid information."
  },
  es: {
    skip: "Saltar al contenido", navBenefits: "Beneficios", navHow: "Cómo funciona", navFaq: "Preguntas frecuentes", navContact: "Contacto", navStart: "Conocer Rumbo",
    eyebrow: "Coordinación de movilidad escolar", heroTitle: "Tranquilidad en cada trayecto.", heroText: "Rumbo centraliza el estado del traslado, los hitos de recojo y entrega, retrasos e incidencias para mantener informadas a las familias sin distraer al conductor.", heroPrimary: "Conocer los beneficios", heroSecondary: "Contáctanos",
    previewLabel: "Traslado actual", previewRoute: "Ruta de la mañana", previewStatus: "En curso", stepPickup: "Recojo confirmado", stepRoute: "Trayecto en curso", stepArrival: "Llegada al colegio", previewUpdate: "Última actualización 07:31", previewPending: "Pendiente", previewNote: "Los eventos relevantes aparecen aquí en orden cronológico.",
    benefitsTitle: "Información útil sin ruido innecesario", benefitsText: "Rumbo se concentra en los eventos que familias y conductores necesitan para coordinar el traslado.",
    benefit1Title: "Estado claro del traslado", benefit1Text: "Las familias pueden conocer rápidamente si el estudiante fue recogido, si el trayecto está en curso o si la entrega terminó.",
    benefit2Title: "Avisos relevantes", benefit2Text: "Los retrasos e incidencias se registran una sola vez y se comunican a quienes necesitan conocerlos.",
    benefit3Title: "Menos coordinación repetitiva", benefit3Text: "Los hitos del trayecto reducen la necesidad de llamadas repetidas y mensajes dispersos durante la ruta.",
    howTitle: "¿Cómo funciona Rumbo?", howText: "Una secuencia sencilla de hitos permite comprender el traslado de inicio a fin.", how1Title: "Recojo", how1Text: "El conductor confirma el recojo del estudiante con el vehículo detenido.", how2Title: "Trayecto", how2Text: "Las familias consultan la etapa actual y la línea de tiempo cronológica.", how3Title: "Retraso o incidencia", how3Text: "Un imprevisto puede registrarse una vez y comunicarse a las familias afectadas.", how4Title: "Entrega", how4Text: "La entrega se confirma y queda como parte del historial del traslado.",
    segmentsTitle: "Diseñado para ambos lados del trayecto", parentsLabel: "Padres / Tutores", parentsTitle: "Conoce lo que ocurre sin llamar al conductor.", parentsText: "Consulta el estado actual, revisa los hitos, recibe avisos relevantes y controla tus preferencias de notificación.", parentsCta: "Soy padre o tutor →", driversLabel: "Conductores", driversTitle: "Mantén la ruta organizada con menos interrupciones.", driversText: "Gestiona la ruta, estudiantes y eventos importantes mediante acciones cortas pensadas para realizarse con el vehículo detenido.", driversCta: "Soy conductor →",
    faqTitle: "Preguntas frecuentes", faqText: "Dudas básicas sobre el alcance y uso de Rumbo.", faq1Q: "¿Rumbo rastrea continuamente la ubicación del menor?", faq1A: "El alcance inicial se centra en estados e hitos confirmados del trayecto. El seguimiento GPS continuo no es un requisito del MVP.", faq2Q: "¿Quién puede consultar la información de un estudiante?", faq2A: "El producto está diseñado para limitar el acceso a usuarios autorizados según su rol y vínculo con el estudiante.", faq3Q: "¿El conductor debe interactuar con Rumbo mientras conduce?", faq3A: "No. Las acciones operativas se plantean para ser breves y realizarse con el vehículo detenido.",
    contactEyebrow: "Contacto", contactTitle: "¿Tienes una duda sobre Rumbo?", contactText: "Envíanos un mensaje. En esta versión AV1 el formulario valida y guarda la solicitud localmente en el navegador como evidencia del prototipo.", terms: "Términos de Servicio", privacy: "Política de Privacidad", nameLabel: "Nombre", emailLabel: "Correo", messageLabel: "Mensaje", send: "Enviar mensaje", formSuccess: "Tu solicitud fue registrada en este prototipo de AV1.", formError: "Completa los campos obligatorios con información válida."
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const languageToggle = document.querySelector(".language-toggle");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

function setMenu(open) {
  menuToggle?.setAttribute("aria-expanded", String(open));
  mainNav?.classList.toggle("open", open);
}

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language === "es" ? "es" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  if (languageToggle) languageToggle.textContent = language === "en" ? "ES" : "EN";
  sessionStorage.setItem("rumboLanguage", language);
}

let currentLanguage = sessionStorage.getItem("rumboLanguage") || "en";
applyLanguage(currentLanguage);

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  applyLanguage(currentLanguage);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const dictionary = translations[currentLanguage] || translations.en;
  if (!contactForm.checkValidity()) {
    formMessage.textContent = dictionary.formError;
    contactForm.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(contactForm).entries());
  const previous = JSON.parse(localStorage.getItem("rumboAv1Contacts") || "[]");
  previous.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem("rumboAv1Contacts", JSON.stringify(previous));

  formMessage.textContent = dictionary.formSuccess;
  contactForm.reset();
});
