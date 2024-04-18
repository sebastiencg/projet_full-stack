<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBasketShopping, faCircleCheck} from "@fortawesome/free-solid-svg-icons";


</script>

<template>
  <div class="container mb-20 pb-20">
    <div class="">
      <h1 class="fw">Perroquet bourré</h1>
    </div>

    <div class="container_infosEvent">
      <div class="">
        <img class="img_event_show" src="" alt="image event">
      </div>

      <div class="">
        <h2 class="fw title_name_ownerPlaceEvent">Frederic Philippe</h2>
        <p class="description_event">Dive into the vibrant atmosphere of the "Le Perroquet Bourré" bar in Lyon during a special evening of the Stand Up Festival. Laughter echoes through the room as spectators gather around dark wooden tables, eager to see local comedic talents. Headlining the event is Pierre Lacroix, famous for his incisive humor, captivating the audience with hilarious observations about Lyon life and whimsical anecdotes. The contagious energy of the evening reaches its peak as spectators laugh out loud, leaving with memorable memories of this lively night at the heart of Lyon's stand-up scene.</p>
      </div>

      <div class="container_infosEvent_date_price">
        <div class="">
          <p>04/03/24 | 19h00</p>
        </div>
        <div class="">
          <p>12.30 $</p>
        </div>
      </div>


      <div class="">
        <button class="btn btn_primary justify-center fw items-center	">Book<font-awesome-icon class="ms-3" :icon="faBasketShopping" /></button>
      </div>


      <div class="">
        <p class="text-align-start"><font-awesome-icon class="me-3" :icon="faCircleCheck" />4 seat available</p>
      </div>

      <div class="">
        <ul class="gap-5 flex flex-col">
          <li><a class="flex justify-between items-center" href=""><span class="fw">01</span><div class="flex flex-col text-align-start"><span>Pierre lacroix</span><span>13 min</span></div><div></div></a></li>
          <li><a class="flex justify-between items-center" href=""><span class="fw">02</span><div class="flex flex-col text-align-start"><span>Fred Didier</span><span>12 min</span></div><div></div></a></li>
          <li><a class="flex justify-between items-center" href=""><span class="fw">03</span><div class="flex flex-col text-align-start"><span>Jean Jacques</span><span>15 min</span></div><div></div></a></li>
        </ul>
      </div>

      <hr>

    </div>



  </div>
</template>

<style scoped>

.container_infosEvent {
  gap: 1em;
  display: flex;
  flex-direction: column;
}

.img_event_show {
  width: 100%;
  height: 200px;
  margin: 1em 0;
  border-radius: 10px;
  background-color: var(--primary);
}

.title_name_ownerPlaceEvent {
  font-size: 28px;
  text-align: start;
  margin-bottom: 1em;
}

.description_event {
  width: 100%;
  text-align: justify;
}

.container_infosEvent_date_price {
  display: flex;
  align-items: center;
  margin-top: 2em;
  justify-content: space-between;
}

</style>