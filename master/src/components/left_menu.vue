<template>
    <div class="left_menu" v-show="leftMenuCloseState" @click="close_all_down">
       <transition name="slide-fade2">

           <div class="menu_container"  v-show="leftMenuCloseState" style="z-index: 100" @click.stop>

                 <div class="item_header item" @click="come_on">
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
                 </div>



      </transition>

      <transition name="slide-fade" @click.stop>
        <div v-if="show" class="right_container">
          <span class="icon close_icon" @click="close_down">
            <i class="iconfont">&#xe611;</i>
          </span>
          <div class="pro_list">
          <!--头像--->
          </div>
        </div>
      </transition>


    </div>
</template>

<script>
 import { mapState } from 'vuex'
  export default {
    name: "left_menu",
    data(){
      return {
        show:false
      }
    },
    methods:{
      come_on(){
        this.show = !this.show ;


      },
      close_down(){
        this.show = false;
        // this.$store.dispatch("SetLeftMenuCloseStateAction",false);
      },
      close_all_down(){
        this.show = false;
        this.$store.dispatch("SetLeftMenuCloseStateAction",false);
      }
    },
     computed:{
       ...mapState({
            leftMenuCloseState: state => state.comment.leftMenuCloseState
       })
     },



    mounted(){

    }
  }
</script>

<style scoped lang="less">
  .left_menu{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 50px;
    position: fixed;
    z-index: 2;
     background-color: rgba(0, 0, 0, 0.2);
    .menu_container{
      width: 240px;
      min-height:100%;
      background: white;
      box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
      z-index:100;
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
    .right_container{
      width: 800px;
      height:100%;
      position: absolute;
      top:0px;
      padding-left:240px;
      background-color: rgb(247, 247, 247);
      padding-top: 50px;
      z-index:-1;
      .close_icon{
        position: absolute;
        right: 30px;
        margin-top:30px;
        cursor:pointer;
        .iconfont{
          font-size: 22px;
        }

      }
      .pro_list{
        margin-top:30px;
        border: 1px solid #ddd;
        height:100%;
        padding-top: 30px;
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

  .slide-fade-enter-from,.slide-fade-leave-to{
    transform: translateX(-800px);
  }
  .slide-fade-enter-active,.slide-fade-leave-active{
    transition: all 0.5s ease;
  }

  .slide-fade2-enter-from,.slide-fade2-leave-to{
    transform: translateX(-240px);
  }
  .slide-fade2-enter-active,.slide-fade2-leave-active{
    transition: all 0.3s ease;
  }



</style>
