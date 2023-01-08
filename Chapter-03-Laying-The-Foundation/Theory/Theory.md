## Topics
- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & parcel role in JSX
- Components
- Functional Components
- Composing Components 

## What is JSX?
JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). JSX allows writing expression in { }. The expression can be any JS expression or React variable.

Characteristics of JSX:

- JSX is not mandatory to use there are other ways to achieve the same thing but using JSX makes it easier to develop react application.
- JSX allows writing expression in { }. The expression can be any JS expression or React variable.
- To insert a large block of HTML we have to write it in a parenthesis i.e, ().
- JSX produces react elements.
- JSX follows XML rule.
- After compilation, JSX expressions become regular JavaScript function calls.
- JSX uses camelcase notation for naming HTML attributes. For example, tabindex in HTML is used as tabIndex in JSX.


## Super powers of `JSX`.
- JSX makes it easier to write or add HTML in React.
- JSX can easily convert HTML tags to react elements.
- It is faster than regular JavaScript.
- JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
- As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
- JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
- It is type-safe, and most of the errors can be found at compilation time.


## Role of `type` attribute in script tag? What options can I use there?
The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script> and </script>` tags.

`type` attribute indicates the type of script represented. The value of this attribute will be one of the following:

**Attribute is not set (default), an empty string, or a JavaScript MIME type**
Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type.

**module**
This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The `charset` and `defer` attributes have no effect. Unlike classic scripts, `module` scripts require the use of the CORS protocol for cross-origin fetching.

## {TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
`{TitleComponent}`: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
`<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the `{<  />}` expression.
`<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
