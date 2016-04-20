# CSS
CSS (Cascading Style Sheet) is used to style (align, color, spacing, size) your HTML pages. If HTML provides the structure and furniture for a house, CSS provides the paint, finishing, and alignment.

## What does it look like?
The syntax for CSS code is:
```
[what is being styled (AKA Selectors)] {
[style properties]
}
```
For example:
```
body {
  background-color: #f2f2f2;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

div {
  border: 1px solid #000000;
}

.text-large {
  font-size: 2em;
}

#main {
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 3px;
}
```

## CSS Selectors
CSS Selectors are used to choose which item(s) the styling should apply to.

You can target what the styling applies to:
- by HTML element
 - syntax: ```div { /* properties */ }```
- by ID (HTML element id attribute)
 - syntax: ```#name-of-id { /* properties */ }```
- by class (HTML element class attribute)
 - syntax: ```.name-of-class { /* properties */ }```
- by a combination of selectors
 - syntax: ```div.name-of-class { /* properties */ }```
 - or: ```div#name-of-id { /* properties */ }```
 - etc
- and more

### Elements
Your styling can target HTML elements.

For example, do you want all tables to have a border? Simply target the HTML tag for tables.
```
table {
/* CSS border property goes here */
}
```
Do you want all divs to be a certain width? Again, simply target the HTML tag for divs.
```
div {
/* CSS width property goes here */
}
```
Think of all the HTML elements you've learned about, *they can all be used as CSS selectors*:
- h1 or h2 or h3, etc
 - ``` h1 { /* properties */ } ```
- div
 - ``` div { /* properties */ } ```
- ul or ol
 - ``` ul { /* properties */ } ```
- li
 - ``` li { /* properties */ } ```
- table
 - ``` table { /* properties */ } ```
- a (links)
 - ``` a { /* properties */ } ```
- p (paragraphs)
 - ``` p { /* properties */ } ```
- img
 - ``` img { /* properties */ } ```
- header
 - ``` header { /* properties */ } ```
- and many more.

Hopefully it's becoming clear now - you can target HTML elements by name in CSS.

### IDs
You can style one specific element on a page differently than the rest by assigning the element an ```id``` attribute, then targeting the id's value: (```id="value-of-id"```).

Then, in your CSS, simply target the ID's value prefixed with a hashtag, as shown:
```
#value-of-id {
[style properties]
}
```

You can give your HTML elements *unique* ID attributes, and target those in your CSS.

**IDs must be unique - the same ID cannot be used more than once on a single page.**

For example, let's give one table the unique ID of 'primary-table':
```
<table id="primary-table">
  <tr>
    <td>This is a table we want to target.</td>
  </tr>
</table>
<table>
  <tr>
    <td>This is a table we are not targeting.</td>
  </tr>
</table>
```
Now, let's target the table with an ID of 'primary-table':
```
#primary-table {
  border: 3px solid red;
}
table {
  border: 1px solid #000000;
}
```
- The ```#primary-table``` selector makes the element with ID of ```primary-table``` have a 3px red border.
- The ```table``` selector above makes all tables default to a 1px black border.
- When rules conflict, ```id``` selectors take precedence over element selectors.

### Classes
Classes are just like IDs, with the following exceptions:

1. Classes *can and should* be reused on a single page
 - Unlike IDs, which can only be used once on a page
2. Classes are assigned to HTML Elements by assigning them a 'class' attribute
 - i.e. ```<table class="large-font">```
3. In CSS, classes are targeted with a dot followed by the class name
 - i.e. ```.class-name { /* properties */ }```
4. HTML Elements *can be assigned multiple classes*
  - Multiple classes are separated by spaces
  - i.e. ```<table class="class-1 class-2 yet-another-class">```
    - This is *very* common
5. Classes are used more frequently than IDs
  - When unsure whether to use a class or ID, a class following the rules in the next section is often a safe bet
  - IDs should be used for identifying unique elements of the page

