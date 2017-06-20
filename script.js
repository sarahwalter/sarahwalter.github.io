<script type="text/javascript">

window.addEventListener('load', onVrViewLoad)
function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview', {
    image: 'images/vrimage.jpg',
    is_stereo: false
  });
vrView.on('ready',function(){
  vrView.addHotspot('hotspot-one', {
         pitch: 30, // In degrees. Up is positive.
          yaw: 20, // In degrees. To the right is positive.
          radius:   0.05, // Radius of the circular target in meters.
          distance: 2, // Distance of target from camera in meters.
    });
}
});

</script>

<div id="vrview">
</div>