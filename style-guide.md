# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

**note**
In JavaScript, the `addEventListener` method is used to attach event handlers to DOM elements. There are various types of events you can listen for, depending on the interaction or behavior you want to handle. Below is a breakdown of the common types of events:

---

### **1. Mouse Events**
These events are triggered by user interactions with a pointing device (e.g., mouse).

- **`click`**: Fires when the user clicks an element.
- **`dblclick`**: Fires when the user double-clicks an element.
- **`mouseenter`**: Fires when the mouse pointer enters an element.
- **`mouseleave`**: Fires when the mouse pointer leaves an element.
- **`mousemove`**: Fires when the mouse pointer moves over an element.
- **`mouseover`**: Fires when the mouse pointer is over an element or its child.
- **`mouseout`**: Fires when the mouse pointer leaves an element or its child.
- **`mousedown`**: Fires when a mouse button is pressed over an element.
- **`mouseup`**: Fires when a mouse button is released over an element.

**Example:**
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

---

### **2. Keyboard Events**
These events are triggered by user interactions with the keyboard.

- **`keydown`**: Fires when a key is pressed down.
- **`keyup`**: Fires when a key is released.
- **`keypress`**: Fires when a key is pressed and released (deprecated in modern browsers).

**Example:**
```javascript
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```

---

### **3. Form Events**
These events are related to form elements and user input.

- **`submit`**: Fires when a form is submitted.
- **`input`**: Fires when the value of an `<input>`, `<textarea>`, or `<select>` element changes.
- **`change`**: Fires when the value of an element changes and loses focus (e.g., for `<input>`, `<select>`, etc.).
- **`focus`**: Fires when an element receives focus.
- **`blur`**: Fires when an element loses focus.

**Example:**
```javascript
const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  console.log(`Input value: ${event.target.value}`);
});
```

---

### **4. Window Events**
These events are related to the browser window.

- **`load`**: Fires when the entire page (including images and scripts) has finished loading.
- **`resize`**: Fires when the browser window is resized.
- **`scroll`**: Fires when the user scrolls the page.
- **`beforeunload`**: Fires just before the page is unloaded (e.g., when closing the tab).

**Example:**
```javascript
window.addEventListener('resize', () => {
  console.log('Window resized!');
});
```

---

### **5. Touch Events**
These events are triggered by touch interactions on touch-enabled devices.

- **`touchstart`**: Fires when a touch point is placed on the touch surface.
- **`touchend`**: Fires when a touch point is removed from the touch surface.
- **`touchmove`**: Fires when a touch point is moved along the touch surface.
- **`touchcancel`**: Fires when a touch event is interrupted (e.g., by a pop-up).

**Example:**
```javascript
const touchElement = document.querySelector('.touchable');
touchElement.addEventListener('touchstart', () => {
  console.log('Touch started!');
});
```

---

### **6. Drag and Drop Events**
These events are related to dragging and dropping elements.

- **`dragstart`**: Fires when the user starts dragging an element.
- **`drag`**: Fires repeatedly while an element is being dragged.
- **`dragend`**: Fires when the user stops dragging an element.
- **`dragenter`**: Fires when a dragged element enters a drop target.
- **`dragleave`**: Fires when a dragged element leaves a drop target.
- **`dragover`**: Fires when a dragged element is over a drop target.
- **`drop`**: Fires when a dragged element is dropped on a drop target.

**Example:**
```javascript
const draggable = document.querySelector('.draggable');
draggable.addEventListener('dragstart', () => {
  console.log('Dragging started!');
});
```

---

### **7. Clipboard Events**
These events are related to copying, cutting, and pasting.

- **`copy`**: Fires when the user copies content.
- **`cut`**: Fires when the user cuts content.
- **`paste`**: Fires when the user pastes content.

**Example:**
```javascript
document.addEventListener('copy', () => {
  console.log('Content copied!');
});
```

---

### **8. Media Events**
These events are related to media elements like `<audio>` and `<video>`.