#### What should classes contain?
A 'good' class is:
- *Rule 1:* Designed for reusability
- *Rule 2:* Not overly restricted by its name
- *Rule 3:* Does not exceed its intended scope

##### Rule 1 - Designed for reusability
*Violation #1*
```
HTML:
<div class="div-section-1">text</p>
```
```
CSS:
.div-section-1 {
  background-color: red;
  border: 1px solid black;
  font: 12px arial, verdana;
  width: 150px;
  height: 500px;
  float: left;
}
```
In this example, the class ```div-section-1``` sets the following:
- background color of red
- 1px black border
- 12px arial font
- 150px width
- 500px height
- floated left

How many elements do you expect to need *all* of those? Probably only one, which means it is not fulfilling Rule #1.

*Improvement:* To improve that class, we should divide it into reusable parts, where possible.

For example:
```
HTML:
<div class="block-section secondary-bg secondary-font" id="div-section-1">text</p>
```
```
CSS:
.block-section {
  border: 1px solid black;
  width: 150px;
}
.secondary-bg {
  background-color: red;
}
.secondary-font {
  font: 12px arial, verdana;
}
#div-section-1 {
  height: 500px;
  float: left;
}
```
Now we have 3 reuseable classes, and one unique ID.
*Rationale:*
.block-section
- Used on any blocks which require the same border and width
.secondary-font
- Used on any HTML elements which will use the site's secondary font face and size
.secondary-bg
- Used on any HTML elements which will use the site's secondary background color
- If the site's secondary bg color ever changes, only this class needs to be updated
#div-section-1
- Used only for positioning the block in question

There is no perfect answer for CSS granularity, but you will get better at identifying a reuseable class through experience.

##### Rule 2 - Not overly restricted by its name
*Violation #1*
```
<p class="twelve-pixel-font">text</p>
```
If you ever decide to change the font size of sections using this class from 12px to anything else, you will have a bad time. You will also have to rename the class for it to still make sense.

*Improvement #1*
```
<p class="medium-font">text</p>
```
This name is an improvement, because if the layout's 'medium' font size changes, we don't have to worry about renaming the class everywhere it appears.

*Violation #2*
```
<div class="red-bg">text</p>
```
Let's say the secondary background color on your site is red. It seems like 'red-bg' makes sense - right? Well, it makes sense now, but if we update the layout in the future and the secondary color changes from red to green - we're setting ourselves up for a sloppy transition.

*Improvement #2*
```
<div class="secondary-bg">text</p>
```
With this name, we retain the power to update our layout's colors in the future without having to re-write both our HTML and CSS. Simply naming the class 'secondary-bg' is a big improvement.

##### Rule 3 - Does not exceed its intended scope
*Violation #1*  
Let's say we are trying to style a slideshow which has the following automatically generated HTML as its container:
```
<div class="page views-page views-view-id-homepage-slideshow">text</p>
```
This div has multiple CSS classes, each separated by a space. To style it, we choose one of the classes, and begin to write CSS code for it:
```
.page {
  width: 800px;
  float: left;
}
```

It seems like choosing one of the classes from the div makes sense - right? The problem is that there could be a different 'view' on the website with the following automatically generated HTML:
```
<div class="page views-page views-view-id-blog-posts">text</p>
```
This is a list on a different page, but it uses the same class ```page```. Because we styled the class ```page```, our styling is going to apply to this page as well.

*Improvement #2*  
There was a different class we could have chosen to style the slideshow which would have left us more confident that the styling would not exceed its intended scope:  
```
.views-view-id-homepage-slideshow {
  width: 800px;
  float: left;
}
```

### CSS Selector priority
It is very common that one element will be targeted by multiple CSS selectors. In that case, which of the selectors' rules will be applied?

#### Default priority
```id```, ```class```, and ```element``` selectors are prioritized as follows:
1. ```id```
2. ```class```
3. ```element```

