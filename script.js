function showSection(sectionId) {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".nav-btn");

  pages.forEach(p => p.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");

  const activeBtn = [...buttons].find(btn =>
    btn.getAttribute("onclick").includes(sectionId)
  );

  if (activeBtn) activeBtn.classList.add("active");
}

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
}