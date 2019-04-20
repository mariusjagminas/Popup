# Popup

This script will show a popup whenever a user clicks on the inactive link.

## Getting started

---

Add script to a website

```
<script src="path/to/popup.js"></script>
```

To start just run a function

```
popup();
```

You can change default settings by passing them as an object
otherwise, default settings will be applied

Example

```
const config = {

  text: 'Hello',  // Popup content
  color: 'white',  // Text color
  background: 'blue',  // Background color
  displayTime: 3000,  // Popup display time in milisec
  selector: '.popup-window'  // CSS selector

}

popup(config);
```

Default settings

```
  text: 'Link is inactive. This is a demo website',
  color: '#000000',
  background:  '#ffffff',
  displayTime:  2500,
  selector: 'a[href="#"]'
```










