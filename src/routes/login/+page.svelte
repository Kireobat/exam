<script lang="ts">
  import { Input } from "stwui";
</script>

<main>
  <Input name="input">
    <Input.Label slot="label">Username</Input.Label>
  </Input>
  <Input type="password" name="input" showPasswordToggle>
    <Input.Label slot="label">Password</Input.Label>
  </Input>
</main>
