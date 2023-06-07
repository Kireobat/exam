<script lang="ts">
  import { onMount } from "svelte";

  export let data: { classCode: string };

  let media: [
    {
      mediaUrl: string;
      mediaType: string;
      classCode: string;
      description: string;
    }
  ] = [
    {
      mediaUrl: "",
      mediaType: "",
      classCode: "",
      description: "",
    },
  ];

  async function getMedia(input: string) {
    const res = await fetch("/api/media/" + input, {
      method: "GET",
    });
    const data = await res.json();
    // console.log(data);
    return (media = data);
  }

  onMount(() => {
    getMedia(data.classCode);
  });
</script>

{#each media as item}
  {#if item.mediaType === "image"}
    <img alt={item.description} src={item.mediaUrl} />
  {:else if item.mediaType === "video"}
    <iframe title={item.description} src={item.mediaUrl} />
  {/if}
{/each}
