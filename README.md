# image-fan.js
A JQuery plugin that allows you to make fans out of images. Also adds an animation when you hover the images.
<h2>How to use image-fan.js</h2>

Using image-fan is very simple ! You just have to apply the "imagefan(options)" function on your container

<h3>Examples</h3>

<h4>HTML</h4>

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

<h4>JavaScript</h4>

Then in your JavaScript file, you just have to apply the <em>imagefan()</em> function to your container block.

```javascript
  $(".image-fan").imagefan();
```
 
And this should be working ! 

<h4>Options</h4>
You can pass the different options with a json array in parameter.
The default options are indicated below

Attribute	| Default		| Description
---			| ---   		| ---		
`angle`		| 90		    | Displays the number of stars in a repository.
`offset`    | 120		    | Changes the offset between 2 images. The higher the value is, the closer the images will be.
`border`	| null		| Apply a border to all of your images. Use it the same way as you would in css.
`animation` | true        | Changes wether or not the animation will occur. 
`maxSize`   | 1.5         | The new size of your image once hovered. A 1.5 factor will make your image 1.5 bigger when you hover it

