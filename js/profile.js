/* =========================================================
   CYBERM — Profile page
   All content is rendered from a single `profile` object so
   that swapping the mock data for a real API response later
   is a one-line change (see loadProfile at the bottom).
   ========================================================= */

const MOCK_PROFILE = {
  name: "Sita",
  handle: "sita",
  tagline: "Cybersecurity Enthusiast",
  bio: "Always learning. Always building. Focused on cybersecurity, development and design.",
  avatarInitials: "IP",
  avatarUrl: null,
  stats: [
    { label: "Resources", value: 48 },
    { label: "CTFs", value: 24 },
    { label: "Streak", value: "12d" },
    { label: "Roadmap", value: "46%" },
  ],
  learningOverallPercent: 72,
  skills: [
    { name: "Web Security", percent: 68 },
    { name: "Network Security", percent: 42 },
    { name: "Linux Essentials", percent: 80 },
  ],
  achievements: [
    { name: "First Challenge", earned: true },
    { name: "7-Day Streak", earned: true },
    { name: "Security Explorer", earned: true },
    { name: "CTF Beginner", earned: true },
  ],
};

function badgeIconSvg() {
  return (
    '<svg class="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M12 2l2.9 6.26L21.5 9l-4.9 4.5L17.8 21 12 17.27 6.2 21l1.2-7.5L2.5 9l6.6-.74L12 2z" ' +
    'stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
  );
}

function renderProfile(profile) {
  const avatarEl = document.getElementById("profile-avatar");
  if (profile.avatarUrl) {
    avatarEl.innerHTML = `<img src="${profile.avatarUrl}" alt="${profile.name}'s avatar">`;
  } else {
    avatarEl.textContent = profile.avatarInitials;
  }

  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-handle").textContent = `@${profile.handle}`;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-bio").textContent = profile.bio;

  const statGrid = document.getElementById("stat-grid");
  statGrid.innerHTML = profile.stats
    .map(
      (stat) => `
      <div class="card stat-card">
        <p class="stat-label">${stat.label}</p>
        <p class="stat-value">${stat.value}</p>
      </div>`
    )
    .join("");

  document.getElementById(
    "learning-subtitle"
  ).textContent = `Overall progress · ${profile.learningOverallPercent}%`;

  const skillList = document.getElementById("skill-list");
  skillList.innerHTML = profile.skills
    .map(
      (skill) => `
      <div class="skill-row">
        <div class="skill-row-head">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-percent">${skill.percent}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${skill.percent}%"></div>
        </div>
      </div>`
    )
    .join("");

  const badgeGrid = document.getElementById("badge-grid");
  badgeGrid.innerHTML = profile.achievements
    .map(
      (badge) => `
      <div class="badge${badge.earned ? "" : " is-locked"}">
        ${badgeIconSvg()}
        <span>${badge.name}</span>
      </div>`
    )
    .join("");
}

async function loadProfile() {
  // Swap MOCK_PROFILE for a real endpoint once the backend exists:
  // const profile = await CyberM.loadData("/api/profile", MOCK_PROFILE);
  currentProfile = MOCK_PROFILE;
  renderProfile(currentProfile);
}

/* ---------------------------------------------------------
   Edit profile modal
   --------------------------------------------------------- */

let currentProfile = null;

function deriveInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function openEditModal() {
  document.getElementById("field-name").value = currentProfile.name;
  document.getElementById("field-handle").value = currentProfile.handle;
  document.getElementById("field-tagline").value = currentProfile.tagline;
  document.getElementById("field-bio").value = currentProfile.bio;

  const overlay = document.getElementById("edit-profile-overlay");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("field-name").focus();
}

function closeEditModal() {
  const overlay = document.getElementById("edit-profile-overlay");
  overlay.hidden = true;
  document.body.style.overflow = "";
  document.getElementById("edit-profile-btn").focus();
}

function handleEditSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("field-name").value.trim();
  const handle = document.getElementById("field-handle").value.trim();

  currentProfile = {
    ...currentProfile,
    name,
    handle,
    tagline: document.getElementById("field-tagline").value.trim(),
    bio: document.getElementById("field-bio").value.trim(),
    avatarInitials: currentProfile.avatarUrl ? currentProfile.avatarInitials : deriveInitials(name),
  };

  // Persist to a real backend once it exists, e.g.:
  // await fetch("/api/profile", { method: "PUT", body: JSON.stringify(currentProfile) });

  renderProfile(currentProfile);
  closeEditModal();
}

function initEditModal() {
  document.getElementById("edit-profile-btn").addEventListener("click", openEditModal);
  document.getElementById("edit-profile-close").addEventListener("click", closeEditModal);
  document.getElementById("edit-profile-cancel").addEventListener("click", closeEditModal);
  document.getElementById("edit-profile-form").addEventListener("submit", handleEditSubmit);

  const overlay = document.getElementById("edit-profile-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeEditModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) closeEditModal();
  });
}

document.addEventListener("DOMContentLoaded", initEditModal);

document.addEventListener("DOMContentLoaded", loadProfile);
