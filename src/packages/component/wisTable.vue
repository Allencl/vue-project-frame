<template>
    <span class="wis-component-table">
        <div class="search-component">
            <slot name="search-container"></slot>
        </div>
        <div>
            <Table 
                :columns="columns" 
                :data="data"
            >
            </Table>            
        </div> 
        <div class="page-component">
            <Page 
                show-sizer
                :total="100" 
                show-elevator 
            />
        </div>     
    </span>

</template>
<script>
    export default {
        data () {
            return {
                // table 数据
                data:[]
            }
        },
        created(){
            this.initHandle();
        },
        methods:{
            /**
             * 初始化
             */
            initHandle: function(){
                // 模拟请求
                setTimeout(()=>{
                    this.data=[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
                },500);
            }
        },
        props:{
            // 配置列
            columns:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>
<style lang="scss">
    .wis-component-table{
        .search-component{
            padding-top: 12px;
        }

        .page-component{
            padding: 16px 0px;
        }
    }
</style>
