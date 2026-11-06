# Crudler

A cross-platform mobile app built with **React Native** and **Expo** for managing university modules and users. It provides full CRUD (Create, Read, Update, Delete) functionality through a clean, drawer-based interface.

## Features

- **Manage Modules** – add, view, edit and delete modules
- **Manage Users** – add, view, edit and delete users
- Drawer navigation with separate stack navigators for each section
- Reusable UI, layout and entity components
- Runs on Android, iOS and the web from a single codebase

## Tech stack

- React Native 0.76 / React 18
- Expo SDK 52
- React Navigation 7 (drawer and native stack)
- React Native Picker, dropdown select list and vector icons

## Project structure

```
src/
  components/
    API/         # data access layer
    UI/          # reusable UI elements
    entity/      # module and user components
    layout/      # screen layout components
    navigators/  # ModuleStack and UserStack
    screens/     # app screens
  data/          # sample data
App.js           # root drawer navigator
```

## Getting started

```bash
git clone https://github.com/muhammadyar11/crudler.git
cd crudler
npm install
npm start          # or: npm run android / npm run ios / npm run web
```

Then scan the QR code with the Expo Go app, or open it in an emulator or browser.

## Author

**Muhammad Asfand Yar** – BSc Computer Science, Kingston University London
