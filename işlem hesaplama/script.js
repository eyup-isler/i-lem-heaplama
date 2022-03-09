 
  function Toplama(){

    let s1=Number(document.getElementById("sayi1").value);
    let s2=Number(document.getElementById("sayi2").value);
    let sonuc=s1+s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Cikarma(){
    var s1=Number(document.getElementById("sayi1").value);
    var s2=Number(document.getElementById("sayi2").value);
    var sonuc=s1-s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Carpma(){
    var s1=Number(document.getElementById("sayi1").value);
    var s2=Number(document.getElementById("sayi2").value);
    var sonuc=s1*s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Bolme(){
    var s1=Number(document.getElementById("sayi1").value);
    var s2=Number(document.getElementById("sayi2").value);
    var sonuc=s1/s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}
