const svg = document.querySelector('svg')
const path = svg.querySelector('path')
const scrollSvg = () => {
  const distance = window.scrollY
  const totalDistance = svg.clientHeight - window.innerHeight
  const percentage = distance / totalDistance
  const pathLength = path.getTotalLength()
  let speed = (1 - percentage) * 0.95

  path.style.strokeDasharray = `${pathLength}`
  path.style.strokeDashoffset = `${pathLength * speed}`
}
scrollSvg()
window.addEventListener('scroll', scrollSvg)

//====================================

const svgTab = document.querySelector('svg.tab')
const pathTab = svgTab.querySelector('path')
const scrollSvgTab = () => {
  const distanceTab = window.scrollY
  const totalDistanceTab = svgTab.clientHeight - window.innerHeight
  const percentageTab = distanceTab / totalDistanceTab
  const pathLengthTab = pathTab.getTotalLength()
  let speedTab = (1 - percentageTab) * 0.978

  pathTab.style.strokeDasharray = `${pathLengthTab}`
  pathTab.style.strokeDashoffset = `${pathLengthTab * speedTab}`
}
scrollSvgTab()
window.addEventListener('scroll', scrollSvgTab)

//====================================

const svgMobile = document.querySelector('svg.mobile')
const pathMobile = svgMobile.querySelector('path')
const scrollSvgMobile = () => {
  const distanceMobile = window.scrollY
  const totalDistanceMobile = svgMobile.clientHeight - window.innerHeight
  const percentageMobile = distanceMobile / totalDistanceMobile
  const pathLengthMobile = pathMobile.getTotalLength()
  let speedMobile = (1 - percentageMobile) * 0.95

  pathMobile.style.strokeDasharray = `${pathLengthMobile}`
  pathMobile.style.strokeDashoffset = `${pathLengthMobile * speedMobile}`
}
scrollSvgMobile()
window.addEventListener('scroll', scrollSvgMobile)