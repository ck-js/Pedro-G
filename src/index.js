
import "./style.css"
import { section1, section2, section3, section4,
    section5, section6
 } from './landing-page.js';
 



document.body.appendChild(section1());
document.body.appendChild(section2());
document.body.appendChild(section6());
document.body.appendChild(section3());
document.body.appendChild(section4());
document.body.appendChild(section5());



document.querySelectorAll('.accordion-questions').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'none') {
          question.setAttribute('aria-expanded', 'true');
            answer.style.display = 'flex';
        }else {
            question.setAttribute('aria-expanded', 'false');
        answer.style.display = 'none';
        }
    });
}
)

document.getElementById('case-studies').addEventListener('click', () => {
  const accordionContainer = document.getElementById('accordion-container-1');  
  if(accordionContainer.style.display === 'none') {
    accordionContainer.style.display = 'flex';

  } else {
    accordionContainer.style.display = 'none';
    

}
})

const expandables = document.querySelectorAll('.expandables');

expandables.forEach(expandable => {
  expandable.addEventListener('click', () => {
    const list = expandable.nextElementSibling;
    list.setAttribute('aria-hidden', 'false');
    list.classList.toggle('hidden');
    expandable.textContent = list.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
    list.classList.contains('hidden') ? list.setAttribute('aria-hidden', 'true') : list.setAttribute('aria-hidden', 'false');
    

  });
});