{
    "moduleId" : "maps4all/sytadin",
    "title" : "Sytadin",
    "subtitle" : "www.sytadin.fr",
    
    "backButton" : true,
    "enableGPS" : true,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://m.sytadin.fr",
    "shouldOverrideUrlLoading2" : "https://m.sytadin.fr",

    "loadUrl" : "http://m.sytadin.fr",
    			
    "browserLaunchLink" : "http://m.sytadin.fr",
    
    "onPageFinishedLoadUrl" : "javascript: $('#splashScreen').hide(); var newLonLat = new OpenLayers.LonLat(#lng#, #lat#).transform( new OpenLayers.Projection('EPSG:4326'), map.getProjectionObject() );map.setCenter(new OpenLayers.LonLat( newLonLat.lon, newLonLat.lat ), #zoom# - 10, false, true);"

}
