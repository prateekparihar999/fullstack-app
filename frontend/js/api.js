const API_BASE = "https://fullstack-app-backend-gp19.onrender.com/api";
async function getData(route) {
  const res = await fetch(`${API_BASE}/${route}`);
  return res.json();
}

async function postData(route, data) {
  const res = await fetch(`${API_BASE}/${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
