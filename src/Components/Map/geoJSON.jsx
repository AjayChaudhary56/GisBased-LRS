import { GeoJSON, MapContainer, Marker, useMapEvents } from "react-leaflet";
import geoJsonFileData from "./geoJSONdata.json";
import * as ReactDOMServer from "react-dom/server";
import { useEffect, useState } from "react";
import L from 'leaflet'

const GeoJSONLayer = ({ searchParcelId, setPopupData }) => {
  console.log(`searchParcelId :: ${searchParcelId}`);

  var prevLayerClicked = null;
  const map = useMapEvents({});
  const Popup = ({ feature, layer }) => {
    let popupContent;

    if (feature.properties && feature.properties.popupContent) {
      popupContent = feature.properties.popupContent;
    }

    return (
      <div>
        <p>Parcel ID:{feature.properties.id}</p>
        <p>ward No : {feature.properties.wardno}</p>
        <p>Map Sheet No:{feature.properties.mapsheetno}</p>
        <p>Sheet Id:{feature.properties.sheetid}</p>
        <p>Parcel No:{feature.properties.parcelno}</p>
        <p>Use Type :{feature.properties.Use_Type}</p>
        <p>Street:{feature.properties.Street}</p>
        <p>Area:{feature.properties.Area + " Sq.m"}</p>
        {popupContent}
      </div>
    );
  };

  const onEachFeature = (feature, layer) => {
    const popupContent = ReactDOMServer.renderToString(
      <Popup feature={feature} layer={layer} />
    );

    layer.bindPopup(popupContent);
    layer.on({
      click: (e) => {
        map.flyTo(
          [
            layer.feature.geometry.coordinates[0][0][1],
            layer.feature.geometry.coordinates[0][0][0],
          ],
          20
        );

        if (prevLayerClicked !== null) {
          prevLayerClicked.setStyle({
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "",
            fillOpacity: 1.2,
            fillColor: "transparent",
          });
        }
        layer.setStyle({
          weight: 1,
          dashArray: "",
          fillOpacity: 0.4,
          fillColor: "blue",
        });
        prevLayerClicked = layer;
      },
    });
  };

  useEffect(() => {
    geoJsonFileData.features.map((e) => {
      if (e.properties.id === searchParcelId) {
        setPopupData({
          latLng: [
            e.properties.CENTROID_Y,
            e.properties.CENTROID_X
            // e.geometry.coordinates[0][4][1],
            // e.geometry.coordinates[0][4][0],
          ],
          message: {
            id: e.properties.id,
            wardno:e.properties.wardno,
            mapsheetno:e.properties.mapsheetno,
            sheetid:e.properties.sheetid,
            parcelno:e.properties.parcelno,
            Use_Type:e.properties.Use_Type,
            Street:e.properties.Street,
            Area:e.properties.Area,

          },
        });
        map.flyTo(
          [e.geometry.coordinates[0][0][1], e.geometry.coordinates[0][0][0]],
          20
        );
        
      }
    });
  }, [searchParcelId]);

  return (
    <GeoJSON
      data={geoJsonFileData}
      onEachFeature={onEachFeature}
      style={{
        fillColor: "black",
        weight: 1.5,
        opacity: 1,
        color: "white",
      }}
    />
  );
};

export default GeoJSONLayer;
