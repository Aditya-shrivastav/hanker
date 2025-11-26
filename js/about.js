const aboutSections = [
  {
    reverse: true, // IMAGE LEFT, TEXT RIGHT
    title: "Mission",
    description:
      "Our mission is to empower organizations with intelligent, scalable, and responsible AI solutions that transform data into meaningful insights and deliver measurable business value.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?fit=crop&w=1200&q=80",
    alt: "Commercial Analytics",
  },

  {
    reverse: false, // TEXT LEFT, IMAGE RIGHT
    title: "Who we are…",
    description:
      "We are a technology-driven team dedicated to helping organizations unlock the power of data and AI through innovative, scalable, and impactful solutions.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    alt: "RWE/RWD Analytics",
  },
];

const valuesData = [
  {
    icon: "bi-lightbulb",
    title: "Empower Data-Driven Decisions",
    description:
      "We enable organizations to uncover real business value by transforming data into actionable insights.",
  },
  {
    icon: "bi-handshake",
    title: "Innovate Through Intelligent AI",
    description:
      "Our mission is to deliver responsible, scalable AI and GenAI solutions that drive measurable impact.",
  },
  {
    icon: "bi-shield-check",
    title: "Simplify Complexity",
    description:
      "We design user-friendly, purpose-built solutions that solve real problems through clarity and simplicity.",
  },
  {
    icon: "bi-award",
    title: "Transform Processes, Accelerate Growth",
    description:
      "We modernize data, analytics, and business operations to help enterprises achieve continuous improvement.",
  },
];

function renderAboutSections() {
  const wrapper = document.getElementById("about-wrapper");

  aboutSections.forEach((item) => {
    const section = document.createElement("section");
    section.className = "solution-section";

    const html = item.reverse
      ? `
      <div class="container">
        <div class="row solution-content align-items-center">

          <!-- IMAGE LEFT -->
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="solution-image">
              <img src="${item.image}" alt="${item.alt}" class="img-fluid" />
            </div>
          </div>

          <!-- TEXT RIGHT -->
          <div class="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
            <div class="ps-lg-5">
              <h2 class="solution-title">${item.title}</h2>
              <p class="fs-5 text-muted mb-4">${item.description}</p>
            </div>
          </div>

        </div>
      </div>
    `
      : `
      <div class="container">
        <div class="row solution-content align-items-center">

          <!-- TEXT LEFT -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="pe-lg-5">
              <h2 class="solution-title">${item.title}</h2>
              <p class="fs-5 text-muted mb-4">${item.description}</p>
            </div>
          </div>

          <!-- IMAGE RIGHT -->
          <div class="col-lg-6">
            <div class="solution-image">
              <img src="${item.image}" alt="${item.alt}" class="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    `;

    section.innerHTML = html;
    wrapper.appendChild(section);
  });
}

function renderValues() {
  const wrapper = document.getElementById("values-wrapper");

  valuesData.forEach((value) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

    col.innerHTML = `
      <div class="value-card h-100">
        <div class="value-icon">
          <i class="bi ${value.icon}"></i>
        </div>
        <h4 class="fw-semibold text-dark mb-3">${value.title}</h4>
        <p class="mb-0">${value.description}</p>
      </div>
    `;

    wrapper.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderValues();
  renderAboutSections();
});
