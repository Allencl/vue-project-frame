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
        </wisTable>
    </div>
</template>
<script>

import SearchPage from './search.vue';  // 查询头

export default {
    components: { 
        SearchPage      
    },    
    data () {
        return {
            columns: [
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
         * 查询
        */
        searchHandle: function(form){
            this.$Notice.open({
                title: '查询的数据',
                desc: JSON.stringify(form)
            });
        },
    }
}
</script>

<style lang="scss">

</style>