# PHTS NP-01: Now Playing plugin for Volumio

This is a modification of original [volumio-now-playing] which is used by [PHTS NP-01].

Noticeable changes:

- Redesign/reorder player buttons, progress bar, album art, etc
- Render year, bitrate, track number
- Hide all controls on initial screen, leave only default picture, which also changed
- [...and more][commits]

![Initial screen](./docs/initial.png)

![Playing track screen](./docs/playing.png)

## Install

1. Install "Now PLaying" plugin version 0.3.7
2. Copy files from this repo:

   - `app/client/build/static/css/np-01.css`
   - `app/client/build/static/css/main.8cb58bff.css`
   - `app/client/build/static/js/main.eb06c3dd.js`

   to folder `/data/plugins/user_interface/now_playing/` on Volumio device.

[volumio-now-playing]: https://github.com/patrickkfkan/volumio-now-playing
[phts np-01]: https://tsaryk.com/NP-01
[commits]: https://github.com/phts/NP-01_now-playing-plugin/commits/master
