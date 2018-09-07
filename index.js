var robot = require("robotjs");
var keybind = "1"
var time = 1 // time to in minutes

timer()

herbRoutine()
// potionRoutine()
// stoneCutRoutine()
// craftingRoutine()
// smithingRoutine()

function herbRoutine() {
  getBankPresets()
  clickActionKeybind()
  startAction()
  //wait for predetermined time
  setTimeout(function () {
          herbRoutine()
      }, getRandomRange(22900,23900));
}

function stoneCutRoutine() {
  getBankPresets()
  clickActionKeybind()
  startAction()
  //wait for predetermined time
  setTimeout(function () {
          stoneCutRoutine()
      }, getRandomRange(20900,21900));
}

function potionRoutine() {
  getBankPresets()
  clickActionKeybind()
  startAction()
  //wait for predetermined time
  setTimeout(function () {
          potionRoutine()
      }, getRandomRange(23900,24900));
}

function craftingRoutine() {
  getBankPresets()
  clickActionKeybind()
  startAction()
  //wait for predetermined time
  setTimeout(function () {
          craftingRoutine()
      }, getRandomRange(23900,24900));
}

function smithingRoutine() {
  getBankPresets()
  clickActionKeybind()
  startAction()
  //wait for predetermined time
  setTimeout(function () {
          smithingRoutine()
      }, getRandomRange(23900,24900));
}

function getBankPresets() {
  setTimeout(function () {
          robot.mouseClick("left");
      }, getRandomRange(4800,5300));
  setTimeout(function () {
          robot.keyToggle(keybind,"down","control");
          setTimeout(function () {
            robot.keyToggle(keybind,"up","control");
          },getRandomRange(79,111))
      }, getRandomRange(7300,7500));
}

function clickActionKeybind() {
  setTimeout(function () {
          robot.keyToggle(keybind,"down");
          setTimeout(function () {
            robot.keyToggle(keybind,"up");
          },getRandomRange(80,110))
      }, getRandomRange(9500,9700));
}

function startAction() {
  setTimeout(function () {
          robot.keyTap("space");
      }, getRandomRange(11700,11900));
}

function getRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function timer() {
  time = time * 60000
  setTimeout(function () {
          process.exit()
      }, time);
}