- **`play`**: Fires when media playback starts.
- **`pause`**: Fires when media playback is paused.
- **`ended`**: Fires when media playback ends.
- **`volumechange`**: Fires when the volume changes.

**Example:**
```javascript
const video = document.querySelector('video');
video.addEventListener('play', () => {
  console.log('Video is playing!');
});
```

---

### **9. Animation and Transition Events**
These events are related to CSS animations and transitions.

- **`animationstart`**: Fires when a CSS animation starts.
- **`animationend`**: Fires when a CSS animation ends.
- **`animationiteration`**: Fires when a CSS animation repeats.
- **`transitionend`**: Fires when a CSS transition ends.

**Example:**
```javascript
const box = document.querySelector('.box');
box.addEventListener('transitionend', () => {
  console.log('Transition ended!');
});
```

---

### **10. Custom Events**
You can create and dispatch custom events using the `CustomEvent` constructor.

**Example:**
```javascript
const element = document.querySelector('.custom-element');
element.addEventListener('myEvent', () => {
  console.log('Custom event triggered!');
});

// Dispatch the custom event
const event = new CustomEvent('myEvent');
element.dispatchEvent(event);
```

---

### **Summary**
Here’s a quick summary of the types of events:
- **Mouse Events**: `click`, `dblclick`, `mouseenter`, etc.
- **Keyboard Events**: `keydown`, `keyup`, `keypress`.
- **Form Events**: `submit`, `input`, `change`, etc.
- **Window Events**: `load`, `resize`, `scroll`, etc.
- **Touch Events**: `touchstart`, `touchend`, `touchmove`, etc.
- **Drag and Drop Events**: `dragstart`, `drag`, `drop`, etc.
- **Clipboard Events**: `copy`, `cut`, `paste`.
- **Media Events**: `play`, `pause`, `ended`, etc.
- **Animation/Transition Events**: `animationstart`, `transitionend`, etc.
- **Custom Events**: Create and dispatch your own events.

Let me know if you need further clarification or examples!
Certainly! Form events in JavaScript are specifically related to user interactions with HTML forms and form elements like `<input>`, `<textarea>`, `<select>`, and `<button>`. These events are crucial for handling user input, validating data, and managing form submissions. Let’s dive deeper into the most commonly used form events:

---

### **1. `submit` Event**
- **Triggered when**: A form is submitted (e.g., by clicking a submit button or pressing `Enter`).
- **Use case**: Handle form submission, validate data, or prevent the default form submission behavior.

**Example:**
```html
<form id="myForm">
  <input type="text" name="username" required>
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    console.log('Form submitted!');
    const username = event.target.username.value;
    console.log(`Username: ${username}`);
  });
</script>
```

---

### **2. `input` Event**
- **Triggered when**: The value of an `<input>`, `<textarea>`, or `<select>` element changes (on every keystroke or selection).
- **Use case**: Real-time validation or updating the UI as the user types.

**Example:**
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="output"></p>

<script>
  const input = document.getElementById('myInput');
  const output = document.getElementById('output');

  input.addEventListener('input', (event) => {
    output.textContent = `You typed: ${event.target.value}`;
  });
</script>
```

---

### **3. `change` Event**
- **Triggered when**: The value of an element changes **and the element loses focus** (e.g., after typing in an input field and clicking outside).
- **Use case**: Validate or process data after the user finishes editing.

**Example:**
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="output"></p>

<script>
  const input = document.getElementById('myInput');
  const output = document.getElementById('output');

  input.addEventListener('change', (event) => {
    output.textContent = `You changed the value to: ${event.target.value}`;
  });
</script>
```

---

### **4. `focus` Event**
- **Triggered when**: An element receives focus (e.g., when the user clicks on an input field or tabs into it).
- **Use case**: Highlight the active field or show additional instructions.

**Example:**
```html
<input type="text" id="myInput" placeholder="Click here...">
<p id="message"></p>

<script>
  const input = document.getElementById('myInput');
  const message = document.getElementById('message');

  input.addEventListener('focus', () => {
    message.textContent = 'Input field is focused!';
  });
</script>
```

