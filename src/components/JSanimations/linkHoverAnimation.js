import { gsap } from "gsap";

export const linkHover = () => {
    gsap.to('.ball', {
        duration: 1,
        scale: 4,
        'background-color': '#f0ecec',
        'border': '0.2px solid black'
    });
}

export const leaveLinkHover = () => {
    gsap.to('.ball', {
        duration: 1,
        scale: 1,
        'background-color': 'black'
    });
}