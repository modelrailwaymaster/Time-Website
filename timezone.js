document.addEventListener("DOMContentLoaded", function() {

    var bodyStyles = window.getComputedStyle(document.body);
    var hexsize = parseInt(bodyStyles.getPropertyValue('--hex-size'));
    var w = window.innerWidth;
    var h = window.innerHeight;

    var number = 0
    number = parseInt((w/hexsize)+1)*((h/hexsize)+1)

    hexagoncreator(number)
})

window.addEventListener("resize", function() {

    var bodyStyles = window.getComputedStyle(document.body);
    var hexsize = parseInt(bodyStyles.getPropertyValue('--hex-size'));
    var w = window.innerWidth;
    var h = window.innerHeight;

    var number = 0
    number = parseInt((w/hexsize)+1)*((h/hexsize)+1)

    hexagoncreator(number)
})

function hexagoncreator(number){
    var background = document.getElementById("hex-container")

    if (hexexist < number){
        for (let hexloop=0; hexloop<(number-hexexist); hexloop++){
            const hex = document.createElement("div")
            hex.classList.add("hexagon")
            background.appendChild(hex)
        }
        hexexist = number
    }
}

var hexexist = 0

document.getElementById("add-timezone").addEventListener("click", function(){

    document.getElementById("time-zone-select").style.display = "block"

})

document.getElementById("time-zone-select").addEventListener( "mouseleave", function(){
    setTimeout(function(){
        document.getElementById("time-zone-select").style.display = "none"
    }, 500)

    if (document.getElementById("timezone-offset-main").value != ""){
        var exists = false
        for (child in document.getElementById("time-zones").childNodes) {
            if ($('#timezone-offset-main').find(":selected").val() == document.getElementById("time-zones").childNodes[child].id) {exists = true}
        }        
        if ( !exists) {
            const timezone = document.createElement("div")
            timezone.innerHTML = TimeZoneDict[$('#timezone-offset-main').find(":selected").val()]
            timezone.setAttribute("id", $('#timezone-offset-main').find(":selected").val())
            timezone.classList.add("timezone-container")
            document.getElementById("time-zones").append(timezone)
        }
    }

})

TimeZoneDict = {
    /* time : display */
    "-12"  : "GMT-12 Eniwetok",
    "-11"  : "GMT-11 Samoa",
    "-10"  : "GMT-10 Hawaii",
    "-9.5" : "GMT-9.5 Taiohae",
    "-9"   : "GMT-9 Alaska",
    "-8"   : "GMT-8 Pacific Time",
    "-7"   : "GMT-7 Mountain Time",
    "-6"   : "GMT-6 Central Time",
    "-5"   : "GMT-5 Eastern Time",
    "-4.5" : "GMT-4.5 Caracas",
    "-4"   : "GMT-4 Atlantic Time",
    "-3.5" : "GMT-3.5 Newfoundland",
    "-3"   : "GMT-3 Brazil",
    "-2"   : "GMT-2 Mid-Atlantic",
    "-1"   : "GMT-1 Azores",
    "0"    : "GMT London",
    "1"    : "GMT+1 Brussels",
    "2"    : "GMT+2 South Africa",
    "3"    : "GMT+3 Moscow",
    "3.5"  : "GMT+3.5 Tehran",
    "4"    : "GMT+4 Abu Dhabi",
    "4.5"  : "GMT+4.5 Kabul",
    "5"    : "GMT+5 Pakistan",
    "5.5"  : "GMT+5.5 Bombay",
    "5.75" : "GMT+5.75 Kathmandu",
    "6"    : "GMT+6 Dhaka",
    "6.5"  : "GMT+6.5 Yangon",
    "7"    : "GMT+7 Bangkok",
    "8"    : "GMT+8 Beijing",
    "8.75" : "GMT+8.75 Eucla",
    "9"    : "GMT+9 Tokyo",
    "9.5"  : "GMT+9.5 Adelaide",
    "10"   : "GMT+10 East AUS",
    "10.5" : "GMT+10.5 Lord Howe Isl",
    "11"   : "GMT+11 Magadan",
    "11.5" : "GMT+11.5 Norfolk Isl",
    "12"   : "GMT+12 Auckland",
    "12.75": "GMT+12.75 Chatham Isl",
    "13"   : "GMT+13 Apia",
    "14"   : "GMT+14 Line Isl",
}