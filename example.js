/*
Example of converting the JSX code bellow to vanillaJS
Code:
    const element = <h1 title="foo">Hello</h1>
    const container = document.getElementById("root")
    ReactDOM.render(element, container)
*/

/* 
Valid Js Code:
    const element = React.createElement(
        "h1",
        {title: "foo"},
        "Hello",
    )
    const container = document.getElementById("root")
    ReactDOM.render(element, container)
*/

// vanilla js
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
const container = document.getElementById("root")

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)
