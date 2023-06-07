<script lang="ts">
  import { Accordion } from "stwui";

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
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T1-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "2. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T2-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "3. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T3-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "4. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T4-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "5. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T5-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "6. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T6-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "7. Trinn",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T7-U23.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "8D",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T8-U23-KD.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "9D",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T9-U23-KD.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10A",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KA.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10B",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KB.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10C",
      content: {
        pdf: {
          link: "src/lib/assets/pdf/T10-U23-KC.pdf",
          text: "Last ned PDF",
        },
      },
    },
    {
      name: "10D",
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
        <h3>Ukeplan</h3>
        <a href={item.content.pdf.link} download>{item.content.pdf.text}</a>
      </Accordion.Item.Content>
    </Accordion.Item>
  {/each}
</Accordion>
