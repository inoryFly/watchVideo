const utils = {
    getTargetText:(text,isSmilar=false) =>{
        var img = captureScreen()
        const res = paddle.ocr(img)
        let target=undefined
        for(let i=0;i<res.length;i++){
            let current=res[i]
            const flag=isSmilar?(current.words||'').indexOf(text)>=0:current.words===text
            if(flag){
                target=current
            }
        }
        return target
    },
    findImage:(path,config={})=>{
        const realPath=`./pic/${path}`
        const  img = captureScreen()
        const template=images.read(realPath)
        const result=findImage(img,template,config)
        return result
    }
}

export default utils