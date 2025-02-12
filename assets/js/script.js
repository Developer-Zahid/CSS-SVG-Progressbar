const observer = document.querySelectorAll(".observer");
const apperOptions = {
  threshold: 0.5,
  rootMargin: "0px"
}
const apperOnScroll = new IntersectionObserver ( entries=>{
  entries.forEach(entries =>{
    if(entries.isIntersecting){
      entries.target.setAttribute("data-appear", "in")
    } else{
      entries.target.setAttribute("data-appear", "out")
    }
  })
}, apperOptions);

observer.forEach(observer =>{
  apperOnScroll.observe(observer);
})