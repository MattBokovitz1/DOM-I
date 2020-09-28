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
logo.setAttribute('src', siteContent["nav"]["img-src"])


const nav = document.querySelectorAll('nav a')
const navitem1 = nav[0]
const navitem2 = nav[1]
const navitem3 = nav[2]
const navitem4 = nav[3]
const navitem5 = nav[4]
const navitem6 = nav[5]

navitem1.textContent = 'Services'
navitem2.textContent = 'Product'
navitem3.textContent = 'Vision'
navitem4.textContent = 'Features'
navitem5.textContent = 'About'
navitem6.textContent = 'Contact'


const h1 = document.querySelector('h1')
h1.textContent = 'DOM IS AWESOME'

const button = document.querySelector('button')
button.textContent = 'Get Started'

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = 'img/header-img.png'

const midImage = document.querySelector('#middle-img')
midImage.src = 'img/mid-page-accent.jpg'

const sections = document.querySelectorAll('h4')
const featuresH4 = sections[0]
const aboutH4 = sections[1]
const servicesH4 = sections[2]
const productH4 = sections[3]
const visionH4 = sections[4]
const contactH4 = sections[5]
featuresH4.textContent = 'Features'
aboutH4.textContent = 'About'
servicesH4.textContent = 'Services'
productH4.textContent = 'Product'
visionH4.textContent = 'Vision'
contactH4.textContent = 'Contact'

const paragraphs = document.querySelectorAll('p')
const featuresParagraph = paragraphs[0]
const aboutParagraph = paragraphs[1]
const servicesParagraph = paragraphs[2]
const productParagraph = paragraphs[3]
const visionParagraph = paragraphs[4]
const streetParagraph = paragraphs[5]
const usaParagraph = paragraphs[6]
const phoneParagraph = paragraphs[7]
const emailParagraph = paragraphs[8]
const copyrightParagraph = paragraphs[9]
featuresParagraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
aboutParagraph.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
servicesParagraph.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
productParagraph.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
visionParagraph.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
streetParagraph.textContent = '123 Way 456 Street'
usaParagraph.textContent = 'Somewhere, USA'
phoneParagraph.textContent = '1 (888) 888-8888'
emailParagraph.textContent = 'sales@greatidea.io'
copyrightParagraph.textContent = 'Copyright Great Idea! 2018'

nav.style.color = 'green'



