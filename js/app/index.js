/* 动态换算rem和px值  */
var rem =20;
function changeW() {
    rem = 20 / 375 * document.documentElement.clientWidth;
    document.documentElement.style.fontSize = rem + "px";
}
changeW();
window.addEventListener("resize", changeW, false);

$(function(){
	$(document).on("touchstart",".fir",function(){
		window.location.href = "money.html"
	})
	$(document).on("touchstart",".sed",function(){
		window.location.href = "rongzi.html"
	})
})
