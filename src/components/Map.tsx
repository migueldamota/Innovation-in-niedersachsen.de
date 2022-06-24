import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = "pk.eyJ1IjoibWlndWVsZGFtb3RhIiwiYSI6ImNrdzF2c2RpcTFjdHEyeG5vd3hsZWd4ZHkifQ.nKgaZg-mwnmYBi0XHgvjTA";

interface MapContainer {
    current: mapboxgl.Map
}

export default function Map () {
    const [loading, setLoading] = useState(true);

    const mapContainer: any = useRef<HTMLDivElement>(),
        map: MapContainer = useRef() as any as MapContainer;

    const position = { lat: 52.593342, lon: 9.126210 };

    const [marker, setMarker] = useState(null as any as mapboxgl.Marker);
    const zoom = 7;

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current as any,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [position.lon, position.lat],
            zoom,
        });

        map.current.on("load", () => {
            setLoading(false);
        });

        setMarker(
            new mapboxgl.Marker({
                color: "#3742fa",
                scale: .8,
            })
            .setLngLat([8.053190, 52.267280])
            .addTo(map.current)
            .setPopup(
                new mapboxgl.Popup()
                    .setText("Osnabrück, Hauptquartier")
                    .addTo(map.current),
            ),
        );
    }, []);

    useEffect(() => {
        map.current.flyTo({
            center: [position.lon, position.lat],
            zoom,
        });
    }, [loading]);

    return (
        <>
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />
            <div className="mapContainer" ref={mapContainer} />
        </>
    )
}
