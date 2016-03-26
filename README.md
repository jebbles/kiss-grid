# KISS Grid (Keep It Simple Stupid Grid)

A functional grid system in 7 lines of code.

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

The .grid element will act as a row, and its children divs are 4 flexible, class-agnostic, equal-width columns.

The columns also will allow vertical alignment! To do so, add this line of CSS to your children elements:
    
    .child-div {
      vertical-align: top|middle|bottom|;
    }

Modifier classes for alignment/gutters could be added, but for the sake of simplicity I'll leave them out for now. You can figure it out! :)
