<template>
    <view>
        <text>{{userName}}</text>
    </view>
</template>
<script>
    export default {
        name: 'layout',
        data() {
            return {
                "userName":"foo"
            }
        },
        created() {
            this.getBaseInfo();
        },
        mounted() {
            console.log("挂载")
        },
        methods: {
            getBaseInfo() {
                uni.request({
                        url: "_alive/v3/base_info",
                        data: {
                        resource_id: "l_64be3dbee4b03e4b54de55b3",
                        app_id: "appAKLWLitn7978",
                        type: 12
                    },
                    success: (res) => {
                        console.log("🚀 ~ file: layout.vue:30 ~ getBaseInfo ~ successRes:", res)
                    },
                    complete: (res) => {
                        console.log("🚀 ~ file: layout.vue:33 ~ getBaseInfo ~ completeRes:", res)
                    }
                }) 
            }
        }
    }
</script>