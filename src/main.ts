/**
 * wz-router库
 * 前端路由控制库,适用于简单单页面网页(SPA)
 */
type router = {
    addRoute: (i: string, j: () => void) => void,
    setNotFound: (i: () => void) => void
}
export const wzRouter: router = new class {
    //! 路由表
    private routes: { [key: string]: () => void } = {};
    //! 404页面
    private notFound: null | (() => void) = null;

    private handlePopState() {
        const path = window.location.pathname;
        // 如果路径存在，则执行对应的渲染函数
        if (this.routes[path]) this.routes[path]();
        else if (this.notFound) this.notFound();
        else console.warn(`路径不存在: ${path}`);
    }
    public constructor() {
        this.routes = {};
        this.notFound = null;
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }
    // 注册路径和对应的回调函数
    public addRoute = (path: string, callback: () => void) => this.routes[path] = callback;
    // 注册404页面
    public setNotFound = (callback: () => void) => this.notFound = callback;

    public navigate(path: string) {
        console.log(path);
        history.pushState({}, '', path);
        this.handlePopState(); //手动触发一次路由处理
    }
    public init = () => {
        window.addEventListener('DOMContentLoaded', () => this.handlePopState())
    };
}
