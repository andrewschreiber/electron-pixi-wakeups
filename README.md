<h1 align="center">electron-pixi-wakeups</h1>

<p align="center">Demos excess idle wakeups and CPU usage. See edits in src/renderer/src/main.ts </p>

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Screenshots

### Base app window with only a single graphic rectangle running at 1 fps and low-power power preference

<img width="1728" alt="image" src="https://github.com/user-attachments/assets/1af766e2-42d2-4745-af0c-4ef6bff7ca9f">

![image](https://github.com/user-attachments/assets/e7f97a8b-7394-481a-9002-78bc316b97c4)


### Usage at 60fps

![image](https://github.com/user-attachments/assets/98105c74-e371-46e1-87c6-0103a20dc679)

Interestingly the renderer processes is much less active here despite being 1/60 the FPS


### Electron usage without Pixi application started

<img width="1184" alt="image" src="https://github.com/user-attachments/assets/acf6cb32-4884-4be4-a7e2-6498f8f79508">


## Behavior Observations

- Doesn't matter if the window is displayed or not
- 'low-power' `powerPreference` doesn't seem to make a difference on energy impact or CPU use, but setting `maxFPS` does (despite a static graphic)


## Thanks for reading
👋

