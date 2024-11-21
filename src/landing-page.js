import pedro1 from "./pedro-1.png"
import icon1 from "./skills-icon-1.png"
import icon2 from "./skills-icon-2.png"
import icon3 from "./skills-icon-3.png"
import icon4 from "./skills-icon-4.png"
import icon5 from "./skills-icon-5.png"
import icon6 from "./skills-icon-6.png"
import icon7 from "./skills-icon-7.png"
import icon8 from "./skills-icon-8.png"
import icon9 from "./skills-icon-9.png"
import icon10 from "./skills-icon-10.png"
import pedro2 from "./pedro-2.png"
import educationLogo1 from "./education-1.png"
import educationLogo2 from "./education-2.png"
import linkedInIcon from "./linkedin.png"
import lineIcon from "./line.png"
import whatsappIcon from "./whatsapp.png"
import viberIcon from "./viber.png"
import instagramIcon from "./instagram.png"
import xIcon from "./x.png"
import emailIcon from "./email.png"
import linktreeImage1 from "./linktree-1.png"
import linktreeImage2 from "./linktree-2.png"
import hochdorfLogo from "./hochdorf.png"
import hero1Logo from "./hero-1.png"
import hero2Logo from "./hero-2.png"
import hero3Logo from "./hero-3.png"



