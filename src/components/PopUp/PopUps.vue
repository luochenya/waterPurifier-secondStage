<template>
  <div class="PopUps" v-show="isDialogShow" @touchmove.prevent>
    <el-dialog
      :visible.sync="isDialogShow"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      :modal="false"
      :width="w"
    >
      <div class="content">
        <div class="imgs">
          <img
            src="./img/gift@2x (6).png"
            alt=""
            style="width=8rem"
            v-if="modyType == 1"
          />
          <img
            src="./img/succeed@2x.png"
            alt=""
            style="width=8rem"
            v-if="modyType == 2"
          />
          <img
            src="./img/error@2x.png"
            alt=""
            style="width=8rem"
            v-if="modyType == 3"
          />
        </div>
        <slot name="body"></slot>
        <h1 v-if="modyType == 1">確認兌換</h1>
        <p v-if="modyType == 1">商品兌換後，無法取消更改兌換品項</p>
        <h1 v-if="modyType == 2">兌換成功</h1>
        <p v-if="modyType == 2">兌換項目已成功存入兌換紀錄中</p>
        <h1 v-if="modyType == 3">兌換失敗</h1>
        <p v-if="modyType == 3">點數不足，如有疑問請洽專人協助處理</p>
        <div class="PopUps_button" v-if="modyType == 1">
          <div class="btn_1" @click="noShowClick">
            取消
          </div>
          <div class="btn_2" @click="submitClick">
            確定
          </div>
        </div>
        <div class="PopUps_buttons" v-if="modyType == 2 || modyType == 3">
          <div v-if="modyType == 2" @click="noShowClick">
            前往查看
          </div>
          <div v-if="modyType == 3" @click="noShowClick">
            我知道了
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopUps",
  props: {
    isDialogShow: { type: Boolean, default: false },
    noShowClick: { type: Function, default: () => {} },
    submitClick: { type: Function, default: () => {} },
    w: { type: String, default: "35rem" },
    modyType: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.PopUps {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
  webkit-overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  /deep/ .el-dialog__wrapper {
    //  webkit-z-index: 9996!important;
    //  overflow: hidden;
    //  webkit-overflow: hidden;
  }
  /deep/ .el-dialog {
    // z-index: 9999!important;
    width: 35rem;
    border-radius: 1.4rem !important;
    /deep/ .el-dialog__body {
      padding: 0;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 2.5rem;
      .imgs {
        display: flex;
        justify-content: center;
        width: 9rem;
        height: 8rem;
        img {
          height: 8rem;
        }
      }
      h1 {
        margin-top: 2.9rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: bold;
        color: rgba(61, 61, 61, 1);
        line-height: 2rem;
      }
      p {
        font-size: 1.4rem;
        color: rgba(134, 134, 134, 1);
        line-height: 2rem;
      }
      .PopUps_button {
        width: 100%;
        margin-top: 3.6rem;
        display: flex;
        justify-content: space-around;
        .btn_1 {
          width: 13.8rem;
          height: 4.6rem;
          background: rgba(230, 248, 255, 1);
          border-radius: 0.6rem;
          font-size: 1.4rem;
          font-weight: 500;
          color: rgba(31, 182, 237, 1);
          line-height: 4.6rem;
          text-align: center;
          cursor: pointer;
        }
        .btn_2 {
          width: 13.8rem;
          height: 4.6rem;
          background: rgba(31, 182, 237, 1);
          box-shadow: 0px 1.2rem 3rem 0px rgba(1, 181, 240, 0.15);
          font-size: 1.4rem;
          line-height: 4.6rem;
          border-radius: 6px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          cursor: pointer;
        }
      }
      .PopUps_buttons {
        margin-top: 3.6rem;
        div {
          cursor: pointer;
          width: 18rem;
          height: 4.6rem;
          background: rgba(31, 182, 237, 1);
          box-shadow: 0px 1.2rem 3rem 0px rgba(1, 181, 240, 0.15);
          border-radius: 0.6rem;
          font-size: 1.4rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 4.6rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
