export default {
  mounted() {
    const sections = document.querySelectorAll("section.spotlight")
    const sectionObserver = new IntersectionObserver(
      handleIntersection,
      {
        root: null, // relative to document viewport 
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0.50 // visible amount of item shown in relation to root
      })

    sections.forEach(section => {
      sectionObserver.observe(section)
    })

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("inactive")
          sectionObserver.unobserve(entry.target)
        }
      })
    }
  }
}