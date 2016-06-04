IMUduino + ThreeJS README
=========================

For Windows, please see Sandeep's NobleJS README first!
https://github.com/sandeepmistry/noble

If you are using a Bluetooth 4.0 adapter on a GNU/Linux machine, you may need to run the following command from within this folder:

```
find -path '*noble*Release/hci-ble' -exec sudo setcap cap_net_raw+eip '{}' \;
```
...This will allow the noble library to run without requiring 'sudo' to access local hardware.

Note, if you have multiple Bluetooth HCI devices on your machine, you may need to power down the non-BLE capable devices using `hciconfig hciX down` (X is the index number, as seen with the `hcitool` command).

# Starting up
Requires Python 2.7, make sure to install python.exe to local path on Windows installs. Log out, and log back in after install if on Windows.
For node installation, I use NVM (or NVM for windows, which should go to the C:\ drive path to avoid issues). On Windows, you will need Node version 4.4.0, as later versions have issues between node-gyp and the usb npm package (unresolved as of 6/3/2016)

Grab a checkout of this code, then run the following from within the checkout 'imuduino-3js' folder (Node v0.12 or better):

```
# Install these globally if you don't have them yet...
npm install -g gulp
npm install -g browserify

# Install local deps
npm install

# Run gulp (Do this every time you update a client file. See gulp/default.js to see available gulp actions)
gulp

# Configure app to run the Yaw-Pitch-Roll section, see localhost:4200/ after starting the server.
npm config set imuduino-3js:type IMUduino_Bluetooth_UART_YawPitchRoll

# Plug in your IMUduino board,
# Upload sketch "IMUduino_Bluetooth_UART_YawPitchRoll",
# Start the Arduino Serial Monitor!

# Start the server. See configuration notes below first.
npm start

```

## Configuration
The `lib/service-info.js` file contains the value for your Peripheral UUID (Your IMUduino's Universally Unique ID).

* PLEASE UPDATE IT WITH YOUR IMUDUINO's UUID *

If you don't know it, open up the Nordic "nRF UART v2.0" app on a BT 4.0 Smart Device (Android or iOS), and power up your IMUduino.
Start the Arduino Serial Monitor, then use the app to scan. Your UUID should letters and/or numbers only, no colons - likeley all lower case.

If you have a Unix/Linux machine, and you have the hcitool and hciconfig commands, you can also scan as follows:

```
# Assuming hci0 is a Bluetooth LE capable HCI device. CTRL-C to stop scanning.
sudo hcitool -i hci0 lescan
```
