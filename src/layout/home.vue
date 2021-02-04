
<template>
    <div>
        <div id="main_echarts" style="width: 600px;height:500px;"></div>
    </div>
</template>
<script>
    import * as echarts from 'echarts';

    export default {
        data() {
            return {

            }
        },        
        created() {
            setTimeout(()=>{
                this.initFunc();  // 初始化
            },1000);
        },  
        methods: {
            /**
             * 初始化 报表
             */
            initFunc: function(){
                var myChart = echarts.init(document.getElementById('main_echarts'));
                
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption({
                    silent: true,
                    series: [{
                        radius: ['15%', '80%'],
                        type: 'sunburst',
                        sort: null,
                        emphasis: {
                            focus: 'ancestor'
                        },
                        data: [{
                            value: 8,
                            children: [{
                                value: 4,
                                children: [{
                                    value: 2
                                }, {
                                    value: 1
                                }, {
                                    value: 1
                                }, {
                                    value: 0.5
                                }]
                            }, {
                                value: 2
                            }]
                        }, {
                            value: 4,
                            children: [{
                                children: [{
                                    value: 2
                                }]
                            }]
                        }, {
                            value: 4,
                            children: [{
                                children: [{
                                    value: 2
                                }]
                            }]
                        }, {
                            value: 3,
                            children: [{
                                children: [{
                                    value: 1
                                }]
                            }]
                        }],
                        label: {
                            color: '#000',
                            textBorderColor: '#fff',
                            textBorderWidth: 2,
                            formatter: function (param) {
                                var depth = param.treePathInfo.length;
                                if (depth === 2) {
                                    return '焊接问题';
                                }
                                else if (depth === 3) {
                                    return '设备漏油';
                                }
                                else if (depth === 4) {
                                    return '表面划伤';
                                }
                            }
                        },
                        levels: [{}, {
                            itemStyle: {
                                color: '#CD4949'
                            },
                            label: {
                                rotate: '焊接问题'
                            }
                        }, {
                            itemStyle: {
                                color: '#F47251'
                            },
                            label: {
                                rotate: '设备漏油'
                            }
                        }, {
                            itemStyle: {
                                color: '#FFC75F'
                            },
                            label: {
                                rotate: '表面划伤'
                            }
                        }]
                    }]
                });
            }
        }     
    }
</script>

<style lang="scss">

</style>