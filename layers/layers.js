var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_pdktheme_pdk_lokalplan_forslag_v_1 = new ol.format.GeoJSON();
var features_pdktheme_pdk_lokalplan_forslag_v_1 = format_pdktheme_pdk_lokalplan_forslag_v_1.readFeatures(json_pdktheme_pdk_lokalplan_forslag_v_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pdktheme_pdk_lokalplan_forslag_v_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pdktheme_pdk_lokalplan_forslag_v_1.addFeatures(features_pdktheme_pdk_lokalplan_forslag_v_1);
var lyr_pdktheme_pdk_lokalplan_forslag_v_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pdktheme_pdk_lokalplan_forslag_v_1, 
                style: style_pdktheme_pdk_lokalplan_forslag_v_1,
                popuplayertitle: 'pdk:theme_pdk_lokalplan_forslag_v',
                interactive: true,
                title: '<img src="styles/legend/pdktheme_pdk_lokalplan_forslag_v_1.png" /> pdk:theme_pdk_lokalplan_forslag_v'
            });
var format_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2 = new ol.format.GeoJSON();
var features_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2 = format_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.readFeatures(json_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.addFeatures(features_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2);
var lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2, 
                style: style_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2,
                popuplayertitle: 'samlet mappe hvidovre — pdk:theme_pdk_lokalplan_vedtaget_v',
                interactive: true,
    title: 'samlet mappe hvidovre — pdk:theme_pdk_lokalplan_vedtaget_v<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_0.png" /> 1024399<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_1.png" /> 1053515<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_2.png" /> 1061002<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_3.png" /> 1061022<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_4.png" /> 1061038<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_5.png" /> 1061103<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_6.png" /> 1061140<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_7.png" /> 1061206<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_8.png" /> 1061209<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_9.png" /> 1061210<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_10.png" /> 1061715<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_11.png" /> 1061734<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_12.png" /> 1061739<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_13.png" /> 1061746<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_14.png" /> 1061756<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_15.png" /> 1061757<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_16.png" /> 1061824<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_17.png" /> 1061829<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_18.png" /> 1062026<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_19.png" /> 1062121<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_20.png" /> 1070479<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_21.png" /> 1071381<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_22.png" /> 1074662<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_23.png" /> 1074664<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_24.png" /> 1074675<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_25.png" /> 1075214<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_26.png" /> 1075219<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_27.png" /> 1075387<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_28.png" /> 1075393<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_29.png" /> 1075552<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_30.png" /> 1075553<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_31.png" /> 1075577<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_32.png" /> 1075593<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_33.png" /> 1075598<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_34.png" /> 1075609<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_35.png" /> 1075669<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_36.png" /> 1075682<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_37.png" /> 1075695<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_38.png" /> 1075708<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_39.png" /> 1075710<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_40.png" /> 1075718<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_41.png" /> 1075751<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_42.png" /> 1075752<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_43.png" /> 1075779<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_44.png" /> 1075795<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_45.png" /> 1075800<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_46.png" /> 1075801<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_47.png" /> 1075815<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_48.png" /> 1075877<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_49.png" /> 1075893<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_50.png" /> 1075897<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_51.png" /> 1075900<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_52.png" /> 1075902<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_53.png" /> 1075905<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_54.png" /> 1075907<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_55.png" /> 1075908<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_56.png" /> 1076004<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_57.png" /> 1076010<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_58.png" /> 1076019<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_59.png" /> 1076041<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_60.png" /> 1076064<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_61.png" /> 1076086<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_62.png" /> 1076094<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_63.png" /> 1076107<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_64.png" /> 1076114<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_65.png" /> 1076115<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_66.png" /> 1076126<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_67.png" /> 1076129<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_68.png" /> 1076287<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_69.png" /> 1076379<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_70.png" /> 1076865<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_71.png" /> 1076868<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_72.png" /> 1076874<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_73.png" /> 1076892<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_74.png" /> 1076902<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_75.png" /> 1076939<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_76.png" /> 1076961<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_77.png" /> 1076968<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_78.png" /> 1077070<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_79.png" /> 1077082<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_80.png" /> 1077085<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_81.png" /> 1077086<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_82.png" /> 1077558<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_83.png" /> 1077565<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_84.png" /> 1078074<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_85.png" /> 1078075<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_86.png" /> 1078077<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_87.png" /> 1078184<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_88.png" /> 1078227<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_89.png" /> 1078229<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_90.png" /> 1078231<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_91.png" /> 1078248<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_92.png" /> 1078275<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_93.png" /> 1078279<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_94.png" /> 1078289<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_95.png" /> 1078346<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_96.png" /> 1078464<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_97.png" /> 1078465<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_98.png" /> 1078468<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_99.png" /> 1079122<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_100.png" /> 1079123<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_101.png" /> 1079666<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_102.png" /> 1079671<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_103.png" /> 1081381<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_104.png" /> 1084485<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_105.png" /> 1084491<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_106.png" /> 1084492<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_107.png" /> 1103890<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_108.png" /> 1109560<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_109.png" /> 1328884<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_110.png" /> 1359145<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_111.png" /> 1369547<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_112.png" /> 1374739<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_113.png" /> 1792902<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_114.png" /> 1869505<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_115.png" /> 2136388<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_116.png" /> 2186492<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_117.png" /> 2269185<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_118.png" /> 2641209<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_119.png" /> 2702963<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_120.png" /> 2702964<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_121.png" /> 2702965<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_122.png" /> 2702968<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_123.png" /> 2702969<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_124.png" /> 2702993<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_125.png" /> 2978253<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_126.png" /> 3016098<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_127.png" /> 3016099<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_128.png" /> 3016105<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_129.png" /> 3186913<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_130.png" /> 3188617<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_131.png" /> 3188619<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_132.png" /> 3812280<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_133.png" /> 3964626<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_134.png" /> 3964627<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_135.png" /> 3964812<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_136.png" /> 9419556<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_137.png" /> 9431987<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_138.png" /> 9431989<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_139.png" /> 9431990<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_140.png" /> 9431991<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_141.png" /> 9431992<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_142.png" /> 9431993<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_143.png" /> 9431994<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_144.png" /> 9690454<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_145.png" /> 9717080<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_146.png" /> 9731022<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_147.png" /> 9732835<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_148.png" /> 9732862<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_149.png" /> 9753254<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_150.png" /> 10353005<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_151.png" /> 10456675<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_152.png" /> 10478656<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_153.png" /> 10840028<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_154.png" /> 10900534<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_155.png" /> 10906517<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_156.png" /> 10985743<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_157.png" /> 11021467<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_158.png" /> 11126774<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_159.png" /> 11159816<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_160.png" /> 11176926<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_161.png" /> 11185105<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_162.png" /> 11198619<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_163.png" /> 11228193<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_164.png" /> 11240317<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_165.png" /> 11252419<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_166.png" /> 11307736<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_167.png" /> 11307768<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_168.png" /> 11317442<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_169.png" /> 11347122<br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_170.png" /> <br />\
    <img src="styles/legend/samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2_171.png" /> <br />' });
var format_Strandbeskyttelsehvidovre_3 = new ol.format.GeoJSON();
var features_Strandbeskyttelsehvidovre_3 = format_Strandbeskyttelsehvidovre_3.readFeatures(json_Strandbeskyttelsehvidovre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelsehvidovre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelsehvidovre_3.addFeatures(features_Strandbeskyttelsehvidovre_3);
var lyr_Strandbeskyttelsehvidovre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelsehvidovre_3, 
                style: style_Strandbeskyttelsehvidovre_3,
                popuplayertitle: 'Strandbeskyttelse hvidovre',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelsehvidovre_3.png" /> Strandbeskyttelse hvidovre'
            });
var format_kommuneplan_4 = new ol.format.GeoJSON();
var features_kommuneplan_4 = format_kommuneplan_4.readFeatures(json_kommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_4.addFeatures(features_kommuneplan_4);
var lyr_kommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_4, 
                style: style_kommuneplan_4,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_4.png" /> kommuneplan'
            });
var format_Frededeomrder_5 = new ol.format.GeoJSON();
var features_Frededeomrder_5 = format_Frededeomrder_5.readFeatures(json_Frededeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_5.addFeatures(features_Frededeomrder_5);
var lyr_Frededeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_5, 
                style: style_Frededeomrder_5,
                popuplayertitle: 'Frededeområder',
                interactive: false,
    title: 'Frededeområder<br />\
    <img src="styles/legend/Frededeomrder_5_0.png" /> <br />\
    <img src="styles/legend/Frededeomrder_5_1.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_5_2.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_5_3.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_5_4.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_5_5.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />' });
var format_folkeskole_6 = new ol.format.GeoJSON();
var features_folkeskole_6 = format_folkeskole_6.readFeatures(json_folkeskole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskole_6.addFeatures(features_folkeskole_6);
var lyr_folkeskole_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskole_6, 
                style: style_folkeskole_6,
                popuplayertitle: 'folkeskole',
                interactive: true,
                title: '<img src="styles/legend/folkeskole_6.png" /> folkeskole'
            });
var format_Hospital_7 = new ol.format.GeoJSON();
var features_Hospital_7 = format_Hospital_7.readFeatures(json_Hospital_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_7.addFeatures(features_Hospital_7);
var lyr_Hospital_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_7, 
                style: style_Hospital_7,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_7.png" /> Hospital'
            });
var format_Supermarked_8 = new ol.format.GeoJSON();
var features_Supermarked_8 = format_Supermarked_8.readFeatures(json_Supermarked_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarked_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarked_8.addFeatures(features_Supermarked_8);
var lyr_Supermarked_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarked_8, 
                style: style_Supermarked_8,
                popuplayertitle: 'Supermarked',
                interactive: true,
                title: '<img src="styles/legend/Supermarked_8.png" /> Supermarked'
            });
var format_Legeplads_9 = new ol.format.GeoJSON();
var features_Legeplads_9 = format_Legeplads_9.readFeatures(json_Legeplads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_9.addFeatures(features_Legeplads_9);
var lyr_Legeplads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_9, 
                style: style_Legeplads_9,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_9.png" /> Legeplads'
            });
var format_tank_10 = new ol.format.GeoJSON();
var features_tank_10 = format_tank_10.readFeatures(json_tank_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tank_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tank_10.addFeatures(features_tank_10);
var lyr_tank_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tank_10, 
                style: style_tank_10,
                popuplayertitle: 'tank',
                interactive: true,
                title: '<img src="styles/legend/tank_10.png" /> tank'
            });
