<script lang="ts">
  import { onMount } from "svelte";
  import Menu from "$lib/components/Menu.svelte";
  import ClassesAccordion from "$lib/components/ClassesAccordion.svelte";

  let token: any;
  let loggedIn = false;
  let user: {
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

  onMount(() => {
    fetch("/api/auth/verify", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          loggedIn = true;
          return response.json();
        } else {
          window.location.href = "/auth/login";
        }
      })
      .then((data) => {
        user = data.user;
        console.log(user);
      })
      .catch((error) => {
        // handle network error
      });
  });
</script>

{#if loggedIn}
  <div class="grid grid-cols-10 grid-rows-5">
    <div class="col-span-10 flex justify-between bg-slate-100 h-16">
      <div><h1>Itslearning 2</h1></div>
      <div class="flex">
        <h3>Welcome, {user.firstname}</h3>
        <img alt="aaa" src="/{user.username}/picture" />
      </div>
    </div>
    <div class="row-span-4 row-start-2 bg-slate-100 w-12 -mt-40">
      <Menu />
    </div>
    <div class="col-span-9 row-span-4 row-start-2 ml-4 -mt-40">
      {#if true}
        <ClassesAccordion />
      {/if}
    </div>
  </div>
{/if}
