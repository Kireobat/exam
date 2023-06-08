<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Menu from "$lib/components/Menu.svelte";
  import ClassesAccordion from "$lib/components/ClassesAccordion.svelte";
  import Topbar from "$lib/components/Topbar.svelte";

  let token: any;
  let loggedIn = false;
  let user: {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    role_id: any;
  } = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    role_id: null,
  };

  // variables
  let fragment = "#item1";

  // fragments
  // example: http://localhost:5000/#home
  // #home is the fragment
  const updateFragment = () => {
    fragment = window.location.hash;
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      updateFragment();
      window.addEventListener("hashchange", updateFragment);
      if (window.location.hash === "") {
        window.location.hash = "#item1";
      }
    } else {
      console.log("window is undefined");
    }
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

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("hashchange", updateFragment);
    } else {
      console.log("window is undefined");
    }
  });
</script>

<main class="h-full overflow-hidden">
  {#if loggedIn}
    <Topbar {user} />
    <div class="grid grid-cols-10 grid-rows-5 h-full">
      <div class="row-span-5 bg-slate-100 w-12">
        <Menu {user} />
      </div>
      <div class="col-span-9 row-span-5 mt-4 mb-16 overflow-y-scroll">
        {#if fragment === "#item1"}
          <h1>Home</h1>
        {:else if fragment === "#item3"}
          <h1>Projects</h1>
        {:else if fragment === "#item4"}
          <h1>Calendar</h1>
        {:else if fragment === "#item5"}
          <ClassesAccordion />
        {:else if fragment === "#item6"}
          <h1>Reports</h1>
        {/if}
      </div>
    </div>
  {/if}
</main>
