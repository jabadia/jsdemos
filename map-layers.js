var mapLayers={};
mapLayers.abcd=["a","b","c","d"];
mapLayers.abc=["a","b","c"];
mapLayers.mq=["mtile01","mtile02","mtile03","mtile04"];
mapLayers.info=[{
	"options": {
		"id": "Cloudmade Midnight",
		"visible": false,
		"copyright": "Cloudmade Midnight Commander"
	},
	"url": "http://tile.cloudmade.com/1a1b06b230af4efdbb989ea99e9841af/999/256/${level}/${col}/${row}.png",
  "group": "Cloudmade"
},
{
	"options": {
		"id": "Cloudmade Pale",
		"visible": false,
		"subDomains": mapLayers.abc,
		"copyright": "Cloudmade Pale Dawn"
	},
	"url": "http://${subDomain}.tile.cloudmade.com/1a1b06b230af4efdbb989ea99e9841af/998/256/${level}/${col}/${row}.png",
  "group": "Cloudmade"
},
{
	"options": {
		"id": "MapBox Light",
		"visible": false,
		"subDomains": mapLayers.abcd,
		"copyright": "Mapbox Light"
	},
	"url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-light/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Streets",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Streets"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-streets/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Simple",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Simple"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-simple/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox St.Clair",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox St.Clair"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-st-clair/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Union",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Union"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-union/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Warden",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Warden"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-warden/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Zenburn",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Zenburn"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-zenburn/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Chester",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Chester"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-chester/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Nightvision",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox NightVision"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-nightvision/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Osgoode",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Osgoode"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-osgoode/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Lacquer",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Lacquer"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-lacquer/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
  "options": {
    "id": "MapBox Graphite",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Mapbox Graphite"
  },
  "url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-graphite/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
	"options": {
		"id": "MapBox Terrain",
		"visible": false,
		"subDomains": mapLayers.abcd,
		"copyright": "Mapbox Terrain"
	},
	"url": "http://${subDomain}.tiles.mapbox.com/v3/mapbox.mapbox-warden/${level}/${col}/${row}.png",
  "group": "Mapbox"
},
{
	"options": {
		"id": "MapQuest",
		"visible": false,
		"subDomains": mapLayers.mq,
		"copyright": "MapQuest"
	},
	"url": "http://${subDomain}.mqcdn.com/tiles/1.0.0/vx/map/${level}/${col}/${row}.jpg",
  "group": "MapQuestg"
},
{
  "options": {
    "id": "World Navigation Charts",
    "visible": false,
    "copyright": "National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
  },
  "url": "http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/World_Navigation_Charts/MapServer/tile/${level}/${row}/${col}",
  "group": "ESRI"
},
{
  "options": {
    "id": "National Geographic",
    "visible": true,
    "subDomains": ["services",
    "server"],
    "copyright": "National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
  },
  "url": "http://${subDomain}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/${level}/${row}/${col}",
  "group": "ESRI"
},
{
  "options": {
    "id": "ESRI Imagery",
    "visible": false,
    "copyright": "Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
  },
  "url": "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${level}/${row}/${col}",
  "group": "ESRI"
},
{
  "options": {
    "id": "OSM Mapnik",
    "visible": false,
    "subDomains": mapLayers.abc,
    "copyright": "Open Street Map - Mapnik"
  },
  "url": "http://${subDomain}.tile.openstreetmap.org/${level}/${col}/${row}.png",
  "group": "OSM"
},
{
  "options": {
    "id": "OSM Cycle Map",
    "visible": false,
    "subDomains": mapLayers.abc,
    "copyright": "Open Cycle Map"
  },
  "url": "http://${subDomain}.tile.opencyclemap.org/cycle/${level}/${col}/${row}.png",
  "group": "OSM"
},
{
  "options": {
    "id": "OSM Transport Map",
    "visible": false,
    "subDomains": mapLayers.abc,
    "copyright": "Open Transport Map"
  },
  "url": "http://${subDomain}.tile2.opencyclemap.org/transport/${level}/${col}/${row}.png",
  "group": "OSM"
},
{
  "options": {
    "id": "OSM Landscape Map",
    "visible": false,
    "subDomains": mapLayers.abc,
    "copyright": "Open Landscape Map"
  },
  "url": "http://${subDomain}.tile3.opencyclemap.org/landscape/${level}/${col}/${row}.png",
  "group": "OSM"
},
{
	"options": {
		"id": "OSM via Apple",
		"visible": false,
		"copyright": "Apple's rendering of OSM data."
	},
	"url": "http://gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_GB&z=${level}&x=${col}&y=${row}&v=9",
  "group": "OSM"
},
{
	"options": {
		"id": "Stamen Terrain",
		"visible": false,
		"subDomains": mapLayers.abcd,
		"copyright": "Stamen Terrain"
	},
	"url": "http://${subDomain}.tile.stamen.com/terrain/${level}/${col}/${row}.jpg",
  "group": "Stamen"
},
{
	"options": {
		"id": "Stamen Toner",
		"visible": false,
		"subDomains": mapLayers.abcd,
		"copyright": "Stamen Toner"
	},
	"url": "http://${subDomain}.tile.stamen.com/toner/${level}/${col}/${row}.png",
  "group": "Stamen"
},
{
	"options": {
		"id": "Stamen Watercolor",
		"visible": false,
		"subDomains": mapLayers.abcd,
		"copyright": "Stamen Watercolor"
	},
	"url": "http://${subDomain}.tile.stamen.com/watercolor/${level}/${col}/${row}.jpg",
  "group": "Stamen"
},
{
  "url": "http://www.mapabase.es/ArcGIS/rest/services/Raster/Mapabase_h_WGS84_WM/MapServer",
  "options": {
    "id": "MapaBase Relieve",
    "visible": false,
    "opacity": 0.5
  },
  "controlType": "checkbox",
  "layerType": "agstiled",
  "group": "Overlays"
},
{
  "url": "http://54.247.188.183/arcgis/rest/services/xunta/XuntaBase/MapServer/WMTS",
  "options": {
    "id": "Galicia WMTS",
    "serviceMode": "RESTful",
    "layerInfo": {
      "identifier": "xunta_XuntaBase",
      "tileMatrixSet": "GoogleMapsCompatible",
      "format": "png"
    },
    "visible": false,
    "opacity": 0.7
  },
  "controlType": "checkbox",
  "layerType": "wmts",
  "group": "Overlays"
},
/*{
	"options": {
		"id": "MapaBASE - PNOA",
		"visible": false,
		"copyright": "ESRI España - IGN"
	},
	"url": "http://www.mapabase.es/ArcGIS/rest/services/Raster/Mapabase_o_WGS84_WM_MB2/MapServer/tile/${level}/${row}/${col}"
},*/
{
  "options": {
    "id": "ESRI Transport",
    "visible": false,
    "copyright": "ESRI"
  },
  "url": "http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/${level}/${row}/${col}.png",
  "controlType": "checkbox",
  "group": "Overlays"
},
{
  "options": {
    "id": "Stamen Toner Lines",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Stamen Toner Lines"
  },
  "url": "http://${subDomain}.tile.stamen.com/toner-lines/${level}/${col}/${row}.png",
  "controlType": "checkbox",
  "group": "Overlays"
},
{
  "options": {
    "id": "Stamen Toner Labels",
    "visible": false,
    "subDomains": mapLayers.abcd,
    "copyright": "Stamen Toner Labels"
  },
  "url": "http://${subDomain}.tile.stamen.com/toner-labels/${level}/${col}/${row}.png",
  "controlType": "checkbox",
  "group": "Overlays"
},
{
	"options": {
		"id": "AGS - Cantabria - Base",
		"visible": false,
		"opacity": 0.5
	},
	"url": "http://54.247.188.183/arcgis/rest/services/cantabria/101HabitatsCantabria_Base/MapServer",
	"controlType": "checkbox",
	"layerType": "dynamic",
  "group": "Overlays"
},
{
	"options": {
		"id": "AGS - Cantabria - Aves",
		"visible": false
	},
	"url": "http://54.247.188.183/arcgis/rest/services/cantabria/HabitatsCantabria_Aves/MapServer",
	"controlType": "checkbox",
	"layerType": "dynamic",
  "group": "Overlays"
},
{
	"options": {
		"id": "AGS - Cantabria - Features",
		"visible": true
	},
	"url": "http://54.247.188.183/arcgis/rest/services/cantabria/HabitatsCantabria_Aves/FeatureServer/0",
	"controlType": "checkbox",
	"layerType": "feature",
  "group": "Overlays"
}];