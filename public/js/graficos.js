const socket = io();
let agua = document.getElementById('circulo');
let luces = document.getElementById('luces');
ctxa = agua.getContext('2d');
ctxl = luces.getContext('2d');
socket.on('dataserial', (Serialdata) =>{
    ChartTemp.data.datasets[0].data[0] = Serialdata.temp;
    ChartTemp.update();
    ChartHum.data.datasets[0].data[0] = Serialdata.hum;
    ChartHum.update();
    ChartFood.data.datasets[0].data[0] = Serialdata.peso;
    ChartFood.update();
    var imgObja = new Image();
    var imgObjl = new Image();
    if(Serialdata.Agua == 1){
            imgObja.src = '../files/verde.png';
            console.log('Agua llena');
    }else{
            imgObja.src = '../files/rojo.png';
            console.log('Agua vacia');
    }
    if(Serialdata.luz == 1){
            imgObjl.src = '../files/verde.png';
            console.log('Luz encendida')
    }else{
            imgObjl.src = '../files/rojo.png';
            console.log('Luz apagada')
    }
    imgObja.onload = () => {
        ctxa.drawImage(imgObja,0,0);
    }
    imgObjl.onload = () => {
        ctxl.drawImage(imgObjl,0,0);
    }
})

var temp = document.getElementById('Temp').getContext('2d');
var ChartTemp = new Chart(temp, {
    type: 'bar',
    data: {
        labels: ['Cº'],
        datasets: [{
            label: 'Control de Temperatura',
            data: [],
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
var ChartHum = new Chart(hum, {
    type: 'bar',
    data: {
        labels: ['%'],
        datasets: [{
            label: 'Control de Humedad',
            data: [],
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
var ChartFood = new Chart(food, {
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
