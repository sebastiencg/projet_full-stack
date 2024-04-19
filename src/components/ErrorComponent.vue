<script lang="ts">
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  methods: {
    faCircleExclamation() {
      return faCircleExclamation
    },
    faCircleCheck() {
      return faCircleCheck
    }
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<template>
  <div class="container">
    <div class="container_center_page">
      <div class="container_content_error">
        <div class="">
          <font-awesome-icon class="ms-3 icon_error" :icon="faCircleExclamation()" />
        </div>
        <div class="">
          <h1 class="fw title_error">An error occured while reaching this page</h1>
          <p>Please try again later or reload the website </p>
        </div>
        <h3 class="fw">Error code 505</h3>
      </div>

      <div class="mt-20 w-[calc(100%-4rem)]">
        <a class="btn btn_primary justify-center" href="/">Home</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container_center_page {
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.icon_error {
  font-size: 4em;
}

.container_content_error {
  gap: 1em;
  display: flex;
  color: var(--error);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title_error {
  font-size: 25px;
}


</style>