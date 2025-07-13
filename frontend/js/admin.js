// Add Project
document.getElementById("projectForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("projects", data).then(() => alert("Project added!"));
});

// Add Client
document.getElementById("clientForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("clients", data).then(() => alert("Client added!"));
});

// Load Contacts
getData("contacts").then(contacts => {
  const list = document.getElementById("contactList");
  contacts.forEach(c => {
    list.innerHTML += `<div class="p-2 border">${c.name} (${c.city}) - ${c.email}</div>`;
  });
});

// Load Subscribers
getData("newsletter").then(emails => {
  const list = document.getElementById("newsletterList");
  emails.forEach(n => {
    list.innerHTML += `<div class="p-2 border">${n.email}</div>`;
  });
});