---

### **5. `blur` Event**
- **Triggered when**: An element loses focus (e.g., when the user clicks outside the input field or tabs away).
- **Use case**: Validate data after the user finishes editing.

**Example:**
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="message"></p>

<script>
  const input = document.getElementById('myInput');
  const message = document.getElementById('message');

  input.addEventListener('blur', () => {
    message.textContent = 'Input field lost focus!';
  });
</script>
```

---

### **6. `reset` Event**
- **Triggered when**: A form is reset (e.g., by clicking a reset button or calling `form.reset()`).
- **Use case**: Clear or reset additional UI elements when the form is reset.

**Example:**
```html
<form id="myForm">
  <input type="text" name="username" placeholder="Username">
  <button type="reset">Reset</button>
</form>

<script>
  const form = document.getElementById('myForm');
  form.addEventListener('reset', () => {
    console.log('Form reset!');
  });
</script>
```

---

### **7. `invalid` Event**
- **Triggered when**: A form element fails validation (e.g., when a required field is empty or the input doesn’t match the pattern).
- **Use case**: Customize the validation error message or behavior.

**Example:**
```html
<form id="myForm">
  <input type="text" name="username" required>
  <button type="submit">Submit</button>
</form>

<script>
  const input = document.querySelector('input[name="username"]');
  input.addEventListener('invalid', (event) => {
    event.preventDefault(); // Prevent the default error message
    alert('Please fill out this field!');
  });
</script>
```

---

### **8. `select` Event**
- **Triggered when**: The user selects text in an `<input>` or `<textarea>` element.
- **Use case**: Track or manipulate selected text.

**Example:**
```html
<input type="text" id="myInput" value="Select some text...">
<p id="output"></p>

<script>
  const input = document.getElementById('myInput');
  const output = document.getElementById('output');

  input.addEventListener('select', (event) => {
    const selectedText = event.target.value.substring(
      event.target.selectionStart,
      event.target.selectionEnd
    );
    output.textContent = `You selected: ${selectedText}`;
  });
</script>
```

---

### **9. `cut`, `copy`, `paste` Events**
- **Triggered when**: The user cuts, copies, or pastes text in an input or textarea.
- **Use case**: Restrict or modify clipboard operations.

**Example:**
```html
<input type="text" id="myInput" placeholder="Try cutting, copying, or pasting...">
<p id="output"></p>

<script>
  const input = document.getElementById('myInput');
  const output = document.getElementById('output');

  input.addEventListener('cut', () => {
    output.textContent = 'Text cut!';
  });

  input.addEventListener('copy', () => {
    output.textContent = 'Text copied!';
  });

  input.addEventListener('paste', () => {
    output.textContent = 'Text pasted!';
  });
</script>
```

---

### **Summary of Form Events**
| Event       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `submit`    | Fires when a form is submitted.                                             |
| `input`     | Fires when the value of an input, textarea, or select element changes.      |
| `change`    | Fires when the value of an element changes and loses focus.                 |
| `focus`     | Fires when an element receives focus.                                       |
| `blur`      | Fires when an element loses focus.                                          |
| `reset`     | Fires when a form is reset.                                                 |
| `invalid`   | Fires when an element fails validation.                                     |
| `select`    | Fires when text is selected in an input or textarea.                        |
| `cut`       | Fires when text is cut from an input or textarea.                           |
| `copy`      | Fires when text is copied from an input or textarea.                        |
| `paste`     | Fires when text is pasted into an input or textarea.                        |

---

### **Practical Use Cases**
1. **Form Validation**: Use `input`, `change`, and `invalid` events to validate user input in real-time.
2. **Dynamic Updates**: Use `input` to update the UI as the user types.
3. **Prevent Default Behavior**: Use `submit` and `invalid` to customize form submission and error handling.
4. **Track User Actions**: Use `focus`, `blur`, `cut`, `copy`, and `paste` to monitor user interactions.

Let me know if you need further clarification or examples!
In JavaScript, the terms **"render"** and **"update"** are often used in the context of **manipulating the DOM (Document Object Model)** or **working with frameworks/libraries** like React, Vue, or Angular. These terms describe the process of displaying or refreshing content on a web page.

Let’s break down when and how we use **render** and **update**:

---

### **1. Rendering**
Rendering refers to the process of **generating and displaying content** on the screen. This could involve creating new elements, adding them to the DOM, or displaying data dynamically.

#### **When to Use Render:**
- When you need to **display content for the first time** (e.g., loading a list of items, showing a form, or displaying a chart).
- When you want to **generate HTML dynamically** based on data (e.g., rendering a list of items from an array).
- In frameworks like React, rendering happens when a component is first mounted or when its state/props change.

#### **Example of Rendering in Plain JavaScript:**
```html
<div id="app"></div>

