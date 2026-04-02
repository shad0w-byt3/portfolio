import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function use3DScene() {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!mountRef.current) return

    try {
      // Scene setup
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x050505)
      sceneRef.current = scene

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mountRef.current.appendChild(renderer.domElement)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
      scene.add(ambientLight)

      const pointLight1 = new THREE.PointLight(0x00ffff, 1, 100)
      pointLight1.position.set(5, 5, 5)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100)
      pointLight2.position.set(-5, -5, 5)
      scene.add(pointLight2)

      // Mouse interaction
      let mouseX = 0
      let mouseY = 0
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      }
      window.addEventListener('mousemove', handleMouseMove)

      // Animation loop
      let animationId
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Rotate scene based on mouse
        if (sceneRef.current) {
          scene.rotation.y += 0.001
          scene.rotation.x = mouseY * 0.1
          scene.rotation.y += mouseX * 0.1
        }

        renderer.render(scene, camera)
      }
      animate()

      setIsLoaded(true)

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        cancelAnimationFrame(animationId)
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
        renderer.dispose()
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(m => m.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }
    } catch (err) {
      setError(err.message)
    }
  }, [])

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return

      const camera = sceneRef.current.children.find(
        child => child instanceof THREE.PerspectiveCamera
      )
      const renderer = mountRef.current.querySelector('canvas')

      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { mountRef, isLoaded, error }
}
