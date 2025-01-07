import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".horizontal-item");
    const scrollWrapper = document.querySelector(".horizontal-scroll-wrapper");

    const totalWidth = (sections.length * window.innerWidth ) / 2  ;
    gsap.set(scrollWrapper, { width: totalWidth });

    gsap.to(scrollWrapper, {
        x: () => -(totalWidth - window.innerWidth), 
        ease: "none",
        scrollTrigger: {
            trigger: ".section_competences",
            start: "top top",
            end: () => `+=${totalWidth}`, 
            scrub: 1,
            pin: true
        },
    });
});


const mouseCursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const handleMouseMove = (e) => {
    if (mouseCursor) {
        mouseCursor.style.top = `${e.pageY}px`;
        mouseCursor.style.left = `${e.pageX}px`;
    }
};

const handleLinkHover = () => {
    if (mouseCursor) mouseCursor.classList.add('link-hover');
};

const handleLinkLeave = () => {
    if (mouseCursor) mouseCursor.classList.remove('link-hover');
};

window.addEventListener('mousemove', handleMouseMove);
links.forEach(link => {
    link.addEventListener('mouseenter', handleLinkHover);
    link.addEventListener('mouseleave', handleLinkLeave);
});

function cleanupEvents() {
    window.removeEventListener('mousemove', handleMouseMove);
    links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
    });
}
