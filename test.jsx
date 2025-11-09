import reactFS from './reactFS/index.js'

/** @jsx reactFS.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);
const container = document.getElementById("root")
reactFS.render(element, container)

