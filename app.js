
gsap.registerPlugin('ScrollTrigger');

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: '.square',
        start: 'top center',
        end : 'top 20%',
        toggleClass: 'red',
        markers: true,
        toggleActions: "restart none none none",
        // toggleActions: "play pause resume complete",
        scrub: 1
    }
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        end: 'top center',
        markers: true,
        scrub: 3
    }
});

tl.to('.box', {x: 200, duration: 1})
.to('.box', {y: -200, duration: 1})
.to('.box', {x: 400, duration: 1});


/***
 * there are 3 types of twins in gsap (from, to, fromto)
 * Scroll trigger could take a string value of the target triggered element or it could take an object config options.
 * start and end properties at what point the naimation should be start.
 * the firt value is relative to the target html element and the second value is relative to the viewport.
 * toggleClass is useful when we want to replace the current animated class with another one at a certain point
 * markers to trigger the start and the end of the animation.
 * ToggleAction applies action to the target element.
 * toggleAction: onEnter onLeave onEnterBack onLeaveBack.
 * default values are: toggleAction: play none none none;
 * Scrub makes your animation depends on the scrollbar position.
 * timeline is a container of multiple twins. we can animate timelines in respect by the viewport position by passing a config option to the timeline contructor.
 */