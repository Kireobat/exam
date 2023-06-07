<script lang="ts">
  import { Input, Button, Alert } from "stwui";

  let loading = false;

  function toggleLoading() {
    loading = !loading;
  }

  let firstname = "";
  let lastname = "";
  let password = "";
  let confirmPassword = "";
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
    console.log(firstname, lastname);
    console.log(password, confirmPassword);
  }

  async function register() {
    if (!firstname || !lastname || !password || !confirmPassword) {
      alert.description = "Username or password is empty";
      return;
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        password,
        confirmPassword,
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
        <Input name="input" bind:value={firstname}>
          <Input.Label slot="label">Firstname</Input.Label>
        </Input>
        <Input name="input" bind:value={lastname}>
          <Input.Label slot="label">Lastname</Input.Label>
        </Input>
        <Input
          type="password"
          name="input"
          showPasswordToggle
          bind:value={password}
        >
          <Input.Label slot="label">Password</Input.Label>
        </Input>
        <Input
          type="password"
          name="input"
          showPasswordToggle
          bind:value={confirmPassword}
        >
          <Input.Label slot="label">Confirm password</Input.Label>
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
              register();
            }, 2000);
          }}>Register</Button
        >
        <Button
          type="ghost"
          on:click={() => (window.location.href = "/auth/login")}
          >Already have an account? Login</Button
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
