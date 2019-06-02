<template>
<div>
   {{ msg }}
</div>

</template>
<script>
//es6中暴露的写法
export default{
    //组件的选项
    data () {
        return {
            msg: 'hello'
        }
    }

}

</script>

<style>

</style>