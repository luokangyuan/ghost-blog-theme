/** 文章雷达图*/
var leidaChart = echarts.init(document.getElementById('raddar'), 'macarons');
leidaChart.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    radar: {
        radius: '66%',
        center: ['50%', '42%'],
        splitNumber: 8,
        splitArea: {
            areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15
            }
        },
        indicator: [
            { name: 'Java', max: 10000 },
            { name: '数据结构', max: 20000 },
            { name: '设计模式', max: 20000 },
            { name: '数据库', max: 20000 },
            { name: '多线程', max: 20000 },
            { name: '大数据', max: 20000 }
        ]
    },
    legend: {
        left: 'center',
        bottom: '10',
        data: ['2017年','2018年', '2019年', '2020年']
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
            }
        },
        data: [
            {
                value: [8000, 4000, 13000, 9000, 15000, 14000],
                name: '2017年'
            },
            {
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: '2018年'
            },
            {
                value: [4000, 9000, 15000, 15000, 13000, 11000],
                name: '2019年'
            },
            {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: '2020年'
            }
        ],
    }]
});

/** 文章饼图*/
var pieChart = echarts.init(document.getElementById('piechart'), 'macarons');
pieChart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        bottom: '0',
        data: ['2020年', '2019年', '2018年', '2017年', '2016年']
    },
    series: [
        {
            name: '文章数量',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
                { value: 320, name: '2020年' },
                { value: 240, name: '2019年' },
                { value: 149, name: '2018年' },
                { value: 100, name: '2017年' },
                { value: 59, name: '2016年' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
        }
    ]
});

/** 标签词云图*/
var chart = echarts.init(document.getElementById("wordchart"), 'macarons');
chart.setOption({
    backgroundColor: "#fff",
    series: [
        {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 15,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 50],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
                normal: {
                    color: function() {
                        return (
                            "rgb(" +
                            Math.round(Math.random() * 255) +
                            ", " +
                            Math.round(Math.random() * 255) +
                            ", " +
                            Math.round(Math.random() * 255) +
                            ")"
                        );
                    }
                }
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            data:   [
                {
                    name: "Java",
                    value: 30
                },
                {
                    name: "设计模式",
                    value: 14
                },
                {
                    name: "大数据",
                    value: 2
                },
                {
                    name: "数据库",
                    value: 3
                },
                {
                    name: "css",
                    value: 2
                },
                {
                    name: "JavaScript",
                    value: 3
                },
                {
                    name: "Vue",
                    value: 2
                },
                {
                    name: "Apache",
                    value: 7
                },
                {
                    name: "Guava",
                    value: 3
                },
                {
                    name: "Spring",
                    value: 3
                },
                {
                    name: "SpringBoot",
                    value: 2
                },
                {
                    name: "SpringCloud",
                    value: 3
                },
                {
                    name: "ES6",
                    value: 5
                },
                {
                    name: "日常总结",
                    value: 4
                },
                {
                    name: "代码规范",
                    value: 2
                },
                {
                    name: "开发工具",
                    value: 2
                }
            ]

        }
    ]
});

/** 文章年度柱状图*/
var barchart = echarts.init(document.getElementById("barchart"), 'macarons');
barchart.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        left: 'center',
        bottom: '0',
        data: [ '2016年', '2017年', '2018年']
    },
    grid: {
        top: 10,
        left: '2%',
        right: '2%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '2016年',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [79, 52, 200, 334,0,12,32,0,23 ,390, 330, 220],
    }, {
        name: '2017年',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [56, 52, 34, 334,0,12,3,0,23 ,45, 43, 0],
    }, {
        name: '2018年',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [56, 43, 0, 56,43,55,3,4,23 ,0, 43, 0],
    }]
});





