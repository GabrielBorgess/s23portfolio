import { gsap } from "gsap";

export default function circleCursor() {

    if (window.matchMedia('(max-width: 1100px)').matches) {
        console.log('mobile')
    } else {
        gsap.to(".ball", { duration: 0, xPercent: -200, yPercent: -50 });
        window.addEventListener("mousemove", e => {
            gsap.to(".ball", { duration: 2, autoAlpha: 1 });
        });


        const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: position.x, y: position.y };

        const xSet = gsap.quickSetter(".ball", "x", "px");
        const ySet = gsap.quickSetter(".ball", "y", "px");

        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - 0.06, gsap.ticker.deltaRatio());

            position.x += (mouse.x - position.x) * dt;
            position.y += (mouse.y - position.y) * dt;
            xSet(position.x);
            ySet(position.y);
        });
    }
}