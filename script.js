let cursr = document.querySelector("#cursor");
let blr = document.querySelector("#blur")

document.addEventListener("mousemove", function(dets) {
    cursr.style.left = dets.x+"px"
    cursr.style.top = dets.y+ "px"
    blr.style.left = dets.x+ -200 + "px"
    blr.style.top = dets.y+ -200 + "px"
});

let h4all = document.querySelectorAll("nav a");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        cursr.style.scale = 3
        cursr.style.border = "0.5px solid white"
        cursr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave" , function(){
        cursr.style.scale = 1
        cursr.style.border = "1px solid #95C11E"
        cursr.style.backgroundColor = "#95C11E"
    })
    
})

gsap.to("nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: '80px',
    scrollTrigger:{
        trgger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2

    }
})