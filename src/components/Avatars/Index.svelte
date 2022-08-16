<script>
	import classNames from 'classnames';

	import Icon from '$components/Icons/Index.svelte';
	import Dot from './Dot.svelte';

	export let src = '';
	export let href = '#';

	export let rounded = false;
	export let border = false;
	export let stacked = false;

	export let dot = { top: false, color: 'bg-gray-300 dark:bg-gray-500' };
	export let alt = '';
	export let size = 'md';

	if (rounded) {
		rounded = `rounded-${rounded === true ? 'full' : rounded}`;
	}

	const sizes = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-20 h-20',
		xl: 'w-36 h-36'
	};

	let avatarClass;
	
	$: avatarClass = classNames(
		rounded || null,
		border && 'p-1 ring-2 ring-gray-300 dark:ring-gray-500',
		sizes[size],
		stacked && 'border-2 -ml-4 border-white dark:border-gray-800',
		'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 overflow-hidden',
		$$props.class
	);
</script>

<Dot show={$$props.dot} {rounded} {...dot} {size}>
	{#if src}
		<img class={avatarClass} {alt} {src} />
	{:else if $$slots.default}
		<svelte:element
			this={href ? 'a' : 'div'}
			class="flex justify-center items-center text-xs font-medium {avatarClass}"
			{href}
		>
			<slot />
		</svelte:element>
	{:else}
		<svelte:element this={href ? 'a' : 'div'} class={avatarClass}>
			<Icon type="fa-solid" name="user" class="w-full h-full text-gray-500 !overflow-hidden {rounded || null}" />
		</svelte:element>
	{/if}
</Dot>