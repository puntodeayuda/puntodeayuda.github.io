var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: { lat: 31.8791643, lng: -116.6239712 },
    	zoom: 15
	});
    
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
    
	var transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);
    
	todos();
}

function clearMap(center, zoom) {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: center,
    	zoom: zoom
	});
    
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
    
	var transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);
}

function orfanatos() {
	clearMap({ lat: 31.7912536, lng: -116.5864941 }, 12);
//	4_Casa Albergue Temporal para Ninos   ------------------------
    
var albergueninos = { lat: 31.8585284, lng: -116.6025585 };
var albergueninos_msg=" ";
var albergueninos_info="<div class='centrar'><img src='img/d4.png'><p><h3>4. Casa Albergue Temporal para Niños</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8585284, lng: -116.6025585</td></tr><tr><td><b>Dirección</b></td><td>Av Matamoros, Bahia, 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 176 1016</td></tr><tr><td><b>Donaciones</b></td><td>Leche en fórmula, pañales talla 2, artículos de limpieza, ropa en buen estado.</td></tr></table><br/><br/></div>";

var infowindowALBERGUENINOS = new google.maps.InfoWindow({
	content: albergueninos_info
});    
 var markerALBERGUENINOS = new google.maps.Marker({
 	position: albergueninos,
 	title:albergueninos_msg,
 	map: map
});
markerALBERGUENINOS.addListener('click', function(){
infowindowALBERGUENINOS.open(map, markerALBERGUENINOS);
});
var circleALBERGUENINOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: albergueninos,
    	radius: 50
});

//	5_El Reino de los Ninos   ------------------------
    
var reinoninos = { lat: 31.7050567, lng: -116.5639725 };
var reinoninos_msg=" ";
var reinoninos_info="<div class='centrar'><img src='img/d5.jpg'><p><h3>5. El Reino de los Niños</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.7050567, lng: -116.5639725</td></tr><tr><td><b>Dirección</b></td><td>México 1, El Maneadero, 22790 Maneadero, B. C.</td></tr><tr><td><b>Teléfono</b></td><td>646 154 0555</td></tr><tr><td><b>Donaciones</b></td><td>Cereal, frijoles, arroz, leche en fórmula.</td></tr></table><br/><br/></div>";

var infowindowREINONINOS = new google.maps.InfoWindow({
	content: reinoninos_info
});    
 var markerREINONINOS = new google.maps.Marker({
 	position: reinoninos,
 	title:reinoninos_msg,
 	map: map
});
markerREINONINOS.addListener('click', function(){
infowindowREINONINOS.open(map, markerREINONINOS);
});
var circleREINONINOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: reinoninos,
    	radius: 50
});

//	6_Casa Hogar Pequenos Hermanos   ------------------------
    
var pequenoshnos = { lat: 31.748514, lng: -116.556122 };
var pequenoshnos_msg=" ";
var pequenoshnos_info="<div class='centrar'><img src='img/d6.jpg'><p><h3>6. Casa Hogar Pequeños Hermanos</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.748514, lng: -116.556122</td></tr><tr><td><b>Dirección</b></td><td>Fraccionamiento del Carmen, 22790 Ensenada, Baja California</td></tr><tr><td><b>Teléfono</b></td><td>646 113 2440</td></tr><tr><td><b>Donaciones</b></td><td>Juguetes en buen estado, articulos de limpieza, pasta dental, cobijas.</td></tr></table><br/><br/></div>";

var infowindowPEQUENOSHNOS = new google.maps.InfoWindow({
	content: pequenoshnos_info
});    
 var markerPEQUENOSHNOS = new google.maps.Marker({
 	position: pequenoshnos,
 	title:pequenoshnos_msg,
 	map: map
});
markerPEQUENOSHNOS.addListener('click', function(){
infowindowPEQUENOSHNOS.open(map, markerPEQUENOSHNOS);
});
var circlePEQUENOSHNOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: pequenoshnos,
    	radius: 50
});
}

