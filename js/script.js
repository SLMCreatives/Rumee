var x = document.getElementById("toys");
var y = document.getElementById("sweets");

function toggleSweets() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}


function toggleToys() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
    }
}