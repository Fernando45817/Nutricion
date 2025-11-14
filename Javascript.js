function Calculate2(){

    var total = 0

    var Consulta = parseFloat(document.querySelector("input[name='consulta']:checked").value);

    var OtrosServ = parseFloat(document.getElementById("OtherServ").value);

    var prep1 = 0;

    if (document.getElementById("prep1").checked){
        prep1 = 1000;
    }

    var prep2 = 0;

    if (document.getElementById("prep2").checked){
        prep2 = 1000;
    }

    var prep3 = 0;

    if (document.getElementById("prep3").checked){
        prep3 = 150;
    }



    var pago = parseFloat(document.getElementById("pago").value);



    total = (Consulta + OtrosServ + prep1 + prep2 + prep3) * pago;

    document.getElementById("Calculate").value = total;

    alert("Gracias por tu inter[es")
}