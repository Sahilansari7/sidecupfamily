var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left=dets.x-250 +"px"
    blur.style.top = dets.y-250 + "px"


    

})


var h4all = document.querySelectorAll("#nav h4" )
// console.log(h4all);
h4all.forEach(function(elem){
elem.addEventListener("mouseenter", function(){
  crsr.style.scale = 2
  crsr.style.border = "0.5px solid #fff"
  crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave", function(){
  crsr.style.scale =1
  crsr.style.border = "0px solid #4cff46"
  crsr.style.backgroundColor="#4cff46"
})
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });



  
gsap.from("#aboutus img,#aboutusin" ,{
  y:90,
  opacity: 0,
  duration:1,
  scrollTrigger:{
    trigger: "#aboutus",
    scroller: "body",
    // markers: true,
    start:"top 60%",
    end:"top 55%",
    scrub:2
  }
})

gsap.from(".card" ,{
  scale:0.8,
  opacity: 0,
  duration:0.5,
  stagger:0.1,
  scrollTrigger:{
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start:"top 90%",
    end:"top 75%",
    scrub:0.5
  }
})