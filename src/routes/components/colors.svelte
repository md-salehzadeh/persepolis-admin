<script>
	import helpers from '$lib/utils/helpers.js';

	export let colors;
</script>

<div class="pl-5 pr-5">
	<div>
		{#each Object.entries(colors) as [color, variations]}
			{#if typeof variations == 'object'}
				<div class="mb-5 text-lg">{helpers.capitalize(color)}</div>

				<div class="grid flex-1 min-w-0 grid-cols-5 gap-6 mb-10 2xl:grid-cols-10 2xl:gap-x-2">
					{#each Object.entries(variations) as [variation, hex]}
						<div>
							<div class="w-full h-10 rounded-md" style="background-color: {hex};"></div>
							
							<div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div class="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">{variation}</div>
								<div class="font-mono lowercase text-slate-500 dark:text-slate-400">{hex}</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</div>