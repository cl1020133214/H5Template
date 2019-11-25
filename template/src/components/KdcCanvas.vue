<template>
    <div class="kdc-canvas">
        <canvas v-show="canvasFlag" id="myCanvas" :width="width" :height="height">
            您的浏览器不支持 HTML5 canvas 标签。
        </canvas>
    </div>
</template>

<script>
    export default {
        name: "KdcCanvas",
        props: {
            show: Boolean,
            canvasData: {},
        },
        data() {
            return {
                myCanvas: null,
                ctx: null,
                width: this.canvasData.Size.width,
                height: this.canvasData.Size.height,
                canvasFlag: this.show,
            }
        },
        created() {
            console.log(this.canvasData.Route)
        },
        mounted() {
            this.myCanvas = document.getElementById("myCanvas");
            this.ctx = this.myCanvas.getContext("2d");
        },
        methods: {
            //condition:是否填充
            canvasRect(data, condition) {
                if (condition) {
                    this.ctx.rect(data.position[0], data.position[1], data.position[2], data.position[3]);
                    this.ctx.stroke();
                } else {
                    this.ctx.fillStyle = "#000000";
                    this.ctx.fillRect(data.position[0], data.position[1], data.position[2], data.position[3]);
                }
            },
            canvasRoute(data) {
                this.ctx.moveTo(data.start[0], data.start[1]);
                this.ctx.lineTo(data.end[0], data.end[1]);
                this.ctx.stroke();
            },
            canvasArc(data) {
                this.ctx.beginPath();
                this.ctx.arc(data[0], data[1], data[2], data[3], data[4]);
                this.ctx.stroke();
            },
            canvasText(data, condition) {
                if (condition) {
                    this.ctx.font = data.font;
                    this.ctx.fillText(data.content, data.position[0], data.position[1]);
                } else {
                    this.ctx.font = data.font;
                    this.ctx.strokeText(data.content, data.position[0], data.position[1]);
                }
            },
            canvasGradient(data, condition) {
                if (condition) {
                    // 创建渐变
                    var grd = this.ctx.createLinearGradient(data.gradient[0], data.gradient[1], data.gradient[2], data.gradient[3]);
                    grd.addColorStop(0, data.startcolor);
                    grd.addColorStop(1, data.endcolor);
                    // 填充渐变
                    this.ctx.fillStyle = grd;
                    this.ctx.fillRect(data.position[0], data.position[1], data.position[2], data.position[3]);
                } else {
                    // 创建渐变
                    var grd = this.ctx.createRadialGradient(data.gradient[0], data.gradient[1], data.gradient[2], data.gradient[3], data.gradient[4], data.gradient[5]);
                    grd.addColorStop(0, data.startcolor);
                    grd.addColorStop(1, data.endcolor);
                    // 填充渐变
                    this.ctx.fillStyle = grd;
                    this.ctx.fillRect(data.position[0], data.position[1], data.position[2], data.position[3]);
                }
            },
            canvasImage(data) {
                var that = this;
                // 内存中先加载，然后当内存加载完毕时，再把内存中的数据填充到我们的 dom元素中，这样能够快速的去
                // 反应，比如网易的图片
                var img = new Image();
                img.onload = function () {
                    // 将图片画到canvas上面上去！
                    that.ctx.drawImage(img, data.position[0], data.position[1], data.size[0], data.size[1]);
                };
                img.src = data.src;
            },
            canvasShadow(data) {
                this.ctx.shadowBlur = data.shadowBlur;
                this.ctx.shadowColor = data.shadowColor;
                this.ctx.fillStyle = data.fillStyle;
                this.ctx.fillRect(data.fillRect[0], data.fillRect[1], data.fillRect[2], data.fillRect[3]);
            },
        }
    }
</script>

<style scoped>

</style>