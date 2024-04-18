<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="">
      <h1>information about sponsorship</h1>
      <a href="/profile">return</a>
    </div>
    <div class="">
      <form class="mt-10" action="">
        <label for="">Invite people to win some prizes</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple@mail.com" required />
        <button class="btn btn_primary mt-5">Send</button>
      </form>
    </div>
    <div class="container_btn-sponsor">
      <a class="btn_sponsorship" href="">1 sponsorship</a>
      <a class="btn_sponsorship" href="">5 sponsorship</a>
      <a class="btn_sponsorship" href="">10 sponsorship</a>
      <a class="btn_sponsorship" href="">15 sponsorship</a>
    </div>
  </div>
</template>

<style scoped>
.container_btn-sponsor {
  gap: 1em;
  display: flex;
  align-items: center;
  margin-top: 5em;
  flex-direction: column;
  justify-content: start;
}
.btn_sponsorship {
  width: 100%;
  padding: .4em;
  text-align: start;
  border-bottom: 1px solid var(--black);
}
</style>
