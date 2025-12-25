document.addEventListener("DOMContentLoaded", function () {
  const storyMap = {
    "dashboard-genai": {
      title: "From Dashboards to Conversations",
      subtitle:
        "Unlocking GenAI-powered conversational intelligence from existing Power BI dashboards.",
      file: "./stories/dashboard-genai.html",
    },

    "genai-governance": {
      title: "Why GenAI Fails with Old Governance",
      subtitle:
        "New technology cannot succeed with old thinking and legacy controls.",
      file: "./stories/genai-governance.html",
    },

    "narration-agent": {
      title: "AI Adoption Starts with Experience",
      subtitle: "Driving AI adoption through GenAI and Narration Agentic AI.",
      file: "./stories/narration-agent.html",
    },

    "warranty-fraud": {
      title: "Detecting Warranty Claim Fraud with AI",
      subtitle: "Saving millions through scalable AI-driven fraud detection.",
      file: "./stories/warranty-fraud.html",
    },
  };

  const params = new URLSearchParams(window.location.search);
  const storyId = params.get("id");
  const story = storyMap[storyId];

  if (!story) {
    document.getElementById("story-title").innerText = "Story Not Found";
    document.getElementById("story-content").innerHTML =
      "<p>The requested success story does not exist.</p>";
    return;
  }

  document.getElementById("story-title").innerText = story.title;
  document.getElementById("story-subtitle").innerText = story.subtitle;

  fetch(story.file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("story-content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("story-content").innerHTML =
        "<p>Unable to load story content.</p>";
    });
});
