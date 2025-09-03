
export const $ = <ElementType extends HTMLElement>(s: string): HTMLElement => {
    const htmlEl = document.querySelector(s);
    if(htmlEl) {
        return htmlEl as ElementType;
    }
    throw new Error(`E01: Element Not found [!] Your query "${s}" has failed!`)
}