// hero section 1
const section1 = () => {

    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-1";

    // Set the background image using the imported image
parentContainer.style.backgroundImage = `url(${pedro1})`;
parentContainer.style.backgroundSize = "cover"; // Ensures the image covers the container
parentContainer.style.backgroundPosition = "75px 0";
parentContainer.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating

    const textContainer = document.createElement("div");
textContainer.className = "text-containers";
textContainer.id = "text-container-1";
const h1 = document.createElement("h1");
h1.innerHTML = "Hola, I'm<br>Pedro Garda";
const p = document.createElement("p");
p.innerHTML = "Driving Growth and<br>Profitability in Retail & FMCG";
const cta = document.createElement("a");
cta.href = "#parent-container-2";
cta.className = "ctas";
cta.innerHTML = "View My Profile";

textContainer.appendChild(h1);
textContainer.appendChild(p);
textContainer.appendChild(cta);

const gradientOverlay = document.createElement("div");
gradientOverlay.className = "gradient-overlays";

parentContainer.appendChild(textContainer);
parentContainer.appendChild(gradientOverlay);

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
    // const h2 = document.createElement("h2");
    // h2.innerHTML = "Who I Am & What I Do";
    const h2 = createH2Component("Who I Am & What I Do");
    const p = document.createElement("p");
    p.innerHTML = "<span class='span-bolds'>My name is Pedro Garda.</span><br>Sales Director & Consumer Goods with<br>+10 years directing market expansion in FMCG.";
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.innerHTML = "P&L Management";
    const li2 = document.createElement("li");
    li2.innerHTML = "Go-to Market Strategies";
    const li3 = document.createElement("li");
    li3.innerHTML = "Customer Metrics Assesment";
    const li4 = document.createElement("li");
    li4.innerHTML = "Team Leadership & Mentorship";

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

    const cardItem1 = createCardItem(icon1, "Strategic Branding & Growth");
    const cardItem2 = createCardItem(icon2, "P&L Growth & Financial Performance");
    const cardItem3 = createCardItem(icon3, "E-Commerce & Digital Excellence");
    const cardItem4 = createCardItem(icon4, "Brand Activation & Launches");
    const cardItem5 = createCardItem(icon5, "Senior Team Recruitment & Development");
    const cardItem6 = createCardItem(icon6, "Distributor, Partner & Agent Management");
    const cardItem7 = createCardItem(icon7, "Local & International Regulatory Compliance");
    const cardItem8 = createCardItem(icon8, "Merchandising Partnerships & Seasonality");
    const cardItem9 = createCardItem(icon9, "Route-To-Market Strategies");
    const cardItem10 = createCardItem(icon10, "Project Management Certified Agile Associate IPMA®");


    cardContainer.appendChild(cardItem1);
    cardContainer.appendChild(cardItem2);
    cardContainer.appendChild(cardItem3);
    cardContainer.appendChild(cardItem4);
    cardContainer.appendChild(cardItem5);
    cardContainer.appendChild(cardItem6);
    cardContainer.appendChild(cardItem7);
    cardContainer.appendChild(cardItem8);
    cardContainer.appendChild(cardItem9);
    cardContainer.appendChild(cardItem10);
    

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

const section4 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-4";

    const img1 = document.createElement("img");
    img1.src = pedro2;
    
    const heading1 = createH2Component("Career History");
    

    const card1 = createSection4Card(
        hochdorfLogo,
        "Head Of Brand (International)",
        "Hochdorf Swiss Nutrition AG",
        "May 2020 - July 2023",
        "I directly reported to the CEO, leading the formulation and execution of aligned strategic plans spanning regions like China CBEC, APAC, LATAM, and EMEA.",
    ["Took responsibility for international expansion of Babina and Bimbosan brands, multiple new markets while launching plans for 2021 and 2022 for Hong Kong, Macao, Cambodia and Greece.",
        "Led project management in branded and private label business with clearly defined priorities and strategic approach to different projects.",
     "Directly managed and inspired a global 5 Sales team members."   


    ]
        
    );
    const card2 = createSection4Card(
        hero1Logo,
        "Sales Director (Asia Pacific)",
        "Hero AG (Hong Kong)",
        "July 2019 - May 2020",
        "As the Sales Director for Asia at Hero Group, I reported directly to the Vice-President of Global Export, steering a comprehensive portfolio of responsibilities. My role extended beyond achieving targets in P&L, A&P, sales, business development, and marketing to encompass the intricate design and execution of our retail strategy.",
        ["Driving substantial improvements in the P&L of key countries. Oversaw 25 distributors and teams, delivering meticulous training to 300+ distributor’s staff across Asia.",
"Collaborated with multicultural partners and stakeholders across five production sites in CH, DE, ES, UK, Egypt & Turkey dealing with diverse categories and brands within the Hero Group.",
" Responsible for design and execution of retail strategy, delivering expansion focus across Asia, focusing on Retail, Food Service, Hospitality, E-commerce, Global retail Duty Free."
        ]
    );
const card3 = createSection4Card(
    hero2Logo,
    "Regional Sales Manager, APAC",
    "Hero AG, (Hong Kong)",
    "July 2015 - June 2019",
    "reporting to Export Director, responsible for business delivery for APAC countries, operating from Hong Kong representing all brands of Hero Group, including Hero (ams), Hero Baby, Organix (Baby Food), Corny (Healthy Snacks) and Schwartau (Jams).",
    ["Aided Hong Kong Office function to increased OP and turnover, expected to deliver double digit growth.",
        "Took responsibility for APAC for all brands and growth, delivering +11% for Ind, +66% for Ph, +15% in Aus, +730% in Vtn, +58% for Cambodia and +126% for the Maldives.",
        "Launched Hero Baby brand, operating as Project Leader, responsible for all strategic activities, focusing on regulatory, Road-To-Market, launches, pricing strategy, category strategy, channel strategy, product portfolio strategy, trade and marketing activities while providing training to Distribution team."

    ]
);
const card4 = createSection4Card(
    hero3Logo,
    "Export Key Account Manager (LATAM & APAC)",
    "Hero AG (Spain)",
    "January 2012 - June 2015",
    "Export Key Account Manager, reporting to Export Director, responsible for LATAM and APAC for Hero Jams and Baby Food operating from Murcia in Spain.",
    ["Required to develop business directly with retailers / indirectly with distributors for €3m business.",
       "Launched in Chile and Perú Hero Baby brand to all modern trade accounts, like including Walt Mart, Cencosud, Unimart and Tottus Supermarket." 
    ]
);

const heading2 = createH2Component("Education");

const educationCardsContainer = document.createElement("div");
educationCardsContainer.id = 'education-card-container';

const education1 = createEducationCard(educationLogo1, "<span class='span-bolds'>Degree in Business Administration</span><br>Universidad Nacional del Centro<br>Argentina<br>2000");
const education2 = createEducationCard(educationLogo2, "<span class='span-bolds'>Masters Degree in Marketing & Sales Directorship</span><br>ESIC Business School<br>Spain<br>2007");

educationCardsContainer.appendChild(education1);
educationCardsContainer.appendChild(education2);

parentContainer.appendChild(img1);
parentContainer.appendChild(heading1);
parentContainer.appendChild(card1);
parentContainer.appendChild(card2);
parentContainer.appendChild(card3);
parentContainer.appendChild(card4);
parentContainer.appendChild(heading2);
parentContainer.appendChild(educationCardsContainer);


    return parentContainer;

}
function createSection4Card(image,title, company, duration, description, bulletPoints) {
    
    const container = document.createElement("div");
    container.className = "section-4-card-containers";

    const imgContainer = document.createElement("div");
    imgContainer.className = "gradient-img-containers";
    const img = document.createElement("img");
    img.src = image;
    img.alt = company;
    img.ariaHidden = true;

    const gradientOverlay = document.createElement("div");
    gradientOverlay.className = "gradient-overlays";

    imgContainer.appendChild(img);
    imgContainer.appendChild(gradientOverlay);

    const h3 = document.createElement("h3");
    h3.innerHTML = title;

    const p1 = document.createElement("p");
    p1.innerHTML = company;

    const p2 = document.createElement("p");
    p2.innerHTML = duration;

    const p3 = document.createElement("p");
    p3.innerHTML = description;

    const p4 = document.createElement("p");
    p4.className = 'expandables';
    p4.innerHTML = "Read more";

    // Append the elements to the container
    container.appendChild(imgContainer);
    container.appendChild(h3);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);

    
