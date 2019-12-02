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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItem1 = document.querySelector('header nav a:nth-child(1)').textContent = "Services";
const navItem2 = document.querySelector('header nav a:nth-child(2)').textContent = "Product";
const navItem3 = document.querySelector('header nav a:nth-child(3)').textContent = "Vision";
const navItem4 = document.querySelector('header nav a:nth-child(4)').textContent = "Features";
const navItem5 = document.querySelector('header nav a:nth-child(5)').textContent = "About";
const navItem6 = document.querySelector('header nav a:nth-child(6)').textContent = "Contact";
const navItems = document.querySelectorAll('header nav a');
navItems.forEach(element => {
  element.style.color = "green"
})

const ctaH1 = document.querySelector('.cta h1');
ctaH1.innerHTML = "DOM <br>Is <br>Awesome";
const ctaButton = document.querySelector('.cta button').textContent = "Get Started"
const ctaImg = document.querySelector('.cta img');
ctaImg.src="img/header-img.png";

const featureH4 = document.querySelector('.main-content .top-content .text-content:nth-child(1) h4').textContent = "Features";
const featureContent = document.querySelector('.main-content .top-content .text-content:nth-child(1) p').textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const aboutH4 = document.querySelector('.main-content .top-content .text-content:nth-child(2) h4').textContent = "About";
const aboutContent = document.querySelector('.main-content .top-content .text-content:nth-child(2) p').textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src','img/mid-page-accent.jpg');

const servicesH1 = document.querySelector('.bottom-content .text-content:nth-child(1) h4').textContent = "Services";
const servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p').textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const productH1 = document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = "Product"
const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const visionH1 = document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = "Vision";
const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent ="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contactH4 = document.querySelector('.contact h4').textContent = "Contact";
const contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerHTML = "123 Way 456 Street <br>Somewhere, USA";
contactContent[1].textContent = "1 (888) 888-8888";
contactContent[2].textContent = "sales@greatidea.io";

const footerCopyright = document.querySelector('footer p').textContent = "Copyright Great Idea! 2018";

const prependText = document.createElement('a');
prependText.textContent = "Home";
const parentElement = document.querySelector('nav');
parentElement.prepend(prependText)

const appendText = document.createElement("a");
appendText.textContent = "Careers";
const newElement = document.querySelector('nav')
newElement.appendChild(appendText);