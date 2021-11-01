

gsap.fromTo('.grid-item', {
    scale: 0.4,
    opacity: 0.1,
}, {
    scale: 1,
    opacity: 1,
    yoyo: true,
    repeat: -1,
    stagger: {
        // amount: 1,
        each: 0.1,
        from: "center",
        ease: "power2.inOut",
        grid: "auto",
        // axis: "x",
    }
});


/***
 * Stagger an animation.
 * stagger could be an integer represents the duration of each animated element or a config object to give more control to the stagger elements.
 * amount: represents the animation duration.
 * each: represents the duration of each item. 
 * from: coulbe be a number represent the start index or one of the following value "center, end, start, random, edges"
 */