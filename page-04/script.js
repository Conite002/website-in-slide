
gsap.registerPlugin(ScrollTrigger);



const projectPanel = document.querySelectorAll(".ctn");

projectPanel.forEach(addTimeline);

function addTimeline(panel){

    x="play pause resume restart";
   if(panel.classList.contains("container-01")){
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: ".container-01",
            start: "top center",
            ease: "power2",
            toggleActions: x
            }
        })
        .from(".contact", 1, { y: 100, opacity: 0 })
        .from(".creux", .5, { x: -200, opacity: 0 })
        .from(".plein", .5, { x: 200, opacity: 0 })




        

        timeline.play();
   }

   if(panel.classList.contains("container-02")){
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: ".container-02",
            start: "center center",
            ease: "power2",
            toggleActions: x
            }
        })
        
        .staggerFrom("img", 0.5, { x: 30, opacity: 0 }, 0.2)
        .staggerFrom("img", 0.5, { scale: 1.3,repeat:-1, opacity: 0 }, 0.2)
        

        timeline.play();
    }
    x="play pause resume none";

    if(panel.classList.contains("container-03")){
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: ".container-02",
            start: "center center",
            ease: "power2",
            toggleActions: x
            }
        })
        
        .staggerFrom("img", 0.5, { x: 30, opacity: 0 }, 0.2)
        

        timeline.play();

        document.querySelectorAll("img").forEach(element => {
            element.addEventListener("mouseenter",function(){
                element.style.opacity = ".5";
                element.style.transition = "all 1.5 ease";

            })
            element.addEventListener("mouseleave",function(){
                element.style.opacity = "1";
                
            })

        });
    }


}