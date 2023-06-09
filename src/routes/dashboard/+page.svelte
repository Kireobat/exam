<script lang="ts">
  import { DatePicker } from "stwui";
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

  const calendar =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>';

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

          <DatePicker name="date-3" allowClear>
            <DatePicker.Leading slot="leading" data={calendar} />
          </DatePicker>
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
