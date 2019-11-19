<template>
    <div class="home">
        <p class="p">CL</p>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import '../assets/css/home.less'

    export default {
        name: 'home',
        data() {
            return {}
        },
        created() {
        },
        mounted() {
            console.log(this.GetUrlParam("pid"));
            this.wxConfig();
            this.getActivitytime().then(res => {
                console.log(res)
            })
        },
        methods: {},
        components: {
            HelloWorld
        }
    }
</script>
