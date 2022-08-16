<script>
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '$components/Icons/Index.svelte';

	export let id = '';
	export let open = false;
	export let slotClass = 'py-5 border-b border-gray-200 dark:border-gray-700';
	export let btnClass = 'flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400';

	export let icon = {};

	$: {
		icon.type = icon.type ?? 'fa-regular';
		icon.name = open ? (icon.up ?? 'chevron-up') : (icon.down ?? 'chevron-down');
		icon.size = icon.size ?? null;
		icon.class = classNames('mr-2', (icon.class ?? 'text-gray-500 sm:w-6 sm:h-6 dark:text-gray-300'));
	}

	onMount(() => {
		if (open) {
			open = true;
		}
	});
</script>

<h2 aria-expanded={open}>
	<button
		on:click={() => open = !open}
		type="button"
		class:rounded-t-xl={id === '1'}
		class:border-t-0={id !== '1'}
		class={classNames(btnClass, $$props.class)}
	>
		<slot name="header" />

		<Icon {...icon} />
	</button>
</h2>

{#if open}
	<div transition:slide={{ duration: 500 }}>
		<div class={slotClass}>
			<slot name="body" />
		</div>
	</div>
{/if}