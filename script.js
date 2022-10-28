const loading = document.querySelector(".container__loading");

const bg = document.querySelector(".container__bg");

let loader = 0;
let int = setInterval(adding, 10);

function adding() {
  loader++;

  if (loader > 99) {
    clearInterval(int);
  }
  console.log(loader);
  loading.innerText = `${loader}%`;
  loading.style.opacity = scale(loader, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loader, 0, 100, 20, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
