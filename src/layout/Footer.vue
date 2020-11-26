
<template>
    <div class="footer">
        <div class="content">
            <div class="info">
                <!-- 客服和 置顶 -->
                <top-and-server></top-and-server>
                <div class="left info-detail">
                    <div class="title">
                        <span>联系方式</span>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/dz.png" alt="">
                        </div>
                        <div class="text">
                            <span>北京市西城区新德街20号中英器材 大楼东配楼3层</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/kf.png" alt="">
                        </div>
                        <div class="text">
                            <span>400-780-9700</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/kf.png" alt="">
                        </div>
                        <div class="text">
                            <span>010-62366288</span>
                        </div>
                    </div>
                </div>
                <div class="center info-detail">
                    <div class="title">
                        <span>官方平台</span>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/wx.png" alt="">
                        </div>
                        <div class="text">
                            <span>微信服务号：中影光峰</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/wx.png" alt="">
                        </div>
                        <div class="text">
                            <span>微信订阅号：激光影客</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/txsph.png" alt="">
                        </div>
                        <div class="text">
                            <span>腾讯视频号：中影光辉</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/wb.png" alt="">
                        </div>
                        <div class="text">
                            <span>微博：@中影光辉_CINEAPPO</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/dy.png" alt="">
                        </div>
                        <div class="text">
                            <span>抖音：中影光辉</span>
                        </div>
                    </div>
                </div>
                <div class="right-qr">
                    <div class="qr">
                        <img src="@/assets/qr.png" alt="">
                    </div>
                    <div class="text">
                        <span>扫一扫</span>
                    </div>
                    <div class="text">
                        <span>关注中影光峰公众号</span>
                    </div>
                </div>
                <div class="right-qr">
                    <div class="qr">
                        <img src="@/assets/qr.png" alt="">
                    </div>
                    <div class="text">
                        <span>扫一扫</span>
                    </div>
                    <div class="text">
                        <span>关注中影光峰品牌号</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="all-rights">
            <span>Copyright©2014-2017 版权所有：中影光峰激光影院技术（北京）有限公司 京ICP备15058245号-2</span>
        </div>
    </div>
</template>

<script>
import topAndServer from '@/components/topAndServer'
export default {
  components: {
    topAndServer
  }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 44px;
    width: 100%;
    position: relative;
    .content {
        width: 100%;
        height: 269px;
        background: #333333;
        display: flex;
        justify-content: center;
        align-items: stretch;
        position: relative;
        .info {
            width: 1226px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #7C7C7C;
            font-size: 14px;
            .left {
                width: 240px;
                text-align: left;
            }
            .center {
                width: 400px;
            }
            .info-detail {
                .title {
                    font-weight: 400;
                    color: #FFFFFF;
                    text-align: left;
                    padding-bottom: 16px;
                }
                .item {
                    display: flex;
                    align-items: center;
                    .text {
                        padding-left: 7px;
                    }
                }
            }
            .right-qr {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .all-rights {
        height: 40px;
        width: 100%;
        background-color: #2C2C2C;
        text-align: center;
        line-height:40px;
        font-size: 14px;
        color: #7C7C7C;
    }
}
</style>
