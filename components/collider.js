AFRAME.registerComponent('flying-birds', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `hurdle${i}`
      var posX = (Math.random() * 3000 + (-1000))
      var posY = (Math.random() * 2 + (-1))
      var posZ = (Math.random() * 3000 + -1000)
      var position = {
        x: posX,
        y: posY,
        z: posZ
      }
      this.createBirds(id, position)
    }
  },
  createBirds: (id, position) => {
    var terrain_1 = document.querySelector('#terrain')
    var bird_1 = document.createElement('a-entity')
    bird_1.setAttribute('gltf-model', 'assets/models/flying_bird/scene.gltf')
    bird_1.setAttribute('animation-mixer', {})
    bird_1.setAtrribute('id', id)
    bird_1.setAtrribute('position', position)
    bird_1.setAttribute('scale', { x: 500, y: 500, z: 500})
    terrain_1.appendChild(bird_1)
  }
})