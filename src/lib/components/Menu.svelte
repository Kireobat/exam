<script lang="ts">
  import { Menu, Badge } from "stwui";

  const home =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>';
  const account_multiple =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>';
  const folder =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/></svg>';
  const calendar =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>';
  const file_document =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>';
  const poll =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>';

  interface GroupMenuItem {
    key: string;
    label: string;
    href: string;
  }
  interface MenuItem {
    key: string;
    data?: string;
    label: string;
    badge?: string;
    badgeType?: "info" | "warn" | "error" | "success";
    href: string;
    children?: GroupMenuItem[];
  }

  const items: MenuItem[] = [
    {
      key: "dashboard",
      data: home,
      label: "Dashboard",
      badge: "5",
      badgeType: "info",
      href: "#item1",
    },
    {
      key: "team",
      data: account_multiple,
      label: "Team",
      href: "#item2",
      children: [
        {
          key: "sub1",
          label: "Sub 1",
          href: "#item2-sub1",
        },
        {
          key: "sub2",
          label: "Sub 2",
          href: "#item2-sub2",
        },
      ],
    },
    {
      key: "projects",
      data: folder,
      label: "Projects",
      badge: "19",
      badgeType: "warn",
      href: "#item3",
    },
    {
      key: "calendar",
      data: calendar,
      label: "Calendar",
      badge: "20+",
      badgeType: "error",
      href: "#item4",
    },
    {
      key: "documents",
      data: file_document,
      label: "Documents",
      href: "#item5",
    },
    {
      key: "reports",
      data: poll,
      label: "Reports",
      href: "#item6",
    },
  ];

  let collapsed = true;
  let active = "";
</script>

<Menu {collapsed} {active}>
  {#each items as item}
    {#if item.children && item.children.length > 0}
      {#if item.data}
        <Menu.Group key={item.key} label={item.label} href={item.href}>
          <Menu.Item.Icon slot="icon" data={item.data} />
          {#each item.children as child}
            <Menu.Group.Item
              key={child.key}
              label={child.label}
              href={child.href}
              on:click={() => (active = `{item.key}-{child.key}`)}
            />
          {/each}
        </Menu.Group>
      {:else}
        <Menu.Group key={item.key} label={item.label} href={item.href}>
          {#each item.children as child}
            <Menu.Group.Item
              key={child.key}
              label={child.label}
              href={child.href}
              on:click={() => (active = `{item.key}-{child.key}`)}
            />
          {/each}
        </Menu.Group>
      {/if}
    {:else if item.data && item.badge}
      <Menu.Item
        key={item.key}
        label={item.label}
        href={item.href}
        on:click={() => (active = item.key)}
      >
        <Menu.Item.Icon slot="icon" data={item.data} />
        <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
      </Menu.Item>
    {:else if item.data}
      <Menu.Item
        key={item.key}
        label={item.label}
        href={item.href}
        on:click={() => (active = item.key)}
      >
        <Menu.Item.Icon slot="icon" data={item.data} />
      </Menu.Item>
    {:else if item.badge}
      <Menu.Item
        key={item.key}
        label={item.label}
        href={item.href}
        on:click={() => (active = item.key)}
      >
        <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
      </Menu.Item>
    {:else}
      <Menu.Item
        key={item.key}
        label={item.label}
        href={item.href}
        on:click={() => (active = item.key)}
      />
    {/if}
  {/each}
</Menu>
