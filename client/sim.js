/* jshint browserify: true */
/* global io */
var three = require('three'),
    scene = new three.Scene(),
    camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer = new three.WebGLRenderer(),
    light = new three.DirectionalLight(0xffff00, 0.5)

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
socket.on('sim', function (data) {
  // data1 = data.data1
  // data2 = data.data2
  // console.log(data);
  console.log('on sim, got: ', data);
})

render()
