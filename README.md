# pog-protector
The pogchamp emote was removed by Twitch on January 15, 2020, much to the disappointment of many community members. Pog Protector replaces the classic emote on Twitch.tv in just one click.

[GitHub](https://github.com/Smoke3785/pog-protector) **|** [View on Website](https://owenrossikeen.com/projects/pogprotector) **|** [Donate](https://owenrossikeen.com/donate)

## Installation

1. Download the .zip file from [my website](https://owenrossikeen.com/downloads?pog)
2. Extract the zip file
3. Navigate to chrome://extensions in your preferred Chromium browser

**Note:** Steps 3 and 4 may be slightly different depending on your browser.

4. Toggle Developer Mode to **ON** in the top-right of the developer screen
5. Click "Load unpacked"
6. Select your unpacked *Pog Protector* folder
7. Enjoy!

## Technical

The extension is extremely simple functionally. It consists of three major parts.
1. The user interface containing the toggle switch.
2. The javascript running in the background that attached an event listener to the toggle switch and
3. A CSS override sheet that replaces the content on the Twitch.tv domain.

When the user clicks the toggle button, it saves en entry in the browser's extension memory with either true or false. Depending on whether or not this value is true or false, the extension will append override.css to the Twitch.tv dom. This simply selects the existing PogProtect emotes by the alt attribute and replaces them with the css 'content' property, as well as an !important keyword. On top of this, it select certain users and embellishes their names. This feature is, of course, unnecessary.

This method could be easily defeating by simply changing the alt attribute, or by more specifically providing a value for the 'content' property. I don't think this will ever become an issue. If it does, I'm confident a more robust approach could be developed. In the years since I put this extension together, I've become far more competent with both JavaScript and CSS.


## Disclaimer
The existence of this extension implies no political affiliation, nor endorsement of political statements or beliefs of any parties referenced or involved. This extension was developed in response to an internet trend, and should not be interpreted as anything else. Furthermore, I take no responsibility for any damage caused through this extension. If the usage of this extension violates any Twitch guidelines (I have no idea whatsoever), I am not responsible for any bans, suspensions, or other disciplinary actions taken by Twitch.

--- 

Made by Owen Rossi-Keen 

[GitHub](https://github.com/Smoke3785/) **|** [Website](https://owenrossikeen.com/) **|** [Donate](https://owenrossikeen.com/donate)
