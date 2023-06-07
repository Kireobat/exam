<script lang="ts">
  import { Avatar } from "stwui";

  export let user: {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
  } = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
  };

  export let admin: boolean = false;

  let initials =
    user.firstname.charAt(0).toUpperCase() +
    user.lastname.charAt(0).toUpperCase();
</script>

<div class="flex justify-between bg-slate-100 h-16">
  <div class="flex flex-col justify-center ml-6">
    {#if admin}
      <h1 class="font-inter font-normal">Itslearning 2 | Admin Interface</h1>
    {:else}
      <h1 class="font-inter font-normal">Itslearning 2</h1>
    {/if}
  </div>
  <div class="flex flex-col justify-center mr-6">
    <div class="flex">
      <h3 class="font-inter font-light mr-6">Welcome, {user.firstname}</h3>
      <Avatar {initials} />
    </div>
  </div>
</div>
