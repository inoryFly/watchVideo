// import utils from './utils/utils'
import * as task from './task'
/**
 * 启动截屏权限
 */
requestScreenCapture()
sleep(3*1000)



const run=()=>{
    const keys=Object.keys(task)
    for(let i=0;i<keys.length;i++){
        const current=keys[i]
        const obj=task[current]['default']
        obj.run()
    }
}

run()