<template>
    <div>
        <Drawer
            v-model="value"
            title="编辑"
            width="960"
            draggable 
            @on-close="cancelHandle"
        >
            <Form 
                ref="form"
                :model="formData" 
                :rules="ruleValidate" 
                :label-width="120"
            >
                <Row>
                    <i-col span="12">
                        <FormItem label="Name" prop="name" label-position="top">
                            <Input v-model="formData.name" placeholder="请输入姓名" />
                        </FormItem>
                    </i-col>
                    <i-col span="12">
                        <FormItem label="年龄" prop="age" label-position="top">
                            <Input v-model="formData.age" placeholder="请输入年龄" />
                        </FormItem>
                    </i-col>                    
                </Row>
            </Form>
            <div class="demo-drawer-footer">
                <Button @click="submitHandle('save')">保存</Button>
                <Button type="primary" @click="submitHandle('submit')">提交</Button>
            </div>
        </Drawer>    
    </div>
</template>
<script>
    export default {
        model: {
			prop: 'value',
			event: 'cv'
		},
        data () {
            return {
                // 表单数据
                formData: {},

                // 表单校验
                ruleValidate: {
                    name: [
                        { required:true,message:'该项必填！',trigger:'blur'}
                    ],
                    age: [
                        { required:true,message:'该项必填！',trigger:'blur'}
                    ],                    
                }
            }
        },
        created(){
    
        },
        methods:{
            /**
             * 关闭 
             */
            cancelHandle: function(){
                this.$emit("cv",false);
            },
            /**
             * 提交 |保存
             */
            submitHandle:function(){

                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$emit("submit",this.formData);
                    } else {
                        this.$Message.error('表单不完整！');
                    }
                })

            }
        },
        props:{
            value:{
                type:Boolean,
                default:()=>false              
            }
        }
    }
</script>
<style lang="scss">
    .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;

        Button{
            margin-right: 8px;
        }
    }
</style>