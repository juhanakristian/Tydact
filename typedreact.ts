export type TIncProps = { [key: string]: unknown; children?: TChild[] };
export type TProps = { [key: string]: unknown; children: TNode[] };
export type TNode = { type: string; props: TProps };
export type TChild = TNode | string;

function createElement(
  type: string,
  props: TIncProps = {},
  ...children: TChild[]
): TNode {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text: string): TNode {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element: TNode, container: HTMLElement) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  for (const child of element.props.children) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(child, dom);
  }

  container.appendChild(dom);
}

export default {
  createElement,
};
