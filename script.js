window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const tasbirLogo = document.querySelector('.tasbir-logo');
    const scrollY = window.scrollY;
    const homeSection = document.querySelector('#home');
    const homeSectionHeight = homeSection.offsetHeight;
    const nameTasbir = document.querySelector('#name-tasbir');

    if (scrollY > homeSectionHeight / 2) {
        navbar.classList.add('shrink');
        gsap.to(nameTasbir, { duration: 1, opacity: 0, x: -200 });
        gsap.to(tasbirLogo, { duration: 1, opacity: 1, x: 0 });
    } else {
        navbar.classList.remove('shrink');
        gsap.to(nameTasbir, { duration: 1, opacity: 1, x: 0 });
        gsap.to(tasbirLogo, { duration: 1, opacity: 0, x: -200 });
    }
});

window.addEventListener('load', () => {
    const controller = new ScrollMagic.Controller();

    // Parallax effect for each section
    document.querySelectorAll('.parallax-section').forEach((section, index) => {
        const tween = gsap.fromTo(section, {backgroundPositionY: '0%'}, {backgroundPositionY: '50%', ease: 'linear'});

        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(tween)
        .addTo(controller);
    });

    // Animation for the title and subtitle
    document.querySelectorAll('.title-container').forEach((titleContainer) => {
        const titleTween = gsap.fromTo(titleContainer.querySelector('.title'), {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1});
        const subtitleTween = gsap.fromTo(titleContainer.querySelector('.subtitle'), {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, delay: 0.5});

        new ScrollMagic.Scene({
            triggerElement: titleContainer,
            triggerHook: 0.8
        })
        .setTween(titleTween)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: titleContainer,
            triggerHook: 0.8
        })
        .setTween(subtitleTween)
        .addTo(controller);
    });

    // Animation for the timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
        const itemTween = gsap.fromTo(item, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1});

        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.8
        })
        .setTween(itemTween)
        .addTo(controller);
    });
});
