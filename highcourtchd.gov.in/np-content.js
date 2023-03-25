// JavaScript Document



function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function addBookmark(url,title) {
if (window.sidebar) {
window.sidebar.addPanel(title, url,"");
} else if( document.all ) {
window.external.AddFavorite( url, title);
} else if( window.opera && window.print ) {
return true;
} else if( document.layers ) {
window.alert( 'Please click OK and then press Ctrl+D to create a bookmark or \n click Bookmarks | Add Bookmark' );
} else {
window.alert( 'Please use your browser\'s bookmarking facility to create a bookmark' );
}
}
function makeItMove(containerId,userActionId,textItemId,i)
{
// Values used by the script.
// BEWARE : YOU WILL HAVE TO MODIFIE THESE VALUES IN THE HTML CODE AS WELL, SETTING THEM TO THEIR NUMERIC VALUES!
var startValue=50;// The value the movement will start. Must be big enough to let some white space.
var endValue=300; // the value the movement will end. Must be big enough to let the whoile text disappear
var stopValue=320; // Must be greater than endValue;
//
var containerPositionFromTop=201;
var containerPositionFromLeft=35;
var containerWidth=190;
var containerHeight=300;
//
if (document.getElementById)
    {
    if(!document.getElementById('userAction'))
        {
        //alert("No action");
        }
    else
        {
        document.getElementById(userActionId).style.visibility="visible";
        document.getElementById(userActionId).style.display="block";
        document.getElementById(userActionId).style.zIndex="15";
        document.getElementById(userActionId).style.position="relative";
        document.getElementById(userActionId).style.top="-3px";
        document.getElementById(userActionId).style.left="0px";
        document.getElementById(userActionId).style.width="auto";
        document.getElementById(userActionId).style.height="auto";
        }
			
    document.getElementById(containerId).style.zIndex="11";
    document.getElementById(containerId).style.position="relative";
    document.getElementById(containerId).style.height=containerHeight+"px";
    document.getElementById(containerId).style.overflow="hidden";
    document.getElementById(textItemId).style.zIndex="11";
    document.getElementById(textItemId).style.position="relative";
    document.getElementById(textItemId).style.top=-i+"px";
    }
if(i<endValue)
    {
    i++;
    timer=setTimeout("makeItMove('"+containerId+"','"+userActionId+"','"+textItemId+"',"+i+")",50);
    }
else
    if(i==endValue)
        {
        i=startValue;
        timer=setTimeout("makeItMove('"+containerId+"','"+userActionId+"','"+textItemId+"',"+i+")",100);
        }
     else
        {
        clearTimeout(timer);
        document.getElementById(textItemId).style.zIndex="11";
        document.getElementById(textItemId).style.position="relative";
        document.getElementById(textItemId).style.top=10+"px";
        document.getElementById(textItemId).style.left=0+"px";
        document.getElementById(containerId).style.overflow="scroll";
        }
}
var lcl = new Date();
	function synctime(x)
	{
		lcl = new Date(x);
		
	}
	function shdate()
	{
		if (!document.layers && !document.all && !document.getElementById)
			return;
		mnth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		var dd=lcl.getDate();
		var mm=lcl.getMonth();
		var yy=lcl.getFullYear();
		dtdp = dd+" "+mnth[mm]+" "+yy+", ";
		if (document.layers)
		{
			document.layers.live_date.document.write(dtdp);
			document.layers.live_date.document.close();
		}
		else if (document.all)
		{
			live_date.innerHTML=dtdp;
		}
		else if (document.getElementById)
		{
			document.getElementById("live_date").innerHTML=dtdp;
		}
	}
	function show5()
	{
		if (!document.layers && !document.all && !document.getElementById)
			return;
		lcl.setSeconds(lcl.getSeconds()+1);
	 	var hours=lcl.getHours();
	 	var minutes=lcl.getMinutes();
	 	var seconds=lcl.getSeconds();
		var dn="PM";
		if (minutes<=9)
	 		minutes="0"+minutes;
	 	if (seconds<=9)
	 		seconds="0"+seconds;
	 	myclock=hours+":"+minutes+":"+seconds+" IST ";
		if (document.layers)
		{
			document.layers.live_clock.document.write(myclock);
			document.layers.live_clock.document.close();
		}
		else if (document.all)
		{
			live_clock.innerHTML=myclock;
		}
		else if (document.getElementById)
		{
			document.getElementById("live_clock").innerHTML=myclock;
		}
		setTimeout("show5()", 1000);
	}
	var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28477568-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

