gsap.registerPlugin(ScrollTrigger);
/*
document.querySelector(".container-01").addEventListener('mousemove',function(){

    
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container-01",
        start: "top top",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(".logo",0.5,{x:100,opacity:0})
    .from(".big_text", 0.6, { x: -200, opacity: 0 })
    .staggerFrom(".ul_class li", 0.8, { y: -50, opacity: 0 }, 0.2, '-=1')
    .to(".rect",1,{duration:-1,replay:-1,rotate:90},"-=.5")

    timeline.play();
    
});

document.querySelector(".container-02").addEventListener('mousemove',function(){
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container-02",
        start: "top top",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(".page-2-bigtext", 0.6, { x: 200, opacity: 0 })
    .from(".page-2-p", 0.6, { x: 100, opacity: 0 })
    .staggerFrom(".page-2-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2)
    .from(".page-2-img", 0.6, { x: 200, opacity: 0, scale:1, })
    .from('.degradeBtn', 0.6, { x: 200, opacity: 0 })
    .from(".page-2-bg_black", 0.6, { y: 200, opacity: 0, scale:1, ease:"elastic.out(1, .9)"})
    
    .staggerFrom(".page-2-ul li", 0.3, { x: 30, opacity: 0 }, 0.2)

    timeline.play();
    
});

document.querySelector(".container-03").addEventListener('mousemove',function(){
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container-03",
        start: "center bottom",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(".page-3-bigtext", 0.6, { x: 200, opacity: 0 })
    .staggerFrom(".p_h6", 0.6, { x: 100, opacity: 0 }, 0.2,"-=.2")
    .staggerFrom(".p_h7", 0.6, { x: 100, opacity: 0 }, 0.2,"-=.2")
    //.staggerFrom(".page-3-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2,"-=.2")
    .from("page-3-img", 0.6, { x: 200, opacity: 0, scale:1, },"-=.2")
    //.from('.degradeBtn', 0.6, { x: 200, opacity: 0 } ,"-=.2")
    .from('.plus span', 1.5, { x: 200, scale: 3, opacity: 0, ease:"elastic.out(1, .9)"},"-=.4")

    timeline.play();


});

document.querySelector(".container-04").addEventListener('mousemove',function(){
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container-04",
        start: "center bottom",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(".page-4 h1", 0.6, { x: 200, opacity: 0 })
    .from('.page-4 p', 0.6, { x: 200, opacity: 0 } ,"-=.2")

    .from(".page-4-img", 0.4, { x: 50, opacity: 0, scale:1, },"-=.2")
    .from('.btn1', 1, { x: 200, scale: 3, opacity: 0 , ease:"elastic.out(1, .9)"},"-=.4")
    .from('.btn2', 1, { x: 200, scale: 3, opacity: 0 ,ease:"elastic.out(1, .9)"},"-=.4")
    .from('.btn3', 1, { x: 200, scale: 3, opacity: 0 ,ease:"elastic.out(1, .9)"},"-=.4")
    .from('.page-04-bg_black', 1.5, { x: 200, scale: 3, opacity: 0,ease:"elastic.out(1, .9)"},"-=.4")
    .to('.page-04-bg_black', 1.5, { borderColor:"#000",ease:"SlowMo" },"+=.1")

    timeline.play();

});

document.querySelector(".container-05").addEventListener('mousemove',function(){
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container-05",
        start: "center bottom",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(".d1-img", 0.6, { scale:2, opacity: 0 })
    .to(".d1-img", 0.6, { rotate:5 },"+=.1")

    .from(".d2-img", 0.6, { scale:2, opacity: 0 })
    .to(".d2-img", 0.6, { rotate:2},"+=.1")

    .from(".d3-img", 0.6, { scale:2, opacity: 0 })
    .to(".d3-img", 0.6, { rotate:5},"+=.1")
    .from("p", 0.6, { x:200, opacity: 0 })

    timeline.play();


});
*/


const projectPanel = document.querySelectorAll(".ctn-div");

projectPanel.forEach(addTimeline);

