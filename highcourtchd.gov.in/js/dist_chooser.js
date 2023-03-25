

var regiondb = new Object()
regiondb["chandigarh"] = [{value:"chd", text:"Chandigarh"}
                     ];
					 
regiondb["punjab"] = [{value:"asr", text:"Amritsar"},
					{value:"brn", text:"Barnala"},
                    {value:"bath", text:"Bathinda"},
                    {value:"far", text:"Faridkot"},
					{value:"fer", text:"Ferozepur"},
					{value:"fat", text:"Fatehgarh Sahib"},
					{value:"gur", text:"Gurdaspur"},
                    {value:"hos", text:"Hoshiarpur"},
                    {value:"jal", text:"Jalandhar"},
					{value:"kap", text:"Kapurthala"},
					{value:"lud", text:"Ludhiana"},
					{value:"man", text:"Mansa"},
					{value:"mog", text:"Moga"},
					{value:"mukat", text:"Shri Mukatsar Sahib"},
					{value:"sas", text:"SAS Nagar"},
					{value:"sbs", text:"S.B.S. Nagar"},
					{value:"path", text:"Pathankot"},
					{value:"pat", text:"Patiala"},
					{value:"rop", text:"Rupnagar"},
					{value:"san", text:"Sangrur"},
                    {value:"tat", text:"Tarn Taran"}];

regiondb["haryana"] = [ {value:"amb", text:"Ambala"},
                        {value:"bhw", text:"Bhiwani"},
					    {value:"fdb", text:"Faridabad"},
						{value:"ftb", text:"Fatehabad"},
						{value:"grg", text:"Gurgaon"},
						{value:"hsr", text:"Hisar"},
						{value:"jnd", text:"Jind"},
						{value:"jhj", text:"Jhajjar"},
						{value:"kth", text:"Kaithal"},
						{value:"kar", text:"Karnal"},
						{value:"krk", text:"Kurukshetra"},
						{value:"nrn", text:"Narnaul"},
						{value:"nuh", text:"Nuh"},
						{value:"pwl", text:"Palwal"},
						{value:"pnk", text:"Panchkula"},
						{value:"pnp", text:"Panipat"},
						{value:"rwr", text:"Rewari"},
						{value:"rht", text:"Rohtak"},
					    {value:"snp", text:"Sonipat"},
					    {value:"srs", text:"Sirsa"},
						{value:"ymn", text:"Yamunanagar"}
					   ];


function setCities(chooser) {
    var newElem;
    var where = (navigator.appName == "Microsoft Internet Explorer") ? -1 : null;
    var cityChooser = chooser.form.elements["city"];
    while (cityChooser.options.length) {
        cityChooser.remove(0);
    }
    var choice = chooser.options[chooser.selectedIndex].value;
	
    var db = regiondb[choice];
    newElem = document.createElement("option");
    newElem.text = "Choose a District:";
    newElem.value = "";
    cityChooser.add(newElem, where);
    if (choice != "") {
	
        for (var i = 0; i < db.length; i++) {
            newElem = document.createElement("option");
            newElem.text = db[i].text;
            newElem.value = db[i].value;
		
            cityChooser.add(newElem, where);
        }
    }
}

