import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".horizontal-item");
    const scrollWrapper = document.querySelector(".horizontal-scroll-wrapper");

    // Set the width of the scroll container dynamically
    const totalWidth = sections.length * window.innerWidth;
    gsap.set(scrollWrapper, { width: totalWidth });

    // Create the scroll trigger
    gsap.to(scrollWrapper, {
        x: () => -(totalWidth - window.innerWidth), // Moves the wrapper horizontally
        ease: "none",
        scrollTrigger: {
            trigger: ".section_competences",
            start: "top top",
            end: () => `+=${totalWidth}`, // Scroll distance matches total width
            scrub: 1,
            pin: true, // Pins the section during scroll
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