```
HTML:
<div id="main-bg" class="secondary-bg">test</div>
```
```
CSS:
div {
background-color: black;
}
#main-bg {
background-color: red;
}
.secondary-bg {
background-color: blue;
}
```
In the above example, all three CSS selectors are targeting the same element. There is an element selector ```div```, an ```id``` selector ```#main-bg```, and a ```class``` selector ```.secondary-bg```.

Looking at the 'default priority' above, we see the following: ```id``` > ```class``` > ```element```. Therefore, the id ```#main-bg``` takes precedence, so the element will have a red background color.

#### Even more specific selectors
As already stated, the most specific selector takes priority. By concatenating (combining) selectors, we can target elements with greater specificity.

Sample HTML:
```
<div id="wrapper">
  <div id="unique-id" class="generic-class">
    Text.
  </div>
</div>
```
We've seen that we can target the element ```div```, the id ```#unique-id```, and the class ```.generic-class```.

We could also target multiple selectors by combining them:
- ```div#unique-id``` is a selector for a ```div``` *which has an id of* ```unique-id```. 
 - Because ID's are unique per-page, targeting unique-id will suffice *most of the time*.
 - *The most specific selector takes priority.*
   - That means, if there is other CSS which targets ```#unique-id```, you can ensure yours takes priority by targeting the more specific ```div#unique-id```
- ```div.generic-class``` is a selector for a ```div``` *which has a class of* ```generic-class```.
 - Notice that the first two CSS examples have no space inbetween the element and the id/class
 - Having no space in between means that the id/class are attributes of that element.
- ```div .generic-class``` is a selector for an element with a class attribute of generic-class *and an ancestor div*.
 - The space in-between the element name and the class means that the selector(element) to the left of the space is an *ancestor* of the selector to the right of the space.
 - i.e. ```selector1 selector2 { /* properties */}```: Styles selector2 where selector1 is an ancestor of selector2.

#### The most specific selector wins. Use the ICE formula
The most specific selector can be calculated using the 'ICE' formula:
- **I** - Number of IDs
- **C** - Number of Classes
- **E** - Number of Elements

To determine which selector is more 'specific', calculate the 'ICE' value for each selector. Whichever selector has a higher ICE value is more specific. Let's show a few examples:

The HTML being referenced looks like:
```
<div id="wrapper" class="full-width">
  <div id="unique-id" class="generic-class">
    <p>
      Lorem Ipsum
      <ul>
        <li class="first">First item</li>
        <li>Second item</li>
        <li class="last">Third item</li>
    </p>
  </div>
</div>
```

**Using the ICE formula:**

Selector #1: ```#unique-id```
- There is 1 ID: ```#unique-id```
- There are 0 classes.
- There are 0 elements.

Using our ICE formula, we get a value of: **100**.

Selector #2: ```div#wrapper div#unique-id.generic-class```
- There are 2 ID's: ```#wrapper``` and ```#unique-id```
- There is 1 class: ```.generic-class```
- There are 2 elements: ```div``` and ```div```

Using our ICE formula, we get a value of: **212**.

Selector #3: ```div#wrapper.full-width div#unique-id.generic-class```
- There are 2 ID's: ```#wrapper``` and ```#unique-id```
- There are 2 classes: ```.full-width``` and ```.generic-class```
- There are 2 elements: ```div``` and ```div```

Using our ICE formula, we get a value of: **222**.

Our ICE values are:
- Selector #1: 100
- Selector #2: 212
- Selector #3: 222

**Selector #3** has the highest ICE value, so it takes priority.

## Core CSS Properties
Now that we're experts at identifying *what* to style, let's learn about what styling properties we can apply.
### Positioning Properties
#### Display
The display property specifies the type of box used for an HTML element.
Default value: Inline

- Display: inline
 - Displays an element as an inline element (like words in a sentence)
 - This is the default value for 'display'.
- Display: block
 - Makes an element behave like it is a block - similar to how a paragraph behaves.
- Display: inline-block
 - The *inside* of the element behaves like a block, and the *outside* of it is inline with surrounding elements.
