# image-fan.js
A JQuery plugin that allows you to make fans out of images
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
     <img src="image-sample.jpg" alt="sample">
    <img src="image-sample.jpg" alt="sample">
</div>
```

<h4>JavaScript</h4>

Then in your JavaScript file, you just have to apply the <em>imagefan()</em> function to your container block.

```javascript
  $(".image-fan").imagefan();
```
 
And this should be working ! 
