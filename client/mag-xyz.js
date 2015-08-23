/* jshint browserify: true */
/* global io */
var three = require('three'),
    scene = new three.Scene(),
    camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer = new three.WebGLRenderer(),
    light = new three.DirectionalLight(0xffff00, 0.5),
    mag_x = 0,
    mag_y = 0,
    mag_z = 0

renderer.setSize( window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var geometry = new three.BoxGeometry(1, 1, 1),
    material = new three.MeshLambertMaterial( { color: 0x00ff00 }),
    cube = new three.Mesh(geometry, material)

scene.add( cube )
camera.position.z = 5
light.position.set(0, 1, 5)
scene.add(light)

function render() {
  requestAnimationFrame( render )
  /**
   * @todo Do something 3D with the Accelerometer data.
   */
  renderer.render( scene, camera)
}

var socket = io.connect()
socket.on('mag_xyz', function (data) {
  mag_x = data.mag_x
  mag_y = data.mag_y
  mag_z = data.mag_z

  console.log('Magnetometer XYZ: ', mag_x, mag_y, mag_z);
})

render()
