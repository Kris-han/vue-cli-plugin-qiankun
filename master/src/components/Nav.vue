<template>
    <div class="nav">
      <div class="left_log">
        <button class="btn" @click="btttt">

        </button>
      </div>
      <ul class="left-btn">
          <li class="right_con_li_item color-orgin">
            <span class="right_con_li_item_container ">工作台</span>
          </li>
          <li class="right_con_li_item">
             <span class="right_con_li_item_container ">我的任务</span>
          </li>
          <li class="right_con_li_item">
             <span class="right_con_li_item_container ">文件分享</span>
          </li>
          <li class="right_con_li_item">
            <span class="right_con_li_item_container ">后台管理</span>
          </li>
          

      </ul>
      <div class="right_con">
        <ul class="right_con_li" style="position: relative; height: 50px">
          <li class="right_con_li_item" style="position:relative; top: 25px; transform: translate(0, -50%); ">
            <div class="right_con_li_item__search">
                <svg  t="1607591298743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1510" width="20" height="20"><path d="M844.515556 817.777778 684.562963 657.73037c45.037037-51.294815 72.438519-118.613333 72.438519-192.284444 0-160.995556-130.56-291.555556-291.555556-291.555556S173.89037 304.45037 173.89037 465.445926s130.56 291.555556 291.555556 291.555556c73.671111 0 140.98963-27.306667 192.284444-72.438519l159.952593 159.952593c7.395556 7.395556 19.437037 7.395556 26.832593 0S851.911111 825.078519 844.515556 817.777778zM465.445926 719.075556c-140.041481 0-253.62963-113.588148-253.62963-253.62963s113.588148-253.62963 253.62963-253.62963 253.62963 113.588148 253.62963 253.62963S605.582222 719.075556 465.445926 719.075556z" p-id="1511" fill="#cdcdcd"></path></svg>
                <input type="text" aria-autocomplete="none" placeholder="搜索文档、控制台、API、解决方案和资源" class="sc-CB-bkbjAj CB-bVzJZD" value="" data-spm-anchor-id="5176.13329450.nav-right.i0.31f14df5ya0vTK">
            </div>


          </li>
          <!-- <li class="right_con_li_item">
            <span class="right_con_li_item_container ">费用</span>
          </li>
          <li class="right_con_li_item">
            <span class="right_con_li_item_container">工单</span>
          </li>
          <li class="right_con_li_item">
            <span class="right_con_li_item_container">企业</span>
          </li>
          <li class="right_con_li_item">
            <span class="right_con_li_item_container">官网</span>
          </li>
           <li class="right_con_li_item">
            <span class="right_con_li_item_container">支持</span>
          </li>

          <li class="right_con_li_item">
            <span class="right_con_li_item_container"><i class="iconfont">&#xe64e;</i></span>
          </li>
          <li class="right_con_li_item">
            <span class="right_con_li_item_container"><i class="iconfont">&#xe600;</i></span>
          </li>
           <li class="right_con_li_item">
            <span class="right_con_li_item_container"><i class="iconfont">&#xe600;</i></span>
          </li>
           <li class="right_con_li_item">
            <span class="right_con_li_item_container"><i class="iconfont">&#xe659;</i></span>
          </li>

          <li class="right_con_li_item">
            <span class="right_con_li_item_container">简体</span>
          </li> -->
          <!--  -->
          <li class="right_con_li_item" style="margin-right: 10px;position:relative; top: 25px; transform: translate(0, -50%); ">
            <span class="right_con_li_item_container  message">
              <em class="num">8</em>
              <span class="icon">
                <i class="iconfont">&#xe600;</i>
              </span> 
            </span>
          </li>
          <!-- 个人信息 -->
          <li class="right_con_li_item" style="margin-right: 10px;position:relative; top: 25px; transform: translate(0, -50%); ">
            <span class="right_con_li_item_container user-tab">
               <el-popover
                  popper-class="user-popover"
                  placement="bottom"
                  width="200"
                  trigger="click"
                >
                 <template v-slot:reference>
                    <div class="user-name">
                      ted
                      <span class="icon"><i class="iconfont">&#xe600;</i></span> 
                    </div>
                  </template>


                  <div class="user-tab-item">
                    个人中心
                  </div>
                  <div class="user-tab-item">
                    设置
                  </div>
                  <div class="user-tab-item">
                    退出登录
                  </div>
                 
               </el-popover>
            </span>
          </li>


          <!--  -->
          <li class="right_con_li_item" style="margin-right: 30px;position:relative; top: 25px; transform: translate(0, -50%); ">
            <span class="right_con_li_item_container">
              <img src="~@/assets/default_handsome.jpg" alt="" style="width: 40px;height: 40px;border-radius: 50%;vertical-align: middle;position: relative;">
            </span>
          </li>




        </ul>
      </div>


    </div>
