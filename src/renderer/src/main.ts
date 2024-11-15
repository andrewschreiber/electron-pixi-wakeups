import { Application, Graphics } from 'pixi.js'
import { DotFilter } from 'pixi-filters'

const app = new Application()
async function initPixi() {
  await app.init({
    canvas: document.createElement('canvas'),
    resizeTo: window,
    // backgroundColor: '#1099bb',
    backgroundAlpha: 0,
    preference: 'webgl',
    powerPreference: 'low-power'
  })

  const appElement = document.getElementById('app')
  if (!appElement) {
    throw new Error('#app element not found')
  }

  appElement.appendChild(app.canvas)

  try {
    // Create the red square
    const graphics = new Graphics().rect(-800, 0, 1600, 120).fill({ color: 0xff00ff, alpha: 0.3 })

    graphics.position.set(app.screen.width / 2, app.screen.height / 2)
    app.stage.addChild(graphics)

    // Create dot filter
    const dotFilter = new DotFilter({
      scale: 1, // Size of the dots (1 = default, higher = bigger dots)
      angle: 1.5 // Angle of the dot pattern in radians
    })

    // Apply filter to the entire stage
    app.stage.filters = [dotFilter]

    // Animation setup
    let time = 0
    app.ticker.minFPS = 0
    app.ticker.maxFPS = 60

    // Animate the dot pattern
    app.ticker.add((delta) => {
      time += delta.deltaTime

      // Animate scale
      // dotFilter.scale = 1 + Math.sin(time) * 0.3

      // Rotate pattern
      dotFilter.angle = time * 0.003
    })

    // Handle window resize
    window.addEventListener('resize', () => {
      // Update filter padding based on new screen size
      dotFilter.padding = Math.max(app.screen.width, app.screen.height) * 0.1
    })
  } catch (error) {
    console.error('Error initializing PixiJS:', error)
  }
}

// Start the application
initPixi().catch(console.error)
