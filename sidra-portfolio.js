
const header = document.querySelector('header');
const hero = document.querySelector('.hero-section');

document.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - 60)
});

const tools = {
  design: [{
    name: 'Eplan Electric P8', desc: 'Advanced electrical CAD design',
    image: 'images/icons/eplan-p8.png'
  },
 {
  name: 'Eplan ProPanel', desc: '3D control cabinet engineering',
  image: 'images/icons/eplan-pp.png'
 },
 {
  name: 'AutoCAD', desc: 'Industry standard 2D drafting',
  image: 'images/icons/auto-cad.png'
 },
 {
  name: 'CorelDRAW', desc: 'Creative vector graphic design',
  image: 'images/icons/corel-draw.png'
 },
 {
  name: 'SketchUP', desc: 'Intuitive 3D architectural modeling',
  image: 'images/icons/sketch-up.png'
 },
 {
  name: 'MS Visio', desc: 'Flowchart and diagram creation',
  image: 'images/icons/ms-visio.png'
 }],


  simulation: [{
    name: 'ETAP', desc: 'Power system analysis simulation',
    image: 'images/icons/etap.png'
  },
 {
  name: 'Simaris Configuration', desc: 'Low-voltage power distribution sizing',
  image: 'images/icons/simaris-c.png'
 },
 {
  name: 'Simaris Design', desc: 'Low-voltage power distribution sizing',
  image: 'images/icons/simaris-d.png'
 },
 {
  name: 'HelioScope', desc: 'Solar system design simulation',
  image: 'images/icons/helio-scope.png'
 },
 {
  name: 'PVsyst', desc: 'Photovoltaic system performance modeling',
  image: 'images/icons/pvsyst.png'
 }],

 data: [{
    name: 'MS Excel', desc: 'Advanced spreadsheet data analysis',
    image: 'images/icons/ms-excel.png'
  },
 {
  name: 'Power BI', desc: 'Interactive business data visualization',
  image: 'images/icons/power-bi.png'
 },
 {
  name: 'MS PowerPoint', desc: 'Professional presentation and reporting',
  image: 'images/icons/ms-power-point.png'
 }],

 other: [{
    name: 'MS Word', desc: 'Professional technical documentation drafting',
    image: 'images/icons/ms-word.png'
  },
 {
  name: 'MS Teams', desc: 'Seamless team collaboration platform',
  image: 'images/icons/ms-teams.png'
 },
 {
  name: 'MS Outlook', desc: 'Professional communication and scheduling',
  image: 'images/icons/ms-outlook.png'
 }]
}
let toolsHtml = '';

document.querySelector('.js-design-tool-btn').classList.add('skills-button-colored');

let simulationBtnElement = document.querySelector('.js-simulation-tool-btn');
  simulationBtnElement.addEventListener('click', ()=> {

    designBtnElement.classList.remove('skills-button-colored');
    dataBtnElement.classList.remove('skills-button-colored');
    otherBtnElement.classList.remove('skills-button-colored');

    simulationBtnElement.classList.add('skills-button-colored');

    toolsHtml = tools.simulation.map((tool) => 
      `<div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="${tool.image}" alt=""></div>
          <p class="tool-name">${tool.name}</p>
          <p class="tool-description">${tool.desc}</p>
        </div>`
      
    ).join('');

    document.querySelector('.js-tools-cards-container')
      .innerHTML = toolsHtml;
  });


let dataBtnElement = document.querySelector('.js-data-tool-btn');
  dataBtnElement.addEventListener('click', ()=> {

    designBtnElement.classList.remove('skills-button-colored');
    simulationBtnElement.classList.remove('skills-button-colored');
    otherBtnElement.classList.remove('skills-button-colored');

    dataBtnElement.classList.add('skills-button-colored');

    toolsHtml = tools.data.map((tool) => 
      `<div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="${tool.image}" alt=""></div>
          <p class="tool-name">${tool.name}</p>
          <p class="tool-description">${tool.desc}</p>
        </div>`
      
    ).join('');

    document.querySelector('.js-tools-cards-container')
      .innerHTML = toolsHtml;
      });

  let otherBtnElement = document.querySelector('.js-other-tool-btn');
    otherBtnElement.addEventListener('click', ()=> {

      designBtnElement.classList.remove('skills-button-colored');
      simulationBtnElement.classList.remove('skills-button-colored');
      dataBtnElement.classList.remove('skills-button-colored');

    otherBtnElement.classList.add('skills-button-colored');

    toolsHtml = tools.other.map((tool) => 
      `<div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="${tool.image}" alt=""></div>
          <p class="tool-name">${tool.name}</p>
          <p class="tool-description">${tool.desc}</p>
        </div>`
      
    ).join('');

    document.querySelector('.js-tools-cards-container')
      .innerHTML = toolsHtml;
   
        });

  let designBtnElement = document.querySelector('.js-design-tool-btn');
    designBtnElement.addEventListener('click', ()=> {

      otherBtnElement.classList.remove('skills-button-colored');
      simulationBtnElement.classList.remove('skills-button-colored');
      dataBtnElement.classList.remove('skills-button-colored');

    designBtnElement.classList.add('skills-button-colored');
    
    toolsHtml = tools.design.map((tool) => 
      `<div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="${tool.image}" alt=""></div>
          <p class="tool-name">${tool.name}</p>
          <p class="tool-description">${tool.desc}</p>
        </div>`
      
    ).join('');

    document.querySelector('.js-tools-cards-container')
      .innerHTML = toolsHtml;   
    });

    

   document.querySelectorAll('*').forEach(el => {
  if (el.getBoundingClientRect().right > document.documentElement.clientWidth + 1) {
    el.style.outline = '2px solid red';
    console.log('CULPRIT:', el.className || el.tagName, 
                '→ overflow:', Math.round(el.getBoundingClientRect().right - document.documentElement.clientWidth) + 'px');
  }
});