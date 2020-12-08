<template>
    <div class="nav">
      <div class="left_log">
        <button class="btn">

        </button>
      </div>

      <div class="right_con">
        <div class="search">
          <div class="sc-CB-jJMGHv">
            <span class="sc-CB-iemXMA">
              <i class="sc-CB-hKFyIo"></i>
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavList"
    }
</script>

<style scoped>
  .nav {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 999;
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
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    ine-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
  }
  .search {
    padding-right: 12px;
    width: 280px;
    min-width: 120px;
    max-width: 280px;
  }
  .sc-CB-jJMGHv{
    display: block;
    position: relative;
  }
  .sc-CB-iemXMA{
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    color: rgb(136, 136, 136);
  }
  .sc-CB-hKFyIo{
    font-size: 14px;
    color: rgb(136, 136, 136);
    display: inline-block;
    line-height: 1;
    font-size: inherit;
    font-weight: 200;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    vertical-align: baseline;
    text-rendering: auto;
    transition: all 200ms ease 0s;
    -webkit-text-stroke-width: 0.2px;
  }
</style>
