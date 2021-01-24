<template>
    <div class="left_menu"  v-show="true" >
       <transition name="slide-fade2">
           <div class="menu_container" :class="leftMenuCloseState ? '' : 'hidden'" style="z-index: 100" @click.stop>
             <!-- 菜单项 -->
              <div class="item_header item" @click="come_on">
                <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                <span class="nav-name">产品服务</span>
                <span class="icon_right nav-name"><i class="iconfont">&#xe7a7;</i></span>
              </div>

            <div class="item_header item" >
                <span class="icon"><i class="iconfont">&#xe600;</i></span> <span class="nav-name">产品服务</span>
              </div>

              <div class="item_header item" >
                <span class="icon"><i class="iconfont">&#xe600;</i></span> <span class="nav-name">产品服务</span>
              </div>

              <div class="item_header item" >
                <span class="icon"><i class="iconfont">&#xe600;</i></span> <span class="nav-name">产品服务</span>
              </div>

           </div>
      </transition>
      <transition v-if="leftMenuCloseState" name="slide-fade" @click.stop>
        <div v-if="show" class="right_container">
          <div style="text-align: right">
              <span class="icon close_icon" @click="close_down">
                <i class="iconfont">&#xe611;</i>
              </span>
          </div>
        
          <div class="pro_list">
          <!--头像--->
            <div class="demo-fit list_con"  v-for="fit in fits" :key="fit">
              <div class="img_con">
                <el-avatar class="img_dis" shape="square" :size="66" :fit="fit" :src="url"></el-avatar>
                <span class="title">{{ fit }}</span>
              </div>
              <el-row class="btn-list">
                <el-col :span="6">
                  <div class="btn-item">
                    <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                  </div>
                </el-col>
               <el-col :span="6">
                  <div class="btn-item">
                    <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="btn-item">
                    <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="btn-item">
                    <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                  </div>
                </el-col>
              </el-row>
            </div>
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
        show: false,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down','fill', 'contain', 'cover', 'none', 'scale-down','fill', 'contain', 'cover', 'none', 'scale-down','fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    methods:{
      come_on(){
        if(!this.leftMenuCloseState) return false
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
    watch: {
      leftMenuCloseState()  {
        if(this.leftMenuCloseState === false)  this.show = false;
      }
    },
     computed:{
       ...mapState({
            leftMenuCloseState: state => state.comment.leftMenuCloseState,
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
    .menu_container.hidden {
      width:  45px;
      overflow: hidden;
      .nav-name {
        display: none;
      }
    }
    .menu_container{
      transition:  width 0.2s;
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
          //  background-color: rgb(245, 245, 245);
          &:hover {
             background-color: rgb(245, 245, 245);
          }
      }

    }
    .right_container{
      width: 1150px;
      height:100%;
      position: absolute;
      top:0px;
      padding: 80px 50px 50px 290px;
      box-sizing: border-box;
      background-color: rgb(247, 247, 247);
      z-index:-1;
      overflow: scroll;
      .close_icon{
        // position: absolute;
        right: 30px;
        margin-top:30px;
        cursor:pointer;
        .iconfont{
          font-size: 22px;
        }

      }
      .pro_list{
        // margin-top:30px;
        height:100%;
        // padding-top: 30px;
        .list_con{
          width: 100%;
          height: 100%;
        }
        // .img_con{
        //   display: inline-block;
        //   width: 19%;
        //   text-align: center;
        //   padding: 15px 0 5px 0;
        //   border:1px solid #ccc;
        //   border-left:none;
        // }
        // `.title{
        //   display: block;
        //   font-weight: bold;
        //   font-size:18px;
        // }`

        .demo-fit {
          width: 244px;
          height: 170px;
          background: #fff;
          display: inline-block;
          margin: 0 10px 20px;
          border-radius: 3px;
          .btn-list {
            width: 100%;
          }
          .btn-item {
            border-right: 1px solid #F6F5F5;
            height: 45px;
            margin-top: 5px;
            text-align:  center;
            line-height: 45px;
            cursor: pointer;
          }
          .btn-list .el-col:last-child .btn-item {
            border-right: none;
          }
          .img_con {
            width: 100%;
            height: 113.5px;
            border-bottom: 1px solid #F6F5F5;
            .img_dis {
              width: 66px;
              height: 66px;
              border-radius: 66px;
              margin-top:  25px;
              margin-left: 25px;
              vertical-align: bottom;
            }
            .title {
              display: inline-block;
              line-height: 66px;
              margin-left: 50px;
            }
            
          }
        }

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
    transform: translateX(-1150px);
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

/* right_container 样式 */
.right_container {

}

</style>
