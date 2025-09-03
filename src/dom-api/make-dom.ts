
type HTMLThings = HTMLElement[] | Text[];

export function makeTag(tagName: string, elements: HTMLThings = [], cssClasses: string[] = []) {
  const node = document.createElement(tagName);
  node.classList.add(...cssClasses);
  elements.forEach((el: HTMLElement| Text) => node.appendChild(el));
  return node;
}

export function txt(text: string ): Text {
  return document.createTextNode(text);
}

export const div = (elements: HTMLThings = [], cssClasses: string[] = []) => makeTag('div', elements, cssClasses) as HTMLDivElement;
export const ul = (elements: HTMLThings = [], cssClasses: string[] = ['list-group']) => makeTag('ul', elements, cssClasses) as HTMLUListElement;
export const p = (elements: HTMLThings = [] = [], cssClasses: string[] = []) => makeTag('p', elements, cssClasses)  as HTMLParagraphElement;
export const li = (innerText: string, cssClasses: string[] = ['list-group-item']) => makeTag('li', [txt(innerText)], cssClasses) as HTMLLIElement;
export const h2 = (text: string, cssClasses: string[] = []) => makeTag('h2', [txt(text)], cssClasses) as HTMLHeadingElement;
export const h6 = (text: string, cssClasses: string[] = []) => makeTag('h6', [txt(text)], cssClasses) as HTMLHeadingElement;
export const button = (text: string, cssClasses: string[] = ['btn']) => makeTag('button', [txt(text)], cssClasses) as HTMLButtonElement;
export const input = (attributes: {[key: string]: any} = {}): HTMLInputElement => {
  const myInput = makeTag('input', [], ['form-control', 'mb-2']);
  Object
      .keys(attributes)
      .forEach((a: string) => myInput.setAttribute(a, attributes[a]));
  return myInput as HTMLInputElement;
};
