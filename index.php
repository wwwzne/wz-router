<div id="nav">
    <a href="/home" onclick="goTo('/home',event)">首页</a>
    <a href="/about" onclick="goTo('/about',event)">关于我们</a>
    <a href="/contact" onclick="goTo('/contact',event)">联系我们</a>
    <a href="/notfound" onclick="goTo('/notfound',event)">未知页面</a>
</div>
<hr />
<div id="content">这里是默认内容</div>
<script type="module">
    import {
        wzRouter
    } from './dist/main.js'
    console.log(wzRouter)

    wzRouter.addRoute('/home', () => {
        document.getElementById('content').innerHTML = '<h2>欢迎来到首页</h2>';
    });

    wzRouter.addRoute('/about', () => {
        document.getElementById('content').innerHTML = '<h2>我们是一个前端开发团队</h2>';
    });

    wzRouter.addRoute('/contact', () => {
        document.getElementById('content').innerHTML = '<h2>请通过邮箱联系我</h2>';
    });

    // 设置 404 页面
    wzRouter.setNotFound(() => {
        document.getElementById('content').innerHTML = '<h2>404 页面未找到</h2>';
    });

    // 点击链接时跳转
    window.goTo = (path, ev) => {
        ev.preventDefault();
        wzRouter.navigate(path); // 修正：使用 wzRouter
        return false; // 阻止默认跳转
    };
    wzRouter.init()
</script>