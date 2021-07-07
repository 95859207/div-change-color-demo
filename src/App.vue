<template>
  <div>
      <div :class="{active}" @click="change" id='box'>
      </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      active:0,
    }
  },
  mounted(){
  },
  methods:{
    change(){
      var div = document.querySelector('#box')
      if(this.active == 0){
        div.style.backgroundColor = 'blue'
        this.active++
      }else if(this.active == 1){
        div.style.backgroundColor = 'green'
        this.active++
      }else if(this.active == 2){
        div.style.backgroundColor = 'pink'
        this.active++
      }else if(this.active == 3){
        div.style.backgroundColor = 'red'
        this.active = 0
      }
    }
  }
}
</script>

<style>
#box{
  width: 200px;
  height: 200px;
  background: red;
}
</style>