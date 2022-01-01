const bannerDescription = document.querySelector('.banner-description');
console.log(bannerDescription)

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split(''); 

  elemento.innerHTML = ''; 

  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 90 * i)
  })
}

typeWriter (bannerDescription)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `.banner .banner-title, .banner .banner-description,
    .container .destaques-title, .container .destaques-description,
    .wrapper .wrapper-item
  `,
  { interval: 100 }
)
