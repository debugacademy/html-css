# HTML5
HTML is a language which essentially acts as the building blocks for web pages. The structure and content of our websites will be output using HTML.

## Want to see what HTML looks like?
Using Google Chrome or Firefox, right click almost any website (even Facebook!) and press 'inspect element'. The code that you see in the large area is HTML.

Example of a very basic HTML page:
```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html> 
```
### Example explained:
```
- The DOCTYPE declaration defines the document type to be HTML
- The text between <html> and </html> describes an HTML document
- The text between <head> and </head> provides information about the document
- The text between <title> and </title> provides a title for the document
- The text between <body> and </body> describes the visible page content
- The text between <h1> and </h1> describes a heading
- The text between <p> and </p> describes a paragraph
```
*Example from w3schools.com.*

## Anatomy of an HTML element
HTML documents consist of HTML elements and content. Before we jump into common elements, let's talk about what an element looks like:  

```<[element's name] [attribute's key]="[attribute's value]">[content]</[element's name]>```  

(The brackets and everything inside of them are placeholders.)  

- The ```[element name]``` opening *and* closing tags are mandatory. 
  - Examples of elements include: 
     - ```<div></div>```
     - ```<p></p>```
     - ```<header></header>```
  - There are a few exceptions, which are elements that do not require closing tags. 
    - Example: ```<br />```
- The ```[attributes(s)]``` are optional.
  - Attributes consist of an ```[attribute key]``` and are (optionally) set equal to an ```[attribute value]```
  - Multiple attributes can be provided per element
  - Multiple values can be provided to specific attributes
  - Examples of using attributes include:
     - ```<a href="http://debugacademy.com"></a>```
- The ```[content]``` is optional.
  - Certain elements expect content, such as the paragraph element, or the link element.
    - Examples:
      - <a href="path/to/file.html">Click here</a>
        - The 'click here' is the content of the link element.
      - <p>Once upon a time, there was a paragraph.</p>
        - The sentence is the content of the paragraph element.

## HTML elements
### Page headers
- Tags:
 - ```<h1></h1>```
 - ```<h2></h2>```
 - ```<h3></h3>```
 - ```<h4></h4>```
 - ```<h5></h5>```
 - ```<h6></h6>```
- Used by styling and search engines to determine the most prominent text on the page.
- h1 is the primary heading on a page, h2 is the second most prominent heading, then h3, and so on..
- Usage example:
```
<h1>Site name</h1>
<h2>Section A: heading</h2>
<h2>Section B: heading</h2>
<h3>Sub-section B1 heading.</h3>
<h3>Sub-section B2 heading.</h3>
<h2>Section C: heading</h2>
```

### Paragraphs
- ```<p></p>``` tags.
- ```<p>Paragraph text goes here</p>```
- ```<p>Additional paragraphs are put in their own 'p' tags.</p>```

### Links
- ```<a href=""></a>``` tags
- The URL the link should point to is assigned to the 'href' attribute.
 - Example: ```<a href="http://wherelinkgoes.com"></a>```
- The text the link should display goes in between the ```<a href=""></a>``` tags
 - Example: ```<a href="">What link should say</a>```
- Add ```target="blank"``` to make the link open in a new window
 - Example: ```<a href="" target="_blank"></a>```
- Full example 1: ```<a href="http://www.debugsociety.com">A link to debugsociety.com</a>```
 - Output: <a href="http://www.debugsociety.com">A link to debugsociety.com</a>
- Full example 2: ```<a href="http://www.debugsociety.com" target="_blank">A link to debugsociety.com</a>```
 - Output: <a href="http://www.debugsociety.com" target="_blank">A link to debugsociety.com</a>  

### Images
- ```<img src="">``` tag
- The relative or absolute path (including filename) is assigned to the 'src' *attribute*.
 - Example: ```<img src="files/scenery.jpg">```
- The alternative text, displayed when the image cannot be displayed, is assigned to the 'alt' *attribute*.
 - Example: ```<img alt="Beautiful view of the landscape.">```
   - Alternate text is used by search engines, used for the visually impaired, used when images don't finish loading, and more.
- Width and Height are used to specify the exact height and width of images
 - Both are optional, but it is advantageous to use them
   - Using them allows layouts to take their 'final shape' before loading all images.
- Complete example: ```<img src="files/scenery.jpg" alt="Beautiful view of the landscape." width="300" height="400">```

### Divs (Divisions)
- ```<div></div>``` Division tag
  - A section in the page
  - Used to group block-elements
  - Elements are arranged and formatted with CSS.

