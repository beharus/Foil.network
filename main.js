let parallaxEls = document.querySelectorAll('.parallax')
let main = document.querySelector('.main')
let scrolldown = document.querySelector('.scrolldown')

let valueX, valueY = 0

window.addEventListener('mousemove', (e) => {
  valueX = e.clientX - window.innerWidth / 2
  valueY = e.clientY - window.innerHeight / 2
  parallaxEls.forEach(e => {
    let speedX = e.dataset.speedx
    let speedY = e.dataset.speedy
    e.style.transform = `translate(${-valueX * speedX}px, ${-valueY * speedY}px)`
  });
})
let scrollY = 0
window.addEventListener('scroll', () => {
  scrollY = window.scrollY.toFixed()
  main.style.left = `${30 - scrollY}px`
  main.style.opacity = `${1 - scrollY / 100 / 4}`
  // main.style.left -= `${scrollY}px`
  console.log(scrollY);
})
scrolldown.addEventListener('click', () => {
  window.scrollBy(0, 1400)
})