<template>
  <router-view/>
  <nav>
    <router-link class="routerLink" to="/"><i class="fa-solid fa-house-chimney"></i><font-awesome-icon :icon="faHouse"/>Home</router-link>
    <router-link class="routerLink" to="/tickets"><i class="fa-solid fa-ticket"></i><font-awesome-icon :icon="faTicket"/>Ticket</router-link>
    <router-link class="routerLink" to="/artist"><i class="fa-solid fa-user-group"></i><font-awesome-icon :icon="faUserGroup"/>Artist</router-link>
    <router-link class="routerLink" to="/profile"><i class="fa-solid fa-user"></i><font-awesome-icon :icon="faCircleUser"/>Profile</router-link>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  color: var(--white);

  bottom: 0;
  position: fixed;

  height: 10vh;
  padding: 30px;
  background-color: var(--primary);
}

nav a {
  font-weight: bold;
  color: var(--white);
}

nav a.router-link-exact-active {
  color: #42b983;
}

.routerLink{
  display: flex;
  flex-direction: column;
}
</style>
<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCircleUser, faHouse, faTicket, faUserGroup} from "@fortawesome/free-solid-svg-icons";
</script>
