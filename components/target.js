AFRAME.registerComponent('target-ring', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `ring${i}`
      var posX = (Math.random() * 3000 + (-1000))
      var posY = (Math.random() * 2 + (-1))
      var posZ = (Math.random() * 3000 + -1000)
      var position = {
        x: posX,
        y: posY,
        z: posZ
      }
      this.createRings(id, position)
    }
  },
  createRings: function(id, position) {
    var terrain_1 = document.querySelector('#terrain')
    var ring_1 = document.createElement('a-entity')
    ring_1.setAtrribute('id', id)
    ring_1.setAtrribute('position', position)
    ring_1.setAtrribute('material', 'color', 'red')
    ring_1.setAtrribute('geometry', {primitive: 'torus', radius: 8})
    terrain_1.appendChild(ring_1)
  }
})