function asilos() {
	clearMap({ lat: 31.8650787, lng: -116.6049713 }, 14);
//	1_Casa hogar del anciano   -----------------------------
    
var chanciano = { lat: 31.8791643, lng: -116.6239712 };
var chanciano_msg=" ";
var chanciano_info="<div class='centrar'><img src='img/d1.png'><p><h3>1. Casa Hogar del Anciano</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8791643, lng: -116.6239712</td></tr><tr><td><b>Dirección</b></td><td>Calle Quince 131, Centro, Zona Centro, 22800.</td></tr><tr><td><b>Teléfono</b></td><td>646 204 0023</td></tr><tr><td><b>Donaciones</b></td><td>Comida enlatada, pañales para adulto, productos de limpieza.</td></tr></table><br/><br/></div>";
var infowindowCHANCIANO = new google.maps.InfoWindow({
	content: chanciano_info
});    
 var markerCHANCIANO = new google.maps.Marker({
 	position: chanciano,
 	title:chanciano_msg,
 	map: map
 });
markerCHANCIANO.addListener('click', function(){
	infowindowCHANCIANO.open(map, markerCHANCIANO);
});
var circleCHANCIANO = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: chanciano,
    	radius: 50
	});
    
//	2_Casa Phoenix   ------------------------
    
var cfenix = { lat: 31.8598765, lng: -116.6012473 };
var cfenix_msg=" ";
var cfenix_info="<div class='centrar'><img src='img/d2.jpg'><p><h3>2. Casa Phoenix</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8598765, lng: -116.6012473</td></tr><tr><td><b>Dirección</b></td><td>Av Mina 131 Fraccionamiento Bahia, 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 204 0023</td></tr><tr><td><b>Donaciones</b></td><td>Avena, pañales para adulto, sábanas blancas.</td></tr></table><br/><br/></div>";
var infowindowCFENIX = new google.maps.InfoWindow({
	content: cfenix_info
});    
 var markerCFENIX = new google.maps.Marker({
 	position: cfenix,
 	title:cfenix_msg,
 	map: map
});
markerCFENIX.addListener('click', function(){
infowindowCFENIX.open(map, markerCFENIX);
});
var circleCFENIX = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: cfenix,
    	radius: 50
});
    
//	3_Residencia Millan A. C.   ------------------------
    
var rmillan = { lat: 31.85634, lng: -116.59312 };
var rmillan_msg=" ";
var rmillan_info="<div class='centrar'><img src='img/d3.png'><p><h3>3. Residencia Millan A. C.</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.85634, lng: -116.59312</td></tr><tr><td><b>Dirección</b></td><td>18 de Marzo # 98, esquina con Francisco Márquez 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 1077289</td></tr><tr><td><b>Donaciones</b></td><td>Productos de limpieza, pañales para adulto, calcetines para adulto.</td></tr></table><br/><br/></div>";

var infowindowRMILLAN = new google.maps.InfoWindow({
	content: rmillan_info
});    
 var markerRMILLAN = new google.maps.Marker({
 	position: rmillan,
 	title:rmillan_msg,
 	map: map
});
markerRMILLAN.addListener('click', function(){
infowindowRMILLAN.open(map, markerRMILLAN);
});
var circleRMILLAN = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: rmillan,
    	radius: 50
});
}

function reciclaje() {
	clearMap({ lat: 31.8651825, lng: -116.5993755 }, 14);
//	7_Centro de acopio de reciclaje de 4 Patas A. C.   ------------------------
    
var reccuatro = { lat: 31.8799641, lng: -116.6221939 };
var reccuatro_msg=" ";
var reccuatro_info="<div class='centrar'><img src='img/d7.png'><p><h3>7. Centro de acopio de reciclaje de 4 Patas A. C.</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8799641, lng: -116.6221939</td></tr><tr><td><b>Dirección</b></td><td>Calle 16, Zona Centro, 22800 Ensenada, B.C.</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Cartón, papel, vidrio y plástico</td></tr></table><br/><br/></div>";

var infowindowRECCUATRO = new google.maps.InfoWindow({
	content: reccuatro_info
});    
 var markerRECCUATRO = new google.maps.Marker({
 	position: reccuatro,
 	title:reccuatro_msg,
 	map: map
});
markerRECCUATRO.addListener('click', function(){
infowindowRECCUATRO.open(map, markerRECCUATRO);
});
var circleRECCUATRO = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: reccuatro,
    	radius: 50,
    	radius: 50
});

//	8_Ecoterra   ------------------------
    
