<script>
	import Icon from '$components/Icons/Index.svelte'

	export let iconName = null;
	export let iconType = null;
	export let iconSize = 20;
	export let iconClass = 'mr-2';
</script>

<li class="group flex items-center" {...$$props}>
	<Icon type="fa-regular" icon="chevron-right" class="mx-1 h-4 w-4 text-gray-400 group-first:hidden" />

	{#if $$props.href}
		<a class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href={$$props.href}>
			{#if iconName}
				<svelte:component
					this={Icon}
					type={iconType}
					icon={iconName}
					size={iconSize}
					class={iconClass}
				/>
			{/if}

			<slot />
		</a>
	{:else}
		<span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
			{#if iconName}
				<svelte:component
					this={Icon}
					type={iconType}
					icon={iconName}
					size={iconSize}
					class={iconClass}
				/>
			{/if}

			<slot />
		</span>
	{/if}
</li>