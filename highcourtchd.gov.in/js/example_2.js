$(document).ready(function(){

    // Set up our options for the slideshow...
    var myOptions = {
        noImages: 6,
        path: "slider_images/",  // Relative path with trailing slash.< slash at back >
        captions: {                 
            1:'<b>Azadi ka Amrit Mahotsav</b> <div style="font-size:14px;margin-top:5px;"></div> ',
            2:'<b>Punjab & Haryana High Court</b> <div style="font-size:14px;margin-top:5px;"></div>',
			3:'<b>Punjab & Haryana High Court</b> <div style="font-size:14px;margin-top:5px;"></div>',
			4:'<b></b> <div style="font-size:14px;margin-top:5px;"></div> ',
            5:'<b>Open Hand Monument</b> <div style="font-size:14px;margin-top:5px;">Open to Give, Open to Take</div>',			
            6:'<b>National Flag</b> <div style="font-size:14px;margin-top:5px;"></div>',
			7:'<b>National Emblem</b> <div style="font-size:14px;margin-top:5px;"></div>',
			8:'<b>Tapestry</b> <div style="font-size:14px;margin-top:5px;"></div>',
			
           
        },
        links: { // Each image number must be listed here, unless no links are required at all, then links option can be ommitted.
            1:"#",
            2:"#",
            3:"#",
            4:"#",
            5:"#",
            6:"#",
			7:"#",
			8:"#",
			
			
        },
        linksOpen:'newWindow',
        timerInterval: 6500, // 6500 = 6.5 seconds
	randomise: false // Start with random image?
    };

    // Woo! We have a jquery slideshow plugin!
    $('#example_1_container').easySlides(myOptions);

})