var rececoterra = { lat: 31.8433557, lng: -116.6029301 };
var rececoterra_msg=" ";
var rececoterra_info="<div class='centrar'><img src='img/d8.png'><p><h3>8. Ecoterra</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8651825, lng: -116.5993755</td></tr><tr><td><b>Dirección</b></td><td>Transpeninsular 181, Valle Dorado, 22890 Ensenada, B.C.</td></tr><tr><td><b>Teléfono</b></td><td>646 120 8143</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Papel, cartón, plástico (seco).</td></tr></table><br/><br/></div>";

var infowindowRECECOTERRA = new google.maps.InfoWindow({
	content: rececoterra_info
});    
 var markerRECECOTERRA = new google.maps.Marker({
 	position: rececoterra,
 	title:rececoterra_msg,
 	map: map
});
markerRECECOTERRA.addListener('click', function(){
infowindowRECECOTERRA.open(map, markerRECECOTERRA);
});
var circleRECECOTERRA = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: rececoterra,
    	radius: 50
});

//	9_CEARTE   ------------------------
    
var reccearte = { lat: 31.8568227, lng: -116.6186729 };
var reccearte_msg=" ";
var reccearte_info="<div class='centrar'><img src='img/d9.jpg'><p><h3>3. CEARTE - Reciclaje</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8568227, lng: -116.6186729</td></tr><tr><td><b>Dirección</b></td><td>Blvd. Lazaro Cardenas 1430, playas de Ensenada, 22880 Ensenada, BC</td></tr><tr><td><b>Teléfono</b></td><td>646 173 4307</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Papel, cartón, vidrio, plástico.</td></tr></table><br/><br/></div>";

var infowindowRECCEARTE = new google.maps.InfoWindow({
	content: reccearte_info
});    
 var markerRECCEARTE = new google.maps.Marker({
 	position: reccearte,
 	title:reccearte_msg,
 	map: map
});
markerRECCEARTE.addListener('click', function(){
infowindowRECCEARTE.open(map, markerRECCEARTE);
});
var circleRECCEARTE = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: reccearte,
    	radius: 50
});
}

function todos() {
	clearMap({ lat: 31.748514, lng: -116.556122 }, 11);

//	1_Casa hogar del anciano   -----------------------------
    
var chanciano = { lat: 31.8791643, lng: -116.6239712 };
var chanciano_msg=" ";
var chanciano_info="<div class='centrar'><img src='img/d1.png'><p><h3>1. Casa Hogar del Anciano</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8791643, lng: -116.6239712</td></tr><tr><td><b>Dirección</b></td><td>Calle Quince 131, Centro, Zona Centro, 22800.</td></tr><tr><td><b>Teléfono</b></td><td>646 204 0023</td></tr><tr><td><b>Donaciones</b></td><td>Comida enlatada, pañales para adulto, productos de limpieza.</td></tr></table><br/><br/></div>";
var infowindowCHANCIANO = new google.maps.InfoWindow({
	content: chanciano_info
});    
 var markerCHANCIANO = new google.maps.Marker({
 	position: chanciano,
 	title:chanciano_msg,
 	map: map
 });
markerCHANCIANO.addListener('click', function(){
	infowindowCHANCIANO.open(map, markerCHANCIANO);
});
var circleCHANCIANO = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: chanciano,
    	radius: 50
	});
    
//	2_Casa Phoenix   ------------------------
    
var cfenix = { lat: 31.8598765, lng: -116.6012473 };
var cfenix_msg=" ";
var cfenix_info="<div class='centrar'><img src='img/d2.jpg'><p><h3>2. Casa Phoenix</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8598765, lng: -116.6012473</td></tr><tr><td><b>Dirección</b></td><td>Av Mina 131 Fraccionamiento Bahia, 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 204 0023</td></tr><tr><td><b>Donaciones</b></td><td>Avena, pañales para adulto, sábanas blancas.</td></tr></table><br/><br/></div>";
var infowindowCFENIX = new google.maps.InfoWindow({
	content: cfenix_info
});    
 var markerCFENIX = new google.maps.Marker({
 	position: cfenix,
 	title:cfenix_msg,
 	map: map
});
markerCFENIX.addListener('click', function(){
infowindowCFENIX.open(map, markerCFENIX);
});
var circleCFENIX = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: cfenix,
    	radius: 50
});
    
