<script lang="ts">
  import { onMount } from "svelte";

  let token: any;
  let loggedIn = false;

  onMount(() => {
    fetch("/api/auth/verify", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          loggedIn = true;
        } else {
          window.location.href = "/auth/login";
        }
      })
      .catch((error) => {
        // handle network error
      });
  });
</script>

{#if loggedIn}
  <h1>dashboard</h1>
  <p>bilder og ukeplaner</p>
  <p>{token}</p>
{/if}
