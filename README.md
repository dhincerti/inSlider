# inSlider

The inSlider is a really simple slider jQuery plugin that uses css3 to make the effects.

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
  $('#mySlider').inSlider();
});
```

## Options

| Name                  |  Type  | Default Value | Description       |
| :-------------------- |:------:|:-------------:| -----------------:|
| interval              | number | 5000          | The delay before the call of the next item |
| slidesClass           | string | ".item"       | Used to add a different class to your own stylization |
| height                | number | "auto"        | Define the slider height. The default value "auto" will automatically set the height based on the items elements |
| paginationPosition    | string | "bottom"      | The navigation position. Accepted values: "bottom" or "top" |


## Style
Because this plugin only make the slide transition, you can easily style it by you on.

#### Exemple 1
If you wanna to limit the width and keep the slider responsive, all you need to do is add a max-width.

```css
#mySlider {
  max-width: 
}
```

#### Exemple 2
Adding some title.

```html
<div id="mySlider" class="inSlider">
    <div class="item">
      <img src="images/image-1.jpg" alt="myimage" title="myimage" />
      <h2>You title here 1</h2>
    </div>
    <div class="item">
      <img src="images/image-2.jpg" alt="myimage" title="myimage" />
      <h2>You title here 2</h2>
    </div>
    <div class="item">
      <img src="images/image-3.jpg" alt="myimage" title="myimage" />
      <h2>You title here 3</h2>
    </div>
    <div class="item">
      <img src="images/image-4.jpg" alt="myimage" title="myimage" />
      <h2>You title here 4</h2>
    </div>
    <div class="item">
      <img src="images/image-5.jpg" alt="myimage" title="myimage" />
      <h2>You title here 5</h2>
    </div>
  </div>
```

```css
.inSlider h2 {
  margin: 0;
  color: #fff;
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  text-shadow: 2px 2px 2px #000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5em;
  text-shadow: 2px 2px 2px #000;
}
```

### More to came
* Support for non-automatically transition
* More transition effects
* Device touch
* Video
* Full callback API and public methods
* Cross Browser support: Firefox, Chrome, Safari, iOS, Android, IE9+
* Tons of configuration options