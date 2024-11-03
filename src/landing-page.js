import pedro1 from "./pedro-1.png"
import icon1 from "./skills-icon-1.png"
import icon2 from "./skills-icon-2.png"
import icon3 from "./skills-icon-3.png"


// hero section 1
const section1 = () => {

    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-1";

    // Set the background image using the imported image
parentContainer.style.backgroundImage = `url(${pedro1})`;
parentContainer.style.backgroundSize = "cover"; // Ensures the image covers the container
parentContainer.style.backgroundPosition = "300px 0";
parentContainer.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating

    const textContainer = document.createElement("div");
textContainer.className = "text-containers";
textContainer.id = "text-container-1";
const h1 = document.createElement("h1");
h1.innerHTML = "Hola, I'm<br>Pedro Garda";
const p = document.createElement("p");
p.innerHTML = "Driving Growth and<br>Profitability in Retail & FMCG";
const cta = document.createElement("a");
cta.href = "#";
cta.className = "ctas";
cta.innerHTML = "View My Profile";

textContainer.appendChild(h1);
textContainer.appendChild(p);
textContainer.appendChild(cta);

parentContainer.appendChild(textContainer);

return parentContainer;
}

// section 2
const section2 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-2";

    const textContainer = document.createElement("div");
    textContainer.className = "text-containers";
    textContainer.id = "text-container-2";
    const h2 = document.createElement("h2");
    h2.innerHTML = "Who I Am & What I Do";
    const p = document.createElement("p");
    p.innerHTML = "<span class='span-bolds'>My name is Pedro Garda.</span><br>Sales Director & Consumer Goods with<br>+10 years directing market expansion in FMCG.";
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.innerHTML = "- P&L Management";
    const li2 = document.createElement("li");
    li2.innerHTML = "- Go-to Market Strategies";
    const li3 = document.createElement("li");
    li3.innerHTML = "- Customer Metrics Assesment";
    const li4 = document.createElement("li");
    li4.innerHTML = "- Team Leadership & Mentorship";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);


    textContainer.appendChild(h2);
    textContainer.appendChild(p);
    textContainer.appendChild(ul);
    

    parentContainer.appendChild(textContainer);

    return parentContainer;
}

const section3 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-3";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-containers";

    const cardItem1 = createCardItem(icon1, "Sales & Marketing");
    const cardItem2 = createCardItem(icon2, "Business Development");
    const cardItem3 = createCardItem(icon3, "Customer Service");

    cardContainer.appendChild(cardItem1);
    cardContainer.appendChild(cardItem2);
    cardContainer.appendChild(cardItem3);
    

    parentContainer.appendChild(cardContainer);
    

return parentContainer;
}

const createCardItem = (icon, innerHtml) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-items";

const image = document.createElement("img");
image.src = icon;

    const h3 = document.createElement("h3");
    h3.innerHTML = innerHtml;
    
    cardItem.appendChild(image);
    cardItem.appendChild(h3);


    return cardItem;
}


export { section1, section2, section3 };