- Display: none
 - The element is not displayed at all.
- Display: list-item
 - The element behaves as if it is an item in a list.
- Display: initial
 - Makes an element use the default value for display.
- Display: inherit
 - Makes an element inherit its parent's value for display.
- Complete list of Display options:
 - inline
 - block
 - flex
 - inline-block
 - inline-flex
 - inline-table
 - list-item
 - run-in
 - table
 - table-caption
 - table-column-group
 - table-header-group
 - table-footer-group
 - table-row-group
 - table-cell
 - table-column
 - table-row
 - none
 - initial
 - inherit
*For detailed information on these, take a look at http://www.w3schools.com/cssref/pr_class_display.asp .*

#### Float
When an item is floated to the left or right, it moves as far to that side as it can.
- Float: Left
 - Element moves as far left as possible.
- Float: Right
 - Element moves as far right as possible.
- Float: None
 - Element displays normally (This is the default).
- Float: Initial
 - Value is default (none).
- Float: Inherit
 - Inherits this property from its parent.

#### Position
- Position: relative
 - The element is positioned relative to it's default position.
 - This allows you to adjust the default position (left:20; top:20).
- Position: absolute
 - Element becomes relative to the first non-static ancestor element.
- Position: fixed
 - Element is positioned relative to the browser window itself.
 - This is useful for pinning a menu to the top of a browser window.
- Position: static
 - Default value, element is positioned naturally in the document.
- Position: initial
 - Value is default (static).
- Position: inherit
 - Inherits this property from its parent.

### Spacing Properties
#### Margin
- Margin refers to spacing *outside* of an element.
 - Example: http://www.w3schools.com/css/tryit.asp?filename=trycss_margin_sides
 - Options:
   - margin-top: 2px;
    - margin-right: 2px;
    - margin-bottom: 2px;
    - margin-left: 2px;
#### Padding
- Padding refers to spacing *inside* of an element.
 - Example: http://www.w3schools.com/css/tryit.asp?filename=trycss_padding_sides
 - Options:
   - padding-top: 2px;
    - padding-right: 2px;
    - padding-bottom: 2px;
    - padding-left: 2px;

### Styling / finishing touches
#### Colors (Hex codes)
Hex codes are 6 digit codes specifying which color the browser should render.

You should definitely know the hex codes for at least black and white by heart.
- Black: #000000
- White: #FFFFFF

Find other hex codes you like? Add them to the list and submit a pull request!

@tip: You can use the 'inspect' tool to see what the hex codes used on popular websites are.
#### Fonts
Fonts can be specified using the following syntax:
```
font: [style] [size] [family];
```
For example:
```
body {
font: italic 12px "Times New Roman", Times, serif;
}
```
Where ```italic``` is the style, ```12px``` is the size, and ```"Times New Roman", Times, serif``` is the family.

##### Font style
- normal
- italic
- oblique
- initial
- inherit

Example:
```
body {
font-style: italic;
}
```

##### Font family
A prioritized list of font family names.

- *Font family name*
 - For example: ```font-family: "times", "courier", "arial";```
   - If times is available, it will be used. If not, courier will be used if available. If also unavailable, arial will be used.
 - On enterprise projects, your designer will likely tell you what the font families are.
- initial
- inherit

Example:
```
body {
font-family: "Times New Roman", times, courier, arial;
}
```
If ```Times New Roman``` is available, it will be used, if not, ```times``` is used when available - etc.

##### Font size
Font size sets, you guessed it, the size of the font.

Font sizes can be set using pixels (```font-size: 12px;```), em (```font-size: .9em```), or rem (```font-size: 1rem```).

###### Set size with pixels
Setting font sizes using pixels is the easiest.

12px is always 12px, regardless of the rest of the page or browser.

```
body {
font-size: 12px;
}
```

Try out a few font sizes to see what you like. 12px is generally the default body font size.