function red()
{
	

<!--CHANDIGARH STARTS HERE-->

if(document.state.city.value=="chd")
window.open("http://ecourts.gov.in/chandigarh");





<!--PUNJAB STARTS HERE-->

else if(document.state.city.value=="asr")
window.open("http://ecourts.gov.in/amritsar/history");

else if(document.state.city.value=="brn")
window.open("http://ecourts.gov.in/barnala/history");

else if(document.state.city.value=="bath")
window.open("http://ecourts.gov.in/bathinda/history");

else if(document.state.city.value=="far")
window.open("http://ecourts.gov.in/faridkot/history");

else if(document.state.city.value=="fer")
window.open("http://ecourts.gov.in/ferozepur/history");


else if(document.state.city.value=="fat")
window.open("http://ecourts.gov.in/fatehgarh-sahib/history ");

else if(document.state.city.value=="gur")
window.open("http://ecourts.gov.in/gurdaspur/history");

else if(document.state.city.value=="hos")
window.open("http://ecourts.gov.in/hoshiarpur/history");


else if(document.state.city.value=="jal")
window.open("http://ecourts.gov.in/jalandhar/history");

else if(document.state.city.value=="kap")
window.open("http://ecourts.gov.in/jalandhar/history");

else if(document.state.city.value=="lud")
window.open("http://ecourts.gov.in/ludhiana/");

else if(document.state.city.value=="man")
window.open("http://ecourts.gov.in/mansa/history");

else if(document.state.city.value=="mog")
window.open("http://ecourts.gov.in/moga/history");

else if(document.state.city.value=="mukat")
window.open("http://ecourts.gov.in/muktsar/history");

else if(document.state.city.value=="sas")
window.open("http://ecourts.gov.in/sas-nagar/history");


else if(document.state.city.value=="sbs")
window.open("http://ecourts.gov.in/nawanshahr/history");

else if(document.state.city.value=="path")
window.open("http://ecourts.gov.in/pathankot/history");

else if(document.state.city.value=="pat")
window.open("http://ecourts.gov.in/patiala/history");

else if(document.state.city.value=="rop")
window.open("http://ecourts.gov.in/rupnagar/history");

else if(document.state.city.value=="san")
window.open("http://ecourts.gov.in/sangrur/history");

else if(document.state.city.value=="tat")
window.open("http://ecourts.gov.in/tarn-taran/history");

<!--PUNJAB ENDS HERE-->


<!--HARYANA STARTS HERE-->
	
if(document.state.city.value=="amb")
window.open("http://ecourts.gov.in/ambala/history");


else if(document.state.city.value=="bhw")
window.open("http://ecourts.gov.in/bhiwani/history");

else if(document.state.city.value=="fdb")
window.open("http://ecourts.gov.in/faridabad//history");

else if(document.state.city.value=="ftb")
window.open("http://ecourts.gov.in/fatehabad/history");

else if(document.state.city.value=="grg")
window.open("http://ecourts.gov.in/gurgaon/history");

else if(document.state.city.value=="hsr")
window.open("http://ecourts.gov.in/hisar/history");

else if(document.state.city.value=="jnd")
window.open("http://ecourts.gov.in/jind/history");


else if(document.state.city.value=="jhj")
window.open("http://ecourts.gov.in/jhajjar/history");

else if(document.state.city.value=="kth")
window.open("http://ecourts.gov.in/kaithal/history");

else if(document.state.city.value=="kar")
window.open("http://ecourts.gov.in/karnal/history");

else if(document.state.city.value=="krk")
window.open("http://ecourts.gov.in/kurukshetra/history");

else if(document.state.city.value=="nrn")
window.open("http://ecourts.gov.in/mahendragarh/history");

else if(document.state.city.value=="nuh")
window.open("http://ecourts.gov.in/mewat/history");

else if(document.state.city.value=="pwl")
window.open("http://ecourts.gov.in/palwal/history");

else if(document.state.city.value=="pnk")
window.open("http://ecourts.gov.in/panchkula/history");

else if(document.state.city.value=="pnp")
window.open("http://ecourts.gov.in/panipat/history");

else if(document.state.city.value=="rwr")
window.open("http://ecourts.gov.in/rewari/history");

else if(document.state.city.value=="rht")
window.open("http://ecourts.gov.in/rohtak/history");

else if(document.state.city.value=="snp")
window.open("http://ecourts.gov.in/sonipat/history");

else if(document.state.city.value=="srs")
window.open("http://ecourts.gov.in/sirsa/history");

else if(document.state.city.value=="ymn")
window.open("http://ecourts.gov.in/yamunanagar/history");

<!--HARYANA ENDS HERE-->


<!--alert("");-->
}
//-->}
   

