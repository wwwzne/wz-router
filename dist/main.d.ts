/**
 * wz-router库
 * 前端路由控制库,适用于简单单页面网页(SPA)
 */
export type Router = {
    addRoute: (path: string, callback: () => void) => void;
    setNotFound: (callback: () => void) => void;
    navigate: (path: string) => void;
    init: () => void;
};
export declare const wzRouter: Router;
