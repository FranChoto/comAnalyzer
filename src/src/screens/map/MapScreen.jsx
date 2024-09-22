import { useEffect } from "react";
import "./mapScreen.css";
import mapboxgl from "mapbox-gl";

function MapScreen() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3JwaW5vMjMiLCJhIjoiY20weTJ2OW9rMGl2czJucHFnYzdnOXd0eCJ9.ROcEsj7ffoAr6alk-UCoFw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-58.6106, -34.6038],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl());

    const geojsonUrl = "../../../private/tres_de_febrero_limits.geojson";

    map.on("load", () => {
      map.addSource("geojson-source", {
        type: "geojson",
        data: geojsonUrl,
      });

      map.addLayer({
        id: "geojson-fill-layer",
        type: "fill",
        source: "geojson-source",
        layout: {},
        paint: {
          "fill-color": "#00ff7f",
          "fill-opacity": 0.02,
        },
      });

      map.addLayer({
        id: "geojson-line-layer",
        type: "line",
        source: "geojson-source",
        layout: {},
        paint: {
          "line-color": "#00ff7f",
          "line-width": 3,
          "line-opacity": 0.8,
        },
      });

      const markers = [
        {
          coordinates: [-58.563, -34.605],
          description: "LPR 1",
          status: "online",
          type: "lpr",
        },
        {
          coordinates: [-58.555, -34.6],
          description: "Domo 1",
          status: "offline",
          type: "dome",
        },
        {
          coordinates: [-58.545, -34.605],
          description: "Fija 1",
          status: "warning",
          type: "fixed",
        },
        {
          coordinates: [-58.545, -34.63],
          description: "Boton 1",
          status: "online",
          type: "button",
        },
      ];

      const translatedStatus = {
        online: "En línea",
        offline: "Fuera de línea",
        warning: "Advertencia",
      };

      const translatedTypes = {
        lpr: "LPR",
        dome: "Domo",
        fixed: "Fija",
        button: "Botón",
      };

      markers.forEach((marker) => {
        new mapboxgl.Marker({
          element: createCustomIcon(marker.status, marker.type),
        })
          .setLngLat(marker.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 10 }).setHTML(`
              <div class="popup-content">
                <h3>${marker.description}</h3>
                <p>Estado: <span class="${marker.status}">${
              translatedStatus[marker.status] || "Desconocido"
            }</span></p>
                <p>Tipo: ${translatedTypes[marker.type] || "Desconocido"}</p>
                <a href="#" class="popup-link">Detalles</a>
              </div>
            `)
          )
          .addTo(map);
      });

      function createCustomIcon(status, type) {
        const el = document.createElement("div");
        el.className = "custom-marker";

        const iconBaseUrl = "mapIcons/";
        const icons = {
          online: {
            lpr: "Lpr-online.svg",
            dome: "Dome-online.svg",
            fixed: "Fixed-online.svg",
            button: "Button-online.svg",
          },
          offline: {
            lpr: "Lpr-offline.svg",
            dome: "Dome-offline.svg",
            fixed: "Fixed-offline.svg",
            button: "Button-offline.svg",
          },
          warning: {
            lpr: "Lpr-warning.svg",
            dome: "Dome-warning.svg",
            fixed: "Fixed-warning.svg",
            button: "Button-warning.svg",
          },
        };

        el.style.backgroundImage = `url('${iconBaseUrl}${
          icons[status][type] || "Fija-default.svg"
        }')`;
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.backgroundSize = "100%";
        return el;
      }
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
}

export default MapScreen;