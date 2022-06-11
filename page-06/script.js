gsap.registerPlugin(ScrollTrigger);



const projectPanel = document.querySelectorAll(".ctn");

projectPanel.forEach(addTimeline);

function addTimeline(panel) {

    x = "play pause resume restart";
    if (panel.classList.contains("container-01")) {
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

    if (panel.classList.contains("container-02")) {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-02",
                start: "center center",
                ease: "power2",
                toggleActions: x
            }
        })

        .staggerFrom("img", 0.5, { x: 30, opacity: 0 }, 0.2)
            .staggerFrom("img", 0.5, { scale: 1.3, repeat: -1, opacity: 0 }, 0.2)


        timeline.play();
    }
    x = "play pause resume none";

    if (panel.classList.contains("container-03")) {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-03",
                start: "center center",
                ease: "power2",
                toggleActions: x
            }
        })

        .from(".divPlus", .5, { y: 200, scale: 2, opacity: 0 })

        timeline.play();

        document.querySelectorAll("img").forEach(element => {
            element.addEventListener("mouseenter", function() {
                element.style.opacity = ".5";
                element.style.transition = "all 1.5 ease";

            })
            element.addEventListener("mouseleave", function() {
                element.style.opacity = "1";

            })

        });
    }


}

/*********************** ***************************/

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