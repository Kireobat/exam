<script lang="ts">
  import { Input, Button } from "stwui";

  let loading = false;

  function toggleLoading() {
    loading = !loading;
  }
</script>

<main>
  <div class="flex justify-center">
    <div class="w-96 flex flex-col">
      <div class="my-4">
        <Input name="input">
          <Input.Label slot="label">Username</Input.Label>
        </Input>
        <Input type="password" name="input" showPasswordToggle>
          <Input.Label slot="label">Password</Input.Label>
        </Input>
      </div>
      <div>
        <Button type="primary" {loading} on:click={toggleLoading}>Login</Button>
        <Button type="ghost" {loading} on:click={toggleLoading}
          >Registrer</Button
        >
      </div>
    </div>
  </div>
</main>
