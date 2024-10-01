var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PUNTOSOBRAS2024_1 = new ol.format.GeoJSON();
var features_PUNTOSOBRAS2024_1 = format_PUNTOSOBRAS2024_1.readFeatures(json_PUNTOSOBRAS2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOSOBRAS2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOSOBRAS2024_1.addFeatures(features_PUNTOSOBRAS2024_1);
var lyr_PUNTOSOBRAS2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOSOBRAS2024_1, 
                style: style_PUNTOSOBRAS2024_1,
                popuplayertitle: "PUNTOS OBRAS 2024",
                interactive: true,
                title: '<img src="styles/legend/PUNTOSOBRAS2024_1.png" /> PUNTOS OBRAS 2024'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PUNTOSOBRAS2024_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PUNTOSOBRAS2024_1];
lyr_PUNTOSOBRAS2024_1.set('fieldAliases', {'id': 'id', 'CALLE': 'CALLE', 'html': 'html', });
lyr_PUNTOSOBRAS2024_1.set('fieldImages', {'id': 'TextEdit', 'CALLE': 'TextEdit', 'html': 'TextEdit', });
lyr_PUNTOSOBRAS2024_1.set('fieldLabels', {'id': 'inline label - always visible', 'CALLE': 'inline label - always visible', 'html': 'no label', });
lyr_PUNTOSOBRAS2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});