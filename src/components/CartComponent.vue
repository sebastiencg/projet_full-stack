<script setup lang="ts">

</script>

<template>
<div>
  <div class="top">
    <span class="title">
    cart
  </span>
    <div class="cartInfo">
      <div class="cartInfoTop">
        <span>
          billing address
        </span>
        <span style="color: #3887FF">
          select another address
        </span>
      </div>
      <div class="bottom">
        <span>3 rue de la malchance  Lyon France</span>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="topCard">
      <span class="venueName">
        Perroquet bourré
      </span>
      <span class="guestTitle">
        Guests
      </span>
    </div>
    <div class="bottomCard">

    </div>
  </div>

</div>
</template>

<style scoped>

.top{
  margin-top: 10vh;
}

.title{
  font-size: 30px;
  font-weight: bold;
  color: #252525;
  text-transform: capitalize;
}

.cartInfo{
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
.cartInfoTop{
  font-weight: bolder;
  width: 90vw;
  display: flex;
  margin-left: 5%;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.bottom{
  margin-left: 5%;
  width: 90vw;
  font-size: 12px;
  text-align: left;
 }

.card{
  color: white;
  width: 90vw;
  height: 30vh;
  border-radius: 25px;
  margin-left: 5%;
  background-color: var(--primary);
}

.topCard{
  display: flex;
  justify-content: space-evenly;

}

</style>