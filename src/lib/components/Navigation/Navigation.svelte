<script lang="ts">
    import { getDrawerStore } from "@skeletonlabs/skeleton";

    import { navigation } from "$lib/content/navigation"

const drawerStore = getDrawerStore();

function drawerClose(): void {
     drawerStore.close();
}


import { page } from '$app/stores';
    $: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');

</script>

<nav class="list-nav">
    <ul>
        {#each navigation as { title, href }}
            <li>
                <a href={href} class={classesActive(href)} on:click={drawerClose}>
                    <span class="flex-auto">{title}</span>
                </a>
            </li>
        {/each}
    </ul>
</nav>