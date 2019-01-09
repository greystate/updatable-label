# UpdatableLabel

A helper object that can be connected to any element for updating its contents.

## Usage

For use in a CoffeeScript project you can use the `src/updatable-label.coffee` file;
otherwise, grab the `dist/updatable-label.js` file - include the file in your bundle
as you're used to or link to it directly using a `<script>` tag.

With HTML like this:

```html
<section>
	<div class="timer"><data>12</data></div>
</section>
```

you can connect the label to your code like this and start updating it at will:

```javascript
var timerLabel = new UpdatableLabel('.timer > data');
timerLabel.addClass('running');
timerLabel.update('11');
```

