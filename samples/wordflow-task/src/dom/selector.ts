export const $ = <T extends Element>(query: string): T => document.querySelector(query) as T;
