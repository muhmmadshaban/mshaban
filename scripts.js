// scripts.js

// Function to load skills from skills.json
function loadSkills() {
  fetch("./data/skills.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const skillsContainer = document.getElementById("skills-container");
      // Clear any existing content (like the old static skills)
      skillsContainer.innerHTML = "";

      // Iterate through the skills data from JSON
      data.skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";

        // Create the HTML structure for each skill item
        skillItem.innerHTML = `
          <h4>${skill.name}</h4>
          <div class="progress-bar">
            <div class="progress" style="width: ${skill.level}%;"></div>
          </div>
        `;

        // Append the new skill item to the container
        skillsContainer.appendChild(skillItem);
      });
    })
    .catch(error => {
      console.error("Error loading skills:", error);
      // Optional: Display an error message in the UI
      const skillsContainer = document.getElementById("skills-container");
      skillsContainer.innerHTML = "<p>Error loading skills data.</p>";
    });
}

// Function to load projects from projects.json
function loadProjects() {
  fetch("./data/projects.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(projectsData => {
      const projectsGrid = document.getElementById("projects-grid");
      // Clear any existing content (like the old static projects)
      projectsGrid.innerHTML = "";

      // Iterate through the projects data from JSON
      projectsData.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        // Create the tags HTML string
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

        // Create the HTML structure for each project card
        projectCard.innerHTML = `
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
            <a href="${project.link}" class="btn" target="_blank">View Project</a>
          </div>
        `;

        // Append the new project card to the grid
        projectsGrid.appendChild(projectCard);
      });
    })
    .catch(error => {
      console.error("Error loading projects:", error);
      const projectsGrid = document.getElementById("projects-grid");
      projectsGrid.innerHTML = "<p>Error loading projects data.</p>";
    });
}

// Function to load achievements from achievements.json
function loadAchievements() {
  fetch("./data/achievements.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(achievementsData => {
      const achievementsGrid = document.getElementById("achievements-grid");
      // Clear any existing content (like the old static achievements)
      achievementsGrid.innerHTML = "";

      // Iterate through the achievements data from JSON
      achievementsData.forEach(achievement => {
        const achievementDiv = document.createElement("div");
        achievementDiv.className = "achievement";

        // Create the HTML structure for each achievement
        achievementDiv.innerHTML = `
          <h3>${achievement.title}</h3>
          <p>${achievement.description}</p>
        `;

        // Append the new achievement to the grid
        achievementsGrid.appendChild(achievementDiv);
      });
    })
    .catch(error => {
      console.error("Error loading achievements:", error);
      const achievementsGrid = document.getElementById("achievements-grid");
      achievementsGrid.innerHTML = "<p>Error loading achievements data.</p>";
    });
}

// Call the functions when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    loadSkills();
    loadProjects();
    loadAchievements();
});
