

function pageTransition(){


    var t1 = gsap.timeline();

    t1.to('ul.transtion li', {duration : .5, scaleY : 1, transformOrigin: "bottom left", stagger: .2});
    t1.to('ul.transtion li', {duration : .5, scaleY : 0, transformOrigin: "bottom left", stagger: .1, delay: .1});
}

function contentAnimation(){
    var t1 = gsap.timeline();
    t1.form('.left', {duration: 1.5, translateY: 50, opacity:0})
    t1.to('.img', {clipPath: "polygon(0 0,100% 0, 100% 100%, 0% 100%)"}, "-=.5")
}

function delay(n){
    n = n || 2000;
    return new Promise(done =>{
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transition: [{

        async leave(data){

            const done = this.async();

            PageTransition();
            await delay(1500);
            done();
        }
    }]
});