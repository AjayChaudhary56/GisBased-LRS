import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { MdChangeCircle } from "react-icons/md";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  // Marker,
  // Popup,
  // useMapEvents,
} from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import { Icon, divIcon, point } from "leaflet";
import GeoJSONLayer from "./geoJSON";
import "./map.css";
import "leaflet/dist/leaflet.css";
import geoJsonFileData from "./geoJSONdata.json";

const BasicMap = () => {
  const [popupData, setPopupData] = useState(null);
  const [zoom, setZoom] = useState(18);
  const [parcelId, setParcelID] = useState("");
  const [base, setBase] = useState(
    "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
  );
  const inputRef = useRef(null);
  const mapRef = useRef();
  console.log(parcelId);
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setZoom(zoom - 1); // zoom out
    } else {
      setZoom(zoom + 1); // zoom in
    }
  };

  return (
    <div className="whole-map">
      <div className="search-filter">
        <input
          ref={inputRef}
          type="text"
          name="parcelId"
          placeholder="Enter your Parcel ID  "
        />
        <button onClick={() => setParcelID(inputRef.current.value)}>
          Search <GoSearch />
        </button>
      </div>
      <div className="main-map" onWheel={handleScroll}>
        <MapContainer
          center={[28.25470186276356, 83.97656117630311]}
          zoom={zoom}
          ref={mapRef}
        >
          {/* GOOGLE MAPS TILES */}
          <TileLayer
            attribution="Google Maps"
            // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
            url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
            // "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
            // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
          <GeoJSONLayer searchParcelId={parcelId} setPopupData={setPopupData} />
          {popupData && (
            <Popup
              position={popupData.latLng}
              onClose={() => setPopupData(null)}
            >
              <div>
                {" "}
                <p>Parcel ID:{popupData.message.id}</p>
                <p>ward No : {popupData.message.wardno}</p>
                <p>Map Sheet No:{popupData.message.mapsheetno}</p>
                <p>Sheet Id:{popupData.message.sheetid}</p>
                <p>Parcel No:{popupData.message.parcelno}</p>
                <p>Use Type :{popupData.message.Use_Type}</p>
                <p>Street:{popupData.message.Street}</p>
                <p>Area:{popupData.message.Area + " Sq.m"}</p>
              </div>
            </Popup>
          )}

          {/*Open Street Map */}
          {/* <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          ></TileLayer> */}
          {/* WATERCOLOR CUSTOM TILES */}
          {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}

          {/* <ImageOverlay 
       attribution="Lamachaur Parcel"
      url="https://api.maptiler.com/data/a9aa83ab-12de-4019-a621-8022639ad4c5/features.json?key=dWCT79GGO5bYoCpN21zG"
      /> */}

          {/* <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default BasicMap;
