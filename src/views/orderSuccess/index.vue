<template>
  <div class="orderSuccess">
    <onlyLogoPart></onlyLogoPart>
    <contentWrap>
        <successContent></successContent>
      </contentWrap>
  </div>
</template>

<script>
import onlyLogoPart from '@/components/onlyLogoPart'
import contentWrap from '@/components/contentWrap'
import successContent from './components/successContent'
export default {
  components: {
    onlyLogoPart,
    contentWrap,
    successContent
  }
}
</script>

<style>

</style>
