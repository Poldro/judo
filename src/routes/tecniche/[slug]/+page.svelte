<script lang="ts">
	import type { PageServerData } from "../$types";


	export let data: PageServerData;
</script>

<h1>{data.technique.name}</h1>
<div>{@html data.technique.description}</div>
