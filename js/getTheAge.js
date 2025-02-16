const birthday = new Date("2009-01-19"), now = new Date();
const diff = Math.abs(new Date(now - birthday).getUTCFullYear() - 1970);

document.getElementById("age").innerText = diff;