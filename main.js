const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const toggle = document.querySelector("#toggle");
const responsiveMenu = document.querySelector(".responsive-menu");
const serviceDropdown = document.querySelector(".responsive-menu .group ul");

toggle.addEventListener("change", () => {
    responsiveMenu.classList.toggle("hidden");
});

const servicesLink = document.querySelector(".responsive-menu .group > a");
servicesLink.addEventListener("click", (e) => {
    e.preventDefault();
    serviceDropdown.classList.toggle("hidden");
});


const allInvalidLinks = document.querySelectorAll('.invalid-link')
allInvalidLinks.forEach(link => {
  link.onclick = (e) => {
    e.preventDefault()
    alert('Comming Soon...')
  }
})