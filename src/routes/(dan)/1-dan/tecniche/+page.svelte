<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import { gokyo_1_2, katame_waza } from '$lib/content/navigation-tecniche';


</script>

<Container>
	<div class="mx-4 flex justify-center items-center">
		<div class="max-w-4xl w-full space-y-6">
			<h3 class="h3">Gokyo 1° e 2° gruppo</h3>
			<Accordion items={gokyo_1_2} />
            <h3 class="h3">Katame Waza</h3>
			<Accordion items={katame_waza} />
		</div>
	</div>
</Container>