#### HTML5 exclusive semantic div-like tags
Prior to HTML5, div tags were used for the header, footer, navigation, etc. This lead to developers coming up with ID *attributes*, or some other way of differentiating common, important, divs from the rest of them. That worked for them, but a search engine, for example, could not easily know which div represented the header.

HTML5 has provided a number of 'semantic' tags to resolve that issue, and others.

New semantic tags in HTML5 include:
- ```<article></article>```
- ```<aside></aside>```
- ```<details></details>```
- ```<figcaption></figcaption>```
- ```<figure></figure>```
- ```<footer></footer>```
- ```<header></header>```
- ```<main></main>```
- ```<mark></mark>```
- ```<nav></nav>```
- ```<section></section>```
- ```<summary></summary>```
- ```<time></time>```

### Lists (Ordered and Unordered)
- ```<ul></ul>``` *Unordered list* tag
 - Indicates the start and end of an unordered list.
- ```<ol></ol>``` *Ordered list* tag
 - Indicates the start and end of an ordered list.
- ```<li></li>``` Individual *List item* tag
  - Used for creating list items for both ordered and unordered lists.
  - Examples:
    - ```<li>Item 1</li>```
    - ```<li>Item 2</li>```

    - ```<li>Item 3</li>```

#### Complete *Unordered* list example:
##### Code
```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
##### Display
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

#### Complete *Ordered* list example:
##### Code
```
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

##### Display
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

### Tables
- ```<table></table>``` Table tag
  - Indicates the start and end of a table.
- ```<tr></tr>``` Table *row* tag
  - Indicates the start and end of a single table row, within a table.
- ```<td></td>``` Table *cell* (or 'division') tag
  - Indicates the start and end of a single table cell, within a table row.
- ```<thead></thead>``` Table *header* tag
  - Marks a row in the table as the table's header
  - Typically wraps a ```tr``` element

#### Table examples
##### 2 rows, 2 columns
###### Code
```
<table>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>
```
###### Display
<table>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>
##### 3 rows, 1 column
###### Code
```
<table>
  <thead>
    <tr>
      <td>Header column's label</td>
    </tr>
  </thead>
  <tr>
    <td>Row 2, Column 1</td>
  </tr>
  <tr>
    <td>Row 3, Column 1</td>
  </tr>
</table>
```
###### Display
<table>
  <thead>
    <tr>
      <td>Header column's label</td>
    </tr>
  </thead>
  <tr>
    <td>Row 2, Column 1</td>
  </tr>
  <tr>
    <td>Row 3, Column 1</td>
  </tr>
</table>

### Font-level tags
There are a number of HTML tags used for differentiating words from others.

- ```<u>Text</u>``` Text that is underlined
- ```<em>Text</em>``` Text that is emphasized
- ```<del>Text</del>``` Text that has been deleted
- ```<s>Text</s>``` Text that is no longer correct
- ```<strong>Text</strong>``` Text that is important
- ```<b>Text</b>``` Text that is bold (discouraged, use strong instead)

## Key HTML Terminology
### Attributes
**Attributes** provide additional information about HTML elements.

You have already seen the ```href``` attribute on links: ```<a href="http://website.com">Link text</a>```

- Attributes always look like: ```name="value"```
- All HTML elements can be assigned attributes
- Attributes are used to provide additional information about an element
- Attributes are specified in the opening tag

To add an ID attribute with value of 'test', simply add id="test" to the element. For example, if the element is ```h2```, adding that attribute would look as follows: ```<h2 id="test"></h2>```

### Descendants
**Descendants** refers to sub-elements, or elements within other elements. It can be thought of like 'children', grandchildren, etc.

```
<div>
  <p>
    <ul>
      <li>1- Lorem ipsum.</li>
      <li>2- Lorem ipsum.</li>
      <li>3- Lorem ipsum.</li>
    </ul>
  </p>
</div>
```
In this example, the ```<p>```, ```<ul>```, *and* ```<li>```'s are descendants of the ```<div>```, because they are 'inside' the div tags.

### Ancestors
**Ancestors** is the opposite of *descendants*. It refers to the elements containing descendants.
```
<div>
  <p>
    <ul>
      <li>1- Lorem ipsum.</li>
      <li>2- Lorem ipsum.</li>
      <li>3- Lorem ipsum.</li>
    </ul>
  </p>
</div>
```
In this example, the ```<ul>```, ```<p>```, *and* ```<div>``` elements are each ancestors to the ```<li>``` elements, because they are 'outside' the li tags.
