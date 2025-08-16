document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("journalForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("entryDate").value;
    const entry = document.getElementById("newEntry").value;

    if (!date || !entry) {
      return;
    }

    let entries = JSON.parse(localStorage.getItem("journalEntries")) || {};
    entries[date] = entry;
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    form.reset();
  });
});
