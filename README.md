# Keep It Simple Stupid (KISS) Grid

A functional grid system in only 7 lines of CSS. Works on IE 7+!

    .grid {
      display: table;
      table-layout: fixed;
      width: 100%;
    }
    .grid > div {
      display: table-cell;
    }
    
To use this, here's an example of HTML markup:
    
    <div class="grid">
      <div>Hello!</div>
      <div>Hello!</div>
      <div>Hello!</div>
      <div>Hello!</div>
    </div>

The `.grid` element will act as a full-width row, and its 4 children `div`s become flexible, class-agnostic, equal-width columns.

The columns also will allow vertical alignment! To do so, add this line of CSS to your children elements:
    
    .grid > div {
      vertical-align: top|middle|bottom|;
    }
    
To create a responsive breakpoint to stack the columns vertically, simply add a max-width media query with the following:

    @media (max-width: 1024px;) {
      .grid > div {
        display: block;
      }
    }

Modifier classes for all this could be added, but for the sake of simplicity I'll leave them out for now. You can figure it out! :)