###### Set size with em
A downside to setting font sizes with pixels is that you may not always want the same exact font size regardless of browser.

Browsers have different default font sizes for a reason. For example, a mobile device's browser likely has a smaller default font size than a desktop's browser. This is where ```em``` comes in.

Em sets the font as a percentage (1em = 100%) of the closest ancestor. To determine how big an em font size would be in pixels, compute the following:

**Em is a calculated value.** This is the formula: ```[FS in em] X [parent's FS in px] = FS in px```

For example:
```
HTML:
<body>
  <div id="wrapper">
    <div class="large-font">
    What size font am I?
    </div>
  </div>
  <footer class="large-font">
    What size font am I?
  </footer>
</body>
```
```
Corresponding CSS:
body {
  font-size: 12px;
}
#wrapper {
  font-size: 2em;
}
.large-font {
  font-size: 2em;
}
```
####### What is the font size of #wrapper, in pixels?
To determine the font size (FS) of ```#wrapper```, in pixels, we need to apply our formula: ```[closest ancestor's FS in px] X [chosen FS in em]```
Let's fill in our variables:
```[FS in em] X [parent's FS in px] = FS in px```
What is the ```[FS in em]```? The CSS says the ```#wrapper```'s FS is ```2em```.
What is the ```[parent's FS in px]```? The parent of the ```div``` with id ```#wrapper``` is the ```body```, and we see in our CSS that the body's font size is 12px.
Let's update our formula: ```2 X 12``` = ```24px```.
Therefore, ```#wrapper``` is 24px in our HTML document.

Let's add a comment to our CSS so we don't forget:
```
Corresponding CSS:
body {
  /* Assume 12px default font size for desktop browsers */
}
#wrapper {
  font-size: 2em; /* 12px x 2em = 24px on desktop */
}
.large-font {
  font-size: 3em;
}
```

What size, in pixels, is the ```div``` with class of ```.large-font```?  
```[FS in em] X [parent's FS in px]```  
```[FS in em]``` = ```3```.  
```[parent's FS in px]``` = ```24px```. The parent of the div is ```#wrapper```, and we just calculated that as ```24px```. Cool!  
```3 X 24px``` = ```72px```. That escalated quickly.

What size, in pixels, is the ```footer``` element with class of ```.large-font```?  
```[FS in em] X [parent's FS in px]```  
```[FS in em]``` = ```3```.  
```[parent's FS in px]``` = ```12px```. This time, the parent div is the body.  
```3 X 12px``` = ```36px```. Hmm. The ```.large-font``` class is 36px for one element, but 72px for another? This could get confusing.

#### Backgrounds
You can assign a background color and/or background image to any element, including the ```body``` element, ```header``` element, ```div``` elements, and all the rest.
For example:
```
body {
  background-color: red;
}
```
##### Image backgrounds
To use an image as a background, first set the background-image property as the image you want to use:
```
body {
  background-image: url('images/main-bg');
}
```
But what if the image is smaller than the window? Will it only display once? Where will it display? Will it repeat? What color will the rest of the background be filled with? That's up to you.  

Your options for *where* the background image is positioned are set using the  ```background-position``` property, with horizontal and vertical components:  

Always specify both the horizontal and vertical options, in that order:
- ```background-position: [horizontal option] [vertical option];```  
- Horizontal options: ```left```, ```right```, and ```center```.  
- Vertical options: ```top```, ```center```, and ```bottom```.  

Your options for how the background image 'repeats' are set using the  ```background-repeat``` property, with the following possible options:
- ```repeat``` (vertical and horizontal)
- ```repeat-x``` (horizontal only)
- ```repeat-y``` (vertical only)
- ```no-repeat``` (show image once only)

In this example, we have an image named main-bg.jpg which we would like repeated horizontally across the body of the page.
```
body {
  background-image: url('images/main-bg.jpg');
  background-repeat: repeat-x;
  background-position: left top;
  background-color: #000; /* Fills the 'empty part' the background with the specified color */
}
```
