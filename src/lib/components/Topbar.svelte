<script lang="ts">
  import { Avatar, Portal, Modal, Input, Button } from "stwui";
  import { onMount } from "svelte";
  export let admin: boolean = false;

  export let user: {
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

  let initials: string = "";

  $: if (!initials)
    initials = user.firstname.charAt(0) + user.lastname.charAt(0);

  let open: boolean = false;

  function toggleModal() {
    open = !open;
  }

  let loading = false;

  function toggleLoading() {
    loading = !loading;
  }
</script>

<div class="flex justify-between bg-slate-100 h-16">
  <div class="flex flex-col justify-center ml-6">
    {#if admin}
      <h1 class="font-inter font-normal">Itslearning 2 | Admin Interface</h1>
    {:else}
      <h1 class="font-inter font-normal">Itslearning 2</h1>
    {/if}
  </div>
  <div class="flex flex-col justify-center mr-6">
    <button class="flex" on:click={toggleModal}>
      <h3 class="font-inter font-light mr-6">Welcome, {user.firstname}</h3>
      <Avatar {initials} />
    </button>
  </div>
</div>

<Portal>
  {#if open}
    <Modal handleClose={toggleModal}>
      <Modal.Content slot="content">
        <Modal.Content.Header slot="header"
          ><h2 class="font-inter">Settings</h2></Modal.Content.Header
        >
        <Modal.Content.Body slot="body">
          <h3>Change name</h3>
          <Input name="input" placeholder="Firstname" />
          <Input name="input" placeholder="Lastname" />
          <h3>Change email</h3>
          <Input name="input" placeholder="Email" />
          <h3>Change password</h3>
          <Input
            type="password"
            name="input"
            placeholder="Password"
            showPasswordToggle
          />
          <Input
            type="password"
            name="input"
            placeholder="Confirm password"
            showPasswordToggle
          />

          <Button type="primary" {loading} on:click={toggleLoading} class="mt-8"
            >Save</Button
          >
        </Modal.Content.Body>
        <Modal.Content.Footer slot="footer">Footer</Modal.Content.Footer>
      </Modal.Content>
    </Modal>
  {/if}
</Portal>
