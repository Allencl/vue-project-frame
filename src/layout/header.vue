<template>
    <header class="wis-header-container">
        <div class="left-box">
   
            <img :src="logo" alt="西息信息" @click="toHome">
   
            <span class="text-content">西信信息</span>
        </div>
        <div  class="right-box">
            <Avatar style="" :src="user" />

            <Dropdown
                placement="bottom-end"
            >
                <Icon class="head-more-icon" style="color:#fff" type="md-settings" />
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <Icon type="ios-log-out" style="margin-right:8px" />
                        <span>退出登录</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </header>
</template>
<script>
    export default {
        data () {
            return {
                headerHeight:60,  // 头部高度
                logo: require("@assets/images/logo-header.png"), // logo
                user: require("@assets/images/user.png"), // logo

            }
        },
        methods:{
            // to home
            toHome: function(){
                this.$store.dispatch("removeTabsAll",{});
                this.$router.push({name:'home',params:{}});
            }
        }
    }
</script>

<style lang="scss">
    .head-more-icon{
        margin-left: 16px;
        position: relative;
        font-size: 26px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        /* margin-top: 0px; */
        top: 5px;
        margin-right: 10px;
    }

    .ivu-layout-header{
        padding: 0px 16px;
    }

    .wis-header-container{
 
        display:flex;
        padding: 0px;

        >div{
            flex:1;
        }

        .left-box{
            text-align: left;

            img{
                position: relative;
                /* margin-top: 10px; */
                top: 14px;
                width: 80px;
        
            }

            .text-content{
     
                color: #fff;
                font-size: 16px;
                display: inline-block;
                font-weight: 500;
                padding-left: 30px;

            }
        }

        .right-box{
            text-align: right;

            .user-box{
                background: yellow;
                height: 100%;
                display: inline-block;
                width: 60px;
            }
        }
    }
</style>