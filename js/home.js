const heroSlides = [
  {
    title: "Artificial Intelligence, GenAI and Agentic AI Solutions",
    subtitle:
      "Next Generation AI, GenAI and Agentic systems that understand, reason and act autonomously to deliver smarter business outcomes.",
    imageDesktop: "./assets/hero_slide_3.jpeg",
    imageMobile: "./assets/hero_slide_3_mobile.png",
    cssClass: "carousel-item-1",
  },
  {
    title: "Machine Learning",
    subtitle:
      "Predictive analytics, anomaly detection, forecasting, and custom ML models built for business impact.",
    imageDesktop: "./assets/machine_learning.jpg",
    imageMobile: "./assets/machine_learning_mobile.png",
    cssClass: "carousel-item-2",
  },
  {
    title: "Data Lakehouse",
    subtitle:
      "End-to-end data pipelines, unified data platforms, and modern lakehouse architecture for scalable analytics.",
    imageDesktop: "./assets/data_lakehouse.jpg",
    imageMobile: "./assets/data_lakehouse_mobile.png",
    cssClass: "carousel-item-3",
  },
  {
    title: "Dashboard Development",
    subtitle:
      "Power BI dashboards delivered end-to-end with user-centric design and data-driven insights.",
    imageDesktop: "./assets/dashboard_dev.jpg",
    imageMobile: "./assets/dashboard_dev_mobile.png",
    cssClass: "carousel-item-4",
  },
  {
    title: "Process Automation Services",
    subtitle:
      "Streamlining workflows with business process re-engineering and enterprise automation solutions.",
    imageDesktop: "./assets/hero_slide_1.jpeg",
    imageMobile: "./assets/hero_slide_1_mobile.png",
    cssClass: "carousel-item-5",
  },
];

const servicesData = [
  {
    title: "Artificial Intelligence, GenAI and Agentic AI Solutions",
    description:
      "Building intelligent AI systems that automate conversations, boost productivity, and enhance decision-making.",
    imageDesktop: "./assets/hero_slide_3.jpeg",
    features: [
      "LLM-based chatbots",
      "Generative automation workflows",
      "Prompt engineering",
      "Enterprise GenAI integrations",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Building predictive and analytical models that deliver accurate, actionable business insights.",
    imageDesktop: "./assets/machine_learning.jpg",
    features: [
      "Forecasting & demand prediction",
      "Anomaly detection",
      "Predictive maintenance",
      "HR & sales analytics models",
    ],
  },
  {
    title: "Data Lakehouse",
    description:
      "Modernizing your data architecture for unified analytics, scalability, and real-time accessibility.",
    imageDesktop: "./assets/data_lakehouse.jpg",
    features: [
      "Data pipeline engineering",
      "Unified data platform setup",
      "ETL/ELT frameworks",
      "Lakehouse architecture design",
    ],
  },
  {
    title: "Dashboard Development",
    description:
      "Delivering intuitive dashboards that present your data with clarity, precision, and powerful insights.",
    imageDesktop: "./assets/dashboard_dev.jpg",
    features: [
      "Power BI dashboard design",
      "Advanced analytics & insights",
      "Executive KPI dashboards",
      "Self-service BI enablement",
    ],
  },
  {
    title: "Process Automation",
    description:
      "Automating repetitive workflows to improve efficiency, reduce errors, and save operational costs.",
    imageDesktop: "./assets/hero_slide_1.jpeg",
    features: [
      "Approval workflow automation",
      "RPA & low-code automation",
      "Supply chain process automation",
      "Employee onboarding automation",
    ],
  },
];

const isMobile = window.innerWidth < 768;

function renderHeroSlides() {
  const carouselInner = document.getElementById("carouselInner");
  heroSlides.forEach((slide, index) => {
    const bgImage = isMobile ? slide.imageMobile : slide.imageDesktop;

    const item = document.createElement("div");
    item.className = `carousel-item h-100 ${index === 0 ? "active" : ""}`;

    item.innerHTML = `
        <div
          class="w-100 h-100 d-flex align-items-start justify-content-start ${slide.cssClass}"
          style="
            background-image: url('${bgImage}');
            background-size: cover;
            background-position: center;
            height: 600px;
          "
        >
          <div class="carousel-caption-box">
            <h1 class="text-primary mb-2">${slide.title}</h1>
            <p class="carousel-sub-heading mb-0">${slide.subtitle}</p>
          </div>
        </div>
      `;

    carouselInner.appendChild(item);
  });
}

function renderServiceCarousel() {
  const container = document.querySelector(".owl-carousel");

  servicesData.forEach((service) => {
    const imgToUse = service.imageDesktop;

    container.innerHTML += `
      <div class="item">
        <div class="card service-card rounded">
          <div class="service-image">
            <img src="${imgToUse}" class="card-img-top w-100" alt="${
      service.title
    }" />
          </div>

          <div class="card-body mt-3">
            <h5 class="card-title fw-bold text-dark">${service.title}</h5>
            <p class="card-text text-muted">${service.description}</p>

            <ul class="service-features text-muted">
              ${service.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false, // Disable default navigation
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".custom-nav.next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  $(".custom-nav.prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeroSlides();
  renderServiceCarousel();
});
