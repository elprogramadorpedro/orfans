//create map 

const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)  //latitude longitude y zoom

//create and titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


//create icon
L.marker([-27.222633, -49.6455874])
    .addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();




const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})


// create popup overlay
const poput = L.poput({
    closeButton:false,
    className:'map-popup',
    minWidth:240,
    minHeight:240

}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>')





//2.30