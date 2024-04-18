<script setup lang="ts">

</script>

<template>
  <div class="payment-body ">
    <div class="flex  justify-center">
      <h1 class="tittle-payment">Payment</h1>
    </div>
    <div class="flex  justify-center">
      <div class="flex card-payment">
        <!-- Colonne de gauche -->
        <div class="w-1/2 p-4">
          <p class=" font-bold mb-4 text-gauche-payment-top">Total amount</p>
          <p> 12,30 $</p>
          <br>
          <p class=" font-bold mb-4 text-gauche-payment-top" >Date</p>
          <p> june 15</p>
        </div>

        <!-- Colonne de droite -->
        <div class="w-1/2 p-4 flex justify-end">
          <h2 class="text-lg font-bold mb-4">Details</h2>
          <p>image</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.payment-body {
  background-color: #D1E3DD;
  font-family: "Work Sans", sans-serif;

}
.tittle-payment {
  padding-bottom: 25px;
  padding-top: 50px;
  font-size: 25px;
  font-weight: bold;
}
.card-payment{
  background-color: white;
  border-radius: 10px;
  width: 95%;
}
.text-gauche-payment-top{

}
</style>