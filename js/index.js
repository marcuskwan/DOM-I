const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// creating selectors for images, setting their sources
let logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src",siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src",siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src",siteContent["main-content"]["middle-img-src"])

// Create selectors to point your data into elements
let container = document.querySelector(".container");
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("a");
let ctaSection = document.querySelector(".class");
let ctaText = document.querySelector(".cta-text");
let ctaHeading = document.querySelector(".cta-text h1");
let h4 = document.querySelectorAll("h4");
// let ctaBreaks = document.querySelectorAll(".cta-text h1 br")
let button = document.querySelector(".cta .cta-text button");
let mainContent = document.querySelector(".main-content");
let topContent = document.querySelector(".top-content");
let textContent = document.querySelectorAll(".text-content p");
let bottomContent = document.querySelector(".bottom-content");
let contact = document.querySelector(".contact"); 
let footer = document.querySelector("footer");

// update navLinks 
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// setting cta text h1 
ctaHeading.textContent = siteContent["cta"]["h1"];
// // appending <br> tags (get back to this)
// ctaHeading.ap(ctaBreaks[0]);

// creating and appending two elements to nav
const newNavElement1 = document.createElement('a');
nav.appendChild(newNavElement1);
newNavElement1.textContent = "Media";
const newNavElement2 = document.createElement('a');
nav.appendChild(newNavElement2);
newNavElement2.textContent = "Story";

// setting navLinks to green
navLinks.forEach(text=> text.style.color = "green");

// updating button 
button.textContent = siteContent["cta"]["button"];

// assigning text to text-content 
textContent[0].textContent = siteContent["main-content"]["features-content"];
textContent[1].textContent = siteContent["main-content"]["about-content"];
textContent[2].textContent = siteContent["main-content"]["services-content"];
textContent[3].textContent = siteContent["main-content"]["product-content"];
textContent[4].textContent = siteContent["main-content"]["vision-content"];

// assigning text to headings 
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];
// textContent[1].classList.add("")

// // create variables contact paragraphs, assign them to text 
let contactParas = document.querySelectorAll(".contact p");
contactParas[0].textContent = siteContent["contact"]["address"];
contactParas[1].textContent = siteContent["contact"]["phone"];
contactParas[2].textContent = siteContent["contact"]["email"];

// // create variable for footer paragraph, update text 
let footerPara = document.querySelector("footer p")
footerPara.textContent = siteContent["footer"]["copyright"];