if (bulletPoints){
    const ul = document.createElement("ul");
    ul.className = 'list hidden'
    ul.setAttribute('aria-hidden', 'true');
    bulletPoints.forEach((point) => {
        const li = document.createElement("li");
        li.innerHTML = point;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

    return container;
}
function createH2Component(innerHtml) {
    const container = document.createElement("div");
    container.className = "h2-containers";
    const h2 = document.createElement("h2");
    h2.innerHTML = innerHtml;

    container.appendChild(h2);

    return container
}
function createEducationCard(img,title) {
    const card = document.createElement("div");
    card.className = "education-cards";

    const image = document.createElement("img");
    image.src = img;

    const h3 = document.createElement("h3");
    h3.innerHTML = title;

    card.appendChild(image);
    card.appendChild(h3);

    return card;

}
const section5 = () => {
 const parentContainer = createParentContainer('parent-container-5');   
 const button = document.createElement("button");
 button.id = "case-studies";
 const h2 = createH2Component("Case Studies        ▼");
 

 button.appendChild(h2);

 const accordionContainer = createAccordionContainer('accordion-container-1');
 accordionContainer.style.display = "none";

//  const accordionItem1 = createAccordionItem("Hochdorf Swiss Nutrition AG", "In response to the need for a three-year strategic plan for international sales at Hochdorf Swiss Nutrition, I, as the Head of Brand, collaborated with the CEO and the Board of Directors. The task involved defining five key development pillars for international sales. I repositioned the team by specialties, recruited a senior team for European Retail and identified target countries for product launches. I provided sales projections and enhanced the BABINA brand for LATAM/Macau markets. Additionally, I led an International Consultant project with 6 figures budget, to assess the launch for the Bimbosan Infant Milk brand in China, while measures were implemented to improve ROI, Advertising and Promotion (A&P) efficiency, and Cross-Border e-commerce. These efforts resulted in a significant boost in sales projections, successful penetration of the LATAM/Macau markets with the upgraded BABINA brand, and a streamlined approach to international sales. The integrated and scalable platform implemented under my leadership substantially increased ROI");
//  const accordionItem2 = createAccordionItem("Hochdorf Swiss Nutrition AG","needed to upgrade Babina / launch Bimbosan in 3 countries in <2 years. As Sales Director, upgraded Babina for Asia and RTM to HK, MC, CBD markets. Aided external agent / Marketing team to upgrade brands to premium level; registered product, formula and brand in Macau; defined 3 markets for Bimbosan Premium Infant Milk launch; adapted labels to meet local regulations and compliance; and incorporated full Brand activation with PR events and Trade Marketing activities. Succeeded in growing Babina in Macau by + 25% and Bimbosan in Vietnam, H- Kong / Cambodia by +75%. ▪ Hero AG As the Sales Director at ");
//  const accordionItem3 = createAccordionItem("Hero AG", "As the Sales Director at Hero AG, entrusted with steering the company's course in Asia (excluding China), I played a pivotal role in optimizing both the top and bottom lines. Implementing a comprehensive approach to accounts management and profit and loss (P&L) analysis, I successfully revitalized the three-year strategic plan. This initiative involved a dynamic response to identified white-spots in sales, profit, and new product launches. One of the key strategic enhancements was the professionalization of distributor management, a move that significantly augmented numeric distribution and amplified brand activation. Concurrently, I instituted a standard monthly reporting system, facilitating a more robust oversight of performance metrics. By strategically eliminating lean costs within the P&L structure, I achieved a streamlined and optimized Return on Investment (ROI). A noteworthy accomplishment was the substantial improvement in Advertising and Promotion (A&P) allocation, resulting in a remarkable boost in market share across various territories. Leveraging the STAR framework, I excelled in enhancing Integrated Distribution Network (IDN) by +35%, Sales Growth Network (SGN) by +25%, Japan (JPN) by +10%, Hong Kong (HK) by +12%, Philippines (PH) by +75%, and South Korea (SK) by +14%. In addition to my achievements at Hero AG, I have demonstrated leadership in managing key distributor relationships across Asia, such as SIMS Trading (HK), PT Pandurasa Kharisma (Ind), Sino Pacific trading (TH) among others, who deals with top international consumer brands. This experience underscores my ability to navigate complex market landscapes and contribute to the success of global enterprise");
 const accordionItem1 = createAccordionItemVersion2('Strategic Leadership and Transformative Results',caseStudy1Array)
    const accordionItem2 = createAccordionItemVersion2('Brand Transformation and Market Expansion',caseStudy2Array)
    const accordionItem3 = createAccordionItemVersion2('Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company',caseStudy3Array)
    const accordionItem4 = createAccordionItemVersion2('Expanding Market Footprint for the Baby and Infant Milk Category',caseStudy4Array)
    const accordionItem5 = createAccordionItemVersion2('Rebranding and Market Expansion for a Premium Food Brand',caseStudy5Array)
    const accordionItem6 = createAccordionItemVersion2('Integrating and Optimizing Business Operations for a Premium Organic Brand',caseStudy6Array)

 
 accordionContainer.appendChild(accordionItem1);
    accordionContainer.appendChild(accordionItem2);
    accordionContainer.appendChild(accordionItem3);
    accordionContainer.appendChild(accordionItem4);
    accordionContainer.appendChild(accordionItem5);
    accordionContainer.appendChild(accordionItem6);

    parentContainer.appendChild(button);
    parentContainer.appendChild(accordionContainer);

    return parentContainer
}
function createAccordionItemVersion2(title,array) {
const container = document.createElement("div");
container.className = "accordion-items";

const button = document.createElement("button");
button.className = "accordion-questions";
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-controls", "accordion-answers");

const h3 = document.createElement("h3");
h3.innerHTML = title;

button.appendChild(h3);
container.appendChild(button);

const answerContainer = document.createElement("div");
answerContainer.className = "accordion-answers";
answerContainer.style.display = "none";    


array.forEach(section => {
    const sectionElement = createContentSection(section);
    answerContainer.appendChild(sectionElement);

    
})

container.appendChild(answerContainer);


return container;


}
const caseStudy1Array= [
    {
        title: "Strategic Leadership and Transformative Results",
        paragraphs: [
            "In my role as Head of Brand Sales in Baby Care International at a leading Swiss nutrition company, I was tasked with defining a comprehensive three-year strategic plan for the International Sales department. This plan was built on five key development pillars, each designed to drive growth and innovation."
        ]
    },
    {
        title: "Pillar 1: Strengthening the Sales Team",
        paragraphs: [
            "I spearheaded the enhancement of the sales team by recruiting specialists and building a senior team to create and validate the roadmap for e-commerce and digital transformation. This included expanding the team with a new e-commerce specialist and a senior Key Account Manager (KAM) for retail in Europe."
        ]
    },
    {
        title: "Pillar 2: Strategic Market Expansion",
        paragraphs: [
            "I identified strategic countries in Asia and Europe for launching branded products, complete with medium- and long-term sales projections. This strategic focus ensured that our market entry was well-planned and executed."
        ]
    },
    {
        title: "Pillar 3: Brand Rebranding and Expansion",
        paragraphs: [
            "I led the rebranding and upgrade of a key brand to facilitate its rollout and expansion in LATAM and Macau. This initiative was crucial for increasing brand visibility and market penetration in these regions."
        ]
    },
    {
        title: "Pillar 4: Exploring the Chinese Market",
        paragraphs: [
            "To assess the potential of launching our infant milk brand in China, I secured a $200,000 investment for a professional consultant. As a member of the steering committee, I provided strategic advice to the Board of Directors, ensuring that the road to market was well-defined and executed."
        ]
    },
    {
        title: "Pillar 5: E-commerce Optimization",
        paragraphs: [
            "I focused on improving ROI and A&P efficiency for our e-commerce operations in China and Singapore. In China, we enhanced brand leadership in Cross Border E-commerce (CBEC). In Singapore, I set up an enabler platform (I Store I Send) to operate more efficiently, gaining new customers faster with better ROI."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Team Building: Successfully placed the sales team within the agreed deadline.",
            "Market Strategy: Defined and allocated strategic countries to each KAM with clear goals and deadlines for 2022 and 2023.",
            "Consultant Report: Completed the consultant report within the deadline, leading to timely decision-making.",
            "Cost Efficiency: Achieved a 30% reduction in lean costs, allowing for increased investment in brand activation.",
            "These strategic initiatives not only strengthened our market position but also drove significant growth and operational efficiency."
        ]
    }
];
const caseStudy2Array = [
    {
        title: "Brand Transformation and Market Expansion",
        paragraphs: [
            "As Head of Sales for Brand International at a prominent Swiss nutrition company, I was tasked with upgrading Swiss Premium Brand 1 and launching Swiss Premium Brand 2 in three strategic countries within two years. This ambitious project required a meticulous approach to branding, regulatory compliance, and market activation."
        ]
    },
    {
        title: "Swiss Premium Brand 1 Upgrade",
        paragraphs: [
            "I collaborated with an external agency and the marketing team to elevate Swiss Premium Brand 1, giving it a premium look and feel tailored for the Asian market. This rebranding effort distinguished Swiss Premium Brand 1 from mainstream formulas and designs, positioning it as a high-end product. We successfully registered the product, formula, and brand in Macau, leading to a launch in 2022."
        ]
    },
    {
        title: "Swiss Premium Brand 2 Market Launch",
        paragraphs: [
            "For Swiss Premium Brand 2, I identified three strategic markets for the launch of Swiss Premium Brand 2 Premium Infant Milk: Vietnam, Hong Kong, and Cambodia. We adapted the labels to comply with local regulations and ensured full compliance. The launch was supported by comprehensive brand activation, including PR events and trade marketing activities."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Swiss Premium Brand 1: The label was fully adapted and upgraded with a premium design, resulting in a successful launch in Macau and a remarkable 25% brand growth.",
            "Swiss Premium Brand 2: Successfully launched in Vietnam, Hong Kong, and Cambodia, achieving an impressive 75% international brand growth.",
            "These strategic initiatives not only enhanced our brand presence but also drove significant market growth and customer engagement."
        ]
    }

];

const caseStudy3Array = [
    {
        title: "Case Study 3: Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company",
        paragraphs: [
            "As Sales Director for a leading global Swiss multi-brand company, I took full responsibility for the company's operations in Asia, excluding China. My mandate was to optimize both top-line and bottom-line performance by managing all accounts and the profit and loss (P&L) statement."
        ]
    },
    {
        title: "Strategic Planning and Execution",
        paragraphs: [
            "I developed and implemented a comprehensive three-year strategic plan aimed at improving both top-line and bottom-line performance. This plan focused on:",
            "Covering White Spots: Identifying and addressing gaps in sales, profit, new product launches, and distributor management.",
            "Professionalization: Enhancing distributor management professionalism to increase numeric distribution, brand activation, and standard monthly reporting.",
            "Cost Optimization: Streamlining the P&L structure by removing unnecessary costs to optimize ROI and bottom-line performance.",
            "A&P Allocation: Improving the allocation of advertising and promotion (A&P) budgets to leverage both top-line and bottom-line growth."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Through these strategic initiatives, we achieved significant increases in numeric distribution across key markets:",
            "Indonesia: +35%",
            "Singapore: +25%",
            "Japan: +10%",
            "Hong Kong: +12%",
            "Philippines: +75%",
            "South Korea: +14%",
            "These results demonstrate my ability to drive substantial growth and optimization in complex, multinational environments for a global Swiss multi-brand company."
        ]
    }
];
const caseStudy4Array = [
    {
        title: "Case Study 4: Expanding Market Footprint for the Baby and Infant Milk Category",
        paragraphs: [
            "As Sales Director for a leading global Swiss multi-brand company, I was tasked with increasing the footprint of the Baby and Infant Milk category in the region. My specific goal was to launch our premium baby food brand in Hong Kong, China, and the Philippines while doubling the business of infant milk."
        ]
    },
    {
        title: "Strategic Launch Initiatives",
        paragraphs: [
            "Hong Kong Launch: I spearheaded the launch of our premium baby food brand in Hong Kong in collaboration with a major airline. This strategic partnership significantly enhanced brand visibility.",
            "Philippines Launch: Leveraging our existing network, I successfully launched our premium baby food brand in the Philippines. This initiative not only expanded our market reach but also drove substantial sales growth."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Hong Kong: Successfully listed our baby food brand with a major airline, improving brand visibility and market penetration.",
            "Philippines: Achieved a significant 12% increase in sales across the entire country by listing our baby food brand in major retail outlets.",
            "These strategic launches demonstrate my ability to drive market expansion and sales growth for a global Swiss multi-brand company in the Baby and Infant Milk category."
        ]
    }
]
const caseStudy5Array = [
    {
        title: "Case Study 5: Rebranding and Market Expansion for a Premium Food Brand",
        paragraphs: [
            "As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating a rebranding and upgrade of our premium jam brand while coordinating between distributors and internal stakeholders to ensure project success. The goal was to increase sales and activate the brand launch in top retailers across Asia."
        ]
    },
    {
        title: "Strategic Initiatives",
        paragraphs: [
            "Project Planning: Defined comprehensive project guidelines and objectives, gathering requirements to ensure a smooth rebranding process.",
            "Task Allocation: Clearly outlined key tasks for each country and internal department to ensure aligned efforts.",
            "Execution Plan: Developed a detailed timeline, checklist, and execution plan to guide the project from start to finish.",
            "Supply Chain Management: Established supply chain timelines and priorities to accommodate changes and ensure seamless product delivery.",
            "Brand Activation: Secured and executed a new brand activation plan efficiently, registering all new products with updated labels across all APAC countries."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Indonesia: +11%",
            "Philippines: +66%",
            "Australia: +15%",
            "Vietnam: +730%",
            "Cambodia: +58%",
            "Maldives: +126%",
            "These results demonstrate my ability to drive successful rebranding efforts and market expansion, leading to substantial sales growth for a global Swiss multi-brand company."
        ]
    }
];
const caseStudy6Array = [
    {
        title: "Case Study 6: Integrating and Optimizing Business Operations for a Premium Organic Brand",
        paragraphs: [
            "As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating the business of a premium organic brand into our Hong Kong (HK) business unit and headquarters for the APAC region (HQ). This involved coordinating with teams in the UK, Switzerland, and customers across the Asia-Pacific (APAC) region."
        ]
    },
    {
        title: "Strategic Initiatives",
        paragraphs: [
            "Integration: Successfully integrated sales, supply chain, and customer management into the APAC business unit.",
            "Portfolio Optimization: Optimized the product portfolio for the APAC region based on top sellers, profit margins, shelf life, brand strategy, and local adaptations.",
            "Retailer Transition: Facilitated a smooth transition of all retailers in APAC from UK Key Account Managers (KAMs) to APAC KAMs.",
            "SKU Selection: Defined top-selling SKUs and established weighted margin criteria for SKU selection and optimization."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Portfolio Streamlining: Reduced the portfolio from 70 SKUs to 25 core SKUs, gaining efficiencies and reducing complexity.",
            "Profitability Increase: Improved profitability per country by 15%.",
            "Timely Integration: Fully integrated accounting and the business unit within the set deadline.",
            "These results demonstrate my ability to drive successful business integration and optimization, leading to enhanced operational efficiency and profitability for a global Swiss multi-brand company."
        ]
    }
];





function createContentSection(section) {

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'content-sections';
    
    
    const h3 = document.createElement('h3');
    h3.textContent = section.title;
    sectionDiv.appendChild(h3);
    
    section.paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        sectionDiv.appendChild(p);
    });
    
    



    return sectionDiv;
}




