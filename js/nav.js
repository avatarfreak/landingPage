const handle = document.getElementById("nav-list");
const checkbox = document.getElementById("nav-toggle");

handle.addEventListener("click", myFunction);

function myFunction() {
    checkbox.checked = false;
}