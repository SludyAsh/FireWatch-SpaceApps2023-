document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  const socket = io();

  // Display existing waypoints
  socket.on('waypoints', (waypoints) => {
    waypoints.forEach((waypoint) => {
      addMarker(waypoint);
    });
  });

  // Add a new waypoint
  document.getElementById('map').addEventListener('contextmenu', (e) => {
    const latLng = map.mouseEventToLatLng(e.originalEvent);
    const waypoint = { lat: latLng.lat, lng: latLng.lng };

    socket.emit('addWaypoint', waypoint);
    addMarker(waypoint);
  });

  // Display a newly added waypoint
  socket.on('waypointAdded', (waypoint) => {
    addMarker(waypoint);
  });

  function addMarker(waypoint) {
    L.marker([waypoint.lat, waypoint.lng]).addTo(map);
  }
});