function addTimeline(panel) {

    x = "restart pause restart pause";
    if (panel.classList.contains("container-01")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-01",
                    start: "top center",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".logo", 0.4, { x: 100, opacity: 0 })
            .staggerFrom(".ul_class li", 0.4, { y: -50, opacity: 0 }, 0.2, "-=.4")

        .from(".container-01 .rect", 1, { rotate: 360, repeat: -1, opacity: 0 }, "-=.4")


        .from(".big_text", 0.6, { x: -200, opacity: 0 }, "-=1.5")
            .to(".rect", 1, { duration: -1, replay: -1, rotate: 90 }, "-=.5")

        timeline.play();
    }

    if (panel.classList.contains("container-02")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-02",
                    start: "top center",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".page-2-bigtext", 0.5, { x: 100, opacity: 0 })
            .from(".container-02 .rect", 2, { rotate: 360, repeat: -1, opacity: 0 })

        .from(".page-2-p", 0.6, { y: 100, opacity: 0 })
            .staggerFrom(".page-2-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2)
            .from(".page-2-img", 0.6, { y: 200, opacity: 0, scale: 1, })
            .from('.degradeBtn', 0.6, { y: 200, opacity: 0 })
            .from(".page-2-bg_black", 0.6, { y: 200, opacity: 0, scale: 1, ease: "elastic.out(1, .9)" })

        .staggerFrom(".page-2-ul li", 0.3, { x: 30, opacity: 0 }, 0.2)

        timeline.play();
    }

    if (panel.classList.contains("container-03")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-03",
                    start: "top center",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".h4-bigtext", 0.6, { x: 50, opacity: 0 })
            .from(".container-03 .rect", 2, { rotate: 360, repeat: -1, opacity: 0 })
            .staggerFrom(".p_h6", 0.6, { x: 80, opacity: 0 }, 0.2, "-=.2")
            .staggerFrom(".p_h7", 0.6, { x: 80, opacity: 0 }, 0.2, "-=.2")
            //.staggerFrom(".page-3-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2,"-=.2")
            .from("page-3-img", 0.6, { x: 50, opacity: 0, ease: "elastic.out(1, .9)" }, "-=.2")
            //.from('.degradeBtn', 0.6, { x: 200, opacity: 0 } ,"-=.2")
            .from('.plus span', 1.5, { x: -200, scale: 3, opacity: 0, ease: "elastic.out(1, .9)" }, "-=.4")

        timeline.play();

    }

    if (panel.classList.contains("container-04")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-04",
                    start: "top center",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".page-4 h1", 0.3, { x: 50, opacity: 0 })
            .from('.page-4 p', 0.3, { x: 50, opacity: 0 }, "-=.2")

        .from(".page-4-img", 1, { y: 200, opacity: 0, scale: 1, }, "-=.2")
            .from('.btn1', .6, { y: 50, scale: 3, opacity: 0, ease: "elastic.out(1, .9)" }, "-=.2")
            .from('.btn2', .6, { y: 50, scale: 3, opacity: 0, ease: "elastic.out(1.5, 1)" }, "-=.2")
            .from('.btn3', .6, { y: 50, scale: 3, opacity: 0, ease: "elastic.out(1.5, 1)" }, "-=.2")
            .from('.page-04-bg_black', .5, { x: 200, scale: 3, opacity: 0, ease: "elastic.out(1, .9)" }, "-=.2")
            .to('.page-04-bg_black', .5, { borderColor: "#000", ease: "SlowMo" }, "+=.1")

        timeline.play();

    }
    if (panel.classList.contains("container-05")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-05",
                    start: "top center",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".page-05-span", 0.6, { y: 200, opacity: 0 })
            .from(".container-05 h2", 0.6, { y: 200, opacity: 0 })

        .from(".container-05 p", 0.6, { y: 200, opacity: 0 })

        .from(".d1-img", 0.6, { scale: 2, opacity: 0 })
            .to(".d1-img", 0.6, { rotate: 7 }, "+=.1")

        .from(".line-left", 0.6, { x: 50, y: 50, scale: 2, opacity: 0 })

        .from(".d2-img", 0.6, { scale: 2, opacity: 0 })
            .to(".d2-img", 0.6, { rotate: -8 }, "+=.1")

        .from(".line-right", 0.6, { x: -100, y: -100, scale: 2, opacity: 0 })


        .from(".d3-img", 0.6, { scale: 2, opacity: 0 })
            .to(".d3-img", 0.6, { rotate: 8 }, "+=.1")

        timeline.play();
    }


}


