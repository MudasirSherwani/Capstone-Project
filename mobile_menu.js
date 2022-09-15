const OverlayMenu = document.querySelector('.overlay-menu');
//Define function for humbarge menu On
function hamburgeOn() {
if (OverlayMenu.style.display === 'none') {
OverlayMenu.style.display = 'block';
}
}
//Define function for humbarge menu Off
function hamburgeOff() {
OverlayMenu.style.display = 'none';
}
//Call function for humbarge menu On
hamburgeOn();
//Call function for humbarge menu Off
hamburgeOff();