</template>

<script>

   import { mapState } from 'vuex'

    export default {
        name: "NavList",
        data(){
          return {
              isopen:false,
          }
        },

        mounted(){

        },
        watch:{
          leftMenuCloseState(){
            this.isopen = this.leftMenuCloseState;
          }
        },
       computed:{
            ...mapState({
               leftMenuCloseState: state => state.comment.leftMenuCloseState
            })
         },
        methods:{
          btttt(){
           this.isopen = !this.isopen;
           this.$store.dispatch("SetLeftMenuCloseStateAction",this.isopen);

          }
        },

    }
</script>

<style scoped lang="less">
.left_log { 
  // display: inline-block;
  float: left;
 }
 .right_con_li_item.color-orgin {
   color: #F36864;
 }
  .left-btn {
    float: left;
    line-height: 50px;
    margin-left: 117px;
  }
  
  /deep/ ul {
    padding:0px;
  }
  .nav {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 999;
    min-width: 960px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
    background-color: rgb(255, 255, 255);
    height: 50px;
    border:1px solid gainsboro;
  }
  .left_log {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .btn {
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding: 0px;
    box-sizing: border-box;
    outline: medium;
    background: none rgb(255, 106, 0);
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    transition: all 0.3s ease-out 0s;
    display: inline-block;
    border: none;
    overflow: hidden;
    vertical-align: middle;
    text-align: center;
    color: rgb(85, 85, 85);
    white-space: nowrap;
  }
  .right_con {
    display: inline-block;
    position: absolute;
    right: 0px;
    font-size: 12px;
    min-width: 300px;
    height: 100%;
    top:0px;
  }
  .user-tab {
    display: block;
    width: 50px;
    height: 50px
  }
  .user-tab-item {
    padding: 5px 12px;
    &:hover {
      background: #ccc;
      cursor: pointer;
    }
  }
  .user-name {
    line-height: 50px;
    font-size: 18px;
    text-align: center;
  }
  .message {
    position: relative;
  }
  .num {
    position: absolute;
    width: 15px;
    height: 15px;
    background: red;
    color:  #fff;
    border-radius: 8px;
    right: -8px;
    top: -8px;
    text-align: center;
    line-height: 15px;
  }
  .right_con_li_item{
    display: inline-block;
    margin-right: 30px;
    color: rgb(51, 51, 51);
    vertical-align: top;
  }

  .right_con_li_item__search{

    align-items: center;
    position: relative;
    border: 1px solid rgb(222, 222, 222);
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    transition: all 0.3s ease-out 0s;

  }
  .right_con_li_item__search .icon{
    position: relative;
    top:5px;
    left:5px;
  }
  right_con_li_item__search:hover{

  }

  .right_con_li_item_container{
    cursor: pointer;
  }
  .right_con_li_item_container:hover{
    color:rgb(255, 106, 0);
  }


  .sc-CB-bkbjAj {
    height: 30px;
    line-height: 30px;
  }
  .CB-bVzJZD {
    padding: 0px 8px;
    font-size: 12px;
    border:none;
    box-sizing: border-box;
    outline: none;
    background: transparent;
    width: 250px;
    color: rgb(51, 51, 51);
}



  *, :after, :before {
    box-sizing: border-box;
  }
  i {
    font-style: italic;
  }


  @font-face {
    font-family: 'iconfont';  /* project id 2262767 */
    src: url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.eot');
    src: url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.woff') format('woff'),
    url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2262767_ttdjmm70efg.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

</style>
<style >
.el-popover.el-popper,.user-popover {
    padding: 12px 0;
  }
</style>