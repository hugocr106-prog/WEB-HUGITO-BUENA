// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

document.querySelectorAll("a, button, .work-item, .service-row").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
});

// Hero Animation
gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
});

gsap.from(".hero-sub", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.8
});

// Canvas Sequence Animation
const canvas = document.getElementById("hero-canvas");
const context = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1500;

const frameCount = 180;
const currentFrame = index => (
  `ezgif-52bdfa7bac026d2f-png-split/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`
);

const images = [];
const heroVideo = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// Canvas Playback Sequence (Sync with first two sections)
gsap.to(heroVideo, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom+=100% top", // Covers Hero + Intro
    scrub: 0.5
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  if (images[heroVideo.frame]) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[heroVideo.frame], 0, 0);
  }
}

// Fade out canvas when reaching dark sections
gsap.to(canvas, {
    opacity: 0,
    pointerEvents: "none",
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});

// Section Title Reveals
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    gsap.from(section.querySelectorAll("h2, .section-title"), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// Service Rows Reveal
gsap.from(".service-row", {
    scrollTrigger: {
        trigger: ".services-list",
        start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Work Items Reveal
gsap.from(".work-item", {
    scrollTrigger: {
        trigger: ".work-grid",
        start: "top 70%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

// Parallax for Intro Image
gsap.to(".intro-parallax-img", {
    scrollTrigger: {
        trigger: ".intro-editorial",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -100,
    ease: "none"
});

// Nav transformation on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check if we are in the dark sections (Services starts after Hero + Intro = ~200vh)
    if (scrollY > windowHeight * 1.8) {
        nav.style.background = "rgba(0, 0, 0, 0.8)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.color = "white";
    } else if (scrollY > 50) {
        nav.style.background = "rgba(255, 255, 255, 0.8)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.color = "black";
    } else {
        nav.style.background = "none";
        nav.style.backdropFilter = "none";
        nav.style.color = "black";
    }
});

// Simple Log Message
console.log("Portfolio Loaded - Hugo Design & Branding");
