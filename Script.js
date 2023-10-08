
function MouseCircleFollower() {
  window.addEventListener("mousemove", (details) => {
    // console.log(details.clientX, details.clientY);
    document.querySelector('#miniCircle').style.transform=`translate(${details.clientX}px,${details.clientY}px)`

  });
}
MouseCircleFollower();


// Hero Animation

const tl = gsap.timeline()
tl.from("#nav a,#nav h4",{
  y:-20,
  opacity:0,
  stagger:0.3,
  delay:1,
})
tl.from("#heading h1,#heading h5",{
  y:100,
  opacity:0,
  stagger:0.3
})
tl.from("#right-heading h5",{
  x:100,
  opacity:0,
  stagger:0.3,
  duration:1

})


// Animation for Second Section
document.querySelectorAll("#elem")
.forEach((Element) => {
  let CurrentDiffX = 0;
  let PreviousX = 0;
  Element.addEventListener("mousemove",(details)=>{
    console.log(details.clientY)
    const diff = details.clientY-Element.getBoundingClientRect().top

  CurrentDiffX = details.clientX - PreviousX
  PreviousX = details.clientX
   gsap.to(Element.querySelector('img'),{
    opacity:1,
    ease: Power3,
    top:diff,
    left:details.clientX,
    rotate:gsap.utils.clamp(-20,20, CurrentDiffX),

   })
  }

  )
  Element.addEventListener("mouseleave",(details)=>{

   gsap.to(Element.querySelector('img'),{
    opacity:0,
    ease: Power3,
   })
  }

  )
}
  )