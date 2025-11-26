const solutionsData = [
  {
    number: "01",
    title: "GenAI & Agentic AI Solutions",
    description:
      "Build next-generation AI systems that automate reasoning, enhance decisions, and deliver intelligent workflows across the organization.",
    features: [
      "LLM-based chatbots",
      "Agentic workflows",
      "AI-driven automation",
      "Use-case design & PoCs",
    ],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?fit=crop&w=1200&q=80",
    reverse: true,
    alt: "Commercial Analytics",
  },
  {
    number: "02",
    title: "Machine Learning Solutions",
    description:
      "Develop predictive ML models that optimize operations and enable data-backed decisions.",
    features: [
      "Warranty prediction",
      "HR attrition modeling",
      "Demand forecasting",
      "Anomaly detection",
    ],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    reverse: false,
    alt: "RWE/RWD Analytics",
  },
  {
    number: "03",
    title: "Data Lakehouse Solutions",
    description:
      "Build a modern data foundation with scalable lakehouse architecture for analytics and AI.",
    features: [
      "Unified data storage",
      "Automated data pipelines",
      "BI & ML readiness",
      "Governance frameworks",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&q=80",
    reverse: true,
    alt: "Business Intelligence",
  },
  {
    number: "04",
    title: "Dashboard & Analytics",
    description:
      "Deliver powerful dashboards that simplify decision-making and provide real-time insights.",
    features: [
      "Power BI dashboards",
      "Custom data visuals",
      "KPI-driven reporting",
      "Trending & insights",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=1200&q=80",
    reverse: false,
    alt: "Master Data Management",
  },
  {
    number: "05",
    title: "Process Automation",
    description:
      "Automate repetitive workflows to reduce manual effort and improve speed, compliance, and efficiency.",
    features: [
      "Procure-to-pay",
      "Order-to-cash",
      "Employee onboarding",
      "Supply chain workflows",
    ],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=1200&q=80",
    reverse: true,
    alt: "Conversational AI",
  },
];

// RENDER FUNCTION
function renderSolutions() {
  const wrapper = document.getElementById("solutions-wrapper");

  solutionsData.forEach((item) => {
    const section = document.createElement("section");
    section.className = "solution-section";

    // LEFT IMAGE (reverse = true)
    // RIGHT IMAGE (reverse = false)

    const html = item.reverse
      ? `
      <div class="container">
        <div class="row solution-content">

          <!-- IMAGE LEFT -->
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="solution-image">
              <img src="${item.image}" alt="${item.alt}" />
            </div>
          </div>

          <!-- TEXT RIGHT -->
          <div class="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
            <div class="ps-lg-5">
              <div class="solution-number">${item.number}</div>
              <h2 class="solution-title">${item.title}</h2>
              <p class="solution-description">${item.description}</p>

              <ul class="solution-features">
                ${item.features
                  .map(
                    (feat) => `
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    <span>${feat}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>

        </div>
      </div>
    `
      : `
      <div class="container">
        <div class="row solution-content">

          <!-- TEXT LEFT -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="pe-lg-5">
              <div class="solution-number">${item.number}</div>
              <h2 class="solution-title">${item.title}</h2>
              <p class="solution-description">${item.description}</p>

              <ul class="solution-features">
                ${item.features
                  .map(
                    (feat) => `
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    <span>${feat}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>

          <!-- IMAGE RIGHT -->
          <div class="col-lg-6">
            <div class="solution-image">
              <img src="${item.image}" alt="${item.alt}" />
            </div>
          </div>

        </div>
      </div>
    `;

    section.innerHTML = html;
    wrapper.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", renderSolutions);
