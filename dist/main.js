export const wzRouter = new class {
    //! 路由表
    routes = {};
    //! 404页面
    notFound = null;
    handlePopState() {
        const path = window.location.pathname;
        // 如果路径存在，则执行对应的渲染函数
        if (this.routes[path])
            this.routes[path]();
        else if (this.notFound)
            this.notFound();
        else
            console.warn(`路径不存在: ${path}`);
    }
    constructor() {
        this.routes = {};
        this.notFound = null;
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }
    // 注册路径和对应的回调函数
    addRoute = (path, callback) => this.routes[path] = callback;
    // 注册404页面
    setNotFound = (callback) => this.notFound = callback;
    navigate(path) {
        console.log(path);
        history.pushState({}, '', path);
        this.handlePopState(); //手动触发一次路由处理
    }
    init = () => {
        window.addEventListener('DOMContentLoaded', () => this.handlePopState());
    };
};
