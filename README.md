# image-fan.js
A JQuery plugin that allows you to make fans out of images. Also adds an animation when you hover the images.
<h2>Getting Started</h2>
To use <strong>image-fan.js</strong>, you have to :
<ul>
    <li><a href="https://github.com/MrWazzat/image-fan/archive/master.zip">Download the plugin.</a></li>
    <li>Include the JQuery library in your html file.</li>
    <li>Include the image-fan.js file in your html file.</li>
</ul>

Now you can use the imagefan() funtion ! :D

<h3>Example</h3>

<h2>HTML</h2>

Import the JQuery library and the image-fan one : 

```HTML
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/image-fan/image-fan.js"></script>
```

Create a container in which you will put all your images in <img> tags.
Just like this :

```HTML
<div class="image-fan">
    <img src="img/image-sample.jpg" alt="sample">
    <img src="img/image-sample.jpg" alt="sample">
    <img src="img/image-sample.jpg" alt="sample">
    <img src="img/image-sample.jpg" alt="sample">
</div>
```

<h2>JavaScript</h2>

Then in your JavaScript file, you just have to apply the <strong>imagefan()</strong> function to your container block.

```javascript
  $(".image-fan").imagefan();
```
 
And it should be working ! 

<h2>Options</h2>
You can pass the different options with a json array in parameter.
The default options are indicated below

Attribute	| Default		| Description
---			| ---   		| ---		
`angle`		| 90		    | Displays the number of stars in a repository.
`offset`    | 120		    | Changes the offset between 2 images. The higher the value is, the closer the images will be.
`border`	| null		| Apply a border to all of your images. Use it the same way as you would in css.
`animation` | true        | Changes wether or not the animation will occur. 
`maxSize`   | 1.5         | The new size of your image once hovered. A 1.5 factor will make your image 1.5 bigger when you hover it
`animationSpeed` | 250 | The time in miliseconds that it takes for the animation to complete.

<h3>Problems ?</h3>
If you are experiencing some problems with the presets values, try changing the offset int the first place. If it is bigger than the image, they'll all be stacked on each other.
