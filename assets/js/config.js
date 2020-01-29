/** 友情链接信息*/
let friend = [{
    name: "张三",
    image: "http://image.luokangyuan.com/1_qq_27922023.jpg",
    website: "http://luokangyuan.com/",
    github: "https://github.com/",
    desc: "不忘初心，努力做有价值的技术文章"

},{
    name: "张三",
    image: "http://image.luokangyuan.com/1_qq_27922023.jpg",
    website: "http://luokangyuan.com/",
    github: "https://github.com/",
    desc: "不忘初心，努力做有价值的技术文章"

}];
/** 赞助人信息*/
let sponsors = [{
    name: "张三",
    money: "5元"
},{
    name: "张三",
    money: "5元"
}];
/** 个人技能信息*/
let skills = [{
    name: "Java",
    percent: "90%"
},{
    name: "数据库",
    percent: "85%"
},{
    name: "SpringBoot",
    percent: "75%"
},{
    name: "SpringCloud",
    percent: "80%"
},{
    name: "设计原则",
    percent: "65%"
},{
    name: "数据库",
    percent: "80%"
}];
/** 关于我页面信息配置*/
let personal = {
    name: "Waldeinsamkeit",
    desc: "是一名不一样的软件工程师",
    motto: "于公元2013年入坑编程行业，热爱分享，因为感恩，此生之路，我将走过；走过这一次，便再也无法重来。所有力所能及的善行，所有充盈于心的善意，我将毫不吝惜，即刻倾于。我将不再拖延，再不淡漠，只因此生之路，再也无法重来",
    photo: [{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    },{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    },{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    },{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    },{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    },{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        address: "武汉 · 光谷街",
        time: "2019年12月28日"
    }],
    project: [{
        image: "http://image.luokangyuan.com/2019/08/09/09/08/08fog-foggy-lake-2649403.jpg",
        name: "ghost-blog-theme",
        desc: "基于Ghost博客的一款程序员风格的主题",
        url: "https://github.com/luokangyuan/ghost-blog-theme"
    }]

};
/** 访问接口配置*/
const api = new GhostContentAPI({
    url: 'http://localhost:2370',
    key: '3ca5b1a638723b78f35b7d4a07',
    version: "v3"
});


