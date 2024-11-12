import { Application, Graphics } from 'pixi.js'

const app = new Application()
async function initPixi() {
  await app.init({
    canvas: document.createElement('canvas'),
    resizeTo: window,
    backgroundColor: '#1099bb',
    preference: 'webgl',
    powerPreference: 'low-power'
  })

  const appElement = document.getElementById('app')
  if (!appElement) {
    throw new Error('#app element not found')
  }

  appElement.appendChild(app.canvas)

  try {
    const graphics = new Graphics()
      .rect(0, 0, 100, 100) // In v8, we define the shape first
      .fill({ color: 0xff0000 }) // Then apply the fill

    graphics.position.set(app.screen.width / 2, app.screen.height / 2)

    app.stage.addChild(graphics)

    app.ticker.minFPS = 0
    app.ticker.maxFPS = 1
  } catch (error) {
    console.error('Error initializing PixiJS:', error)
  }
}

// Start the application
initPixi().catch(console.error)
