<script lang="ts">
  import { Input, Button, Alert } from "stwui";

  let loading = false;

  function toggleLoading() {
    loading = !loading;
  }

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
        window.location.href = "/";
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
          <Input.Label slot="label">Username</Input.Label>
        </Input>
        <Input
          type="password"
          name="input"
          showPasswordToggle
          bind:value={password}
        >
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
