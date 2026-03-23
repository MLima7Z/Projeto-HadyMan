 const questions = document.querySelectorAll('.ask')
 
 questions.forEach((question) => {
   question.addEventListener("click", () => {
     const isAtive = question.classList.contains("active")
     
     questions.forEach((item) => {
       item.classList.remove("active")
     })
     
    if (!isAtive) question.classList.add("active")
  })})


  const links = document.querySelectorAll(".l")
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      
      const service = link.dataset.service
      
      const message = `Olá, eu quero um serviço de ${service}, quando vocês estariam disponíveis?`
      
      const encodedMessage = encodeURIComponent(message)
      const phone = '5575982856979'
      const url = `https://wa.me/${phone}?text=${encodedMessage}`

    window.open(url, '_blank')
})}) 


const men = document.querySelector(".menu")
const zap = document.querySelectorAll(".btn-menu")

zap.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const menu = btn.nextElementSibling 
    menu.classList.toggle("active")
  })
})