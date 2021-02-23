<template>
    <div>
        <Drawer
            v-model="value"
            title="编辑"
            width="90%"
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
                    <i-col span="6">
                        <FormItem label="文本框" prop="name" label-position="top">
                            <Input 
                                v-model="formData.name" 
                                clearable
                                placeholder="请输入" 
                                :maxlength="30"
                                show-word-limit
                            />
                        </FormItem>
                    </i-col>
                    <i-col span="6">
                        <FormItem label="只读" prop="readonly" label-position="top">
                            <Input 
                                v-model="formData.readonly" 
                                readonly
                                disabled
                            />
                        </FormItem>
                    </i-col>     
                    <i-col span="6">
                        <FormItem label="多行文本" prop="textarea" label-position="top">
                            <Input 
                                v-model="formData.readonly" 
                                type="textarea"
                                :rows="4"
                            />
                        </FormItem>

                    </i-col>      
                    <i-col span="6">
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
                formData: {
                    readonly:"这是一个只读的文本框"
                },

                // 表单校验
                ruleValidate: {
                    name: [
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
                console.log( this.formData );
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