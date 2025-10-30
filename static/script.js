const links = [
  { label: "Consult", url: "https://danmikes.github.io/consult"},
  { label: "Folio", url: "https://danmikes.github.io/folio"},
  { label: "GitHub", url: "https://github.com/danmikes"},
  { label: "LinkedIn", url: "https://linkedin.com/danielmikes"},
  { label: "Manifest", url: "https://leesmanifest.nl"},
  { label: "ResearchGate", url: "https://researchgate.net/profile/daniel-mikes"},
  { label: "SamSim", url: "https://samsim.onrender.com"},
  { label: "Trial", url: "https://dmikes.duckdns.org"},
  { label: "Wish", url: "https://dmikes.eu.pythonanywhere.com"},
];

const gridContainer = document.getElementById('buttonGrid');

links.forEach(link => {
  const button = document.createElement('a');
  button.href = link.url;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.className = "url-button";
  button.textContent = link.label;
  gridContainer.appendChild(button);
});
