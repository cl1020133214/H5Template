# KDC前端手册

##如何引用
```
使用canvas
import KdcCanvas from '@/components/KdcCanvas.vue'
```

### DOM
```
<KdcCanvas :show="canvasShow" :canvasData="canvasData" ref="canvas"/>
```
### canvas：  data
```
canvasShow: true,//是否显示canvas组件
canvasData: {
    Size: {
        width: 750,
        height: 800
    },
    //Canvas - 路径
    //start：开始坐标，end：结束坐标
    Route: {
        start: [0, 0],
        end: [200, 100],
    },
    //绘制圆形
    //arc(x,y,r,start,stop)
    Arc: [95, 50, 40, 0, 2 * Math.PI],
    //绘制矩形
    //[x,y,width,height,]
    Rect: {
        position: [300, 100, 150, 100],
    },
    Rect_fill: {
        position: [300, 300, 150, 100],
    },
    //Canvas - 文本
    //font：文字大小，content：文字内容，position：位置坐标
    Text: {
        font: "30px Arial",
        content: "KDC-CANVAS",
        position: [300, 50]
    },
    //空心文字
    StrokeText: {
        font: "30px Arial",
        content: "KDC-CANVAS",
        position: [10, 50]
    },
    //Canvas - 渐变(线性渐变)
    LinearGradient: {
        //颜色与渐变宽度设置（4个值）
        gradient: [0, 0, 200, 0],
        //位置
        position: [10, 100, 150, 80],
        startcolor: "red",
        endcolor: "white"
    },
    //Canvas - 渐变(径向/园渐变)
    RadialGradient: {
        //颜色与渐变宽度设置（6个值）
        gradient: [75, 150, 200, 100, 100, 100],
        //位置
        position: [10, 200, 150, 80],
        startcolor: "red",
        endcolor: "white"
    },
    //Canvas - 图像
    Image: {
        src: "https://g.kdcer.com/customer/file/base1.png",
        //位置
        position: [10, 300],
        //大小
        size: [200, 200]
    },
    //Canvas - 阴影框
    Shadow: {
        //设置或返回用于阴影的模糊级别。
        shadowBlur: 20,
        //设置或返回用于阴影的颜色。
        shadowColor: "black",
        //设置或返回阴影与形状的水平距离。
        shadowOffsetX:20,
        //设置或返回阴影与形状的垂直距离。
        shadowOffsetY:20,
        //阴影颜色
        fillStyle: "red",
        //阴影框大小和位置
        fillRect:[600,20,100,80]
    },
}
```
### 如何使用canvas方法
```
//创建一个正方形true:(空心),false:(实心)
this.$refs.canvas.canvasRect(this.canvasData.Rect, false);
this.$refs.canvas.canvasRect(this.canvasData.Rect_fill, true);
//绘制圆形
canvasRoute
//Canvas - 路径
canvasRoute
//Canvas - true:文本,false:空心文字
canvasText
//Canvas - 渐变true:(线性渐变),false:(径向/园渐变)
canvasGradient
//Canvas - 图像
canvasImage
//Canvas - 阴影框
canvasShadow
```

### //获取页面上的参数信息 ：使用方式this.GetUrlParam("***")
```
this.GetUrlParam("pid")
```

### //微信SDK
```
this.wxConfig();
```
### //活动时间返回
```
this.getActivitytime().then(res => {
    console.log(res)
});
```
### //抽奖
```
getrandomPrize
```
### //奖品核销
```
getcheckMyPrize
```
### //查看奖品信息
```
getMyPrize
```
### //等待图片加载完毕后
```
preloadImage
```
### //等待图片加载完毕后
```
// 显示“loading加载”
this.preloadImage(["index.png", "index.png", "index.png"], function () {
    // 隐藏“loading加载”
    that.bj = false;
}, "https://wxcdn.kdcer.com/al_syb/")
```
