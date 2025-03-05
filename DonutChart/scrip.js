const ctx = document.getElementById('myChart0').getContext('2d');

        let myChart = new Chart(ctx, {
            type: 'doughnut', // Donut-Chart
            data: {
                labels: [],
                datasets: [{
                    data: [], // Prozentwerte
                    backgroundColor: [],
                }]
            },
            options: {
    		    responsive: false,
    		    maintainAspectRatio: false,
    		    plugins: {
                    legend: {
                        position: 'right'}
                    }
        }
});

let x = 0;
let ChartId = 0;
function addtolist() {
    x += 1;
    let list = document.getElementById('List');
    let listSector = document.createElement('div');
    listSector.classList.add('ListSector');
    listSector.id = x;
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    input1.type = 'text';
    input2.type = 'text';
    input3.type = 'color';
    input1.classList.add('ListItem');
    input2.classList.add('ListItem');
    input3.classList.add('ListItem');
    input1.onchange = function() {
        changeSmt(listSector);
    };
    input2.onchange = function() {
        changeSmt(listSector);
    };
    input3.onchange = function() {
        changeSmt(listSector);
    };
    list.appendChild(listSector);
    listSector.appendChild(input1);
    listSector.appendChild(input2);
    listSector.appendChild(input3);

}
function changeSmt(elem) {
        const inputs = elem.getElementsByTagName("input");
        let i = (elem.id) - 1;

        let v1 = inputs[0].value;
        let v2 = inputs[1].value;
        let v3 = inputs[2].value;

        myChart.data.labels[i] = v1;
        myChart.data.datasets[0].data[i] = v2;
        myChart.data.datasets[0].backgroundColor[i] = v3;
        myChart.update();
    
}
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const ListContainer = document.getElementById('ListContainer');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  ListContainer.classList.toggle('darkmode');
  const isDark = body.classList.contains('darkmode');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
  if (isDark) {
    myChart.options.plugins.legend.labels.color = 'aliceblue';
  } else {
    myChart.options.plugins.legend.labels.color = 'black';
  }
  myChart.update();
});

function deletefromlist() {
    const divElement = document.getElementById(x);
    x -= 1;
    divElement.remove();
    if (myChart.data.labels && Array.isArray(myChart.data.labels)) {
        myChart.data.labels.pop(); // Entfernt das letzte Label
    }
    
    if (myChart.data.datasets[0].data && Array.isArray(myChart.data.datasets[0].data)) {
        myChart.data.datasets[0].data.pop(); // Entfernt den letzten Wert aus den Daten
    }
    
    if (myChart.data.datasets[0].backgroundColor && Array.isArray(myChart.data.datasets[0].backgroundColor)) {
        myChart.data.datasets[0].backgroundColor.pop(); // Entfernt die letzte Hintergrundfarbe
    }
    
    // Nach der Modifikation der Daten die Chart neu rendern
    myChart.update();
}

function changeChartType(elem) {
    let type = elem.value;

    // Erstelle das neue <canvas> Element
    const newCanvas = document.createElement('canvas');
    ChartId += 1;  // Erhöhe den ChartId für das neue Diagramm
    newCanvas.id = `myChart${ChartId}`;  // Dynamische ID

    newCanvas.width = 600;
    newCanvas.height = 500;
    newCanvas.classList.add('myChart');

    // Finde das letzte Canvas, das bereits eine ID hat (myChart0, myChart1, ...)
    const existingCanvas = document.getElementById(`myChart${ChartId - 1}`);
    
    // Füge das neue <canvas> direkt nach dem bestehenden Canvas ein
    if (existingCanvas) {
        existingCanvas.parentNode.insertBefore(newCanvas, existingCanvas.nextSibling);
        existingCanvas.remove();
    } else {
        // Falls kein Canvas mit der aktuellen ID existiert, füge es ganz am Ende hinzu
        document.body.appendChild(newCanvas);
    }

    const newData = JSON.parse(JSON.stringify(myChart.data));
    const newOptions = JSON.parse(JSON.stringify(myChart.options));
    // Erstelle das neue Diagramm mit den alten Daten und dem neuen Typ
    const cty = document.getElementById(`myChart${ChartId}`).getContext('2d');
    let newChart = new Chart(cty, {
        type: type, // Neuer Diagrammtyp
        data: newData, // Behalte die Daten des alten Diagramms
        options: newOptions // Behalte die Optionen des alten Diagramms
    });

    // Zerstöre das alte Diagramm
    myChart.destroy();

    // Setze das neue Diagramm als das aktive Diagramm
    myChart = newChart;
    myChart.update();
}