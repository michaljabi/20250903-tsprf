export function liElementFactory(text: string): HTMLLIElement {
    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark text-light'
    li.textContent = text;
    return li;
}
