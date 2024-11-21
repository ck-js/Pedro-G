
const contentData3 = [
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





const contentData2 = [
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
];


const contentData = [
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

function createContentSection(section) {
    const sectionDiv = document.createElement('div');
    
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

const contentContainer = document.getElementById('content-container');

contentData.forEach(section => {
    const sectionElement = createContentSection(section);
    contentContainer.appendChild(sectionElement);
});




