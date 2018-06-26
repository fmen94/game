var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//constants
cartas=[
    {valor: 1, imagen: "images/imagenes de cartas/A corazones .png"},
    {valor: 1, imagen: "images/imagenes de cartas/A diamantes.png"},
    {valor: 1, imagen: "images/imagenes de cartas/A picas.png"},
    {valor: 1, imagen: "images/imagenes de cartas/A treboles.png"},
    {valor: 2, imagen: "images/imagenes de cartas/2 corazones.png"},
    {valor: 2, imagen: "images/imagenes de cartas/2 diamantes.png"},
    {valor: 2, imagen: "images/imagenes de cartas/2 picas.png"},
    {valor: 2, imagen: "images/imagenes de cartas/2 treboles.png"},
    {valor: 3, imagen: "images/imagenes de cartas/3  treboles.png"},
    {valor: 3, imagen: "images/imagenes de cartas/3 corazones.png"},
    {valor: 3, imagen: "images/imagenes de cartas/3 diamantes.png"},
    {valor: 3, imagen: "images/imagenes de cartas/3 picas.png"},
    {valor: 4, imagen: "images/imagenes de cartas/4 corazones.png"},
    {valor: 4, imagen: "images/imagenes de cartas/4 diamantes.png"},
    {valor: 4, imagen: "images/imagenes de cartas/4 picas.png"},
    {valor: 4, imagen: "images/imagenes de cartas/4 treboles.png"},
    {valor: 5, imagen: "images/imagenes de cartas/5 corazones.png"},
    {valor: 5, imagen: "images/imagenes de cartas/5 diamantes.png"},
    {valor: 5, imagen: "images/imagenes de cartas/5 picas.png"},
    {valor: 5, imagen: "images/imagenes de cartas/5 treboles.png"},
    {valor: 6, imagen: "images/imagenes de cartas/6 corazones.png"},
    {valor: 6, imagen: "images/imagenes de cartas/6 diamantes.png"},
    {valor: 6, imagen: "images/imagenes de cartas/6 picas.png"},
    {valor: 6, imagen: "images/imagenes de cartas/6 treboles.png"},
    {valor: 7, imagen: "images/imagenes de cartas/7 corazon.png"},
    {valor: 7, imagen: "images/imagenes de cartas/7 diamante.png"},
    {valor: 7, imagen: "images/imagenes de cartas/7 picas.png"},
    {valor: 7, imagen: "images/imagenes de cartas/7 trebol.png"},
    {valor: .5, imagen: "images/imagenes de cartas/J corazones.png"},
    {valor: .5, imagen: "images/imagenes de cartas/J diamantes.png"},
    {valor: .5, imagen: "images/imagenes de cartas/J picas.png"},
    {valor: .5, imagen: "images/imagenes de cartas/J trebol.png"},
    {valor: .5, imagen: "images/imagenes de cartas/Q  corazones.png"},
    {valor: .5, imagen: "images/imagenes de cartas/Q diamantes.png"},
    {valor: .5, imagen: "images/imagenes de cartas/Q picas.png"},
    {valor: .5, imagen: "images/imagenes de cartas/Q treboles.png"},
    {valor: .5, imagen: "images/imagenes de cartas/K corazones.png"},
    {valor: .5, imagen: "images/imagenes de cartas/K diamantes.png"},
    {valor: .5, imagen: "images/imagenes de cartas/K picas.png"},
    {valor: .5, imagen: "images/imagenes de cartas/K trebol.png"},
    ];
    var interval;
    var frames = 0;
    var cartasUser=[];
    var cartasComp=[];
    var fondoImg="images/Mesa_poker.png";

    


//class
    class Fondo{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.width = canvas.width;
            this.height = canvas.height;
            this.image = new Image();
            this.image.src = fondoImg;
            this.image.onload = function(){
                this.draw();
            }.bind(this)
    }
        draw(){
            ctx.drawImage(this.image, this.x,this.y,this.width,this.height); 

        }
    }
    class Cartas{
        constructor(x,y,image){
            this.x=x;
            this.y=y;
            this.width=60;
            this.height=80;
            this.image =new Image();
            this.image.src= image;
            this.image.onload=function(){
               this.draw();
            }.bind(this)
        }
        draw(){
            ctx.drawImage(this.image, this.x,this.y,this.width,this.height); 

        }


    }              
//instances
    fondo= new Fondo();
    carta= new Cartas(50,50,cartas[0].imagen);
//*****************mainFunctions***************************
function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    fondo.draw();
    reparte();
}

function start(){
    interval = setInterval(update, 1000/180);

}
//*****************aux functions*************************
function creaCartas(){






}

function reparte(){
darDosCartas();
var x=584;
var y=267;
carta1= new Cartas(x,y,cartasUser[0].imagen);


}

//entrega un numero random dentro del arreglo
function cartaAzar(cartas){
    var numCar=Math.floor(Math.random()*cartas.length);
    var cartaSelec=cartas[numCar];
    cartas.splice(numCar,1);
    console.log(cartaSelec);
    console.log(cartas.length)
    return cartaSelec;
}
//dar las dos cartas iniciales a los jugadores 
function darDosCartas(){
    if(cartasUser.length>=2)return
    //entrega 2 cartas al usuario
    var carta1=cartaAzar(cartas);
    cartasUser[0]=carta1;
    var carta2=cartaAzar(cartas);
    cartasUser[1]=carta2;
    //entrega 2 cartas a la computadora
    var carta3=cartaAzar(cartas);
    cartasComp[0]=carta3;
    var carta4=cartaAzar(cartas);
    cartasComp[1]=carta4;
}
//recibe a quien se le añaden cartas
function addCarta(array){
    if (tePasaste(array)){
    var cartaAdd=cartaAzar(cartas);
    array.push(cartaAdd);}
}
//esta funcion se actualiza cada que el usuario o computadora agrega una carta
function contadora(arrayDeCartas){
    var total=0;
    arrayDeCartas.forEach(function (e) {
    var con=e.valor;
    total=total+con;    
    });
    return total;
}
//si es verdadero tiene menos de 7.5 es verdadero
function tePasaste(array){
    if(contadora(array)<7.5) return true;
    return false;

}

function ventajaCompu(){
    var puntosCom=contadora(cartasComp);
    if(puntosCom<=7){puntosCom+=.5};
    return puntosCom
}
//esta funcion se llama hasta que el usuario termina de jugar
//si es falso gana la compu
//si es verdadero gana el usuario
function saberQuienGana(){
    if (ventajaCompu()>contadora(cartasUser)){
        console.log("perdiste");
        return false};
    if (ventajaCompu()<contadora(cartasUser)){
        console.log("ganaste");
        return true};
        console.log("empate");
    return "empate";
}
function compuRoba(){
    if(contadora(cartasComp)<=5){addCarta(cartasComp)}
}


//listeners


start();