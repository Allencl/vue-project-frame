<template>
    <div>
        <wisTable
            :columns="columns"
        >
            <template v-slot:search-container>
                <SearchPage 
                    @search="searchHandle"
                />
            </template>
            <template v-slot:button-container>
                <Button type="info" @click="editHandle('add')">新增</Button>
                <Button type="success" @click="editHandle('edit')">编辑</Button>
                <Button type="error" @click="deleteHandle">删除</Button>
            </template>
        </wisTable>

        <EditPage 
            v-model="showPage"
            @submit="submitHandle"
        />

    </div>
</template>
<script>

import SearchPage from './search.vue';  // 查询头
import EditPage from './edit.vue';  // 新增|编辑



export default {
    components: { 
        SearchPage,
        EditPage      
    },    
    data () {
        return {
            showPage:false,  // 显示编辑页面

            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],            
        }
    },
    created(){

    },
    methods:{
        /**
         * 新增 |编辑
         */
        editHandle: function(){
            this.showPage=true;
        },
        /**
         * 查询
        */
        searchHandle: function(form){
            this.$Notice.open({
                title: '查询的数据',
                desc: JSON.stringify(form)
            });
        },
        /**
         * 提交
         */
        submitHandle: function(data){
            this.$Notice.open({
                title: '保存成功！',
                desc: JSON.stringify(data)
            });   
        },
        /**
         * 删除
         */
        deleteHandle: function(){
            this.$Modal.confirm({
                title: '删除',
                content: '<p>删除后数据将无法恢复，确定删除！</p>',
                onOk: () => {
                    this.$Message.info('Clicked ok');
                },
                onCancel: () => {
                    this.$Message.info('Clicked cancel');
                }
            });            
        }
    }
}
</script>

<style lang="scss">

</style>