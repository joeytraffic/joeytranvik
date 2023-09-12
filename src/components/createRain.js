export function createRain() {
  var rainContainer = document.querySelector(".rain");
  rainContainer.innerHTML = "";

  var increment = 0;
  var drops = "";

  while (increment < 95) {
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    var randoFiver = Math.floor(Math.random() * (4 - 2 + 1) + 2);
    increment += randoFiver;

    var drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = increment + "%";
    drop.style.bottom = randoFiver + randoFiver - 1 + 100 + "%";
    drop.style.animationDelay = "0." + randoHundo + "s";
    drop.style.animationDuration = "0.5" + randoHundo + "s";

    var stem = document.createElement("div");
    stem.className = "stem";
    stem.style.animationDelay = "0." + randoHundo + "s";
    stem.style.animationDuration = "0.5" + randoHundo + "s";

    var splat = document.createElement("div");
    splat.className = "splat";
    splat.style.animationDelay = "0." + randoHundo + "s";
    splat.style.animationDuration = "0.5" + randoHundo + "s";

    drop.appendChild(stem);
    drop.appendChild(splat);

    drops += drop.outerHTML;
  }

  rainContainer.innerHTML = drops;
}
