/*Viene fornito l’HTML e il CSS, che dovrete leggere e comprendere e starà a voi
scrivere il JS utilizzando jQuery, al fine di avere un hamburger menu simile a
quello che trovate sul sito di Boolean.
Appare il simbolo delle 3 linee solo quando lo schermo è < 1000px,
al click del simbolo appare un div che copre l’intero schermo con i link alle sezioni del sito.
Un click sul simbolo X, fa scomparire il div.*/

/*Creo una variabile per l' hamburger menu da modificare*/
var newHamburger = $(".hamburger-menu");

/*Quando clicco sul simbolo in alto a destra, compare il div menù*/
$(".header-right > a").click(function(){ /*per cliccarci sopra*/
  $(newHamburger).show(); /*per mostrarlo*/
});

/*Quando clicco sul simbolo X, scompare il div menù*/
$(".close").click(function(){ /*per cliccarci sopra*/
  $(newHamburger).hide(); /*per toglierlo*/
});
