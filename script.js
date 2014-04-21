var dibujar = SVG('Recuadro').size("50%","50%");
var line=[[0,250],[400,250]]

var posicion = [[100,0], [130,0 ], [160,100 ], [190,70 ] , [220,100 ] , [250,0],[280,0], [250, 130] , 
                [220,130], [190, 100] , [160,130], [130,130 ],[100, 0]]; //letra "w"

var posDestino = [[100,0],[190,0 ],[190,30],[130,30 ],[130,60],[180,60 ],
                  [180,90 ],[130,90],[130,190],[100,190],[100,0], ]; //letra "f"
var continua = dibujar.polyline(posicion).fill( color =" #CCFF33").stroke({width : 3, color: ' #33FF99'});
                continua.animate(1000).plot(posDestino).loop();

for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}



var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
