import { Application, Assets, Sprite, Graphics } from 'pixi.js'

async function initPixi() {
  // Create the application - note the new initialization syntax for v8
  const app = new Application()

  // Initialize with new v8 syntax
  await app.init({
    canvas: document.createElement('canvas'),
    resizeTo: window,
    backgroundColor: '#1099bb',
    hello: true // enables WebGL inspector
  })

  // Get the #app div
  const appElement = document.getElementById('app')
  if (!appElement) {
    throw new Error('#app element not found')
  }

  // Add the canvas to the #app div
  appElement.appendChild(app.canvas)

  try {
    const graphics = new Graphics().beginFill('#FF0000').drawCircle(0, 0, 50).endFill()

    graphics.position.set(app.screen.width / 2, app.screen.height / 2)

    app.stage.addChild(graphics)

    // setInterval(() => {
    //   if (currentMaxFPS < 120) {
    //     currentMaxFPS *= 2
    //     app.ticker.maxFPS = currentMaxFPS
    //   } else {
    //     app.ticker.stop()
    //     setTimeout(() => {
    //       currentMaxFPS = 4
    //       app.ticker.maxFPS = currentMaxFPS
    //       app.ticker.start()
    //     }, 4500)
    //   }
    // }, 5000)
  } catch (error) {
    console.error('Error initializing PixiJS:', error)
  }
}

// Start the application
initPixi().catch(console.error)
