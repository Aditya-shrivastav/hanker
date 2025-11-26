const servicesData = [
  {
    id: "data-training",
    icon: "bi-mortarboard",
    title: "Data Trainings",
    description: "Upskilling teams to build a strong data-driven culture.",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
    reverse: false, // image on RIGHT
    features: [
      {
        icon: "bi-lightbulb",
        title: "Literacy",
        points: [
          "Data basics",
          "Understanding KPIs",
          "Dashboard interpretation",
        ],
      },
      {
        icon: "bi-cpu",
        title: "ML Concepts",
        points: [
          "ML fundamentals",
          "Real-world case studies",
          "Practical demos",
        ],
      },
    ],
  },

  {
    id: "data-consulting",
    icon: "bi-briefcase",
    title: "Data Consulting",
    description:
      "Strategic guidance to build scalable, high-performance data systems.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    reverse: true, // image on LEFT
    features: [
      {
        icon: "bi-map",
        title: "Strategy",
        points: [
          "Data roadmaps",
          "Use-case prioritization",
          "Analytics modernization",
        ],
      },
      {
        icon: "bi-cloud",
        title: "Lakehouse",
        points: ["Architecture design", "Data pipelines", "Governance setup"],
      },
    ],
  },

  {
    id: "process-automation",
    icon: "bi-gear-wide-connected",
    title: "Process Automation",
    description: "Automating end-to-end workflows for efficiency and accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    reverse: false,
    features: [
      {
        icon: "bi-diagram-3",
        title: "Workflows",
        points: ["Procure-to-pay", "Order-to-cash", "Supply chain processes"],
      },
      {
        icon: "bi-fingerprint",
        title: "Approvals",
        points: [
          "PR to PO automation",
          "Delegation of authority flows",
          "Multi-level approvals",
        ],
      },
    ],
  },

  {
    id: "dashboard-dev",
    icon: "bi-bar-chart-line",
    title: "Dashboard Development",
    description: "Transforming data into intuitive, decision-ready dashboards.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    reverse: true,
    features: [
      {
        icon: "bi-bar-chart",
        title: "Power BI",
        points: [
          "End-to-end dashboards",
          "Automated data refresh",
          "Governed access layers",
        ],
      },
      {
        icon: "bi-palette",
        title: "Visuals",
        points: ["Interactive charts", "Custom visuals", "KPI storytelling"],
      },
    ],
  },

  {
    id: "ai-genai",
    icon: "bi-robot",
    title: "AI & GenAI",
    description:
      "Intelligent automation powered by large language models and generative AI.",
    image: "./assets/hero_slide_3.jpeg",
    reverse: false,
    features: [
      {
        icon: "bi-stars",
        title: "GenAI Solutions",
        points: [
          "LLM-powered chatbots",
          "Content & report generation",
          "Workflow & process automation",
        ],
      },
      {
        icon: "bi-chat-square-text",
        title: "Conversational AI",
        points: [
          "Natural language automation",
          "Conversational analytics",
          "Enterprise Q&A assistants",
        ],
      },
    ],
  },

  {
    id: "machine-learning",
    icon: "bi-graph-up-arrow",
    title: "Machine Learning",
    description:
      "Predictive, analytical, and data-driven models for smarter decisions.",
    image: "./assets/ai_ml.png",
    reverse: false,
    features: [
      {
        icon: "bi-graph-up",
        title: "Predictive Models",
        points: [
          "Demand forecasting",
          "Warranty claim prediction",
          "Attrition prediction",
        ],
      },
      {
        icon: "bi-cpu",
        title: "ML Intelligence",
        points: [
          "Anomaly detection",
          "Predictive maintenance",
          "Recommendation systems",
        ],
      },
    ],
  },
];

function renderServices() {
  const wrapper = document.getElementById("services-wrapper");

  servicesData.forEach((service) => {
    const section = document.createElement("section");
    section.id = service.id;
    section.className = "service-section d-flex align-items-center py-5";

    const html = `
      <div class="container">

        <!-- Header -->
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="service-header text-center mb-5">
              <i class="bi ${
                service.icon
              } service-icon-large fs-1 text-primary mb-4"></i>
              <h2 class="display-4 fw-bold text-dark mb-3">${service.title}</h2>
              <p class="lead text-muted mb-0">${service.description}</p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          
          ${
            service.reverse
              ? generateImageCol(service) + generateTextCol(service)
              : generateTextCol(service) + generateImageCol(service)
          }

        </div>
      </div>
    `;

    section.innerHTML = html;
    wrapper.appendChild(section);
  });
}

function generateTextCol(service) {
  return `
    <div class="col-lg-7 text-column ${
      service.reverse ? "order-lg-2 order-1" : ""
    }">
      ${service.features
        .map(
          (f) => `
        <div class="feature-item p-3 mb-2">
          <div class="feature-header">
            <div class="feature-icon"><i class="bi ${f.icon}"></i></div>
            <h3 class="feature-title">${f.title}</h3>
          </div>

          <ul class="sub-features">
            ${f.points
              .map(
                (p) => `<li><i class="bi bi-check-circle-fill"></i> ${p}</li>`
              )
              .join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function generateImageCol(service) {
  return `
    <div class="col-lg-5 image-column ${
      service.reverse ? "order-lg-1 order-2" : ""
    }">
      <div class="service-image">
        <img src="${service.image}" />
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderServices);