function createParentContainer(id) {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = id;

    return parentContainer;
}
function createAccordionContainer(id) {
    const accordionContainer = document.createElement("div");
    accordionContainer.className = "accordion-containers";
    accordionContainer.id = id;

    return accordionContainer;
}


function createAccordionItem(title, content) {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-items";

        const button = document.createElement("button");
        button.className = "accordion-questions";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "accordion-answers");
    
        const h3 = document.createElement("h3");
        h3.innerHTML = title;
    
        button.appendChild(h3);
    
        
        // button.addEventListener("click", () => {
        //     const isExpanded = button.getAttribute("aria-expanded") === "true";
        //     button.setAttribute("aria-expanded", !isExpanded);
        //     p.style.display = isExpanded ? "none" : "flex";
        // });
            

    const p = document.createElement("p");
    p.className = "accordion-answers";
    p.innerHTML = content;
    p.style.display = "none";

    accordionItem.appendChild(button);
    accordionItem.appendChild(p);

    return accordionItem;
}

const section6 = () => {
    const parentContainer = createParentContainer('parent-container-6');
    const img1 = document.createElement("img");
    img1.src = pedro2;
    const h2 = document.createElement("h2");
    h2.innerHTML = "Pedro Garda @pedrogarda";
    const p = document.createElement("p");
    p.innerHTML = "Retail Guru | Brand Strategist | Sales Director | Mentor | Speaker | Author";

    const socialsContainer = createSocialsComponent(socialsArray);
    const linkTreeContainer = createLinkTrreeComponent(linkTreeArray);


    parentContainer.appendChild(img1);
    parentContainer.appendChild(h2);
    parentContainer.appendChild(p);
    parentContainer.appendChild(socialsContainer);
    parentContainer.appendChild(linkTreeContainer);
    
    return parentContainer;
}    
const socialsArray = [
    { icon: linkedInIcon, link: "https://www.linkedin.com/in/pedrogarda/", alt: "LinkedIn" },
    { icon: lineIcon, link: "https://line.me/ti/p/XaLa7IWI4X", alt: "Twitter" },
    { icon: whatsappIcon, link: "https://api.whatsapp.com/send?phone=34623038650", alt: "Instagram" },
    // { icon: viberIcon, link: "https://www.facebook.com/pedrogarda/", alt: "Facebook" },
    { icon: emailIcon, link: "mailto:pegarda@gmail.com", alt: "Email" },
    { icon: instagramIcon, link: "https://www.instagram.com/pedrogarda/", alt: "Instagram" },
    { icon: xIcon, link: "]https://x.com/Peterg12933591", alt: "x / twitter" },

    
];

