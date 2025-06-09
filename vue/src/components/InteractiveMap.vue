<template>
  <div class="tw:w-full tw:h-[800px] tw:rounded-lg tw:shadow-md tw:relative" id="map-container">
    <div id="map" class="tw:w-full tw:h-full tw:rounded-lg"></div>
    <div
      id="zoomHint"
      class="tw:hidden tw:absolute tw:top-0 tw:left-0 tw:w-full tw:h-full tw:bg-black/60 tw:flex tw:items-center tw:justify-center tw:text-white tw:text-lg tw:font-semibold tw:rounded-lg pointer-events-none"
    >
      Maintenez Ctrl + molette pour zoomer
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'

mapboxgl.accessToken =
  'pk.eyJ1IjoidnRoaWJhdXQiLCJhIjoiY2xpbzh3ajZrMDZ2czNlbnYxamsycTlxdiJ9.Xsyu55iwbsOEB_74e6TUCg'

// 📍 Coordonnées de Saint-Vincent de Paul (Landes)
const centerCoords: [number, number] = [-1.0086, 43.748]

onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerCoords,
    zoom: 10
  })

  // Désactivation du zoom molette par défaut
  map.scrollZoom.disable()

  // Gestion du zoom uniquement avec Ctrl + molette
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    if (!e.ctrlKey) {
      showHint()
      return
    }

    // Zoom manuel dans la carte
    if (e.deltaY < 0) {
      map.zoomIn()
    } else {
      map.zoomOut()
    }
  }

  const showHint = () => {
    const hintEl = document.getElementById('zoomHint')
    if (hintEl) {
      hintEl.classList.remove('tw:hidden')
      setTimeout(() => {
        hintEl.classList.add('tw:hidden')
      }, 500)
    }
  }

  map.getCanvas().addEventListener('wheel', handleWheel, { passive: false })

  // Ajout du marqueur
  new mapboxgl.Marker({ color: '#fe007b' })
    .setLngLat(centerCoords)
    .setPopup(
      new mapboxgl.Popup().setText("Zone principale d'intervention (Saint-Vincent-de-Paul)")
    )
    .addTo(map)

  // Cercle de 15 km autour du marqueur
  map.on('load', () => {
    const circle = turf.circle(centerCoords, 10, {
      steps: 64,
      units: 'kilometers'
    })

    map.addSource('zone-15km', {
      type: 'geojson',
      data: circle
    })

    map.addLayer({
      id: 'zone-15km-fill',
      type: 'fill',
      source: 'zone-15km',
      paint: {
        'fill-color': '#fe007b',
        'fill-opacity': 0.15
      }
    })

    map.addLayer({
      id: 'zone-15km-outline',
      type: 'line',
      source: 'zone-15km',
      paint: {
        'line-color': '#fe007b',
        'line-width': 2
      }
    })
  })
})
</script>

<style scoped>
.mapboxgl-canvas {
  border-radius: 0.5rem;
}
</style>
