
let toolsHtml = '';

document.querySelector('.js-design-tool-btn').classList.add('skills-button-colored');

let simulationBtnElement = document.querySelector('.js-simulation-tool-btn');
  simulationBtnElement.addEventListener('click', ()=> {

    designBtnElement.classList.remove('skills-button-colored');
    dataBtnElement.classList.remove('skills-button-colored');
    otherBtnElement.classList.remove('skills-button-colored');

    simulationBtnElement.classList.add('skills-button-colored');
    document.querySelector('.js-tools-cards-container')
      .innerHTML = `
      <div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="images/icons/etap.png" alt=""></div>
          <p class="tool-name">ETAP</p>
          <p class="tool-description">Power system analysis simulation</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/simaris c.png" alt="">
          </div>
          
          <p class="tool-name">Simaris Configuration</p>
          <p class="tool-description">Low-voltage power distribution sizing</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/simaris d.png" alt="">
          </div>
          
          <p class="tool-name">Simaris Design</p>
          <p class="tool-description">Electrical distribution system planning</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/helio-scope.png" alt="">
          </div>
          
          <p class="tool-name">HelioScope</p>
          <p class="tool-description">Solar system design simulation</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/pvsyst.png" alt="">
          </div>
          
          <p class="tool-name">PVsyst</p>
          <p class="tool-description">Photovoltaic system performance modeling</p>
        </div>
      `;
  });

  let dataBtnElement = document.querySelector('.js-data-tool-btn');
  dataBtnElement.addEventListener('click', ()=> {

    designBtnElement.classList.remove('skills-button-colored');
    simulationBtnElement.classList.remove('skills-button-colored');
    otherBtnElement.classList.remove('skills-button-colored');

    dataBtnElement.classList.add('skills-button-colored');
    document.querySelector('.js-tools-cards-container')
      .innerHTML = `
      <div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="images/icons/ms-excel.png" alt=""></div>
          <p class="tool-name">MS Excel</p>
          <p class="tool-description">Advanced spreadsheet data analysis</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/power-bi.png" alt="">
          </div>
          
          <p class="tool-name">Power BI</p>
          <p class="tool-description">Interactive business data visualization</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/ms-power-point.png" alt="">
          </div>
          
          <p class="tool-name">MS PowerPoint</p>
          <p class="tool-description">Professional presentation and reporting</p>
        </div>
      `;});

    let otherBtnElement = document.querySelector('.js-other-tool-btn');
    otherBtnElement.addEventListener('click', ()=> {

      designBtnElement.classList.remove('skills-button-colored');
      simulationBtnElement.classList.remove('skills-button-colored');
      dataBtnElement.classList.remove('skills-button-colored');

    otherBtnElement.classList.add('skills-button-colored');
    document.querySelector('.js-tools-cards-container')
      .innerHTML = `
      <div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="images/icons/ms-word.png" alt=""></div>
          <p class="tool-name">MS Word</p>
          <p class="tool-description">Professional technical documentation drafting</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/ms-teams.png" alt="">
          </div>
          
          <p class="tool-name">MS Teams</p>
          <p class="tool-description">Seamless team collaboration platform</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/ms-outlook.png" alt="">
          </div>
          
          <p class="tool-name">MS Outlook</p>
          <p class="tool-description">Professional communication and scheduling</p>
        </div>
      `;});

      let designBtnElement = document.querySelector('.js-design-tool-btn');
    designBtnElement.addEventListener('click', ()=> {

      otherBtnElement.classList.remove('skills-button-colored');
      simulationBtnElement.classList.remove('skills-button-colored');
      dataBtnElement.classList.remove('skills-button-colored');

    designBtnElement.classList.add('skills-button-colored');
    document.querySelector('.js-tools-cards-container')
      .innerHTML = `
      <div class="tool-card">
          <div class="tool-icon-container"><img class="tool-icon" src="images/icons/eplan-p8.png" alt=""></div>
          <p class="tool-name">Eplan Electric P8</p>
          <p class="tool-description">Advanced electrical CAD design</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/eplan-pp.png" alt="">
          </div>
          
          <p class="tool-name">Eplan ProPanel</p>
          <p class="tool-description">3D control cabinet engineering</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/auto-cad.png" alt="">
          </div>
          
          <p class="tool-name">AutoCAD</p>
          <p class="tool-description">Industry standard 2D drafting</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/corel-draw.png" alt="">
          </div>
          
          <p class="tool-name">CorelDRAW</p>
          <p class="tool-description">Creative vector graphic design</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/sketch-up.png" alt="">
          </div>
          
          <p class="tool-name">SkecthUP</p>
          <p class="tool-description">Intuitive 3D architectural modeling</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon-container">
            <img class="tool-icon" src="images/icons/ms-visio.png" alt="">
          </div>
          
          <p class="tool-name">MS Visio</p>
          <p class="tool-description">Flowchart and diagram creation</p>
        </div>

      </div>

      `;});