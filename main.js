const buy = document.querySelector(".buy");
const back = document.querySelector(".back-button");

let t1 = gsap.timeline({paused:true, reversed:true});
let t2 = gsap.timeline({paused:true, reversed:true});

buy.addEventListener("click", (e) => {
    t2.play();
});

back.addEventListener("click", (e) => {
    t2.reversed();
    console.log("0k ok ok ");

});

t1.play();

t1.to(".car-1",{
    ease: "elastic.out(10, .8)",
    top:"5%",
    rotate:0,
    duration:1.5,
});

t1.to(
    ".container .menu",
    {   x: 0,
        ease: "elastic.out(1, .8)",
        left: 30,
        duration: 1.5
    },
    0.3
);

t1.to(
    ".profile",
    {
        
        ease: "elastic.out(1, .8)",
        right: 30,
        duration: 1.5
    },
    0.3
);

t1.to(
    ".container h1",
    {
        
        ease: "elastic.out(1, .8)",
        bottom: "37%",
        duration: 1.5
    },
    0.4
);

t1.to(
    ".container p",
    {
        
        ease: "elastic.out(1, .8)",
        bottom: "18%",
        duration: 1
    },
    0.4
);

t1.from(
    ".container p",
    {
        scale :1.3,
        duration: 1
    },
    0.4
);

t1.from(
    ".buy",
    {
        
        ease: "elastic.out(1, .8)",
        scale: 0,
        duration: 1.5
    },
    0.6
);

t2.to(
    ".car-1",
    {
        ease:"elastic.out(1, .8)",
        top:"-60%",
        duration: 2,
    },
    0.2
);


t2.to(
    ".menu",
    {
        ease:"power1.inOut",
        left:"-30",
        scale:0,
    },
    0
);

t2.to(
    ".profile",
    {
        ease:"power1.inOut",
        right:"-30",
    },
    0
);


t2.to(
    ".back-button",
    {
        ease:"elastic.out(1, .8)",
        bottom: "5%",
        duration: 1.5,
    },
    0.7
);

t2.to(
    ".container h1",
    {
        
        ease: "elastic.out(5, .8)",
        bottom: "-25%",
    },
    0.1
);


t2.to(
    ".container p",
    {
        
        ease: "elastic.out(5, .8)",
        bottom: "-25%",
        duration: 1
    },
    0.1
);

t2.to(
    ".buy i",
    {
        ease: "power1.inOut",
        scale: 0,
        duration: 0.3,
    },
    0
);

t2.to(
    ".buy i",
    {
        ease: "power1.inOut",
        scale: 0,
        duration: 0.3,
    },
    0
);

t2.to(
    ".buy",
    {
        ease: "power1.inOut",
        scaleY: 12,
        width:400,
        duration: 0.3,
    },
    0.3
);

t2.to(
    ".back-button",
    {
        ease: "elastic.out(1, .8)",
        bottom: "5%",
        duration: 1.5,
    },
    0.7
);


t2.to(
    ".car-final",
    {
        ease: "elastic.out(1, .8)",
        left: "50%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    ".container h2",
    {
        ease: "elastic.out(1, .8)",
        left: "60%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    ".summary",
    {
        ease: "elastic.out(1, .8)",
        top: "52%",
        duration: 1.5,
    },
    0.6
);


t2.to(
    ".summary-2",
    {
        ease: "elastic.out(1, .8)",
        top: "65%",
        duration: 1.5,
    },
    0.6
);
