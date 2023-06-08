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
      alert.title = "Please fill in all fields";
      alert.description = "You need to fill in username and password to login";
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

<div class="relative h-full w-full overflow-hidden">
  <svg
    class="absolute top-0 left-0 right-0 rotate-180"
    id="visual"
    viewBox="0 0 1920 200"
    width="1920"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    ><path
      d="M0 23L29.2 22C58.3 21 116.7 19 174.8 28C233 37 291 57 349.2 68C407.3 79 465.7 81 523.8 75C582 69 640 55 698.2 47C756.3 39 814.7 37 872.8 37C931 37 989 39 1047.2 42C1105.3 45 1163.7 49 1221.8 47C1280 45 1338 37 1396.2 32C1454.3 27 1512.7 25 1570.8 30.3C1629 35.7 1687 48.3 1745.2 58.3C1803.3 68.3 1861.7 75.7 1890.8 79.3L1920 83L1920 0L1890.8 0C1861.7 0 1803.3 0 1745.2 0C1687 0 1629 0 1570.8 0C1512.7 0 1454.3 0 1396.2 0C1338 0 1280 0 1221.8 0C1163.7 0 1105.3 0 1047.2 0C989 0 931 0 872.8 0C814.7 0 756.3 0 698.2 0C640 0 582 0 523.8 0C465.7 0 407.3 0 349.2 0C291 0 233 0 174.8 0C116.7 0 58.3 0 29.2 0L0 0Z"
      fill="#ffffff"
    /><path
      d="M0 111L29.2 104.7C58.3 98.3 116.7 85.7 174.8 92.3C233 99 291 125 349.2 131C407.3 137 465.7 123 523.8 123.7C582 124.3 640 139.7 698.2 146.7C756.3 153.7 814.7 152.3 872.8 150C931 147.7 989 144.3 1047.2 138.7C1105.3 133 1163.7 125 1221.8 115C1280 105 1338 93 1396.2 94.3C1454.3 95.7 1512.7 110.3 1570.8 117.7C1629 125 1687 125 1745.2 124.7C1803.3 124.3 1861.7 123.7 1890.8 123.3L1920 123L1920 81L1890.8 77.3C1861.7 73.7 1803.3 66.3 1745.2 56.3C1687 46.3 1629 33.7 1570.8 28.3C1512.7 23 1454.3 25 1396.2 30C1338 35 1280 43 1221.8 45C1163.7 47 1105.3 43 1047.2 40C989 37 931 35 872.8 35C814.7 35 756.3 37 698.2 45C640 53 582 67 523.8 73C465.7 79 407.3 77 349.2 66C291 55 233 35 174.8 26C116.7 17 58.3 19 29.2 20L0 21Z"
      fill="#f8fafc"
    /><path
      d="M0 201L29.2 201C58.3 201 116.7 201 174.8 201C233 201 291 201 349.2 201C407.3 201 465.7 201 523.8 201C582 201 640 201 698.2 201C756.3 201 814.7 201 872.8 201C931 201 989 201 1047.2 201C1105.3 201 1163.7 201 1221.8 201C1280 201 1338 201 1396.2 201C1454.3 201 1512.7 201 1570.8 201C1629 201 1687 201 1745.2 201C1803.3 201 1861.7 201 1890.8 201L1920 201L1920 121L1890.8 121.3C1861.7 121.7 1803.3 122.3 1745.2 122.7C1687 123 1629 123 1570.8 115.7C1512.7 108.3 1454.3 93.7 1396.2 92.3C1338 91 1280 103 1221.8 113C1163.7 123 1105.3 131 1047.2 136.7C989 142.3 931 145.7 872.8 148C814.7 150.3 756.3 151.7 698.2 144.7C640 137.7 582 122.3 523.8 121.7C465.7 121 407.3 135 349.2 129C291 123 233 97 174.8 90.3C116.7 83.7 58.3 96.3 29.2 102.7L0 109Z"
      fill="#f1f5f9"
    /></svg
  >
  <div class="absolute top-0 right-0 bottom-0 left-0 m-auto h-96 w-full">
    <div class="flex justify-center">
      <div class="w-96 flex flex-col mx-6 z-10">
        <div class="flex gap-2">
          <div class="flex flex-col justify-center">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                /></svg
              >
            </a>
          </div>
          <h2 class="font-inter">|</h2>
          <h2 class="font-inter">Login</h2>
        </div>
        <div class="my-4">
          <Input name="input" bind:value={username} class="font-inter">
            <Input.Leading slot="leading" data={user} />
            <Input.Label slot="label" class="font-inter">Username</Input.Label>
          </Input>
          <Input
            type="password"
            name="input"
            class="font-inter"
            showPasswordToggle
            bind:value={password}
          >
            <Input.Leading slot="leading" data={key} />
            <Input.Label slot="label" class="font-inter">Password</Input.Label>
          </Input>
        </div>
        <div class="mb-4">
          <Button
            type="primary"
            class="font-inter"
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
            class="font-inter"
            on:click={() => (window.location.href = "/auth/register")}
            >Don't have an account? Register</Button
          >
        </div>
        {#if alert.description}
          <Alert type={alert.type} class="w-full">
            <Alert.Title slot="title" class="font-inter"
              >{alert.title}</Alert.Title
            >
            <Alert.Description slot="description" class="font-inter"
              >{alert.description}</Alert.Description
            >
          </Alert>
        {/if}
      </div>
    </div>
  </div>
  <svg
    class="absolute bottom-0 left-0 right-0 z-0"
    id="visual"
    viewBox="0 0 1920 200"
    width="1920"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    ><path
      d="M0 23L29.2 22C58.3 21 116.7 19 174.8 28C233 37 291 57 349.2 68C407.3 79 465.7 81 523.8 75C582 69 640 55 698.2 47C756.3 39 814.7 37 872.8 37C931 37 989 39 1047.2 42C1105.3 45 1163.7 49 1221.8 47C1280 45 1338 37 1396.2 32C1454.3 27 1512.7 25 1570.8 30.3C1629 35.7 1687 48.3 1745.2 58.3C1803.3 68.3 1861.7 75.7 1890.8 79.3L1920 83L1920 0L1890.8 0C1861.7 0 1803.3 0 1745.2 0C1687 0 1629 0 1570.8 0C1512.7 0 1454.3 0 1396.2 0C1338 0 1280 0 1221.8 0C1163.7 0 1105.3 0 1047.2 0C989 0 931 0 872.8 0C814.7 0 756.3 0 698.2 0C640 0 582 0 523.8 0C465.7 0 407.3 0 349.2 0C291 0 233 0 174.8 0C116.7 0 58.3 0 29.2 0L0 0Z"
      fill="#ffffff"
    /><path
      d="M0 111L29.2 104.7C58.3 98.3 116.7 85.7 174.8 92.3C233 99 291 125 349.2 131C407.3 137 465.7 123 523.8 123.7C582 124.3 640 139.7 698.2 146.7C756.3 153.7 814.7 152.3 872.8 150C931 147.7 989 144.3 1047.2 138.7C1105.3 133 1163.7 125 1221.8 115C1280 105 1338 93 1396.2 94.3C1454.3 95.7 1512.7 110.3 1570.8 117.7C1629 125 1687 125 1745.2 124.7C1803.3 124.3 1861.7 123.7 1890.8 123.3L1920 123L1920 81L1890.8 77.3C1861.7 73.7 1803.3 66.3 1745.2 56.3C1687 46.3 1629 33.7 1570.8 28.3C1512.7 23 1454.3 25 1396.2 30C1338 35 1280 43 1221.8 45C1163.7 47 1105.3 43 1047.2 40C989 37 931 35 872.8 35C814.7 35 756.3 37 698.2 45C640 53 582 67 523.8 73C465.7 79 407.3 77 349.2 66C291 55 233 35 174.8 26C116.7 17 58.3 19 29.2 20L0 21Z"
      fill="#f8fafc"
    /><path
      d="M0 201L29.2 201C58.3 201 116.7 201 174.8 201C233 201 291 201 349.2 201C407.3 201 465.7 201 523.8 201C582 201 640 201 698.2 201C756.3 201 814.7 201 872.8 201C931 201 989 201 1047.2 201C1105.3 201 1163.7 201 1221.8 201C1280 201 1338 201 1396.2 201C1454.3 201 1512.7 201 1570.8 201C1629 201 1687 201 1745.2 201C1803.3 201 1861.7 201 1890.8 201L1920 201L1920 121L1890.8 121.3C1861.7 121.7 1803.3 122.3 1745.2 122.7C1687 123 1629 123 1570.8 115.7C1512.7 108.3 1454.3 93.7 1396.2 92.3C1338 91 1280 103 1221.8 113C1163.7 123 1105.3 131 1047.2 136.7C989 142.3 931 145.7 872.8 148C814.7 150.3 756.3 151.7 698.2 144.7C640 137.7 582 122.3 523.8 121.7C465.7 121 407.3 135 349.2 129C291 123 233 97 174.8 90.3C116.7 83.7 58.3 96.3 29.2 102.7L0 109Z"
      fill="#f1f5f9"
    /></svg
  >
</div>