//	3_Residencia Millan A. C.   ------------------------
    
var rmillan = { lat: 31.85634, lng: -116.59312 };
var rmillan_msg=" ";
var rmillan_info="<div class='centrar'><img src='img/d3.png'><p><h3>3. Residencia Millan A. C.</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.85634, lng: -116.59312</td></tr><tr><td><b>Dirección</b></td><td>18 de Marzo # 98, esquina con Francisco Márquez 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 1077289</td></tr><tr><td><b>Donaciones</b></td><td>Productos de limpieza, pañales para adulto, calcetines para adulto.</td></tr></table><br/><br/></div>";

var infowindowRMILLAN = new google.maps.InfoWindow({
	content: rmillan_info
});    
 var markerRMILLAN = new google.maps.Marker({
 	position: rmillan,
 	title:rmillan_msg,
 	map: map
});
markerRMILLAN.addListener('click', function(){
infowindowRMILLAN.open(map, markerRMILLAN);
});
var circleRMILLAN = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#1B3C68',
    	fillOpacity: 0.80,
    	map: map,
    	center: rmillan,
    	radius: 50
});

//	4_Casa Albergue Temporal para Ninos   ------------------------
    
var albergueninos = { lat: 31.8585284, lng: -116.6025585 };
var albergueninos_msg=" ";
var albergueninos_info="<div class='centrar'><img src='img/d4.png'><p><h3>4. Casa Albergue Temporal para Niños</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8585284, lng: -116.6025585</td></tr><tr><td><b>Dirección</b></td><td>Av. Matamoros, Bahía, 22880</td></tr><tr><td><b>Teléfono</b></td><td>646 176 1016</td></tr><tr><td><b>Donaciones</b></td><td>Leche en fórmula, pañales talla 2, artículos de limpieza, ropa en buen estado.</td></tr></table><br/><br/></div>";

var infowindowALBERGUENINOS = new google.maps.InfoWindow({
	content: albergueninos_info
});    
 var markerALBERGUENINOS = new google.maps.Marker({
 	position: albergueninos,
 	title:albergueninos_msg,
 	map: map
});
markerALBERGUENINOS.addListener('click', function(){
infowindowALBERGUENINOS.open(map, markerALBERGUENINOS);
});
var circleALBERGUENINOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: albergueninos,
    	radius: 50
});

//	5_El Reino de los Ninos   ------------------------
    
var reinoninos = { lat: 31.7050567, lng: -116.5639725 };
var reinoninos_msg=" ";
var reinoninos_info="<div class='centrar'><img src='img/d5.jpg'><p><h3>5. El Reino de los Niños</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.7050567, lng: -116.5639725</td></tr><tr><td><b>Dirección</b></td><td>México 1, El Maneadero, 22790 Maneadero, B. C.</td></tr><tr><td><b>Teléfono</b></td><td>646 154 0555</td></tr><tr><td><b>Donaciones</b></td><td>Cereal, frijoles, arroz, leche en fórmula.</td></tr></table><br/><br/></div>";

var infowindowREINONINOS = new google.maps.InfoWindow({
	content: reinoninos_info
});    
 var markerREINONINOS = new google.maps.Marker({
 	position: reinoninos,
 	title:reinoninos_msg,
 	map: map
});
markerREINONINOS.addListener('click', function(){
infowindowREINONINOS.open(map, markerREINONINOS);
});
var circleREINONINOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: reinoninos,
    	radius: 50
});

//	6_Casa Hogar Pequenos Hermanos   ------------------------
    
var pequenoshnos = { lat: 31.748514, lng: -116.556122 };
var pequenoshnos_msg=" ";
var pequenoshnos_info="<div class='centrar'><img src='img/d6.jpg'><p><h3>6. Casa Hogar Pequeños Hermanos</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.748514, lng: -116.556122</td></tr><tr><td><b>Dirección</b></td><td>Fraccionamiento del Carmen, 22790 Ensenada, Baja California</td></tr><tr><td><b>Teléfono</b></td><td>646 113 2440</td></tr><tr><td><b>Donaciones</b></td><td>Juguetes en buen estado, artículos de limpieza, pasta dental, cobijas.</td></tr></table><br/><br/></div>";

