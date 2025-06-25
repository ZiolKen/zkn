// JavaScript example for typing effect or other effects
const nameFull = "@ジオルケン";
const descFull = "Just random guy.";
let nameIndex = 0;
let descIndex = 0;
let deleting = false;

function updateTyping() {
  if (deleting) {
    nameIndex--;
    descIndex--;
    if (nameIndex <= 2) deleting = false;
  } else {
    nameIndex++;
    descIndex++;
    if (nameIndex >= nameFull.length && descIndex >= descFull.length) deleting = true;
  }

  document.getElementById("name-display").textContent = nameFull.slice(0, nameIndex);
  document.getElementById("desc-display").textContent = descFull.slice(0, descIndex);
  document.title = nameFull.slice(0, nameIndex) + " | Bio";

  setTimeout(updateTyping, deleting ? 100 : 150);
}

updateTyping();