<template>
    <div class="left_menu">
      <div class="menu_container">
         <div class="item_header item">
            <span class="icon"><i class="iconfont">&#xe600;</i></span> <span>产品服务</span>
            <span class="icon_right"><i class="iconfont">&#xe7a7;</i></span>
         </div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe600;</i></span> <span>云服务器ECS</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe600;</i></span> <span>云数据RDS版</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe60d;</i></span> <span>专有网络VPC</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe60e;</i></span> <span>对象存储OSS</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe60f;</i></span> <span>负载均衡</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe613;</i></span> <span>CDN</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe614;</i></span> <span>DataWords</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe616;</i></span> <span>域名</span></div>
          <div class="item"><span class="icon"><i class="iconfont">&#xe617;</i></span> <span>云市场</span></div>
          <div>
            {{message}}
          </div>

      </div>


    </div>
</template>

<script>
 import { mapState } from 'vuex'
  export default {
    name: "left_menu",
    data(){
      return {

      }
    },
    methods:{

    },
     computed:{
       ...mapState({
            message: state => state.comment.leftMenuCloseState
       })
     },



    mounted(){
      console.log(this.message)
    }
  }
</script>

<style scoped lang="less">
  .left_menu{
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    .menu_container{
      min-height: 100vh;
      width: 240px;
      background: white;
      box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
      .item{
        height: 47px;
        line-height: 47px;
        box-sizing: border-box;
        padding-left:16px;
        position: relative;
        cursor: pointer;
        font-size: 12px;
        .icon{
          margin-right:16px;
        }
        .icon_right{
          position:absolute;
          right: 30px;
        }

      }
      .item:hover{
        background-color: rgb(245, 245, 245);
        .icon{
          color:rgb(255, 106, 0);
        }

      }
      .item_header{
           border-bottom: 1px solid rgb(245, 245, 245);
           background-color: rgb(245, 245, 245);
      }

    }

    @font-face {
        font-family: 'iconfont';  /* project id 2273811 */
        src: url('//at.alicdn.com/t/font_2273811_b1hag2owq.eot');
        src: url('//at.alicdn.com/t/font_2273811_b1hag2owq.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_2273811_b1hag2owq.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_2273811_b1hag2owq.woff') format('woff'),
        url('//at.alicdn.com/t/font_2273811_b1hag2owq.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_2273811_b1hag2owq.svg#iconfont') format('svg');
    }
      .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;}

      }

</style>
