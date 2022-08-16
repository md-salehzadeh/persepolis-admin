<script>
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '$components/Icons/Index.svelte';

	export let id = '';
	export let open = false;
	export let color = false;
	export let slotClass = 'p-5 border border-t-0 border-gray-200 dark:border-gray-700';
	export let btnClass = 'flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800';
	export let colorClass = 'focus:ring-blue-200 dark:focus:ring-blue-800  hover:bg-blue-100 text-blue-500 bg-blue-200 text-blue-700';

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

	$: btnClass;

	let buttonClass;

	$: if (color && open) {
		buttonClass = btnClass + colorClass;
	} else {
		buttonClass = btnClass;
	}
</script>

<h2 aria-expanded={open}>
	<button
		on:click={() => open = !open}
		type="button"
		class:rounded-t-xl={id === '1'}
		class:border-t-0={id !== '1'}
		class={classNames(buttonClass, $$props.class)}
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