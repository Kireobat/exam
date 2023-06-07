<script lang="ts">
  import { onMount } from "svelte";

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
  <h1>dashboard</h1>
  <p>bilder og ukeplaner</p>

  <h3>Welcome, {user.firstname}</h3>
{/if}