function createSocialsComponent(array) {
    const socialsContainer = document.createElement("div");
    socialsContainer.className = "socials-containers";

    array.forEach((social) => {
        const wrapper = document.createElement("div");
        wrapper.className = "socials-wrapper";
        const anchor = document.createElement("a");
        anchor.href = social.link;
        anchor.target = "_blank";
    
        
        const img = document.createElement("img");
        img.src = social.icon;
        img.alt = social.alt;
        
        anchor.appendChild(img);
        wrapper.appendChild(anchor);
        socialsContainer.appendChild(wrapper);
    });

    return socialsContainer;
}
const linkTreeArray = [
    {icon: linktreeImage1, link: "https://www.linkedin.com/posts/pedrogarda_hochdorf-cambodia-asianmarket-activity-6899197811154403328-fn2J?utm_source=share&utm_medium=member_ios", text: "Strategic route-to-market:Bimbosans bold expansion From Switzerland to Southeast Asia"},
    {icon: linktreeImage2, link: "https://www.linkedin.com/posts/pedrogarda_anuga2021-hochdorf-bimbosan-activity-6852994259247755264-yn3F?utm_source=share&utm_medium=member_ios", text: "Showcasing Swiss excellence: Bimbosan and Babina at Anuga 2021"},
    {icon: icon3, link: "https://www.linkedin.com/in/pedrogarda/", text: "Project title 3"},
    {icon: icon4, link: "https://www.linkedin.com/in/pedrogarda/", text: "Project title 4"},

]
function createLinkTrreeComponent(array) {
    const linkTreeContainer = document.createElement("div");
    linkTreeContainer.className = "link-tree-containers";

    array.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "link-tree-wrappers";
        const anchor = document.createElement("a");
        anchor.href = item.link;
        anchor.target = "_blank";
    
const img = document.createElement("img");
img.src = item.icon;
img.ariaHidden = true;

        
const h4 = document.createElement("h4");
h4.innerHTML = item.text;

anchor.appendChild(img);    
anchor.appendChild(h4);
        
        wrapper.appendChild(anchor);
        linkTreeContainer.appendChild(wrapper);
    });

    return linkTreeContainer;

}


export { section1, section2, section3, section4 , section5,
section6,
};
