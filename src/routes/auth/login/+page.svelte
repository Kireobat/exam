<script lang="ts">
  import { Input, Button, Alert } from "stwui";
  import Leading from "stwui/components/feed/Leading.svelte";

  let loading = false;

  function toggleLoading() {
    loading = !loading;
  }

  let user =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>';
  let key =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>';

  let username = "";
  let password = "";
  let alert: {
    type: "success" | "error" | "warn" | "info";
    description: string;
    title: string;
  } = {
    type: "error",
    description: "",
    title: "",
  };

  $: {
    console.log(username);
    console.log(password);
  }

  async function login() {
    if (!username || !password) {
      alert.description = "Username or password is empty";
      return;
    }
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.status == 200) {
      return setTimeout(() => {
        toggleLoading();
        window.location.href = "/dashboard";
      }, 1000);
    } else {
      return setTimeout(() => {
        toggleLoading();
        alert.type = "error";
        alert.title = "Error";
        alert.description = "Something went wrong";
      }, 1000);
    }
  }
</script>

<main>
  <div class="flex justify-center">
    <div class="w-96 flex flex-col">
      <div class="my-4">
        <Input name="input" bind:value={username}>
          <Input.Leading slot="leading" data={user} />
          <Input.Label slot="label">Username</Input.Label>
        </Input>
        <Input
          type="password"
          name="input"
          showPasswordToggle
          bind:value={password}
        >
          <Input.Leading slot="leading" data={key} />
          <Input.Label slot="label">Password</Input.Label>
        </Input>
      </div>
      <div class="mb-4">
        <Button
          type="primary"
          {loading}
          on:click={() => {
            toggleLoading();
            setTimeout(() => {
              toggleLoading();
              login();
            }, 2000);
          }}>Login</Button
        >
        <Button
          type="ghost"
          on:click={() => (window.location.href = "/auth/register")}
          >Don't have an account? Register</Button
        >
      </div>
      {#if alert.description}
        <Alert type={alert.type} class="w-full">
          <Alert.Title slot="title">{alert.title}</Alert.Title>
          <Alert.Description slot="description"
            >{alert.description}</Alert.Description
          >
        </Alert>
      {/if}
    </div>
  </div>
</main>
