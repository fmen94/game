var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//constantes
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
    var cartaBack="images/carta.png";
    var mas=false;
    var mas1=false;
    var mas2=false;
    var turno=true;
    var masCom=false;
    var masCom1=false;
    var ganador=0;
    var gameOver=false;
    var uno=false;
    var dos=false;
    var computa=false;

    


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
        constructor(x,y,image=cartaBack){
            this.x=x;
            this.y=y;
            this.width=108;
            this.height=144;
            this.image =new Image();
            this.image.src= image;
            this.image.onload=function(){
               this.draw();
            }.bind(this)
        }
        draw(){
            ctx.drawImage(this.image, this.x,this.y,this.width,this.height); 

        }
        //si es verdadero direc va hacia el usuario
        mover(x,y,direc){

            if(direc){
                if(this.y<454){this.y+=y;
                this.x-=x;}
            }else{
                if(this.y>50){this.y-=y;
                    this.x-=x;}
            }
            
        }


    }              
//instances
    darDosCartas();
    var  fondo= new Fondo();
    var carta1= new Cartas(584,267);
    var carta2= new Cartas(584,267);
    var carta3= new Cartas(584,267);
    var carta4= new Cartas(584,267);
    var cartaAdi=new Cartas(584,267);
    var cartaAdi1=new Cartas(584,267);
    var cartaAdi2=new Cartas(584,267);
    var cartaCom3=new Cartas(524,267);
    var cartaCom4=new Cartas(584,267);
    

//*****************mainFunctions***************************
function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fondo.draw();
    carta1.draw();
    carta1.mover(1.2,2,true);
    if(uno){
        carta2.draw();
        carta2.mover(0,2,true);
    }   
    carta3.draw();
    carta3.mover(1.05,2,false);
    if(computa){
        carta4.draw();
        carta4.mover(0,2,false);}
    puntuacion()
    if(mas){cartaAdi.draw();
    cartaAdi.mover(-1.2,2,true);}
    if(mas1){cartaAdi1.draw();
    cartaAdi1.mover(-2.4,2,true);}
    if(mas2){cartaAdi2.draw();
    cartaAdi2.mover(2.4,2,true);}
    if(tePasaste(cartasUser)==false||ganador==2){
        turno=false;
        gameOver=true;
        ctx.font = '100px Paytone One';
        ctx.fillStyle = 'red';
        ctx.fillText('GAME OVER', 350, 350);
    }
    if(masCom){cartaCom3.draw();
        cartaCom3.mover(-1.6,2,false);}
    if(masCom1){cartaCom4.draw();
        cartaCom4.mover(-2.1,2,false)}
    if(turno==false){
        if(tePasaste(cartasComp)==false&&tePasaste(cartasUser)||ganador==1){
            ctx.font = '100px Paytone One';
            ctx.fillStyle = 'blue';
            ctx.fillText('WIN!', 500, 350);
        }
    }
    if(turno==false){
        ctx.font = '100px Paytone One';
        ctx.fillStyle = 'white';
        if(contadora(cartasComp)>7.5){ctx.fillStyle='red'}
        ctx.fillText(ventajaCompu(), 300, 150);
    }

}

function start(){
    interval = setInterval(update, 1000/60);
}
//*****************aux functions*************************
function creaCartas(){
    mas=true;
}
//entrega un arreglo random dentro del arreglo
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
    //entrega 2 cartas al usuario
    var carta1=cartaAzar(cartas);
    cartasUser[0]=carta1;
    //entrega 2 cartas a la computadora
    var carta3=cartaAzar(cartas);
    cartasComp[0]=carta3;
}
//funcion que muestre los puntos del usuario
function puntuacion(){
    
    ctx.font = '100px Paytone One';
        ctx.fillStyle = 'white';
        if(contadora(cartasUser)>7.5){ctx.fillStyle='red'}
        ctx.fillText(contadora(cartasUser), 940, 580);  
}
//recibe a quien se le añaden cartas
function addCarta(array){
    var cartaAdd=cartaAzar(cartas);
    array.push(cartaAdd);
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
    if(contadora(array)<=7.5) return true;
    return false;
}
//ventaja de la computadora final
function ventajaCompu(){
    var puntosCom=contadora(cartasComp);
    if(puntosCom<=7){puntosCom+=.5};
    return puntosCom
}
//esta funcion se llama hasta que el usuario termina de jugar
//si es falso gana la compu
//si es verdadero gana el usuario
function saberQuienGana(){
    if (ventajaCompu()>contadora(cartasUser)&&ventajaCompu()<=7.5){
        console.log("perdiste");
        return false};
    if (ventajaCompu()<contadora(cartasUser)){
        console.log("ganaste");
        return true};
        console.log("empate");
    if(ventajaCompu()==contadora(cartasUser))return false;
}
//la computadora roba carta si la suma es menor a 5
function compuRoba(){
    if(contadora(cartasComp)<=5){addCarta(cartasComp)}
}



//******************************listeners********************************
$('#inicio').click(function(){
    carta1.image.src=cartasUser[0].imagen;
    start();


});
$('#otraCarta').click(function(){
    if(turno){
        console.log("agragaste una carta");
        addCarta(cartasUser);
        if(mas1){mas2=true};
        if (mas){mas1=true};
        if (dos){mas=true}
        if(uno==false){dos=true 
        uno=true}
    }
    
});
$('#canvas').click(function(){
        if(uno){
            carta2.image.src=cartasUser[1].imagen;
        
        }
    
        if(mas){
            cartaAdi.image.src=cartasUser[2].imagen;
        }
        if(mas1){
            cartaAdi1.image.src=cartasUser[3].imagen;
        }
        if(mas2){
            cartaAdi2.image.src=cartasUser[4].imagen;
        }
    
    

});
$('#terminar').click(function(){
    if(gameOver==false){
        turno=false;
        carta3.image.src=cartasComp[0].imagen;
        compuRoba();
        if(cartasComp.length==2){
            computa=true;
         carta4.image.src=cartasComp[1].imagen;}
        compuRoba();
        if(cartasComp.length==3){
            masCom=true;
            cartaCom3.image.src=cartasComp[2].imagen;
        }
        compuRoba();
        if(cartasComp.length==4){
            masCom1=true;
            cartaCom4.image.src=cartasComp[3].imagen;
        }
        if(saberQuienGana()){
            ganador=1;
        }
        if(saberQuienGana()==false){
            ganador=2
        }
    }
})
$('#restart').click(function(){
    location.reload();
})
