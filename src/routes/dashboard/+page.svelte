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
    phone: string;
    adress: string;
  } = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    role_id: null,
    phone: "",
    adress: "",
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
    // Fragment things
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
    // Activity

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateActivity);
    } else {
      console.log("window is undefined");
    }
    setInterval(checkActivity, 60000);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("hashchange", updateFragment);
    } else {
      console.log("window is undefined");
    }

    // Activity

    if (typeof window !== "undefined") {
      window.removeEventListener("mousemove", updateActivity);
    } else {
      console.log("window is undefined");
    }
  });

  // Activity

  let lastActivityTime = Date.now();

  function checkActivity() {
    const currentTime = Date.now();
    const diff = currentTime - lastActivityTime;
    console.log("diff: ", diff);
    console.log("lastActivityTime: ", lastActivityTime);
    console.log("currentTime: ", currentTime);
    if (diff > 20 * 60 * 1000) {
      fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => {
          console.log(res);
          let data: any = res.json();
          if (res.status === 200) {
            window.location.href = "/inactive";
          } else {
            alert(
              "An error has occured. Please try again. Status: " + res.status
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function updateActivity() {
    lastActivityTime = Date.now();
  }
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
          <h1 class="font-inter">Home</h1>
        {:else if fragment === "#item3"}
          <h1 class="font-inter">Projects</h1>
        {:else if fragment === "#item4"}
          <h1 class="font-inter">Calendar</h1>
        {:else if fragment === "#item5"}
          <h1 class="font-inter">Documents</h1>
          <ClassesAccordion />
        {:else if fragment === "#item6"}
          <h1 class="font-inter">Reports</h1>
        {/if}
      </div>
    </div>
  {/if}
</main>
