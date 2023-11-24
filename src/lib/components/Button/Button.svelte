<script lang="ts">
    export let title: string;
    export let icon;
    export let onClick;
</script>

<button type="button" class="btn variant-filled" on:click={}>
	<span>{title}</span>
    <span>{icon}</span>

</button>