<script>
  const app = document.getElementById('app');

  // Data to render
  const data = ['Apple', 'Banana', 'Cherry'];

  // Render function
  function renderList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    app.appendChild(ul);
  }

  // Render the list
  renderList(data);
</script>
```

**Output:**
```html
<div id="app">
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>
</div>
```

---

### **2. Updating**
Updating refers to the process of **modifying existing content** in the DOM or in a framework's virtual DOM. This could involve changing text, styles, attributes, or even replacing entire elements.

#### **When to Use Update:**
- When you need to **reflect changes in data** (e.g., updating a counter, changing a user's name, or refreshing a list).
- When you want to **re-render a portion of the UI** without reloading the entire page.
- In frameworks like React, updating happens when the component's state or props change.

#### **Example of Updating in Plain JavaScript:**
```html
<div id="app">
  <p>Count: <span id="count">0</span></p>
  <button id="increment">Increment</button>
</div>

<script>
  const countElement = document.getElementById('count');
  const incrementButton = document.getElementById('increment');

  let count = 0;

  // Update function
  function updateCount() {
    countElement.textContent = count;
  }

  // Event listener to update the count
  incrementButton.addEventListener('click', () => {
    count++;
    updateCount(); // Update the DOM
  });

  // Initial render
  updateCount();
</script>
```

**Output:**
- Initially, the count is `0`.
- When the button is clicked, the count increments, and the DOM is updated to reflect the new value.

---

### **Rendering vs. Updating in Frameworks**
In frameworks like **React**, **Vue**, or **Angular**, rendering and updating are handled automatically by the framework's reactivity system. Here's how they work:

#### **React Example:**
```jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Render and update are handled by React
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```

- **Render**: Happens when the component is first mounted.
- **Update**: Happens when the `count` state changes (e.g., when the button is clicked).

---

### **Key Differences Between Render and Update**

| **Aspect**       | **Render**                                      | **Update**                                      |
|-------------------|-------------------------------------------------|-------------------------------------------------|
| **Purpose**       | Display content for the first time.             | Modify existing content.                        |
| **When Used**     | Initial load or when new data is introduced.    | When data changes or user interacts with the UI.|
| **Performance**   | Can be expensive if rendering large amounts of data. | Typically faster, as it only updates what changed. |
| **In Frameworks** | Happens on component mount or state/props change. | Happens on state/props change.                  |

---

### **Best Practices**
1. **Minimize DOM Manipulation**:
   - Avoid frequent rendering or updating, as it can be expensive. Use techniques like **debouncing** or **batching updates**.
   
2. **Use Virtual DOM (in Frameworks)**:
   - Frameworks like React use a virtual DOM to optimize rendering and updating, reducing the performance cost.

3. **Separate Concerns**:
   - Keep rendering logic (how content is displayed) separate from update logic (how content changes).

4. **Efficient Updates**:
   - Only update the parts of the DOM that need to change, rather than re-rendering the entire component.

---

### **Example Combining Render and Update**
```html
<div id="app">
  <ul id="list"></ul>
  <button id="addItem">Add Item</button>
</div>

