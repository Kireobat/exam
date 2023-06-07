<script lang="ts">
  import { Accordion } from "stwui";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

  let open = "";

  function handleClick(item: string) {
    if (open === item) {
      open = "";
    } else {
      open = item;
    }
  }

  let items = [
    {
      name: "1. Trinn",
      code: "1",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T1-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "2. Trinn",
      code: "2",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T2-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "3. Trinn",
      code: "3",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T3-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "4. Trinn",
      code: "4",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T4-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "5. Trinn",
      code: "5",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T5-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "6. Trinn",
      code: "6",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T6-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "7. Trinn",
      code: "7",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T7-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8A",
      code: "8A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8B",
      code: "8B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8C",
      code: "8C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8D",
      code: "8D",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KD.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9A",
      code: "9A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9B",
      code: "9B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9C",
      code: "9C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9D",
      code: "9D",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KD.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10A",
      code: "10A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10B",
      code: "10B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10C",
      code: "10C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10D",
      code: "10D",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KD.pdf",
          text: "Last ned PDF",
        },
      },
    },
  ];
</script>

<Accordion>
  {#each items as item}
    <Accordion.Item open={open === item.name}>
      <Accordion.Item.Title
        slot="title"
        on:click={() => handleClick(item.name)}
      >
        {item.name}
      </Accordion.Item.Title>
      <Accordion.Item.Content slot="content" class="ml-4 mb-4">
        <h3 class="font-inter">Ukeplan</h3>
        <div class="flex space-x-2">
          <a
            href={item.content.pdf.link}
            download
            class="font-inter font-light text-blue-500"
            >{item.content.pdf.text}</a
          >
          <div class="flex flex-col justify-center">
            <Fa icon={faFilePdf} />
          </div>
        </div>

        <h3 class="font-inter">Bilder fra uken</h3>
        <a href="/media/{item.code}" class="font-inter text-blue-500"
          >Klikk her for å se bilder fra denne uken</a
        >
      </Accordion.Item.Content>
    </Accordion.Item>
  {/each}
</Accordion>
