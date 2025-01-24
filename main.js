const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);



const allInvalidLinks = document.querySelectorAll('.invalid-link')
allInvalidLinks.forEach(link => {
  link.onclick = (e) => {
    e.preventDefault()
    alert('Comming Soon...')
  }
})