var format_kirke_11 = new ol.format.GeoJSON();
var features_kirke_11 = format_kirke_11.readFeatures(json_kirke_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kirke_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kirke_11.addFeatures(features_kirke_11);
var lyr_kirke_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kirke_11, 
                style: style_kirke_11,
                popuplayertitle: 'kirke',
                interactive: true,
                title: '<img src="styles/legend/kirke_11.png" /> kirke'
            });
var format_togstationer_12 = new ol.format.GeoJSON();
var features_togstationer_12 = format_togstationer_12.readFeatures(json_togstationer_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_12.addFeatures(features_togstationer_12);
var lyr_togstationer_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_12, 
                style: style_togstationer_12,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_12.png" /> togstationer'
            });
var format_apoteker_13 = new ol.format.GeoJSON();
var features_apoteker_13 = format_apoteker_13.readFeatures(json_apoteker_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apoteker_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apoteker_13.addFeatures(features_apoteker_13);
var lyr_apoteker_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apoteker_13, 
                style: style_apoteker_13,
                popuplayertitle: 'apoteker',
                interactive: true,
                title: '<img src="styles/legend/apoteker_13.png" /> apoteker'
            });
var format_Restcafeer_14 = new ol.format.GeoJSON();
var features_Restcafeer_14 = format_Restcafeer_14.readFeatures(json_Restcafeer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restcafeer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restcafeer_14.addFeatures(features_Restcafeer_14);
var lyr_Restcafeer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restcafeer_14, 
                style: style_Restcafeer_14,
                popuplayertitle: 'Rest&cafeer',
                interactive: true,
                title: '<img src="styles/legend/Restcafeer_14.png" /> Rest&cafeer'
            });
var format_Centre_15 = new ol.format.GeoJSON();
var features_Centre_15 = format_Centre_15.readFeatures(json_Centre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centre_15.addFeatures(features_Centre_15);
var lyr_Centre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centre_15, 
                style: style_Centre_15,
                popuplayertitle: 'Centre',
                interactive: true,
                title: '<img src="styles/legend/Centre_15.png" /> Centre'
            });
var format_lger_16 = new ol.format.GeoJSON();
var features_lger_16 = format_lger_16.readFeatures(json_lger_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lger_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lger_16.addFeatures(features_lger_16);
var lyr_lger_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lger_16, 
                style: style_lger_16,
                popuplayertitle: 'læger',
                interactive: true,
                title: '<img src="styles/legend/lger_16.png" /> læger'
            });
var format_bank_17 = new ol.format.GeoJSON();
var features_bank_17 = format_bank_17.readFeatures(json_bank_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_17.addFeatures(features_bank_17);
var lyr_bank_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bank_17, 
                style: style_bank_17,
                popuplayertitle: 'bank',
                interactive: true,
                title: '<img src="styles/legend/bank_17.png" /> bank'
            });
var format_moske_18 = new ol.format.GeoJSON();
var features_moske_18 = format_moske_18.readFeatures(json_moske_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moske_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moske_18.addFeatures(features_moske_18);
var lyr_moske_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moske_18, 
                style: style_moske_18,
                popuplayertitle: 'moske',
                interactive: true,
                title: '<img src="styles/legend/moske_18.png" /> moske'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_pdktheme_pdk_lokalplan_forslag_v_1.setVisible(true);lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.setVisible(true);lyr_Strandbeskyttelsehvidovre_3.setVisible(true);lyr_kommuneplan_4.setVisible(true);lyr_Frededeomrder_5.setVisible(true);lyr_folkeskole_6.setVisible(true);lyr_Hospital_7.setVisible(true);lyr_Supermarked_8.setVisible(true);lyr_Legeplads_9.setVisible(true);lyr_tank_10.setVisible(true);lyr_kirke_11.setVisible(true);lyr_togstationer_12.setVisible(true);lyr_apoteker_13.setVisible(true);lyr_Restcafeer_14.setVisible(true);lyr_Centre_15.setVisible(true);lyr_lger_16.setVisible(true);lyr_bank_17.setVisible(true);lyr_moske_18.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_pdktheme_pdk_lokalplan_forslag_v_1,lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2,lyr_Strandbeskyttelsehvidovre_3,lyr_kommuneplan_4,lyr_Frededeomrder_5,lyr_folkeskole_6,lyr_Hospital_7,lyr_Supermarked_8,lyr_Legeplads_9,lyr_tank_10,lyr_kirke_11,lyr_togstationer_12,lyr_apoteker_13,lyr_Restcafeer_14,lyr_Centre_15,lyr_lger_16,lyr_bank_17,lyr_moske_18];
