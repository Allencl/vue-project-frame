<template>
    <Form ref="formRef" :model="formModal" :label-width="80">
        <Row>
            <i-col span="6">
                <FormItem label="密码" prop="passwd">
                    <Input type="password" v-model="formModal.passwd" />
                </FormItem>
            </i-col>
            <i-col span="6">
                <FormItem label="姓名" prop="name">
                    <Input type="name" v-model="formModal.name" />
                </FormItem>
            </i-col>
            <i-col span="6">
                <FormItem label="Age" prop="age">
                    <Input type="text" v-model="formModal.age" number />
                </FormItem>
            </i-col>            
        </Row> 
        <Row>
            <i-col span="24">
                <FormItem>
                    <Button type="primary" @click="handleSubmit">查询</Button>
                    <Button @click="handleReset" style="margin-left: 8px">重置</Button>
                </FormItem>
            </i-col>
        </Row> 
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formModal:{},
            }
        },
        methods: {
            /**
             * 查询
            */
            handleSubmit: function(){
                this.$emit("search",this.formModal);
            },
            /**
             * 重置
             */
            handleReset: function(){
                this.$refs["formRef"].resetFields();
            }
        }
    }
</script>