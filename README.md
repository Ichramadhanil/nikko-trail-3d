# Nikko Trail 3D
Interactive Ryuzu–Senjugahama hiking guide with an official Google Maps Street View embed, 2D/3D route map, elevation profile, museum photos and video, and KML/GeoJSON export.

## Run
Serve this directory with an HTTP server, e.g. `python -m http.server 8766`. GitHub Pages serves the main branch root. No build step, credentials or API key is required.

## Data and limits
- Google Street View: Senjugahama panorama, captured October 2015. Native panorama navigation is independent from the route slider; complete trail coverage is not verified. It is not live footage.
- Geometry: OpenStreetMap contributors, ODbL; extracted 14 October 2026. About 6.95 km return in this geometry, versus about 8 km return in the museum planning guide. Not a verified GPS track.
- Imagery/topography: GSI Japan. Elevation: Mapzen Terrarium/AWS, scale 1x. Raster imagery and DEM are not a photogrammetric reconstruction. Cumulative ascent is approximate.
- Photos/video: Nikko Natural Science Museum, loaded from their original providers. Attribution and links appear in the application.
- MapLibre GL JS 5.7.3, BSD-3-Clause, https://github.com/maplibre/maplibre-gl-js/blob/v5.7.3/LICENSE.txt

External media and maps need internet; terrain mode needs WebGL. If 3D is distorted, use Peta 2D. Check trail opening, weather and parking locally before hiking.
