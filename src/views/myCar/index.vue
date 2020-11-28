<template>
  <div class="myCar">
      <onlyLogoPart>
          <span slot=title>我的购物车</span>
          <userPart></userPart>
      </onlyLogoPart>
        <contentWrap>
            <contentArea></contentArea>
        </contentWrap>
  </div>
</template>

<script>
import onlyLogoPart from '@/components/onlyLogoPart'
import userPart from './components/user'
import contentArea from './components/contentArea'
import contentWrap from '@/components/contentWrap'
export default {
  components: {
    onlyLogoPart,
    contentWrap,
    contentArea,
    userPart
  }
}
</script>

<style lang="scss" scoped>
.myCar {

}
</style>
