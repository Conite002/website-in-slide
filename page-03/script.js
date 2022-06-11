gsap.registerPlugin(ScrollTrigger);



const projectPanel = document.querySelectorAll(".ctn");

projectPanel.forEach(addTimeline);

function addTimeline(panel) {

    x = "play pause resume restart";
    if (panel.classList.contains("container-01")) {
        const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container-01",
                    start: "center top",
                    ease: "power2",
                    toggleActions: x
                }
            })
            .from(".rect", .5, { y: 100, opacity: 0 })
            .from(".contact", 1, { y: 100, opacity: 0 })
            .from(".creux", .5, { x: -200, opacity: 0 })
            .from(".plein", .5, { x: 200, opacity: 0 })






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
            .from(".container-02", 0.5, { y: 200, opacity: 0 })
            .from(".bg-trans h2", 1, { y: 200, opacity: 0 })

        .from(".bg-trans p", 0.6, { y: 100, opacity: 0 })
            .staggerFrom("input", 0.5, { x: 30, opacity: 0 }, 0.2)
            .from(".textarea-1", 0.6, { y: 200, opacity: 0, scale: 1, })
            .from("label", 0.6, { y: 200, opacity: 0, scale: 1, ease: "elastic.out(1, .9)" })

        .staggerFrom(".page-2-ul li", 0.3, { x: 30, opacity: 0 }, 0.2)

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