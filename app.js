gsap.registerPlugin(SplitText);

const text = document.querySelector(".text");
const mainParagraph = document.querySelector(".main-paragraph");

const splitText = new SplitText(text,{type:"chars"});
const splitParagraph = new SplitText(mainParagraph,{type:"words"});

const tl = gsap.timeline();

tl.from(splitText.chars, {
    y: 100,
    rotationX: 90,
    opacity: 0, 
    color: "#FFFFFF",
    stagger: 0.03,
    transformOrigin: "center top",
    perspective: 700,
}).to(splitText.chars, {
    color: "#83e75c",
    duration: 0.6,
    delay: -1.2,
    stagger: 0.03,
    ease: "power4.inOut",
})


tl.from(splitParagraph.words,{
    y: 60,
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.03,
    duration: 0.7,
    ease: "power4.Out",
}).to(splitParagraph.words,{
    filter: "blur(0px)",
    duration: 0.5,
    stagger: 0.03,
    ease: "power4.inOut",
})
