import utils from "../utils/utils"

/**
 * 快手极速版
 */

class Ksjs {
    appName = '快手极速版'

    isAdd=false

    /**
     * 判断青少年模式
     */
    younModel = () => {
        const target = utils.getTargetText('我知道了')
        if (target) {
            const bound = target.bounds
            click(bound.centerX(), bound.centerY())
        }
    }

    /**
     * 点击翻倍
     */
    double = () => {
        const result = utils.findImage('ksjs/double.png', {
            threshold: 0.7,
            region: [0, 50],
        })
        if (result) {
            click(result.x, result.y)
        }
    }

    /**
     * 领取福利
     * 每日十次广告
     */
    tenAdd=()=>{
        const target=text('领福利').drawingOrder(0).findOne(300)
        if(target){
            const bound = target.bounds()
            click(bound.centerX(), bound.centerY())
            this.isAdd=true
        }
    }

    /**
     * 咱看一个广告
     */
    seeagain=()=>{
        const target=id('com.kuaishou.nebula.neo_video:id/again_dialog_ensure_text').drawingOrder(3).findOne(300)
        if(target){
            const bounds=target.bounds()
            click(bounds.centerX(),bounds.centerY())
        }
    }

    /**
     * 开宝箱得金币
     */
    openTreasure=()=>{
        const result = utils.findImage('ksjs/treasure.jpg', {
            threshold: 0.7,
            // region: [0, 50],
        })
        if (result) {
            click(result.x, result.y)
        }
    }

    /**
     * 看视频最高得
     */
    toAdd=()=>{
        const target=text('看视频最高得').drawingOrder(0).findOne(300)
        if(target){
            const bound = target.bounds()
            click(bound.centerX(), bound.centerY())
            this.isAdd=true
        }
    }

     /**
     * 放弃奖励
     */
    giveUpWard=()=>{
        const result = utils.findImage('ksjs/giveUp.jpg', {
            threshold: 0.7,
            // region: [0, 50],
        })
        if (result) {
            click(result.x, result.y)
        }
    }

    /**
     * 广告
     * 点击额外获取
     */
    getAnother = () => {
        const target = utils.getTargetText('点击额外获取', true)
        if (target) {
            const bound = target.bounds
            click(bound.centerX(), bound.centerY())
            sleep(3*1000)
        }
    }

   

    /**
     * 广告
     * 关闭
     */
    closeAdd=()=>{
        while(this.isAdd){
            sleep(7*1000)
            const target=id('com.kuaishou.nebula.neo_video:id/video_countdown_end_icon').drawingOrder(3).findOne(300)
            if(target){
                const bounds=target.bounds()
                click(bounds.centerX(),bounds.centerY())
                sleep(1000)
                this.seeagain()
                this.giveUpWard()
                this.isAdd=false
            }
        }
    }

    run = () => {
        // app.launchApp(this.appName)
        // this.younModel()
        // this.double()
        // this.getAnother()
        if(!this.isAdd){
            this.tenAdd()
        }else{
            this.closeAdd()
        }
        // this.seeagain()
        // this.toAdd()
    }
}

const ksjs = new Ksjs()

export default ksjs