<script>
  const listElement = document.getElementById('list');
  const addItemButton = document.getElementById('addItem');
  let items = ['Item 1', 'Item 2'];

  // Render function
  function renderList() {
    listElement.innerHTML = ''; // Clear the list
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listElement.appendChild(li);
    });
  }

  // Update function
  function addItem() {
    items.push(`Item ${items.length + 1}`);
    renderList(); // Re-render the list
  }

  // Initial render
  renderList();

  // Event listener to update the list
  addItemButton.addEventListener('click', addItem);
</script>
```

**Output:**
- Initially, the list shows `Item 1` and `Item 2`.
- When the button is clicked, a new item is added, and the list is re-rendered.

---

Let me know if you need further clarification or examples!

**from claude**
Let me explain the common `addEventListener` event types in JavaScript:

1. **Mouse Events**:
```javascript
// Triggers when mouse button is pressed down
element.addEventListener('mousedown', () => {});

// Triggers when mouse button is released
element.addEventListener('mouseup', () => {});

// Triggers when mouse is clicked (down and up)
element.addEventListener('click', () => {});

// Triggers on double click
element.addEventListener('dblclick', () => {});

// Triggers when mouse enters an element
element.addEventListener('mouseenter', () => {});

// Triggers when mouse leaves an element
element.addEventListener('mouseleave', () => {});

// Triggers when mouse moves within an element
element.addEventListener('mousemove', () => {});

// Similar to mouseenter but bubbles up
element.addEventListener('mouseover', () => {});

// Similar to mouseleave but bubbles up
element.addEventListener('mouseout', () => {});
```

2. **Keyboard Events**:
```javascript
// Triggers when key is pressed down
element.addEventListener('keydown', () => {});

// Triggers when key is released
element.addEventListener('keyup', () => {});

// Triggers when a key that produces a character is pressed
element.addEventListener('keypress', () => {});
```

3. **Form Events**:
```javascript
// Triggers when form is submitted
form.addEventListener('submit', () => {});

// Triggers when input value changes and field loses focus
element.addEventListener('change', () => {});

// Triggers when input value changes
element.addEventListener('input', () => {});

// Triggers when field gains focus
element.addEventListener('focus', () => {});

// Triggers when field loses focus
element.addEventListener('blur', () => {});

// Triggers when form is reset
form.addEventListener('reset', () => {});
```

4. **Document/Window Events**:
```javascript
// Triggers when page has finished loading
window.addEventListener('load', () => {});

// Triggers when DOM is ready (before images and stylesheets)
document.addEventListener('DOMContentLoaded', () => {});

// Triggers when window is resized
window.addEventListener('resize', () => {});

// Triggers when page is scrolled
window.addEventListener('scroll', () => {});
```

5. **Drag and Drop Events**:
```javascript
// Element being dragged
element.addEventListener('dragstart', () => {});
element.addEventListener('drag', () => {});
element.addEventListener('dragend', () => {});

// Drop target
element.addEventListener('dragenter', () => {});
element.addEventListener('dragover', () => {});
element.addEventListener('dragleave', () => {});
element.addEventListener('drop', () => {});
```

6. **Clipboard Events**:
```javascript
// Triggers when content is copied/cut/pasted
element.addEventListener('copy', () => {});
element.addEventListener('cut', () => {});
element.addEventListener('paste', () => {});
```

7. **Media Events**:
```javascript
// Audio/Video events
media.addEventListener('play', () => {});
media.addEventListener('pause', () => {});
media.addEventListener('ended', () => {});
media.addEventListener('volumechange', () => {});
media.addEventListener('timeupdate', () => {});
```

8. **Animation Events**:
```javascript
element.addEventListener('animationstart', () => {});
element.addEventListener('animationend', () => {});
element.addEventListener('animationiteration', () => {});
```

Example with event object usage:
```javascript
element.addEventListener('click', (event) => {
    // Access event properties
    console.log(event.target);        // Element that triggered the event
    console.log(event.currentTarget); // Element that listener is attached to
    console.log(event.clientX);       // Mouse X coordinate
    console.log(event.clientY);       // Mouse Y coordinate
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
});
```

Common patterns:
1. **Event Delegation**:
```javascript
// Handle events on multiple elements
parentElement.addEventListener('click', (e) => {
    if(e.target.matches('.child-class')) {
        // Handle click on child elements
    }
});
```

2. **Remove Event Listener**:
```javascript
function handler() {
    console.log('Handled!');
}

