import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin, Power2 } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, Draggable, MotionPathPlugin);

const animateLoadPage = async () => {

  await sleep(2500)

  let tl = gsap.timeline()


  tl.fromTo(
    '#loader',
    1.2,
    { x: "0%"},
    { x: "-100%", opacity:0, display:"none", ease: Power2.easeInOut},
  )
    /*.fromTo(
    '#team',
    1.2,
    { x: "0%"},
    { x: "100%", opacity:0, display:"none", ease: Power2.easeInOut},
    "-=1.2"
    )*/


}




function sleep(ms) {

  return new Promise((accept) => {
    setTimeout(() => {
      accept()
    }, ms)
  })
}


// initialize
animateLoadPage()
