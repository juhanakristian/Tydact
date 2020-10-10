export type TProps = { [key: string]: unknown };
export type TNode = { type: string; props: TProps } | string;

function createElement(
  type: string,
  props: TProps = {},
  ...children: TNode[]
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

export default {
  createElement,
};