var infowindowPEQUENOSHNOS = new google.maps.InfoWindow({
	content: pequenoshnos_info
});    
 var markerPEQUENOSHNOS = new google.maps.Marker({
 	position: pequenoshnos,
 	title:pequenoshnos_msg,
 	map: map
});
markerPEQUENOSHNOS.addListener('click', function(){
infowindowPEQUENOSHNOS.open(map, markerPEQUENOSHNOS);
});
var circlePEQUENOSHNOS = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#A1EAFB',
    	fillOpacity: 0.80,
    	map: map,
    	center: pequenoshnos,
    	radius: 50
});

//	7_Centro de acopio de reciclaje de 4 Patas A. C.   ------------------------
    
var reccuatro = { lat: 31.8799641, lng: -116.6221939 };
var reccuatro_msg=" ";
var reccuatro_info="<div class='centrar'><img src='img/d7.png'><p><h3>7. Centro de acopio de reciclaje de 4 Patas A. C.</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8799641, lng: -116.6221939</td></tr><tr><td><b>Dirección</b></td><td>Calle 16, Zona Centro, 22800 Ensenada, B.C.</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Cartón, papel, vidrio y plástico</td></tr></table><br/><br/></div>";

var infowindowRECCUATRO = new google.maps.InfoWindow({
	content: reccuatro_info
});    
 var markerRECCUATRO = new google.maps.Marker({
 	position: reccuatro,
 	title:reccuatro_msg,
 	map: map
});
markerRECCUATRO.addListener('click', function(){
infowindowRECCUATRO.open(map, markerRECCUATRO);
});
var circleRECCUATRO = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: reccuatro,
    	radius: 50,
    	radius: 50
});

//	8_Ecoterra   ------------------------
    
var rececoterra = { lat: 31.8433557, lng: -116.6029301 };
var rececoterra_msg=" ";
var rececoterra_info="<div class='centrar'><img src='img/d8.png'><p><h3>8. Ecoterra</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8651825, lng: -116.5993755</td></tr><tr><td><b>Dirección</b></td><td>Transpeninsular 181, Valle Dorado, 22890 Ensenada, B.C.</td></tr><tr><td><b>Teléfono</b></td><td>646 120 8143</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Papel, cartón, plástico (seco).</td></tr></table><br/><br/></div>";

var infowindowRECECOTERRA = new google.maps.InfoWindow({
	content: rececoterra_info
});    
 var markerRECECOTERRA = new google.maps.Marker({
 	position: rececoterra,
 	title:rececoterra_msg,
 	map: map
});
markerRECECOTERRA.addListener('click', function(){
infowindowRECECOTERRA.open(map, markerRECECOTERRA);
});
var circleRECECOTERRA = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: rececoterra,
    	radius: 50
});

//	9_CEARTE   ------------------------
    
var reccearte = { lat: 31.8568227, lng: -116.6186729 };
var reccearte_msg=" ";
var reccearte_info="<div class='centrar'><img src='img/d9.jpg'><p><h3>3. CEARTE - Reciclaje</h3></p><table><tr><th></th><th></th></tr><tr><td><b>Coordenadas</b></td><td>lat: 31.8568227, lng: -116.6186729</td></tr><tr><td><b>Dirección</b></td><td>Blvd. Lazaro Cardenas 1430, playas de Ensenada, 22880 Ensenada, BC</td></tr><tr><td><b>Teléfono</b></td><td>646 173 4307</td></tr><tr><td><b>Tipo de reciclaje</b></td><td>Papel, cartón, vidrio, plástico.</td></tr></table><br/><br/></div>";

var infowindowRECCEARTE = new google.maps.InfoWindow({
	content: reccearte_info
});    
 var markerRECCEARTE = new google.maps.Marker({
 	position: reccearte,
 	title:reccearte_msg,
 	map: map
});
markerRECCEARTE.addListener('click', function(){
infowindowRECCEARTE.open(map, markerRECCEARTE);
});
var circleRECCEARTE = new google.maps.Circle({
    	strokeOpacity: 0.8,
    	strokeWeight: 0,
    	fillColor: '#81AE64',
    	fillOpacity: 0.80,
    	map: map,
    	center: reccearte,
    	radius: 50
});
}
