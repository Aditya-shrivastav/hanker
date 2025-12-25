document.addEventListener("DOMContentLoaded", function () {
  const stories = [
    {
      id: "dashboard-genai",
      title: "From Dashboards to Conversations",
      shortContent:
        "We transformed 100+ Power BI dashboards into a GenAI-powered conversational experience—unlocking real value from existing analytics investments.",
      image: "./assets/power-bi.jpg",
      link: "success-story.html?id=dashboard-genai",
    },

    {
      id: "genai-governance",
      title: "Why GenAI Fails with Old Governance",
      shortContent:
        "GenAI is not just a technology upgrade—it’s a mindset shift. Here’s why legacy governance and data silos block real AI transformation.",
      image: "./assets/gen-ai-bot.jpg",
      link: "success-story.html?id=genai-governance",
    },

    {
      id: "narration-agent",
      title: "AI Adoption Starts with Experience",
      shortContent:
        "By combining GenAI with a Narration Agent, we helped enterprises turn insights into action and drive real, recurring AI adoption.",
      image: "./assets/gen-agentic-ai.jpg",
      link: "success-story.html?id=narration-agent",
    },

    {
      id: "warranty-fraud",
      title: "Detecting Warranty Claim Fraud with AI",
      shortContent:
        "Using AI & ML on Databricks, we built a scalable fraud detection solution that empowers claim officers and delivers massive ROI.",
      image: "./assets/fraud-detection.jpg",
      link: "success-story.html?id=warranty-fraud",
    },
  ];

  const container = document.getElementById("success-stories-container");

  stories.forEach((story) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";

    card.innerHTML = `
      <div class="story-card">
        <div class="story-image">
          <img src="${story.image}" alt="${story.title}" />
        </div>
        <div class="story-body">
          <h5>${story.title}</h5>
          <p>${story.shortContent}</p>
          <a href="${story.link}" class="read-more text-primary">
            Read more <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