/*
gsap.registerPlugin(ScrollTrigger);
  
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: ".container",
        start: "top center",
        ease: "power2",
        toggleActions: "restart pause reverse pause"
        }
    })
    /*.from(image, {
        x: -200,
        opacity: 0,
        duration: 0.5
    })
    .from(text, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    }, "-=0.5");


const t1 = new TimelineMax({
     paused: true,
});



t1 
timeline 
    .from(".logo",0.5,{x:100,opacity:0})
    .from(".big_text", 0.6, { x: -200, opacity: 0 })
    .staggerFrom(".ul_class li", 0.8, { y: -50, opacity: 0 }, 0.2, '-=1')
    .to(".rect",1,{duration:-1,replay:-1,rotate:90},"-=.5")

      ///page 2
    .from(".page-2-bigtext", 0.6, { x: 200, opacity: 0 })
    .from(".page-2-p", 0.6, { x: 100, opacity: 0 })
    .staggerFrom(".page-2-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2)
    .from(".page-2-img", 0.6, { x: 200, opacity: 0, scale:1, })
    .from('.degradeBtn', 0.6, { x: 200, opacity: 0 })
    .from(".page-2-bg_black", 0.6, { y: 200, opacity: 0, scale:1, ease:"elastic.out(1, .9)"})
    
    .staggerFrom(".page-2-ul li", 0.3, { x: 30, opacity: 0 }, 0.2)


    //page 3
    .from(".page-3-bigtext", 0.6, { x: 200, opacity: 0 })
    .staggerFrom(".p_h6", 0.6, { x: 100, opacity: 0 }, 0.2,"-=.2")
    .staggerFrom(".p_h7", 0.6, { x: 100, opacity: 0 }, 0.2,"-=.2")
    //.staggerFrom(".page-3-ulC li", 0.3, { x: 30, opacity: 0 }, 0.2,"-=.2")
    .from("page-3-img", 0.6, { x: 200, opacity: 0, scale:1, },"-=.2")
    //.from('.degradeBtn', 0.6, { x: 200, opacity: 0 } ,"-=.2")
    .from('.plus span', 1.5, { x: 200, scale: 3, opacity: 0, ease:"elastic.out(1, .9)"},"-=.4")


    //page 4
    .from(".page-4 h1", 0.6, { x: 200, opacity: 0 })
    .from('.page-4 p', 0.6, { x: 200, opacity: 0 } ,"-=.2")

    .from(".page-4-img", 0.4, { x: 50, opacity: 0, scale:1, },"-=.2")
    .from('.btn1', 1, { x: 200, scale: 3, opacity: 0 , ease:"elastic.out(1, .9)"},"-=.4")
    .from('.btn2', 1, { x: 200, scale: 3, opacity: 0 ,ease:"elastic.out(1, .9)"},"-=.4")
    .from('.btn3', 1, { x: 200, scale: 3, opacity: 0 ,ease:"elastic.out(1, .9)"},"-=.4")
    .from('.page-04-bg_black', 1.5, { x: 200, scale: 3, opacity: 0,ease:"elastic.out(1, .9)"},"-=.4")
    .to('.page-04-bg_black', 1.5, { borderColor:"#000",ease:"SlowMo" },"+=.1")


    //page 5
    .from(".d1-img", 0.6, { scale:2, opacity: 0 })
    .to(".d1-img", 0.6, { rotate:5 },"+=.1")

    .from(".d2-img", 0.6, { scale:2, opacity: 0 })
    .to(".d2-img", 0.6, { rotate:2},"+=.1")

    .from(".d3-img", 0.6, { scale:2, opacity: 0 })
    .to(".d3-img", 0.6, { rotate:5},"+=.1")
    .from("p", 0.6, { x:200, opacity: 0 })


timeline.play();
*/




/*
const projectPanel = document.querySelectorAll(".panel");

projectPanel.forEach(addTimeline);

function addTimeline(panel){


    const image = panel.querySelector("img");
    const text = panel.querySelector(".text");
    
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: panel,
        start: "center bottom",
        ease: "power2",
        toggleActions: "play restart resume reverse"
        }
    })
    .from(image, {
        x: -200,
        opacity: 0,
        duration: 0.5
    })
    .from(text, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    }, "-=0.5");

}

*/

/*
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top center", 
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});
*/





function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 150;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -150;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 150;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});