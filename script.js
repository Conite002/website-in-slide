
const t1 = new TimelineMax({
     paused: true,
     reversed:true,
     resumed:true
});

const t2 = new TimelineMax({
    paused: true,
    reversed:true,
    resumed:true
});


t1.play();
t1.resume();


t1  
    .to(".container",{backgroundColor:"white"})
    .from(".logo", {duration:1, x:70, opacity: 0 },"+=.1")
    .staggerFrom(".ul-inline li", .8, { y: -50, opacity: 0 }, 0.2, '+=.2')
    .from(".title", 1, { x: -100, opacity: 0, },"-=.5")//ease:Elastic.easeOut

    .from(".discover", {duration: 1,y: 100,opacity:0}, '-=0.5')


t1
    .to(".discover", {duration: 0.8,y: 100,opacity:0}, '+=2')
    .to(".title", 1, { x: -200, opacity: 0, ease:Power1.easeInOut},"-=0.3")

    .staggerTo(".ul-inline li", 1, {reversed:true, y: -100, opacity: 0 }, 0.2, '-=.5')
    .to(".logo",0.5,{ease: "power1.inOut",x:-100,opacity:0},"-=0.5")
    .to(".b-ctn", {duration: 1.2,y:200,display:"none", opacity:0},"+=.2")

    .to(".container",{backgroundColor:"rgb(208, 245, 207)"})
    .from(".bigtext",{ x:100,opacity: 0,duration:.8,})
    .from(".big p",{x:60,opacity: 0,duration:1,},"-=0.2")
    .staggerFrom(".ulC li", 0.4, { x: 50, opacity: 0 }, 0.2, '-=.3')
    .from(".dicover",{y:-60,opacity: 0,duration:1,},"-=0.2")
    .from(".img-fluid",{x:100,opacity: 0,duration:1,},"-=0.2")
    .from(".bg_black",{y:100,opacity: 0,duration:1,},"-=0.5")

    .to(".bg_black",{y:-10,opacity: 0,duration:1,},"+=2")
    .to(".img-fluid",{x:100,opacity: 0,duration:1,},"-=0.2")
    .to(".dicover",{y:60,opacity: 0,duration:1,},"-=0.2")
    .staggerTo(".ulC li", 0.7, {reversed:true, x: 40, opacity: 0 }, 0.2, '-=.3')
    .to(".big p",{x:-60,opacity: 0,duration:.8,},"-=0.2")

    .to(".bigtext",{ x:-100,opacity: 0,duration:1,}, "-=1")



    //page 3
    .to(".page-2", {duration: 1.2,y:200,display:"none", opacity:0},"+=.2")
    .to(".rcolor", {duration: 1,backgroundColor:"#fff"},"+=.2")
    .to("body", {duration: 1,backgroundColor:"rgb(232, 243, 240)"},)
    .from(".h1_page3", 0.6, { x: 200, opacity: 0 })

    .from(".h6-1", 1, { y: 100, opacity: 0 },"-=.2")
    .from(".h6-2", 1, { y: 100, opacity: 0 },"-=.9")
    .from(".h6-3", 1, { y: 100, opacity: 0 },"-=.2")
    .from(".h6-4", 1, { y: 100, opacity: 0 },"-=.9")
    .staggerFrom(".plus", 1, { y: 100, opacity: 0 }, 0.2, '-=.3')
    
    .to(".plus", 1, { y: -100, opacity: 0 }, '+=2')
    .to(".h6-4-3", 1, { y: 100, opacity: 0 },"-=.5")
    .to(".h6-2-1", 1, { y: 100, opacity: 0 },"-=.5")
    .to(".h1_page3",{duration: 1.2,y:200, opacity:0},"-=.2")
    

    .to(".page-3", {duration: 1.2,y:200,display:"none", opacity:0},"-=.2")


    .from(".imgFluid", 1, { x: 100, opacity: 0 },"+=.1")
    .from(".eco", 1, { y: -50, opacity: 0 },"-=.3")
    .from(".para", 1, { y: -50, opacity: 0 },"-=.5")
    .from(".btn-1", {duration:.5, scale:0, opacity:0, ease:Elastic.easeOut},"-=.3")
    .from(".btn-2", {duration:.5, scale:0, opacity: 0 },"-=.3")
    .from(".btn-3", 1.1, {y:-50, opacity:0, ease:Elastic.easeOut})

    

    //h6-4
    //.staggerFrom(".ulC li",{ ease:Elastic.easeOut,x:-200,duration:1,},0.2,"-=0.5")



    //ease:Elastic.easeOut
