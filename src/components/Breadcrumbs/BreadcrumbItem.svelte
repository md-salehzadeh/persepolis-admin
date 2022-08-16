<script>
	import Icon from '$components/Icons/Index.svelte'
	import classNames from 'classnames';

	export let icon = {};

	$: {
		icon.type = icon.type ?? 'fa-regular';
		icon.name = icon.name ?? null;
		icon.size = icon.size ?? null;
		icon.class = classNames('mr-2', (icon.class ?? null));
	}
</script>

<li class="group flex items-center" {...$$props}>
	<Icon type="fa-regular" icon="chevron-right" class="mx-1 h-4 w-4 text-gray-400 group-first:hidden" />

	{#if $$props.href}
		<a class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href={$$props.href}>
			{#if icon.name}
				<Icon {...icon} />
			{/if}

			<slot />
		</a>
	{:else}
		<span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
			{#if icon.name}
				<Icon {...icon} />
			{/if}

			<slot />
		</span>
	{/if}
</li>