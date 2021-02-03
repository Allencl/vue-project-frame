<template>
    <header class="wis-header-container" :style="`height:${headerHeight}px`">
        <div class="left-box">
            <img :src="logo" alt="西息信息">
            <span class="text-content">西信信息</span>
        </div>
        <div  class="right-box">
            <Avatar style="margin-top:14px;" :src="user" />

            <Dropdown>
                <Icon type="md-settings" />
                <DropdownMenu slot="list">
                    <DropdownItem>退出登录</DropdownItem>
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