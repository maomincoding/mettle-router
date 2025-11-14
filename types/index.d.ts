declare const routerVersion: string;
declare function hashChange(callback: (event: HashChangeEvent) => void): () => void;
declare function initRouter(routes: any[], resetView: Function, routerContainer?: string): Function;
interface pathDataType {
    path?: string;
    query?: object;
}
declare function linkTo(pathData: string | pathDataType): void;
interface objparse {
    [key: string]: string;
}
declare function toParse(): objparse;
export { initRouter, linkTo, toParse, hashChange, routerVersion };
