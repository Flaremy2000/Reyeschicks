var temp = document.getElementById('Temp').getContext('2d');
var ChartTemp = new Chart(temp, {
    type: 'bar',
    data: {
        labels: ['Cº'],
        datasets: [{
            label: 'Control de Temperatura',
            data: [24],
            bacgroundColor: [
                'rgba(255,99, 132, 0.2)'
            ],
            borderColor:
            ['rgba(255,99, 132, 0.2)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y:{
                suggestedMin: -30,
                suggestedMax: 60
            }
        }
    }
})

var hum = document.getElementById('Hum').getContext('2d');
var ChartTemp = new Chart(hum, {
    type: 'bar',
    data: {
        labels: ['%'],
        datasets: [{
            label: 'Control de Humedad',
            data: [14],
            bacgroundColor: [
                'rgba(255,120, 132, 0.2)'
            ],
            borderColor:
            ['rgba(255,120, 132, 0.2)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y:{
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
})

var food = document.getElementById('food').getContext('2d');
var ChartTemp = new Chart(food, {
    type: 'bar',
    data: {
        labels: ['KG'],
        datasets: [{
            label: 'Control de Peso de Comida',
            data: [2.132],
            bacgroundColor: [
                'rgba(215,99, 102, 0.2)'
            ],
            borderColor:
            ['rgba(215,99, 102, 0.2)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y:{
                suggestedMin: 0,
                suggestedMax: 4
            }
        }
    }
})

window.addEventListener('load', ()=> {
    let canvasCirculo = document.getElementById('circulo');
    let ctx = canvasCirculo.getContext('2d');
    ctx.beginPath();
    ctx.arc(100,100, 50, 0, 2* Math.PI);
    ctx.stroke();
})

window.addEventListener('load', ()=> {
    let canvasCirculo = document.getElementById('luces');
    let ctx = canvasCirculo.getContext('2d');
    ctx.beginPath();
    ctx.arc(100,100, 50, 0, 2* Math.PI);
    ctx.stroke();
})