element.addEventListener('click', handler);
// Later...
element.removeEventListener('click', handler);
```

Would you like me to elaborate on any specific event type or show more practical examples?
Let me explain each form event in detail with practical examples:

1. **Submit Event** (`submit`):
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form from submitting to server
    
    // Get form data
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Validate
    if (!email || !password) {
        alert('Please fill all fields!');
        return;
    }
    
    // Process form data
    console.log('Form submitted:', { email, password });
});
```

2. **Change Event** (`change`):
- Triggers after an input's value changes AND loses focus
- Useful for select dropdowns, checkboxes, radio buttons
```javascript
const select = document.querySelector('select');
const checkbox = document.querySelector('input[type="checkbox"]');

// Triggers when different option is selected
select.addEventListener('change', (event) => {
    console.log('Selected value:', event.target.value);
});

// Triggers when checkbox is checked/unchecked
checkbox.addEventListener('change', (event) => {
    console.log('Checkbox checked:', event.target.checked);
});
```

3. **Input Event** (`input`):
- Triggers immediately when value changes
- Real-time tracking of user input
```javascript
const searchInput = document.querySelector('input[type="text"]');

// Real-time search as user types
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    console.log('Current input:', searchTerm);
    
    // Could be used for live search
    if (searchTerm.length >= 3) {
        searchProducts(searchTerm);
    }
});
```

4. **Focus Event** (`focus`):
- Triggers when element receives focus
```javascript
const input = document.querySelector('input');

input.addEventListener('focus', (event) => {
    // Add highlighting class
    event.target.classList.add('highlight');
    
    // Show any helper text
    document.querySelector('.helper-text').style.display = 'block';
});
```

5. **Blur Event** (`blur`):
- Triggers when element loses focus
- Great for validation
```javascript
const emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener('blur', (event) => {
    const email = event.target.value;
    
    // Remove highlighting
    event.target.classList.remove('highlight');
    
    // Validate email when user leaves field
    if (!email.includes('@')) {
        event.target.classList.add('error');
        showError('Please enter a valid email');
    }
});
```

6. **Reset Event** (`reset`):
- Triggers when form is reset to default values
```javascript
const form = document.querySelector('form');

form.addEventListener('reset', (event) => {
    // Clear any error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Reset any custom styles
    form.querySelectorAll('input').forEach(input => {
        input.classList.remove('error', 'success');
    });
});
```

Here's a complete example combining multiple events:
```javascript
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

// Real-time validation
emailInput.addEventListener('input', (e) => {
    const email = e.target.value;
    const errorDiv = document.querySelector('.email-error');
    
    // Show live feedback
    if (email.includes('@')) {
        errorDiv.textContent = '✓ Valid email format';
        errorDiv.style.color = 'green';
    } else {
        errorDiv.textContent = 'Please include an @ symbol';
        errorDiv.style.color = 'orange';
    }
});

// Final validation on blur
emailInput.addEventListener('blur', (e) => {
    const email = e.target.value;
    const errorDiv = document.querySelector('.email-error');
    
    if (!email.includes('@')) {
        e.target.classList.add('error');
        errorDiv.textContent = 'Invalid email format';
        errorDiv.style.color = 'red';
    }
});

// Clear styling on focus
emailInput.addEventListener('focus', (e) => {
    e.target.classList.remove('error');
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        submitToServer();
    }
});

// Reset handling
form.addEventListener('reset', () => {
    // Clear all error messages and styles
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
});
```

These events work together to create a smooth form experience:
- `input` for real-time feedback
- `blur` for validation when leaving fields
- `focus` for clearing errors when returning to fields
- `submit` for final form processing
- `reset` for clearing the form state
- `change` for handling select boxes and checkboxes

Would you like me to explain any specific aspect in more detail?