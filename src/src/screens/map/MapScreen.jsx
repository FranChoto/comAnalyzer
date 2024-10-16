import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import "./mapScreen.css"; // Asegúrate de crear un archivo CSS para los estilos de tu mapa

mapboxgl.accessToken = "pk.eyJ1Ijoic3JwaW5vMjMiLCJhIjoiY20weTJ2OW9rMGl2czJucHFnYzdnOXd0eCJ9.ROcEsj7ffoAr6alk-UCoFw";

const MapScreen = () => {
  // Utiliza useRef para referenciar el contenedor del mapa
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Inicializar el mapa con la referencia al contenedor
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Aquí aseguramos que el contenedor es un HTMLElement
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-58.6106, -34.6038], // Coordenadas de inicio
      zoom: 12, // Nivel de zoom inicial
    });

    // Añadir controles de navegación
    map.addControl(new mapboxgl.NavigationControl());

    // URL del GeoJSON y API de cámaras
    const geojsonUrl = "../../../private/tres_de_febrero_limits.geojson";

    map.on("load", () => {
      // Añadir la fuente GeoJSON
      map.addSource("geojson-source", {
        type: "geojson",
        data: geojsonUrl,
      });

      // Añadir capa de relleno
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

      // Añadir capa de línea
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

      // Fetch para obtener los datos de cámaras
      fetch('http://192.168.25.191:2300/api/camera/getCameras')
        .then(response => response.json())
        .then(data => {
          const cameras = data || []; // Verificar que sea un array

          if (cameras.length === 0) {
            console.log('No hay cámaras disponibles');
          }

          cameras.forEach(camera => {
            const { longitude, latitude, name, status, type } = camera;

            // Agregar los marcadores al mapa
            new mapboxgl.Marker({
              element: createCustomIcon(status, type.toLowerCase()),
            })
              .setLngLat([longitude, latitude]) // Asignar las coordenadas
              .setPopup(
                new mapboxgl.Popup({ offset: 10 }).setHTML(`
                  <div class="popup-content">
                    <h3>${name}</h3>
                    <p>Estado: <span class="${status}">${translateStatus(status)}</span></p>
                    <p>Tipo: ${translateType(type)}</p>
                    <a href="#" class="popup-link">Detalles</a>
                  </div>
                `)
              )
              .addTo(map);
          });
        })
        .catch(error => {
          console.error('Error fetching cameras:', error);
        });
    });

    // Limpieza del mapa al desmontar el componente
    return () => map.remove();
  }, []);

  // Función para crear íconos personalizados
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

    el.style.backgroundImage = `url(${iconBaseUrl}${icons[status][type] || "Fija-default.svg"})`;
    el.style.width = "30px";
    el.style.height = "30px";
    el.style.backgroundSize = "100%";
    return el;
  }

  // Función para traducir el estado de la cámara
  function translateStatus(status) {
    const translatedStatus = {
      online: "En línea",
      offline: "Fuera de línea",
      warning: "Advertencia",
    };
    return translatedStatus[status] || "Desconocido";
  }

  // Función para traducir el tipo de cámara
  function translateType(type) {
    const translatedTypes = {
      LPR: "LPR",
      Dome: "Domo",
      Fixed: "Fija",
      Button: "Botón",
    };
    return translatedTypes[type] || "Desconocido";
  }

  // Renderizar el mapa usando la referencia al contenedor
  return <div ref={mapContainerRef} id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapScreen;