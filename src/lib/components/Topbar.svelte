<script lang="ts">
  import { Avatar, Portal, Modal, Input, Button, Alert } from "stwui";
  export let admin: boolean = false;

  export let user: {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    phone: string;
    adress: string;
    role_id: any;
  } = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    phone: "",
    adress: "",
    role_id: null,
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

  let deleting = false;

  $: if (open === false) deleting = false;

  const confirm =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
  const cancel =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
  const alertIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>';

  async function deleteAccount() {
    // make a post request to /api/deleteUser
    // if successful, show alert
    // if not, show error

    await fetch("/api/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username: user.username }),
    })
      .then((res) => {
        console.log(res);
        let data: any = res.json();
        if (res.status === 200) {
          alert("account deleted");
          setTimeout(() => {
            // window.location.href = "/logout";
          }, 2000);
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

  async function logout() {
    await fetch("/api/auth/logout", {
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
          window.location.href = "/";
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

  let firstname: string = "";
  let lastname: string = "";
  let password: string = "";
  let confirmPassword: string = "";
  let phone: string = "";
  let adress: string = "";

  function saveName() {
    fetch("/api/changeName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: user.username,
        firstname: firstname,
        lastname: lastname,
      }),
    }).then((res) => {
      console.log(res);
      let data: any = res.json();
      if (res.status === 200) {
      } else {
        alert("An error has occured. Please try again. Status: " + res.status);
      }
    });
  }

  function savePassword() {
    fetch("/api/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: user.username,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((res) => {
        console.log(res);
        let data: any = res.json();
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function savePhone() {
    fetch("/api/changePhone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: user.username,
        phone: phone,
      }),
    }).then((res) => {
      console.log(res);
      let data: any = res.json();
      if (res.status === 200) {
      } else {
        alert("An error has occured. Please try again. Status: " + res.status);
      }
    });
  }

  function saveAdress() {
    fetch("/api/changeAdress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: user.username,
        adress: adress,
      }),
    }).then((res) => {
      console.log(res);
      let data: any = res.json();
      if (res.status === 200) {
      } else {
        alert("An error has occured. Please try again. Status: " + res.status);
      }
    });
  }

  function saveChanges() {
    if (
      firstname &&
      lastname &&
      password &&
      confirmPassword &&
      phone &&
      adress
    ) {
      if (password !== confirmPassword) {
        return alert("passwords do not match");
      }

      saveName();
      savePassword();
      savePhone();
      saveAdress();
    } else if (firstname && lastname && password && confirmPassword) {
      if (password !== confirmPassword) {
        return alert("passwords do not match");
      }

      saveName();
      savePassword();
    } else if (firstname && lastname) {
      saveName();
    } else if (password && confirmPassword) {
      if (password !== confirmPassword) {
        return alert("passwords do not match");
      }
      savePassword();
    } else if (phone) {
      savePhone();
    } else if (adress) {
      saveAdress();
    }
  }
</script>

<div class="flex justify-between bg-slate-100 h-16">
  <div class="flex flex-col justify-center ml-6">
    {#if admin}
      <h1 class="font-inter font-normal max-[500px]:text-xl">
        Admin Interface
      </h1>
    {:else}
      <h1 class="font-inter font-normal max-[500px]:text-xl">Itslearning 2</h1>
    {/if}
  </div>
  <div class="flex mr-6">
    <div class="flex flex-col justify-center mr-6">
      <button class="flex" on:click={toggleModal}>
        <h3 class="font-inter font-light mr-6 max-[500px]:text-sm">
          Welcome, {user.firstname}
        </h3>
        <Avatar {initials} />
      </button>
    </div>
    <div class="flex flex-col justify-center">
      <div>
        <Button
          type="primary"
          class="my-4 font-inter max-[500px]:scale-75"
          on:click={logout}>Log out</Button
        >
      </div>
    </div>
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
          <div>
            <h3 class="font-inter">Change name</h3>

            <p class="font-inter">
              Current name: {user.firstname}
              {user.lastname}
            </p>
            <p class="font-inter">
              Current username: {user.username}
            </p>
            <Input
              name="input"
              placeholder="Firstname"
              bind:value={firstname}
              class="font-inter"
            />
            <Input
              name="input"
              placeholder="Lastname"
              bind:value={lastname}
              class="font-inter"
            />
            <h3 class="font-inter">Change password</h3>
            <Input
              type="password"
              name="input"
              placeholder="Password"
              showPasswordToggle
              bind:value={password}
              class="font-inter"
            />
            <Input
              type="password"
              name="input"
              placeholder="Confirm password"
              showPasswordToggle
              bind:value={confirmPassword}
              class="font-inter"
            />
            <h3 class="font-inter">Change phone number</h3>
            <p class="font-inter">
              {#if user.phone}
                Current phone number: {user.phone}
              {:else}
                No phone number registered
              {/if}
            </p>
            <Input
              name="input"
              placeholder="Phone Number"
              bind:value={phone}
              class="font-inter"
            />
            <h3 class="font-inter">Change adress</h3>
            <p class="font-inter">
              {#if user.adress}
                Current adress: {user.adress}
              {:else}
                No adress registered
              {/if}
            </p>
            <Input
              name="input"
              placeholder="Adress"
              bind:value={adress}
              class="font-inter"
            />

            <Button
              type="primary"
              {loading}
              on:click={saveChanges}
              class="mt-8 font-inter">Save</Button
            >
          </div>
          <hr class="my-4 border-gray-300" />
          <div>
            <h3 class="font-inter">Delete your account</h3>

            <Button
              type="danger"
              class="my-4 font-inter"
              on:click={() => (deleting = !deleting)}>Delete account</Button
            >

            {#if deleting}
              <Alert type="warn" class="w-full mx-1 my-4">
                <Alert.Leading slot="leading" data={alertIcon} />
                <Alert.Title slot="title" class="font-inter"
                  >Are you sure you want to delete your account?</Alert.Title
                >
                <Alert.Description slot="description" class="font-inter"
                  >This action can not be undone</Alert.Description
                >
              </Alert>

              <Button
                type="danger"
                class="h-10 w-28 font-inter"
                on:click={deleteAccount}
              >
                Confirm
                <Button.Trailing slot="trailing" data={confirm} />
              </Button>
              <Button type="primary" class="h-10 w-28 font-inter">
                Cancel
                <Button.Trailing slot="trailing" data={cancel} />
              </Button>
            {/if}
          </div>
        </Modal.Content.Body>
      </Modal.Content>
    </Modal>
  {/if}
</Portal>
