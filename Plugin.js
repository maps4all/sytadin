{
    "moduleId" : "maps4all/parkopedia",
    "title" : "Parkopedia",
    "subtitle" : "www.parkopedia.com",
    
    "backButton" : true,
    "enableGPS" : false,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://www.parkopedia.mobi",
    "shouldOverrideUrlLoading2" : "https://www.parkopedia.mobi",

    "loadUrl" : "http://www.parkopedia.mobi/#/map/#lat#,#lng#",   				
    			
    "browserLaunchLink" : "http://www.parkopedia.mobi/#/map/#lat#,#lng#",
    
    "onPageFinishedLoadUrl" : "javascript:
$.getScript('http://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js', function(){
    
var str = $.cookie('EXCLUDE_FROM_EXPERIMENT');
    strOut = '1';        
    $.cookie('EXCLUDE_FROM_EXPERIMENT', strOut);
    var d = new Date();      
    $('#fullscreen-overlay').hide();    
    m = app.map.getMap();     
    waitAndRetry(0, 4);     
});
function waitAndRetry(count, max) { 
     
    var millisecondsToWait = 250;
    if (count >= max) return;
    m = app.map.getMap();
    if (m) {    
        m.setZoom(#zoom#);      
    } else {       
        setTimeout(function() {
            waitAndRetry(count++, max);
        }, millisecondsToWait);
    }    
}"
}
