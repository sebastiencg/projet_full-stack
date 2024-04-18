<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="">
      <h1>Venue</h1>
      <a href="/profile">return</a>
    </div>

    <div class="mt-20">
      <h2 class="fw text-start">List :</h2>


      <div class="container_carteVenue">

        <a class="carte_venueIndex" href="">
          <div>
            <h3 class="fw">Le jean jean</h3>
          </div>
        </a>

        <a class="carte_venueIndex" href="">
          <div>
            <h3 class="fw">Perroquet bourré</h3>
          </div>
        </a>

        <a class="carte_venueIndex" href="">
          <div>
            <h3 class="fw">Bistrot fringuant</h3>
          </div>
        </a>

        <a class="carte_venueIndex" href="">
          <div>
            <h3 class="fw">Fnac Bellecour</h3>
          </div>
        </a>
      </div>
      <div class="mt-20">
        <a class="btn btn_create_venue" href="/venue/create">create venue</a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container_carteVenue {
  gap: 1em;
  display: flex;
  color: var(--white);
  flex-direction: column;
  justify-content: center;
}

.carte_venueIndex {
  width: 100%;
  height: 40px;
  margin-top: 1em;
  padding: 1em 0 1em 2em;
  text-align: start;

  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: var(--primary);
}

.btn_create_venue {
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: var(--secondary);
  justify-content: start;
}
</style>