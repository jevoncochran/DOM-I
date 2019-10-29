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

// top

let links = document.getElementsByTagName('a');
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

let h1 = document.getElementsByTagName('h1');
h1[0].textContent = siteContent.cta.h1;

let button = document.getElementsByTagName('button');
button[0].textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// middle

let h4s = document.getElementsByTagName('h4');
let paragraphs = document.getElementsByTagName('p');

h4s[0].textContent = siteContent["main-content"]["features-h4"];
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

h4s[2].textContent = siteContent["main-content"]["services-h4"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// bottom

h4s[5].textContent = siteContent.contact["contact-h4"];
paragraphs[5].textContent = siteContent.contact["address"];
paragraphs[6].textContent = siteContent.contact["phone"];
paragraphs[7].textContent = siteContent.contact["email"];

paragraphs[8].textContent = siteContent.footer.copyright;

// changes

links[0].style.color = 'green';
links[1].style.color = 'green';
links[2].style.color = 'green';
links[3].style.color = 'green';
links[4].style.color = 'green';
links[5].style.color = 'green';

newLink1 = document.createElement('a');
newLink2 = document.createElement('a');

newLink1.textContent = 'Support';
newLink2.textContent = 'Jobs';

const getNav = document.getElementsByTagName('nav');

getNav[0].appendChild(newLink1);
getNav[0].prepend(newLink2);

button[0].addEventListener('click', (event) => {
  event.target.textContent = 'This is just a test!';
})




