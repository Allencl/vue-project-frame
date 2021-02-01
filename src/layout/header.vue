<template>
    <header class="wis-header-container" :style="`height:${headerHeight}px`">
        <div class="left-box">
            <img :src="logo" alt="西息信息">
            <span class="text-content">西信信息</span>
        </div>
        <div  class="right-box">
            <el-dropdown style="margin-right: 20px;float:right;margin-top: 20px;">
                <span class="el-dropdown-link" style="cursor: pointer;font-size: 20px;color:#fff">
                    <i class="el-icon-setting el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="el-icon-s-fold"></i>
                        退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-avatar size="medium" :src="user" style="margin-top: 14px;margin-right: 16px;float: right;"></el-avatar>
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
        }
    }
</script>

<style lang="scss">
    .wis-header-container{
        background: #545c64;
        display:flex;

        >div{
            flex:1;
        }

        .left-box{
            text-align: left;

            img{
                margin-left: 16px;
                margin-top: 12px;
                width: 80px;
                float: left;
            }

            .text-content{
                float: left;
                color: #fff;
                font-size: 16px;
                display: inline-block;
                font-weight: 500;
                margin-top: 23px;
                margin-left: 26px;
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