lyr_pdktheme_pdk_lokalplan_forslag_v_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'komnr': 'komnr', 'objektkode': 'objektkode', 'plantype': 'plantype', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'datoattr': 'datoattr', 'datogeom': 'datogeom', 'doklink': 'doklink', 'distrikt': 'distrikt', 'zone': 'zone', 'bebygpct': 'bebygpct', 'bebygpctaf': 'bebygpctaf', 'bebygpctar': 'bebygpctar', 'm3_m2': 'm3_m2', 'maxetager': 'maxetager', 'maxbygnhjd': 'maxbygnhjd', 'minmiljo': 'minmiljo', 'maxmiljo': 'maxmiljo', 'bevarbest': 'bevarbest', 'bebyggrad': 'bebyggrad', 'mingrund': 'mingrund', 'dataprod': 'dataprod', 'digigrundl': 'digigrundl', 'digigrundd': 'digigrundd', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'anvendelsegenerel': 'anvendelsegenerel', 'kommunenavn': 'kommunenavn', 'zonestatus': 'zonestatus', 'planstatus': 'planstatus', 'megawatt': 'megawatt', 'vvmredeg': 'vvmredeg', 'sforhold': 'sforhold', 'minuds': 'minuds', 'eareal': 'eareal', 'earealh': 'earealh', 'm3_m2h': 'm3_m2h', 'ianvreg': 'ianvreg', 'izonereg': 'izonereg', 'iomfangreg': 'iomfangreg', 'iudstykreg': 'iudstykreg', 'kompleks': 'kompleks', 'kbeskriv': 'kbeskriv', 'vindbeskriv': 'vindbeskriv', 'udstykforbud': 'udstykforbud', 'statsplan': 'statsplan', 'sforaktuel': 'sforaktuel', 'maxboligenhed': 'maxboligenhed', 'udstykantal': 'udstykantal', 'maxuds': 'maxuds', 'udstykningsplan': 'udstykningsplan', 'bygpctarh': 'bygpctarh', 'bygm2': 'bygm2', 'bygm2h': 'bygm2h', 'fuldtbyg': 'fuldtbyg', 'anvspec1': 'anvspec1', 'bygpct1': 'bygpct1', 'bygpcth1': 'bygpcth1', 'eareal1': 'eareal1', 'earealh1': 'earealh1', 'm3_m21': 'm3_m21', 'm3_m2h1': 'm3_m2h1', 'maxbhjd1': 'maxbhjd1', 'maxetage1': 'maxetage1', 'bygpctar1': 'bygpctar1', 'bygpctarh1': 'bygpctarh1', 'bygm21': 'bygm21', 'bygm2h1': 'bygm2h1', 'minuds1': 'minuds1', 'udstykfb1': 'udstykfb1', 'fuldtbyg1': 'fuldtbyg1', 'plankap1': 'plankap1', 'plankapia1': 'plankapia1', 'forvprod1': 'forvprod1', 'forvprodia1': 'forvprodia1', 'maxboligenhed1': 'maxboligenhed1', 'udstykantal1': 'udstykantal1', 'maxuds1': 'maxuds1', 'antal1': 'antal1', 'datoudloeb1': 'datoudloeb1', 'fleksibel1': 'fleksibel1', 'anvspec2': 'anvspec2', 'bygpct2': 'bygpct2', 'bygpcth2': 'bygpcth2', 'eareal2': 'eareal2', 'earealh2': 'earealh2', 'm3_m22': 'm3_m22', 'm3_m2h2': 'm3_m2h2', 'maxbhjd2': 'maxbhjd2', 'maxetage2': 'maxetage2', 'bygpctar2': 'bygpctar2', 'bygpctarh2': 'bygpctarh2', 'bygm22': 'bygm22', 'bygm2h2': 'bygm2h2', 'minuds2': 'minuds2', 'udstykfb2': 'udstykfb2', 'fuldtbyg2': 'fuldtbyg2', 'plankap2': 'plankap2', 'plankapia2': 'plankapia2', 'forvprod2': 'forvprod2', 'forvprodia2': 'forvprodia2', 'maxboligenhed2': 'maxboligenhed2', 'udstykantal2': 'udstykantal2', 'maxuds2': 'maxuds2', 'antal2': 'antal2', 'datoudloeb2': 'datoudloeb2', 'fleksibel2': 'fleksibel2', 'anvspec3': 'anvspec3', 'bygpct3': 'bygpct3', 'bygpcth3': 'bygpcth3', 'eareal3': 'eareal3', 'earealh3': 'earealh3', 'm3_m23': 'm3_m23', 'm3_m2h3': 'm3_m2h3', 'maxbhjd3': 'maxbhjd3', 'maxetage3': 'maxetage3', 'bygpctar3': 'bygpctar3', 'bygpctarh3': 'bygpctarh3', 'bygm23': 'bygm23', 'bygm2h3': 'bygm2h3', 'minuds3': 'minuds3', 'udstykfb3': 'udstykfb3', 'fuldtbyg3': 'fuldtbyg3', 'plankap3': 'plankap3', 'plankapia3': 'plankapia3', 'forvprod3': 'forvprod3', 'forvprodia3': 'forvprodia3', 'maxboligenhed3': 'maxboligenhed3', 'udstykantal3': 'udstykantal3', 'maxuds3': 'maxuds3', 'antal3': 'antal3', 'datoudloeb3': 'datoudloeb3', 'fleksibel3': 'fleksibel3', 'anvspec4': 'anvspec4', 'bygpct4': 'bygpct4', 'bygpcth4': 'bygpcth4', 'eareal4': 'eareal4', 'earealh4': 'earealh4', 'm3_m24': 'm3_m24', 'm3_m2h4': 'm3_m2h4', 'maxbhjd4': 'maxbhjd4', 'maxetage4': 'maxetage4', 'bygpctar4': 'bygpctar4', 'bygpctarh4': 'bygpctarh4', 'bygm24': 'bygm24', 'bygm2h4': 'bygm2h4', 'minuds4': 'minuds4', 'udstykfb4': 'udstykfb4', 'fuldtbyg4': 'fuldtbyg4', 'plankap4': 'plankap4', 'plankapia4': 'plankapia4', 'forvprod4': 'forvprod4', 'forvprodia4': 'forvprodia4', 'maxboligenhed4': 'maxboligenhed4', 'udstykantal4': 'udstykantal4', 'maxuds4': 'maxuds4', 'antal4': 'antal4', 'datoudloeb4': 'datoudloeb4', 'fleksibel4': 'fleksibel4', 'anvspec5': 'anvspec5', 'bygpct5': 'bygpct5', 'bygpcth5': 'bygpcth5', 'eareal5': 'eareal5', 'earealh5': 'earealh5', 'm3_m25': 'm3_m25', 'm3_m2h5': 'm3_m2h5', 'maxbhjd5': 'maxbhjd5', 'maxetage5': 'maxetage5', 'bygpctar5': 'bygpctar5', 'bygpctarh5': 'bygpctarh5', 'bygm25': 'bygm25', 'bygm2h5': 'bygm2h5', 'minuds5': 'minuds5', 'udstykfb5': 'udstykfb5', 'fuldtbyg5': 'fuldtbyg5', 'plankap5': 'plankap5', 'plankapia5': 'plankapia5', 'forvprod5': 'forvprod5', 'forvprodia5': 'forvprodia5', 'maxboligenhed5': 'maxboligenhed5', 'udstykantal5': 'udstykantal5', 'maxuds5': 'maxuds5', 'antal5': 'antal5', 'datoudloeb5': 'datoudloeb5', 'fleksibel5': 'fleksibel5', 'anvspec6': 'anvspec6', 'bygpct6': 'bygpct6', 'bygpcth6': 'bygpcth6', 'eareal6': 'eareal6', 'earealh6': 'earealh6', 'm3_m26': 'm3_m26', 'm3_m2h6': 'm3_m2h6', 'maxbhjd6': 'maxbhjd6', 'maxetage6': 'maxetage6', 'bygpctar6': 'bygpctar6', 'bygpctarh6': 'bygpctarh6', 'bygm26': 'bygm26', 'bygm2h6': 'bygm2h6', 'minuds6': 'minuds6', 'udstykfb6': 'udstykfb6', 'fuldtbyg6': 'fuldtbyg6', 'plankap6': 'plankap6', 'plankapia6': 'plankapia6', 'forvprod6': 'forvprod6', 'forvprodia6': 'forvprodia6', 'maxboligenhed6': 'maxboligenhed6', 'udstykantal6': 'udstykantal6', 'maxuds6': 'maxuds6', 'antal6': 'antal6', 'datoudloeb6': 'datoudloeb6', 'fleksibel6': 'fleksibel6', 'anvspec7': 'anvspec7', 'bygpct7': 'bygpct7', 'bygpcth7': 'bygpcth7', 'eareal7': 'eareal7', 'earealh7': 'earealh7', 'm3_m27': 'm3_m27', 'm3_m2h7': 'm3_m2h7', 'maxbhjd7': 'maxbhjd7', 'maxetage7': 'maxetage7', 'bygpctar7': 'bygpctar7', 'bygpctarh7': 'bygpctarh7', 'bygm27': 'bygm27', 'bygm2h7': 'bygm2h7', 'minuds7': 'minuds7', 'udstykfb7': 'udstykfb7', 'fuldtbyg7': 'fuldtbyg7', 'plankap7': 'plankap7', 'plankapia7': 'plankapia7', 'forvprod7': 'forvprod7', 'forvprodia7': 'forvprodia7', 'maxboligenhed7': 'maxboligenhed7', 'udstykantal7': 'udstykantal7', 'maxuds7': 'maxuds7', 'antal7': 'antal7', 'datoudloeb7': 'datoudloeb7', 'fleksibel7': 'fleksibel7', 'anvspec8': 'anvspec8', 'bygpct8': 'bygpct8', 'bygpcth8': 'bygpcth8', 'eareal8': 'eareal8', 'earealh8': 'earealh8', 'm3_m28': 'm3_m28', 'm3_m2h8': 'm3_m2h8', 'maxbhjd8': 'maxbhjd8', 'maxetage8': 'maxetage8', 'bygpctar8': 'bygpctar8', 'bygpctarh8': 'bygpctarh8', 'bygm28': 'bygm28', 'bygm2h8': 'bygm2h8', 'minuds8': 'minuds8', 'udstykfb8': 'udstykfb8', 'fuldtbyg8': 'fuldtbyg8', 'plankap8': 'plankap8', 'plankapia8': 'plankapia8', 'forvprod8': 'forvprod8', 'forvprodia8': 'forvprodia8', 'maxboligenhed8': 'maxboligenhed8', 'udstykantal8': 'udstykantal8', 'maxuds8': 'maxuds8', 'antal8': 'antal8', 'datoudloeb8': 'datoudloeb8', 'fleksibel8': 'fleksibel8', 'anvspec9': 'anvspec9', 'bygpct9': 'bygpct9', 'bygpcth9': 'bygpcth9', 'eareal9': 'eareal9', 'earealh9': 'earealh9', 'm3_m29': 'm3_m29', 'm3_m2h9': 'm3_m2h9', 'maxbhjd9': 'maxbhjd9', 'maxetage9': 'maxetage9', 'bygpctar9': 'bygpctar9', 'bygpctarh9': 'bygpctarh9', 'bygm29': 'bygm29', 'bygm2h9': 'bygm2h9', 'minuds9': 'minuds9', 'udstykfb9': 'udstykfb9', 'fuldtbyg9': 'fuldtbyg9', 'plankap9': 'plankap9', 'plankapia9': 'plankapia9', 'forvprod9': 'forvprod9', 'forvprodia9': 'forvprodia9', 'maxboligenhed9': 'maxboligenhed9', 'udstykantal9': 'udstykantal9', 'maxuds9': 'maxuds9', 'antal9': 'antal9', 'datoudloeb9': 'datoudloeb9', 'fleksibel9': 'fleksibel9', 'anvspec10': 'anvspec10', 'bygpct10': 'bygpct10', 'bygpcth10': 'bygpcth10', 'eareal10': 'eareal10', 'earealh10': 'earealh10', 'm3_m210': 'm3_m210', 'm3_m2h10': 'm3_m2h10', 'maxbhjd10': 'maxbhjd10', 'maxetage10': 'maxetage10', 'bygpctar10': 'bygpctar10', 'bygpctarh10': 'bygpctarh10', 'bygm210': 'bygm210', 'bygm2h10': 'bygm2h10', 'minuds10': 'minuds10', 'udstykfb10': 'udstykfb10', 'fuldtbyg10': 'fuldtbyg10', 'plankap10': 'plankap10', 'plankapia10': 'plankapia10', 'forvprod10': 'forvprod10', 'forvprodia10': 'forvprodia10', 'maxboligenhed10': 'maxboligenhed10', 'udstykantal10': 'udstykantal10', 'maxuds10': 'maxuds10', 'antal10': 'antal10', 'datoudloeb10': 'datoudloeb10', 'fleksibel10': 'fleksibel10', 'abestem1': 'abestem1', 'abestem2': 'abestem2', 'abestem3': 'abestem3', });
lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'komnr': 'komnr', 'objektkode': 'objektkode', 'plantype': 'plantype', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'datoattr': 'datoattr', 'datogeom': 'datogeom', 'doklink': 'doklink', 'distrikt': 'distrikt', 'zone': 'zone', 'bebygpct': 'bebygpct', 'bebygpctaf': 'bebygpctaf', 'bebygpctar': 'bebygpctar', 'm3_m2': 'm3_m2', 'maxetager': 'maxetager', 'maxbygnhjd': 'maxbygnhjd', 'minmiljo': 'minmiljo', 'maxmiljo': 'maxmiljo', 'bevarbest': 'bevarbest', 'bebyggrad': 'bebyggrad', 'mingrund': 'mingrund', 'dataprod': 'dataprod', 'digigrundl': 'digigrundl', 'digigrundd': 'digigrundd', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'anvendelsegenerel': 'anvendelsegenerel', 'kommunenavn': 'kommunenavn', 'zonestatus': 'zonestatus', 'planstatus': 'planstatus', 'megawatt': 'megawatt', 'vvmredeg': 'vvmredeg', 'sforhold': 'sforhold', 'minuds': 'minuds', 'eareal': 'eareal', 'earealh': 'earealh', 'm3_m2h': 'm3_m2h', 'ianvreg': 'ianvreg', 'izonereg': 'izonereg', 'iomfangreg': 'iomfangreg', 'iudstykreg': 'iudstykreg', 'kompleks': 'kompleks', 'kbeskriv': 'kbeskriv', 'vindbeskriv': 'vindbeskriv', 'udstykforbud': 'udstykforbud', 'statsplan': 'statsplan', 'sforaktuel': 'sforaktuel', 'maxboligenhed': 'maxboligenhed', 'udstykantal': 'udstykantal', 'maxuds': 'maxuds', 'udstykningsplan': 'udstykningsplan', 'bygpctarh': 'bygpctarh', 'bygm2': 'bygm2', 'bygm2h': 'bygm2h', 'fuldtbyg': 'fuldtbyg', 'anvspec1': 'anvspec1', 'bygpct1': 'bygpct1', 'bygpcth1': 'bygpcth1', 'eareal1': 'eareal1', 'earealh1': 'earealh1', 'm3_m21': 'm3_m21', 'm3_m2h1': 'm3_m2h1', 'maxbhjd1': 'maxbhjd1', 'maxetage1': 'maxetage1', 'bygpctar1': 'bygpctar1', 'bygpctarh1': 'bygpctarh1', 'bygm21': 'bygm21', 'bygm2h1': 'bygm2h1', 'minuds1': 'minuds1', 'udstykfb1': 'udstykfb1', 'fuldtbyg1': 'fuldtbyg1', 'plankap1': 'plankap1', 'plankapia1': 'plankapia1', 'forvprod1': 'forvprod1', 'forvprodia1': 'forvprodia1', 'maxboligenhed1': 'maxboligenhed1', 'udstykantal1': 'udstykantal1', 'maxuds1': 'maxuds1', 'antal1': 'antal1', 'datoudloeb1': 'datoudloeb1', 'fleksibel1': 'fleksibel1', 'anvspec2': 'anvspec2', 'bygpct2': 'bygpct2', 'bygpcth2': 'bygpcth2', 'eareal2': 'eareal2', 'earealh2': 'earealh2', 'm3_m22': 'm3_m22', 'm3_m2h2': 'm3_m2h2', 'maxbhjd2': 'maxbhjd2', 'maxetage2': 'maxetage2', 'bygpctar2': 'bygpctar2', 'bygpctarh2': 'bygpctarh2', 'bygm22': 'bygm22', 'bygm2h2': 'bygm2h2', 'minuds2': 'minuds2', 'udstykfb2': 'udstykfb2', 'fuldtbyg2': 'fuldtbyg2', 'plankap2': 'plankap2', 'plankapia2': 'plankapia2', 'forvprod2': 'forvprod2', 'forvprodia2': 'forvprodia2', 'maxboligenhed2': 'maxboligenhed2', 'udstykantal2': 'udstykantal2', 'maxuds2': 'maxuds2', 'antal2': 'antal2', 'datoudloeb2': 'datoudloeb2', 'fleksibel2': 'fleksibel2', 'anvspec3': 'anvspec3', 'bygpct3': 'bygpct3', 'bygpcth3': 'bygpcth3', 'eareal3': 'eareal3', 'earealh3': 'earealh3', 'm3_m23': 'm3_m23', 'm3_m2h3': 'm3_m2h3', 'maxbhjd3': 'maxbhjd3', 'maxetage3': 'maxetage3', 'bygpctar3': 'bygpctar3', 'bygpctarh3': 'bygpctarh3', 'bygm23': 'bygm23', 'bygm2h3': 'bygm2h3', 'minuds3': 'minuds3', 'udstykfb3': 'udstykfb3', 'fuldtbyg3': 'fuldtbyg3', 'plankap3': 'plankap3', 'plankapia3': 'plankapia3', 'forvprod3': 'forvprod3', 'forvprodia3': 'forvprodia3', 'maxboligenhed3': 'maxboligenhed3', 'udstykantal3': 'udstykantal3', 'maxuds3': 'maxuds3', 'antal3': 'antal3', 'datoudloeb3': 'datoudloeb3', 'fleksibel3': 'fleksibel3', 'anvspec4': 'anvspec4', 'bygpct4': 'bygpct4', 'bygpcth4': 'bygpcth4', 'eareal4': 'eareal4', 'earealh4': 'earealh4', 'm3_m24': 'm3_m24', 'm3_m2h4': 'm3_m2h4', 'maxbhjd4': 'maxbhjd4', 'maxetage4': 'maxetage4', 'bygpctar4': 'bygpctar4', 'bygpctarh4': 'bygpctarh4', 'bygm24': 'bygm24', 'bygm2h4': 'bygm2h4', 'minuds4': 'minuds4', 'udstykfb4': 'udstykfb4', 'fuldtbyg4': 'fuldtbyg4', 'plankap4': 'plankap4', 'plankapia4': 'plankapia4', 'forvprod4': 'forvprod4', 'forvprodia4': 'forvprodia4', 'maxboligenhed4': 'maxboligenhed4', 'udstykantal4': 'udstykantal4', 'maxuds4': 'maxuds4', 'antal4': 'antal4', 'datoudloeb4': 'datoudloeb4', 'fleksibel4': 'fleksibel4', 'anvspec5': 'anvspec5', 'bygpct5': 'bygpct5', 'bygpcth5': 'bygpcth5', 'eareal5': 'eareal5', 'earealh5': 'earealh5', 'm3_m25': 'm3_m25', 'm3_m2h5': 'm3_m2h5', 'maxbhjd5': 'maxbhjd5', 'maxetage5': 'maxetage5', 'bygpctar5': 'bygpctar5', 'bygpctarh5': 'bygpctarh5', 'bygm25': 'bygm25', 'bygm2h5': 'bygm2h5', 'minuds5': 'minuds5', 'udstykfb5': 'udstykfb5', 'fuldtbyg5': 'fuldtbyg5', 'plankap5': 'plankap5', 'plankapia5': 'plankapia5', 'forvprod5': 'forvprod5', 'forvprodia5': 'forvprodia5', 'maxboligenhed5': 'maxboligenhed5', 'udstykantal5': 'udstykantal5', 'maxuds5': 'maxuds5', 'antal5': 'antal5', 'datoudloeb5': 'datoudloeb5', 'fleksibel5': 'fleksibel5', 'anvspec6': 'anvspec6', 'bygpct6': 'bygpct6', 'bygpcth6': 'bygpcth6', 'eareal6': 'eareal6', 'earealh6': 'earealh6', 'm3_m26': 'm3_m26', 'm3_m2h6': 'm3_m2h6', 'maxbhjd6': 'maxbhjd6', 'maxetage6': 'maxetage6', 'bygpctar6': 'bygpctar6', 'bygpctarh6': 'bygpctarh6', 'bygm26': 'bygm26', 'bygm2h6': 'bygm2h6', 'minuds6': 'minuds6', 'udstykfb6': 'udstykfb6', 'fuldtbyg6': 'fuldtbyg6', 'plankap6': 'plankap6', 'plankapia6': 'plankapia6', 'forvprod6': 'forvprod6', 'forvprodia6': 'forvprodia6', 'maxboligenhed6': 'maxboligenhed6', 'udstykantal6': 'udstykantal6', 'maxuds6': 'maxuds6', 'antal6': 'antal6', 'datoudloeb6': 'datoudloeb6', 'fleksibel6': 'fleksibel6', 'anvspec7': 'anvspec7', 'bygpct7': 'bygpct7', 'bygpcth7': 'bygpcth7', 'eareal7': 'eareal7', 'earealh7': 'earealh7', 'm3_m27': 'm3_m27', 'm3_m2h7': 'm3_m2h7', 'maxbhjd7': 'maxbhjd7', 'maxetage7': 'maxetage7', 'bygpctar7': 'bygpctar7', 'bygpctarh7': 'bygpctarh7', 'bygm27': 'bygm27', 'bygm2h7': 'bygm2h7', 'minuds7': 'minuds7', 'udstykfb7': 'udstykfb7', 'fuldtbyg7': 'fuldtbyg7', 'plankap7': 'plankap7', 'plankapia7': 'plankapia7', 'forvprod7': 'forvprod7', 'forvprodia7': 'forvprodia7', 'maxboligenhed7': 'maxboligenhed7', 'udstykantal7': 'udstykantal7', 'maxuds7': 'maxuds7', 'antal7': 'antal7', 'datoudloeb7': 'datoudloeb7', 'fleksibel7': 'fleksibel7', 'anvspec8': 'anvspec8', 'bygpct8': 'bygpct8', 'bygpcth8': 'bygpcth8', 'eareal8': 'eareal8', 'earealh8': 'earealh8', 'm3_m28': 'm3_m28', 'm3_m2h8': 'm3_m2h8', 'maxbhjd8': 'maxbhjd8', 'maxetage8': 'maxetage8', 'bygpctar8': 'bygpctar8', 'bygpctarh8': 'bygpctarh8', 'bygm28': 'bygm28', 'bygm2h8': 'bygm2h8', 'minuds8': 'minuds8', 'udstykfb8': 'udstykfb8', 'fuldtbyg8': 'fuldtbyg8', 'plankap8': 'plankap8', 'plankapia8': 'plankapia8', 'forvprod8': 'forvprod8', 'forvprodia8': 'forvprodia8', 'maxboligenhed8': 'maxboligenhed8', 'udstykantal8': 'udstykantal8', 'maxuds8': 'maxuds8', 'antal8': 'antal8', 'datoudloeb8': 'datoudloeb8', 'fleksibel8': 'fleksibel8', 'anvspec9': 'anvspec9', 'bygpct9': 'bygpct9', 'bygpcth9': 'bygpcth9', 'eareal9': 'eareal9', 'earealh9': 'earealh9', 'm3_m29': 'm3_m29', 'm3_m2h9': 'm3_m2h9', 'maxbhjd9': 'maxbhjd9', 'maxetage9': 'maxetage9', 'bygpctar9': 'bygpctar9', 'bygpctarh9': 'bygpctarh9', 'bygm29': 'bygm29', 'bygm2h9': 'bygm2h9', 'minuds9': 'minuds9', 'udstykfb9': 'udstykfb9', 'fuldtbyg9': 'fuldtbyg9', 'plankap9': 'plankap9', 'plankapia9': 'plankapia9', 'forvprod9': 'forvprod9', 'forvprodia9': 'forvprodia9', 'maxboligenhed9': 'maxboligenhed9', 'udstykantal9': 'udstykantal9', 'maxuds9': 'maxuds9', 'antal9': 'antal9', 'datoudloeb9': 'datoudloeb9', 'fleksibel9': 'fleksibel9', 'anvspec10': 'anvspec10', 'bygpct10': 'bygpct10', 'bygpcth10': 'bygpcth10', 'eareal10': 'eareal10', 'earealh10': 'earealh10', 'm3_m210': 'm3_m210', 'm3_m2h10': 'm3_m2h10', 'maxbhjd10': 'maxbhjd10', 'maxetage10': 'maxetage10', 'bygpctar10': 'bygpctar10', 'bygpctarh10': 'bygpctarh10', 'bygm210': 'bygm210', 'bygm2h10': 'bygm2h10', 'minuds10': 'minuds10', 'udstykfb10': 'udstykfb10', 'fuldtbyg10': 'fuldtbyg10', 'plankap10': 'plankap10', 'plankapia10': 'plankapia10', 'forvprod10': 'forvprod10', 'forvprodia10': 'forvprodia10', 'maxboligenhed10': 'maxboligenhed10', 'udstykantal10': 'udstykantal10', 'maxuds10': 'maxuds10', 'antal10': 'antal10', 'datoudloeb10': 'datoudloeb10', 'fleksibel10': 'fleksibel10', 'abestem1': 'abestem1', 'abestem2': 'abestem2', 'abestem3': 'abestem3', });
lyr_Strandbeskyttelsehvidovre_3.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_kommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Frededeomrder_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_folkeskole_6.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Hospital_7.set('fieldAliases', {'fid': 'fid', 'Hospitalna': 'Hospitalna', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Supermarked_8.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legeplads_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tank_10.set('fieldAliases', {'tankstatio': 'tankstatio', 'Adresse': 'Adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kirke_11.set('fieldAliases', {'Kirkens na': 'Kirkens na', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_togstationer_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_apoteker_13.set('fieldAliases', {'fid': 'fid', 'Apoteker': 'Apoteker', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Restcafeer_14.set('fieldAliases', {'Resurantna': 'Resurantna', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Centre_15.set('fieldAliases', {'Centernavn': 'Centernavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_lger_16.set('fieldAliases', {'Læge': 'Læge', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_bank_17.set('fieldAliases', {'banke': 'banke', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_moske_18.set('fieldAliases', {'Moskénavn': 'Moskénavn', 'adresse': 'adresse', 'by': 'by', 'field_4': 'field_4', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_pdktheme_pdk_lokalplan_forslag_v_1.set('fieldImages', {'fid': '', 'oid': '', 'id': '', 'planid': '', 'komnr': '', 'objektkode': '', 'plantype': '', 'plannr': '', 'plannavn': '', 'anvgen': '', 'datoforsl': '', 'datovedt': '', 'datoaflyst': '', 'datoikraft': '', 'datostart': '', 'datoslut': '', 'datoattr': '', 'datogeom': '', 'doklink': '', 'distrikt': '', 'zone': '', 'bebygpct': '', 'bebygpctaf': '', 'bebygpctar': '', 'm3_m2': '', 'maxetager': '', 'maxbygnhjd': '', 'minmiljo': '', 'maxmiljo': '', 'bevarbest': '', 'bebyggrad': '', 'mingrund': '', 'dataprod': '', 'digigrundl': '', 'digigrundd': '', 'datooprt': '', 'datoopdt': '', 'anvendelsegenerel': '', 'kommunenavn': '', 'zonestatus': '', 'planstatus': '', 'megawatt': '', 'vvmredeg': '', 'sforhold': '', 'minuds': '', 'eareal': '', 'earealh': '', 'm3_m2h': '', 'ianvreg': '', 'izonereg': '', 'iomfangreg': '', 'iudstykreg': '', 'kompleks': '', 'kbeskriv': '', 'vindbeskriv': '', 'udstykforbud': '', 'statsplan': '', 'sforaktuel': '', 'maxboligenhed': '', 'udstykantal': '', 'maxuds': '', 'udstykningsplan': '', 'bygpctarh': '', 'bygm2': '', 'bygm2h': '', 'fuldtbyg': '', 'anvspec1': '', 'bygpct1': '', 'bygpcth1': '', 'eareal1': '', 'earealh1': '', 'm3_m21': '', 'm3_m2h1': '', 'maxbhjd1': '', 'maxetage1': '', 'bygpctar1': '', 'bygpctarh1': '', 'bygm21': '', 'bygm2h1': '', 'minuds1': '', 'udstykfb1': '', 'fuldtbyg1': '', 'plankap1': '', 'plankapia1': '', 'forvprod1': '', 'forvprodia1': '', 'maxboligenhed1': '', 'udstykantal1': '', 'maxuds1': '', 'antal1': '', 'datoudloeb1': '', 'fleksibel1': '', 'anvspec2': '', 'bygpct2': '', 'bygpcth2': '', 'eareal2': '', 'earealh2': '', 'm3_m22': '', 'm3_m2h2': '', 'maxbhjd2': '', 'maxetage2': '', 'bygpctar2': '', 'bygpctarh2': '', 'bygm22': '', 'bygm2h2': '', 'minuds2': '', 'udstykfb2': '', 'fuldtbyg2': '', 'plankap2': '', 'plankapia2': '', 'forvprod2': '', 'forvprodia2': '', 'maxboligenhed2': '', 'udstykantal2': '', 'maxuds2': '', 'antal2': '', 'datoudloeb2': '', 'fleksibel2': '', 'anvspec3': '', 'bygpct3': '', 'bygpcth3': '', 'eareal3': '', 'earealh3': '', 'm3_m23': '', 'm3_m2h3': '', 'maxbhjd3': '', 'maxetage3': '', 'bygpctar3': '', 'bygpctarh3': '', 'bygm23': '', 'bygm2h3': '', 'minuds3': '', 'udstykfb3': '', 'fuldtbyg3': '', 'plankap3': '', 'plankapia3': '', 'forvprod3': '', 'forvprodia3': '', 'maxboligenhed3': '', 'udstykantal3': '', 'maxuds3': '', 'antal3': '', 'datoudloeb3': '', 'fleksibel3': '', 'anvspec4': '', 'bygpct4': '', 'bygpcth4': '', 'eareal4': '', 'earealh4': '', 'm3_m24': '', 'm3_m2h4': '', 'maxbhjd4': '', 'maxetage4': '', 'bygpctar4': '', 'bygpctarh4': '', 'bygm24': '', 'bygm2h4': '', 'minuds4': '', 'udstykfb4': '', 'fuldtbyg4': '', 'plankap4': '', 'plankapia4': '', 'forvprod4': '', 'forvprodia4': '', 'maxboligenhed4': '', 'udstykantal4': '', 'maxuds4': '', 'antal4': '', 'datoudloeb4': '', 'fleksibel4': '', 'anvspec5': '', 'bygpct5': '', 'bygpcth5': '', 'eareal5': '', 'earealh5': '', 'm3_m25': '', 'm3_m2h5': '', 'maxbhjd5': '', 'maxetage5': '', 'bygpctar5': '', 'bygpctarh5': '', 'bygm25': '', 'bygm2h5': '', 'minuds5': '', 'udstykfb5': '', 'fuldtbyg5': '', 'plankap5': '', 'plankapia5': '', 'forvprod5': '', 'forvprodia5': '', 'maxboligenhed5': '', 'udstykantal5': '', 'maxuds5': '', 'antal5': '', 'datoudloeb5': '', 'fleksibel5': '', 'anvspec6': '', 'bygpct6': '', 'bygpcth6': '', 'eareal6': '', 'earealh6': '', 'm3_m26': '', 'm3_m2h6': '', 'maxbhjd6': '', 'maxetage6': '', 'bygpctar6': '', 'bygpctarh6': '', 'bygm26': '', 'bygm2h6': '', 'minuds6': '', 'udstykfb6': '', 'fuldtbyg6': '', 'plankap6': '', 'plankapia6': '', 'forvprod6': '', 'forvprodia6': '', 'maxboligenhed6': '', 'udstykantal6': '', 'maxuds6': '', 'antal6': '', 'datoudloeb6': '', 'fleksibel6': '', 'anvspec7': '', 'bygpct7': '', 'bygpcth7': '', 'eareal7': '', 'earealh7': '', 'm3_m27': '', 'm3_m2h7': '', 'maxbhjd7': '', 'maxetage7': '', 'bygpctar7': '', 'bygpctarh7': '', 'bygm27': '', 'bygm2h7': '', 'minuds7': '', 'udstykfb7': '', 'fuldtbyg7': '', 'plankap7': '', 'plankapia7': '', 'forvprod7': '', 'forvprodia7': '', 'maxboligenhed7': '', 'udstykantal7': '', 'maxuds7': '', 'antal7': '', 'datoudloeb7': '', 'fleksibel7': '', 'anvspec8': '', 'bygpct8': '', 'bygpcth8': '', 'eareal8': '', 'earealh8': '', 'm3_m28': '', 'm3_m2h8': '', 'maxbhjd8': '', 'maxetage8': '', 'bygpctar8': '', 'bygpctarh8': '', 'bygm28': '', 'bygm2h8': '', 'minuds8': '', 'udstykfb8': '', 'fuldtbyg8': '', 'plankap8': '', 'plankapia8': '', 'forvprod8': '', 'forvprodia8': '', 'maxboligenhed8': '', 'udstykantal8': '', 'maxuds8': '', 'antal8': '', 'datoudloeb8': '', 'fleksibel8': '', 'anvspec9': '', 'bygpct9': '', 'bygpcth9': '', 'eareal9': '', 'earealh9': '', 'm3_m29': '', 'm3_m2h9': '', 'maxbhjd9': '', 'maxetage9': '', 'bygpctar9': '', 'bygpctarh9': '', 'bygm29': '', 'bygm2h9': '', 'minuds9': '', 'udstykfb9': '', 'fuldtbyg9': '', 'plankap9': '', 'plankapia9': '', 'forvprod9': '', 'forvprodia9': '', 'maxboligenhed9': '', 'udstykantal9': '', 'maxuds9': '', 'antal9': '', 'datoudloeb9': '', 'fleksibel9': '', 'anvspec10': '', 'bygpct10': '', 'bygpcth10': '', 'eareal10': '', 'earealh10': '', 'm3_m210': '', 'm3_m2h10': '', 'maxbhjd10': '', 'maxetage10': '', 'bygpctar10': '', 'bygpctarh10': '', 'bygm210': '', 'bygm2h10': '', 'minuds10': '', 'udstykfb10': '', 'fuldtbyg10': '', 'plankap10': '', 'plankapia10': '', 'forvprod10': '', 'forvprodia10': '', 'maxboligenhed10': '', 'udstykantal10': '', 'maxuds10': '', 'antal10': '', 'datoudloeb10': '', 'fleksibel10': '', 'abestem1': '', 'abestem2': '', 'abestem3': '', });
lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'komnr': 'Range', 'objektkode': 'Range', 'plantype': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', 'datoattr': 'Range', 'datogeom': 'Range', 'doklink': 'TextEdit', 'distrikt': 'TextEdit', 'zone': 'Range', 'bebygpct': 'Range', 'bebygpctaf': 'Range', 'bebygpctar': 'Range', 'm3_m2': 'TextEdit', 'maxetager': 'TextEdit', 'maxbygnhjd': 'TextEdit', 'minmiljo': 'Range', 'maxmiljo': 'Range', 'bevarbest': 'TextEdit', 'bebyggrad': 'Range', 'mingrund': 'Range', 'dataprod': 'TextEdit', 'digigrundl': 'TextEdit', 'digigrundd': 'Range', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'anvendelsegenerel': 'TextEdit', 'kommunenavn': 'TextEdit', 'zonestatus': 'TextEdit', 'planstatus': 'TextEdit', 'megawatt': 'TextEdit', 'vvmredeg': 'TextEdit', 'sforhold': 'TextEdit', 'minuds': 'TextEdit', 'eareal': 'Range', 'earealh': 'Range', 'm3_m2h': 'Range', 'ianvreg': 'TextEdit', 'izonereg': 'TextEdit', 'iomfangreg': 'TextEdit', 'iudstykreg': 'TextEdit', 'kompleks': 'TextEdit', 'kbeskriv': 'TextEdit', 'vindbeskriv': 'TextEdit', 'udstykforbud': 'TextEdit', 'statsplan': 'TextEdit', 'sforaktuel': 'TextEdit', 'maxboligenhed': 'Range', 'udstykantal': 'Range', 'maxuds': 'Range', 'udstykningsplan': 'TextEdit', 'bygpctarh': 'Range', 'bygm2': 'Range', 'bygm2h': 'Range', 'fuldtbyg': 'TextEdit', 'anvspec1': 'Range', 'bygpct1': 'Range', 'bygpcth1': 'Range', 'eareal1': 'Range', 'earealh1': 'Range', 'm3_m21': 'TextEdit', 'm3_m2h1': 'Range', 'maxbhjd1': 'TextEdit', 'maxetage1': 'TextEdit', 'bygpctar1': 'Range', 'bygpctarh1': 'Range', 'bygm21': 'Range', 'bygm2h1': 'Range', 'minuds1': 'TextEdit', 'udstykfb1': 'TextEdit', 'fuldtbyg1': 'TextEdit', 'plankap1': 'TextEdit', 'plankapia1': 'TextEdit', 'forvprod1': 'TextEdit', 'forvprodia1': 'TextEdit', 'maxboligenhed1': 'Range', 'udstykantal1': 'Range', 'maxuds1': 'Range', 'antal1': 'Range', 'datoudloeb1': 'Range', 'fleksibel1': 'TextEdit', 'anvspec2': 'Range', 'bygpct2': 'Range', 'bygpcth2': 'Range', 'eareal2': 'Range', 'earealh2': 'Range', 'm3_m22': 'TextEdit', 'm3_m2h2': 'Range', 'maxbhjd2': 'TextEdit', 'maxetage2': 'TextEdit', 'bygpctar2': 'Range', 'bygpctarh2': 'Range', 'bygm22': 'Range', 'bygm2h2': 'Range', 'minuds2': 'TextEdit', 'udstykfb2': 'TextEdit', 'fuldtbyg2': 'TextEdit', 'plankap2': 'TextEdit', 'plankapia2': 'TextEdit', 'forvprod2': 'TextEdit', 'forvprodia2': 'TextEdit', 'maxboligenhed2': 'Range', 'udstykantal2': 'Range', 'maxuds2': 'Range', 'antal2': 'Range', 'datoudloeb2': 'Range', 'fleksibel2': 'TextEdit', 'anvspec3': 'Range', 'bygpct3': 'Range', 'bygpcth3': 'Range', 'eareal3': 'Range', 'earealh3': 'Range', 'm3_m23': 'TextEdit', 'm3_m2h3': 'Range', 'maxbhjd3': 'TextEdit', 'maxetage3': 'TextEdit', 'bygpctar3': 'Range', 'bygpctarh3': 'Range', 'bygm23': 'Range', 'bygm2h3': 'Range', 'minuds3': 'TextEdit', 'udstykfb3': 'TextEdit', 'fuldtbyg3': 'TextEdit', 'plankap3': 'TextEdit', 'plankapia3': 'TextEdit', 'forvprod3': 'TextEdit', 'forvprodia3': 'TextEdit', 'maxboligenhed3': 'Range', 'udstykantal3': 'Range', 'maxuds3': 'Range', 'antal3': 'Range', 'datoudloeb3': 'Range', 'fleksibel3': 'TextEdit', 'anvspec4': 'Range', 'bygpct4': 'Range', 'bygpcth4': 'Range', 'eareal4': 'Range', 'earealh4': 'Range', 'm3_m24': 'TextEdit', 'm3_m2h4': 'Range', 'maxbhjd4': 'TextEdit', 'maxetage4': 'TextEdit', 'bygpctar4': 'Range', 'bygpctarh4': 'Range', 'bygm24': 'Range', 'bygm2h4': 'Range', 'minuds4': 'TextEdit', 'udstykfb4': 'TextEdit', 'fuldtbyg4': 'TextEdit', 'plankap4': 'TextEdit', 'plankapia4': 'TextEdit', 'forvprod4': 'TextEdit', 'forvprodia4': 'TextEdit', 'maxboligenhed4': 'Range', 'udstykantal4': 'Range', 'maxuds4': 'Range', 'antal4': 'Range', 'datoudloeb4': 'Range', 'fleksibel4': 'TextEdit', 'anvspec5': 'Range', 'bygpct5': 'Range', 'bygpcth5': 'Range', 'eareal5': 'Range', 'earealh5': 'Range', 'm3_m25': 'TextEdit', 'm3_m2h5': 'Range', 'maxbhjd5': 'TextEdit', 'maxetage5': 'TextEdit', 'bygpctar5': 'Range', 'bygpctarh5': 'Range', 'bygm25': 'Range', 'bygm2h5': 'Range', 'minuds5': 'TextEdit', 'udstykfb5': 'TextEdit', 'fuldtbyg5': 'TextEdit', 'plankap5': 'TextEdit', 'plankapia5': 'TextEdit', 'forvprod5': 'TextEdit', 'forvprodia5': 'TextEdit', 'maxboligenhed5': 'Range', 'udstykantal5': 'Range', 'maxuds5': 'Range', 'antal5': 'Range', 'datoudloeb5': 'Range', 'fleksibel5': 'TextEdit', 'anvspec6': 'Range', 'bygpct6': 'Range', 'bygpcth6': 'Range', 'eareal6': 'Range', 'earealh6': 'Range', 'm3_m26': 'TextEdit', 'm3_m2h6': 'Range', 'maxbhjd6': 'TextEdit', 'maxetage6': 'TextEdit', 'bygpctar6': 'Range', 'bygpctarh6': 'Range', 'bygm26': 'Range', 'bygm2h6': 'Range', 'minuds6': 'TextEdit', 'udstykfb6': 'TextEdit', 'fuldtbyg6': 'TextEdit', 'plankap6': 'TextEdit', 'plankapia6': 'TextEdit', 'forvprod6': 'TextEdit', 'forvprodia6': 'TextEdit', 'maxboligenhed6': 'Range', 'udstykantal6': 'Range', 'maxuds6': 'Range', 'antal6': 'Range', 'datoudloeb6': 'Range', 'fleksibel6': 'TextEdit', 'anvspec7': 'Range', 'bygpct7': 'Range', 'bygpcth7': 'Range', 'eareal7': 'Range', 'earealh7': 'Range', 'm3_m27': 'TextEdit', 'm3_m2h7': 'Range', 'maxbhjd7': 'TextEdit', 'maxetage7': 'TextEdit', 'bygpctar7': 'Range', 'bygpctarh7': 'Range', 'bygm27': 'Range', 'bygm2h7': 'Range', 'minuds7': 'TextEdit', 'udstykfb7': 'TextEdit', 'fuldtbyg7': 'TextEdit', 'plankap7': 'TextEdit', 'plankapia7': 'TextEdit', 'forvprod7': 'TextEdit', 'forvprodia7': 'TextEdit', 'maxboligenhed7': 'Range', 'udstykantal7': 'Range', 'maxuds7': 'Range', 'antal7': 'Range', 'datoudloeb7': 'Range', 'fleksibel7': 'TextEdit', 'anvspec8': 'Range', 'bygpct8': 'Range', 'bygpcth8': 'Range', 'eareal8': 'Range', 'earealh8': 'Range', 'm3_m28': 'TextEdit', 'm3_m2h8': 'Range', 'maxbhjd8': 'TextEdit', 'maxetage8': 'TextEdit', 'bygpctar8': 'Range', 'bygpctarh8': 'Range', 'bygm28': 'Range', 'bygm2h8': 'Range', 'minuds8': 'TextEdit', 'udstykfb8': 'TextEdit', 'fuldtbyg8': 'TextEdit', 'plankap8': 'TextEdit', 'plankapia8': 'TextEdit', 'forvprod8': 'TextEdit', 'forvprodia8': 'TextEdit', 'maxboligenhed8': 'Range', 'udstykantal8': 'Range', 'maxuds8': 'Range', 'antal8': 'Range', 'datoudloeb8': 'Range', 'fleksibel8': 'TextEdit', 'anvspec9': 'Range', 'bygpct9': 'Range', 'bygpcth9': 'Range', 'eareal9': 'Range', 'earealh9': 'Range', 'm3_m29': 'TextEdit', 'm3_m2h9': 'Range', 'maxbhjd9': 'TextEdit', 'maxetage9': 'TextEdit', 'bygpctar9': 'Range', 'bygpctarh9': 'Range', 'bygm29': 'Range', 'bygm2h9': 'Range', 'minuds9': 'TextEdit', 'udstykfb9': 'TextEdit', 'fuldtbyg9': 'TextEdit', 'plankap9': 'TextEdit', 'plankapia9': 'TextEdit', 'forvprod9': 'TextEdit', 'forvprodia9': 'TextEdit', 'maxboligenhed9': 'Range', 'udstykantal9': 'Range', 'maxuds9': 'Range', 'antal9': 'Range', 'datoudloeb9': 'Range', 'fleksibel9': 'TextEdit', 'anvspec10': 'Range', 'bygpct10': 'Range', 'bygpcth10': 'Range', 'eareal10': 'Range', 'earealh10': 'Range', 'm3_m210': 'TextEdit', 'm3_m2h10': 'Range', 'maxbhjd10': 'TextEdit', 'maxetage10': 'TextEdit', 'bygpctar10': 'Range', 'bygpctarh10': 'Range', 'bygm210': 'Range', 'bygm2h10': 'Range', 'minuds10': 'TextEdit', 'udstykfb10': 'TextEdit', 'fuldtbyg10': 'TextEdit', 'plankap10': 'TextEdit', 'plankapia10': 'TextEdit', 'forvprod10': 'TextEdit', 'forvprodia10': 'TextEdit', 'maxboligenhed10': 'Range', 'udstykantal10': 'Range', 'maxuds10': 'Range', 'antal10': 'Range', 'datoudloeb10': 'Range', 'fleksibel10': 'TextEdit', 'abestem1': 'Range', 'abestem2': 'Range', 'abestem3': 'Range', });
lyr_Strandbeskyttelsehvidovre_3.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_kommuneplan_4.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Frededeomrder_5.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_folkeskole_6.set('fieldImages', {'fid': 'TextEdit', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Hospital_7.set('fieldImages', {'fid': 'TextEdit', 'Hospitalna': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Supermarked_8.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legeplads_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_tank_10.set('fieldImages', {'tankstatio': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_kirke_11.set('fieldImages', {'Kirkens na': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_togstationer_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_apoteker_13.set('fieldImages', {'fid': 'TextEdit', 'Apoteker': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Restcafeer_14.set('fieldImages', {'Resurantna': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Centre_15.set('fieldImages', {'Centernavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_lger_16.set('fieldImages', {'Læge': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_bank_17.set('fieldImages', {'banke': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_moske_18.set('fieldImages', {'Moskénavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'field_4': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_pdktheme_pdk_lokalplan_forslag_v_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'komnr': 'no label', 'objektkode': 'no label', 'plantype': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'anvgen': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'datoattr': 'no label', 'datogeom': 'no label', 'doklink': 'no label', 'distrikt': 'no label', 'zone': 'no label', 'bebygpct': 'no label', 'bebygpctaf': 'no label', 'bebygpctar': 'no label', 'm3_m2': 'no label', 'maxetager': 'no label', 'maxbygnhjd': 'no label', 'minmiljo': 'no label', 'maxmiljo': 'no label', 'bevarbest': 'no label', 'bebyggrad': 'no label', 'mingrund': 'no label', 'dataprod': 'no label', 'digigrundl': 'no label', 'digigrundd': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'anvendelsegenerel': 'no label', 'kommunenavn': 'no label', 'zonestatus': 'no label', 'planstatus': 'no label', 'megawatt': 'no label', 'vvmredeg': 'no label', 'sforhold': 'no label', 'minuds': 'no label', 'eareal': 'no label', 'earealh': 'no label', 'm3_m2h': 'no label', 'ianvreg': 'no label', 'izonereg': 'no label', 'iomfangreg': 'no label', 'iudstykreg': 'no label', 'kompleks': 'no label', 'kbeskriv': 'no label', 'vindbeskriv': 'no label', 'udstykforbud': 'no label', 'statsplan': 'no label', 'sforaktuel': 'no label', 'maxboligenhed': 'no label', 'udstykantal': 'no label', 'maxuds': 'no label', 'udstykningsplan': 'no label', 'bygpctarh': 'no label', 'bygm2': 'no label', 'bygm2h': 'no label', 'fuldtbyg': 'no label', 'anvspec1': 'no label', 'bygpct1': 'no label', 'bygpcth1': 'no label', 'eareal1': 'no label', 'earealh1': 'no label', 'm3_m21': 'no label', 'm3_m2h1': 'no label', 'maxbhjd1': 'no label', 'maxetage1': 'no label', 'bygpctar1': 'no label', 'bygpctarh1': 'no label', 'bygm21': 'no label', 'bygm2h1': 'no label', 'minuds1': 'no label', 'udstykfb1': 'no label', 'fuldtbyg1': 'no label', 'plankap1': 'no label', 'plankapia1': 'no label', 'forvprod1': 'no label', 'forvprodia1': 'no label', 'maxboligenhed1': 'no label', 'udstykantal1': 'no label', 'maxuds1': 'no label', 'antal1': 'no label', 'datoudloeb1': 'no label', 'fleksibel1': 'no label', 'anvspec2': 'no label', 'bygpct2': 'no label', 'bygpcth2': 'no label', 'eareal2': 'no label', 'earealh2': 'no label', 'm3_m22': 'no label', 'm3_m2h2': 'no label', 'maxbhjd2': 'no label', 'maxetage2': 'no label', 'bygpctar2': 'no label', 'bygpctarh2': 'no label', 'bygm22': 'no label', 'bygm2h2': 'no label', 'minuds2': 'no label', 'udstykfb2': 'no label', 'fuldtbyg2': 'no label', 'plankap2': 'no label', 'plankapia2': 'no label', 'forvprod2': 'no label', 'forvprodia2': 'no label', 'maxboligenhed2': 'no label', 'udstykantal2': 'no label', 'maxuds2': 'no label', 'antal2': 'no label', 'datoudloeb2': 'no label', 'fleksibel2': 'no label', 'anvspec3': 'no label', 'bygpct3': 'no label', 'bygpcth3': 'no label', 'eareal3': 'no label', 'earealh3': 'no label', 'm3_m23': 'no label', 'm3_m2h3': 'no label', 'maxbhjd3': 'no label', 'maxetage3': 'no label', 'bygpctar3': 'no label', 'bygpctarh3': 'no label', 'bygm23': 'no label', 'bygm2h3': 'no label', 'minuds3': 'no label', 'udstykfb3': 'no label', 'fuldtbyg3': 'no label', 'plankap3': 'no label', 'plankapia3': 'no label', 'forvprod3': 'no label', 'forvprodia3': 'no label', 'maxboligenhed3': 'no label', 'udstykantal3': 'no label', 'maxuds3': 'no label', 'antal3': 'no label', 'datoudloeb3': 'no label', 'fleksibel3': 'no label', 'anvspec4': 'no label', 'bygpct4': 'no label', 'bygpcth4': 'no label', 'eareal4': 'no label', 'earealh4': 'no label', 'm3_m24': 'no label', 'm3_m2h4': 'no label', 'maxbhjd4': 'no label', 'maxetage4': 'no label', 'bygpctar4': 'no label', 'bygpctarh4': 'no label', 'bygm24': 'no label', 'bygm2h4': 'no label', 'minuds4': 'no label', 'udstykfb4': 'no label', 'fuldtbyg4': 'no label', 'plankap4': 'no label', 'plankapia4': 'no label', 'forvprod4': 'no label', 'forvprodia4': 'no label', 'maxboligenhed4': 'no label', 'udstykantal4': 'no label', 'maxuds4': 'no label', 'antal4': 'no label', 'datoudloeb4': 'no label', 'fleksibel4': 'no label', 'anvspec5': 'no label', 'bygpct5': 'no label', 'bygpcth5': 'no label', 'eareal5': 'no label', 'earealh5': 'no label', 'm3_m25': 'no label', 'm3_m2h5': 'no label', 'maxbhjd5': 'no label', 'maxetage5': 'no label', 'bygpctar5': 'no label', 'bygpctarh5': 'no label', 'bygm25': 'no label', 'bygm2h5': 'no label', 'minuds5': 'no label', 'udstykfb5': 'no label', 'fuldtbyg5': 'no label', 'plankap5': 'no label', 'plankapia5': 'no label', 'forvprod5': 'no label', 'forvprodia5': 'no label', 'maxboligenhed5': 'no label', 'udstykantal5': 'no label', 'maxuds5': 'no label', 'antal5': 'no label', 'datoudloeb5': 'no label', 'fleksibel5': 'no label', 'anvspec6': 'no label', 'bygpct6': 'no label', 'bygpcth6': 'no label', 'eareal6': 'no label', 'earealh6': 'no label', 'm3_m26': 'no label', 'm3_m2h6': 'no label', 'maxbhjd6': 'no label', 'maxetage6': 'no label', 'bygpctar6': 'no label', 'bygpctarh6': 'no label', 'bygm26': 'no label', 'bygm2h6': 'no label', 'minuds6': 'no label', 'udstykfb6': 'no label', 'fuldtbyg6': 'no label', 'plankap6': 'no label', 'plankapia6': 'no label', 'forvprod6': 'no label', 'forvprodia6': 'no label', 'maxboligenhed6': 'no label', 'udstykantal6': 'no label', 'maxuds6': 'no label', 'antal6': 'no label', 'datoudloeb6': 'no label', 'fleksibel6': 'no label', 'anvspec7': 'no label', 'bygpct7': 'no label', 'bygpcth7': 'no label', 'eareal7': 'no label', 'earealh7': 'no label', 'm3_m27': 'no label', 'm3_m2h7': 'no label', 'maxbhjd7': 'no label', 'maxetage7': 'no label', 'bygpctar7': 'no label', 'bygpctarh7': 'no label', 'bygm27': 'no label', 'bygm2h7': 'no label', 'minuds7': 'no label', 'udstykfb7': 'no label', 'fuldtbyg7': 'no label', 'plankap7': 'no label', 'plankapia7': 'no label', 'forvprod7': 'no label', 'forvprodia7': 'no label', 'maxboligenhed7': 'no label', 'udstykantal7': 'no label', 'maxuds7': 'no label', 'antal7': 'no label', 'datoudloeb7': 'no label', 'fleksibel7': 'no label', 'anvspec8': 'no label', 'bygpct8': 'no label', 'bygpcth8': 'no label', 'eareal8': 'no label', 'earealh8': 'no label', 'm3_m28': 'no label', 'm3_m2h8': 'no label', 'maxbhjd8': 'no label', 'maxetage8': 'no label', 'bygpctar8': 'no label', 'bygpctarh8': 'no label', 'bygm28': 'no label', 'bygm2h8': 'no label', 'minuds8': 'no label', 'udstykfb8': 'no label', 'fuldtbyg8': 'no label', 'plankap8': 'no label', 'plankapia8': 'no label', 'forvprod8': 'no label', 'forvprodia8': 'no label', 'maxboligenhed8': 'no label', 'udstykantal8': 'no label', 'maxuds8': 'no label', 'antal8': 'no label', 'datoudloeb8': 'no label', 'fleksibel8': 'no label', 'anvspec9': 'no label', 'bygpct9': 'no label', 'bygpcth9': 'no label', 'eareal9': 'no label', 'earealh9': 'no label', 'm3_m29': 'no label', 'm3_m2h9': 'no label', 'maxbhjd9': 'no label', 'maxetage9': 'no label', 'bygpctar9': 'no label', 'bygpctarh9': 'no label', 'bygm29': 'no label', 'bygm2h9': 'no label', 'minuds9': 'no label', 'udstykfb9': 'no label', 'fuldtbyg9': 'no label', 'plankap9': 'no label', 'plankapia9': 'no label', 'forvprod9': 'no label', 'forvprodia9': 'no label', 'maxboligenhed9': 'no label', 'udstykantal9': 'no label', 'maxuds9': 'no label', 'antal9': 'no label', 'datoudloeb9': 'no label', 'fleksibel9': 'no label', 'anvspec10': 'no label', 'bygpct10': 'no label', 'bygpcth10': 'no label', 'eareal10': 'no label', 'earealh10': 'no label', 'm3_m210': 'no label', 'm3_m2h10': 'no label', 'maxbhjd10': 'no label', 'maxetage10': 'no label', 'bygpctar10': 'no label', 'bygpctarh10': 'no label', 'bygm210': 'no label', 'bygm2h10': 'no label', 'minuds10': 'no label', 'udstykfb10': 'no label', 'fuldtbyg10': 'no label', 'plankap10': 'no label', 'plankapia10': 'no label', 'forvprod10': 'no label', 'forvprodia10': 'no label', 'maxboligenhed10': 'no label', 'udstykantal10': 'no label', 'maxuds10': 'no label', 'antal10': 'no label', 'datoudloeb10': 'no label', 'fleksibel10': 'no label', 'abestem1': 'no label', 'abestem2': 'no label', 'abestem3': 'no label', });
lyr_samletmappehvidovrepdktheme_pdk_lokalplan_vedtaget_v_2.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'komnr': 'no label', 'objektkode': 'no label', 'plantype': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'anvgen': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'datoattr': 'no label', 'datogeom': 'no label', 'doklink': 'no label', 'distrikt': 'no label', 'zone': 'no label', 'bebygpct': 'no label', 'bebygpctaf': 'no label', 'bebygpctar': 'no label', 'm3_m2': 'no label', 'maxetager': 'no label', 'maxbygnhjd': 'no label', 'minmiljo': 'no label', 'maxmiljo': 'no label', 'bevarbest': 'no label', 'bebyggrad': 'no label', 'mingrund': 'no label', 'dataprod': 'no label', 'digigrundl': 'no label', 'digigrundd': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'anvendelsegenerel': 'no label', 'kommunenavn': 'no label', 'zonestatus': 'no label', 'planstatus': 'no label', 'megawatt': 'no label', 'vvmredeg': 'no label', 'sforhold': 'no label', 'minuds': 'no label', 'eareal': 'no label', 'earealh': 'no label', 'm3_m2h': 'no label', 'ianvreg': 'no label', 'izonereg': 'no label', 'iomfangreg': 'no label', 'iudstykreg': 'no label', 'kompleks': 'no label', 'kbeskriv': 'no label', 'vindbeskriv': 'no label', 'udstykforbud': 'no label', 'statsplan': 'no label', 'sforaktuel': 'no label', 'maxboligenhed': 'no label', 'udstykantal': 'no label', 'maxuds': 'no label', 'udstykningsplan': 'no label', 'bygpctarh': 'no label', 'bygm2': 'no label', 'bygm2h': 'no label', 'fuldtbyg': 'no label', 'anvspec1': 'no label', 'bygpct1': 'no label', 'bygpcth1': 'no label', 'eareal1': 'no label', 'earealh1': 'no label', 'm3_m21': 'no label', 'm3_m2h1': 'no label', 'maxbhjd1': 'no label', 'maxetage1': 'no label', 'bygpctar1': 'no label', 'bygpctarh1': 'no label', 'bygm21': 'no label', 'bygm2h1': 'no label', 'minuds1': 'no label', 'udstykfb1': 'no label', 'fuldtbyg1': 'no label', 'plankap1': 'no label', 'plankapia1': 'no label', 'forvprod1': 'no label', 'forvprodia1': 'no label', 'maxboligenhed1': 'no label', 'udstykantal1': 'no label', 'maxuds1': 'no label', 'antal1': 'no label', 'datoudloeb1': 'no label', 'fleksibel1': 'no label', 'anvspec2': 'no label', 'bygpct2': 'no label', 'bygpcth2': 'no label', 'eareal2': 'no label', 'earealh2': 'no label', 'm3_m22': 'no label', 'm3_m2h2': 'no label', 'maxbhjd2': 'no label', 'maxetage2': 'no label', 'bygpctar2': 'no label', 'bygpctarh2': 'no label', 'bygm22': 'no label', 'bygm2h2': 'no label', 'minuds2': 'no label', 'udstykfb2': 'no label', 'fuldtbyg2': 'no label', 'plankap2': 'no label', 'plankapia2': 'no label', 'forvprod2': 'no label', 'forvprodia2': 'no label', 'maxboligenhed2': 'no label', 'udstykantal2': 'no label', 'maxuds2': 'no label', 'antal2': 'no label', 'datoudloeb2': 'no label', 'fleksibel2': 'no label', 'anvspec3': 'no label', 'bygpct3': 'no label', 'bygpcth3': 'no label', 'eareal3': 'no label', 'earealh3': 'no label', 'm3_m23': 'no label', 'm3_m2h3': 'no label', 'maxbhjd3': 'no label', 'maxetage3': 'no label', 'bygpctar3': 'no label', 'bygpctarh3': 'no label', 'bygm23': 'no label', 'bygm2h3': 'no label', 'minuds3': 'no label', 'udstykfb3': 'no label', 'fuldtbyg3': 'no label', 'plankap3': 'no label', 'plankapia3': 'no label', 'forvprod3': 'no label', 'forvprodia3': 'no label', 'maxboligenhed3': 'no label', 'udstykantal3': 'no label', 'maxuds3': 'no label', 'antal3': 'no label', 'datoudloeb3': 'no label', 'fleksibel3': 'no label', 'anvspec4': 'no label', 'bygpct4': 'no label', 'bygpcth4': 'no label', 'eareal4': 'no label', 'earealh4': 'no label', 'm3_m24': 'no label', 'm3_m2h4': 'no label', 'maxbhjd4': 'no label', 'maxetage4': 'no label', 'bygpctar4': 'no label', 'bygpctarh4': 'no label', 'bygm24': 'no label', 'bygm2h4': 'no label', 'minuds4': 'no label', 'udstykfb4': 'no label', 'fuldtbyg4': 'no label', 'plankap4': 'no label', 'plankapia4': 'no label', 'forvprod4': 'no label', 'forvprodia4': 'no label', 'maxboligenhed4': 'no label', 'udstykantal4': 'no label', 'maxuds4': 'no label', 'antal4': 'no label', 'datoudloeb4': 'no label', 'fleksibel4': 'no label', 'anvspec5': 'no label', 'bygpct5': 'no label', 'bygpcth5': 'no label', 'eareal5': 'no label', 'earealh5': 'no label', 'm3_m25': 'no label', 'm3_m2h5': 'no label', 'maxbhjd5': 'no label', 'maxetage5': 'no label', 'bygpctar5': 'no label', 'bygpctarh5': 'no label', 'bygm25': 'no label', 'bygm2h5': 'no label', 'minuds5': 'no label', 'udstykfb5': 'no label', 'fuldtbyg5': 'no label', 'plankap5': 'no label', 'plankapia5': 'no label', 'forvprod5': 'no label', 'forvprodia5': 'no label', 'maxboligenhed5': 'no label', 'udstykantal5': 'no label', 'maxuds5': 'no label', 'antal5': 'no label', 'datoudloeb5': 'no label', 'fleksibel5': 'no label', 'anvspec6': 'no label', 'bygpct6': 'no label', 'bygpcth6': 'no label', 'eareal6': 'no label', 'earealh6': 'no label', 'm3_m26': 'no label', 'm3_m2h6': 'no label', 'maxbhjd6': 'no label', 'maxetage6': 'no label', 'bygpctar6': 'no label', 'bygpctarh6': 'no label', 'bygm26': 'no label', 'bygm2h6': 'no label', 'minuds6': 'no label', 'udstykfb6': 'no label', 'fuldtbyg6': 'no label', 'plankap6': 'no label', 'plankapia6': 'no label', 'forvprod6': 'no label', 'forvprodia6': 'no label', 'maxboligenhed6': 'no label', 'udstykantal6': 'no label', 'maxuds6': 'no label', 'antal6': 'no label', 'datoudloeb6': 'no label', 'fleksibel6': 'no label', 'anvspec7': 'no label', 'bygpct7': 'no label', 'bygpcth7': 'no label', 'eareal7': 'no label', 'earealh7': 'no label', 'm3_m27': 'no label', 'm3_m2h7': 'no label', 'maxbhjd7': 'no label', 'maxetage7': 'no label', 'bygpctar7': 'no label', 'bygpctarh7': 'no label', 'bygm27': 'no label', 'bygm2h7': 'no label', 'minuds7': 'no label', 'udstykfb7': 'no label', 'fuldtbyg7': 'no label', 'plankap7': 'no label', 'plankapia7': 'no label', 'forvprod7': 'no label', 'forvprodia7': 'no label', 'maxboligenhed7': 'no label', 'udstykantal7': 'no label', 'maxuds7': 'no label', 'antal7': 'no label', 'datoudloeb7': 'no label', 'fleksibel7': 'no label', 'anvspec8': 'no label', 'bygpct8': 'no label', 'bygpcth8': 'no label', 'eareal8': 'no label', 'earealh8': 'no label', 'm3_m28': 'no label', 'm3_m2h8': 'no label', 'maxbhjd8': 'no label', 'maxetage8': 'no label', 'bygpctar8': 'no label', 'bygpctarh8': 'no label', 'bygm28': 'no label', 'bygm2h8': 'no label', 'minuds8': 'no label', 'udstykfb8': 'no label', 'fuldtbyg8': 'no label', 'plankap8': 'no label', 'plankapia8': 'no label', 'forvprod8': 'no label', 'forvprodia8': 'no label', 'maxboligenhed8': 'no label', 'udstykantal8': 'no label', 'maxuds8': 'no label', 'antal8': 'no label', 'datoudloeb8': 'no label', 'fleksibel8': 'no label', 'anvspec9': 'no label', 'bygpct9': 'no label', 'bygpcth9': 'no label', 'eareal9': 'no label', 'earealh9': 'no label', 'm3_m29': 'no label', 'm3_m2h9': 'no label', 'maxbhjd9': 'no label', 'maxetage9': 'no label', 'bygpctar9': 'no label', 'bygpctarh9': 'no label', 'bygm29': 'no label', 'bygm2h9': 'no label', 'minuds9': 'no label', 'udstykfb9': 'no label', 'fuldtbyg9': 'no label', 'plankap9': 'no label', 'plankapia9': 'no label', 'forvprod9': 'no label', 'forvprodia9': 'no label', 'maxboligenhed9': 'no label', 'udstykantal9': 'no label', 'maxuds9': 'no label', 'antal9': 'no label', 'datoudloeb9': 'no label', 'fleksibel9': 'no label', 'anvspec10': 'no label', 'bygpct10': 'no label', 'bygpcth10': 'no label', 'eareal10': 'no label', 'earealh10': 'no label', 'm3_m210': 'no label', 'm3_m2h10': 'no label', 'maxbhjd10': 'no label', 'maxetage10': 'no label', 'bygpctar10': 'no label', 'bygpctarh10': 'no label', 'bygm210': 'no label', 'bygm2h10': 'no label', 'minuds10': 'no label', 'udstykfb10': 'no label', 'fuldtbyg10': 'no label', 'plankap10': 'no label', 'plankapia10': 'no label', 'forvprod10': 'no label', 'forvprodia10': 'no label', 'maxboligenhed10': 'no label', 'udstykantal10': 'no label', 'maxuds10': 'no label', 'antal10': 'no label', 'datoudloeb10': 'no label', 'fleksibel10': 'no label', 'abestem1': 'no label', 'abestem2': 'no label', 'abestem3': 'no label', });
lyr_Strandbeskyttelsehvidovre_3.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_kommuneplan_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Frededeomrder_5.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_folkeskole_6.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'header label - always visible', 'Adresse': 'header label - always visible', 'By': 'header label - always visible', 'Hjemmeside': 'header label - always visible', });
lyr_Hospital_7.set('fieldLabels', {'fid': 'no label', 'Hospitalna': 'inline label - always visible', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Supermarked_8.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Legeplads_9.set('fieldLabels', {'Name': 'no label', });
lyr_tank_10.set('fieldLabels', {'tankstatio': 'no label', 'Adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_kirke_11.set('fieldLabels', {'Kirkens na': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_togstationer_12.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', });
lyr_apoteker_13.set('fieldLabels', {'fid': 'no label', 'Apoteker': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Restcafeer_14.set('fieldLabels', {'Resurantna': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Centre_15.set('fieldLabels', {'Centernavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_lger_16.set('fieldLabels', {'Læge': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_bank_17.set('fieldLabels', {'banke': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_moske_18.set('fieldLabels', {'Moskénavn': 'no label', 'adresse': 'no label', 'by': 'no label', });
lyr_moske_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});