// Dictionary of applicant names and their statuses
var applicantStatus = {
    "ALBISO, LIECIL AMOR":"Backout",
    "LAJERA, MANILYN":"Backout",
    "PATALINGHUG, MHARRY GRACE":"Backout",
    "PATINDOL, CHRISTIAN JAY":"Backout",
    "SALERA, ANNA LEAH":"Backout",
    "TORREJANO, MIRASOL":"Backout",
    "YBAÑEZ, KIERSTEIN":"Backout",
    "ABJELINA, VJ":"Confirm",
    "ABOLOC, CHAD AARON":"Confirm",
    "AÑASCO, CHRISCEL ANN":"Confirm",
    "ARCAYOS, JILLIAN MAE":"Confirm",
    "ARNAIZ, ERICA JANE":"Confirm",
    "ASIS, JAMES DAN REV":"Confirm",
    "AUGUIS, GLADYS MAE":"Confirm",
    "AYCO, ROZEN ANNE":"Confirm",
    "BADILLA, JUSTINE IAN":"Confirm",
    "BASIO, KRISHA MAE":"Confirm",
    "BAUTISTA, JABEZ":"Confirm",
    "BELECINA, JANNA REY":"Confirm",
    "BESINA, CHRISTINE":"Confirm",
    "BETINOL, ANGELA":"Confirm",
    "BOLASTIG, JOSHUA":"Confirm",
    "BUSALANAN, MARY TIFFANY":"Confirm",
    "CABASE, MARK KENNETH":"Confirm",
    "CABIARA, JEIMARLYN":"Confirm",
    "CABRILLOS, JASPHER":"Confirm",
    "CAÑASTRA, JOHN LORD":"Confirm",
    "CAÑASTRA, JUN MARK":"Confirm",
    "CAÑETE, MARY JEROSE":"Confirm",
    "CAÑO, JOVELL GRACE":"Confirm",
    "CARCALLAS, CHARLES":"Confirm",
    "CIMAGALA, JOXARA FAITH":"Confirm",
    "DEGAMO, JAMES KYLE":"Confirm",
    "DELATORRE, LLOYD IAN":"Confirm",
    "DELOY, JAMES LORENCE":"Confirm",
    "DIAGBIL, MICHAEL RYAN":"Confirm",
    "DOYDOY, APRIL MAE":"Confirm",
    "ENAD, HILARY JOYCE":"Confirm",
    "ESTOSE, JOSEPH":"Confirm",
    "ESTOSE, RHEA JADE":"Confirm",
    "GERONA, MARINEL":"Confirm",
    "GULA, EMILY":"Confirm",
    "HUIT, RON WINSTON":"Confirm",
    "JAGANAS, HERO":"Confirm",
    "JUMAMOY, ROY":"Confirm",
    "LACBAYO, LOUIE JAY / ALMA":"Confirm",
    "LAMOSTE, HANNAH":"Confirm",
    "LAPIZ, ANGELA MAE":"Confirm",
    "LAPIZ, APPLE MAE":"Confirm",
    "LOMOYA, JOHNREAL":"Confirm",
    "MABILOG, RAZIEL ELEIZAR":"Confirm",
    "MANAGAYTAY, MARYJOY":"Confirm",
    "MEJIAS, CRISDAN":"Confirm",
    "MELAR, ANGELA":"Confirm",
    "MELENCION, ANNA JAE":"Confirm",
    "MIANO, KEVIN MACLHEIN":"Confirm",
    "MIGUE, KYVER":"Confirm",
    "MINDORO, KARYLLE":"Confirm",
    "MORALES, SYNGEL":"Confirm",
    "MULOS, GHERSAM":"Confirm",
    "NAYVE, MAEVEL":"Confirm",
    "OÑES, CIARA YTTEL LOURAH":"Confirm",
    "OPELINIA, FLYNNE EJ":"Confirm",
    "ORAPA, AIRAH":"Confirm",
    "ORAPA, DONALYN":"Confirm",
    "OSIO, MARK DANIEL":"Confirm",
    "PAMULAGAN, CLOUIE":"Confirm",
    "PARDILLO, IRICH":"Confirm",
    "PASCO, JOSHUA KIRBY":"Confirm",
    "PATAYAN, KRITCHEL ANN":"Confirm",
    "POJAS, FRANCIS JOHN":"Confirm",
    "RABOR, JUNT MATTEO":"Confirm",
    "REYES, AUXYNE RYO":"Confirm",
    "RULIDA, JOSEPHINE":"Confirm",
    "SALERA, TIA JANE":"Confirm",
    "SAPUNGAY, JOEVER":"Confirm",
    "SIOCO, SHAIRYLLE":"Confirm",
    "SORISO, ARNEL JOHN":"Confirm",
    "TALAUGON, MARY JEAN":"Confirm",
    "TAPIC, JADE MARION":"Confirm",
    "TEMBLOR, HANNAH LIZA":"Confirm",
    "TEMBLOR, HANNAH LEA":"Confirm",
    "TORREJOS, JOSEPH KEVIN":"Confirm",
    "TORREON, NORMALITA":"Confirm",
    "TORREON, JESSA MAE":"Confirm",
    "TUNGA, JAMELLA TRISHIA":"Confirm",
    "TURAYA, JUNESSA":"Confirm",
    "VILLARIN, ABEGAIL":"Confirm",
    "VILLAVER, ANAVILLA":"Confirm",
    "VISTAL, JOBERT":"Confirm",
    "VITOR, JERUZ":"Confirm",
    "LOFRANCO, MARVEN":"None",
    "NABAJA, ANGELECA":"None",
    "NOMIO, JOHN WILMER":"None",
    "OSIO, ALBERT":"None",
    "SANIEL, RUSSELL":"None",
    "SAUSA, RAMIEL":"None",
    "TAMPON, JUNLEONARD":"None",
    "TANGARO, LOVELY BLESS":"None",
    "TECSON, MARC JHAY":"None"

};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("searchStatusBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal if the applicant is found
btn.onclick = function() {
    var lname = document.getElementById("lastname").value.trim().toUpperCase();
    var fname = document.getElementById("firstname").value.trim().toUpperCase();
    if (lname == null || lname == undefined || lname.trim() == "") return;
    if (fname == null || fname == undefined || fname.trim() == "") return;
    
    var fullname = lname +", "+fname
    if (applicantStatus.hasOwnProperty(fullname)) {
        if(applicantStatus[fullname] == "Confirm"){
            modal.style.display = "block";
            document.getElementById("greeting").innerText = "Congratulation \n" + fullname;
            document.getElementById("status").innerText = "Your application has been confirmed. You are now a step closer to becoming a BISUan.";
            document.getElementById("imageStatus").src = "https://media0.giphy.com/media/dpiPxGtyjRSuNY1zwU/giphy.gif?cid=6c09b9527p7gcfjuw5cbaptlb7pe3zglof409ok0qlp8ehuc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
        }else if(applicantStatus[fullname] == "Backout"){
            modal.style.display = "block";
            document.getElementById("greeting").innerText = "Whhhyyyy!!! \n" + fullname.toUpperCase();
            document.getElementById("status").innerText = "It seems that you withdrew your application at the preliminary stage.";
            document.getElementById("imageStatus").src = "https://media2.giphy.com/media/TpsuCxwsNH8gatbpR5/200w.gif?cid=6c09b952hv5qu4b2giwsyu9mw5w5uhoeouu1hd3ej4oqawf0&ep=v1_gifs_search&rid=200w.gif&ct=g";
        }else if(applicantStatus[fullname] == "None"){
            modal.style.display = "block";
            document.getElementById("greeting").innerText = "Sorry \n" + fullname.toUpperCase();
            document.getElementById("status").innerText = "We haven't received your response regarding your confirmation or withdrawal.";
            document.getElementById("imageStatus").src = "https://i.pinimg.com/originals/57/04/68/570468282d5ce15d740106535b61f533.gif";
        }
        
    } else {
        modal.style.display = "block";
        document.getElementById("greeting").innerText = "Sorry! \n" + fullname.toUpperCase();
        document.getElementById("status").innerText = "It seems that you are not an applicant in our department.";
        document.getElementById("imageStatus").src = "https://media3.giphy.com/media/4zgnPjvlO7gfE3VI4y/giphy.gif";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}