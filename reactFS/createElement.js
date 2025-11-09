export function createElement(type, props, ...children) {
    return {
        type: type,
        props: {
            ...props,
            children,
        },
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}
