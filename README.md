# Popup

This script will show a popup whenever a user clicks on the inactive link.

## Getting started


Add popup.min.js to a website

```html
<script src="path/to/popup.min.js"></script>
```

To start create new object and invoke init() method;

```javascript
const popup = new Popup();
popup.init();

// to cancel script use stop() method
popup.stop();
```

You can pass settings as an object
otherwise, default settings will be applied

Example:

```javascript
const config = {
  text: 'Hello',  // Popup content
  color: 'white',  // Text color
  background: 'blue',  // Background color
  displayTime: 3000,  // Popup display time in milisec
  selector: '.popup-window'  // CSS selector
}

const popup = new Popup(config);
popup.init();
```

Default settings

```javascript
  text: 'Link is inactive. This is a demo website',
  color: '#000000',
  background:  '#ffffff',
  displayTime:  2500,
  selector: 'a[href="#"]'
```











