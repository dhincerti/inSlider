# inSlider

The inSlider is a really simple slider jquery plugin that uses css3 to make the effects.

## How to use

### Step 1
Include the jQuery library, the inSlider.js file and the inSlider.css file to your page:

```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<!-- inSlider Javascript file -->
<script src="inSlider.js"></script>
<!-- inSlider CSS file -->
<link href="inSlider.css" rel="stylesheet" />
```

### Step 2

Create a main container and give it an identifier, then you can create as many children as you wish to be the slide items.

```html
<div id="mySlider" class="inSlider">
  <div class="item">
    <img src="myimage" alt="myimage" title="myimage"/>
  </div>
  <div class="item">
    <img src="myimage" alt="myimage" title="myimage"/>
  </div>
  <div class="item">
    <img src="myimage" alt="myimage" title="myimage"/>
  </div>
  <div class="item">
    <img src="myimage" alt="myimage" title="myimage"/>
  </div>
  <div class="item">
    <img src="myimage" alt="myimage" title="myimage"/>
  </div>
</div>
```
### Step 3

Use the .inSlider() function to trigger the plugin on your slider main container

```javascript
$(document).ready(function(){
  $('.inSlider').inSlider();
});
```

## Options

| Name                  |  Type  | Default Value | Description       |
| -----------           |:------:|:-------------:| -----------------:|
| interval              | number | 5000          | The delay before the call of the next item |
| slidesClass           | string | ".item"       | Used to add a different class to your own stylization |
| height                | number | "auto"        | Define the slider height. The default value "auto" will automatically set the height based on the items elements |
| paginationPosition    | string | "bottom"      | The navigation position. Accepted values: "bottom" or "top" |

### More to came
* Next and previus pagination
* Support for non-automatically transition
* Fully responsive to adapt to any device
* More transition effects
* Device touch
* Video
* Full callback API and public methods
* Cross Browser support: Firefox, Chrome, Safari, iOS, Android, IE9+
* Tons of configuration options