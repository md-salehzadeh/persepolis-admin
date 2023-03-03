<script>
	import { getContext } from 'svelte';
	import classNames from 'classnames';
	import Checkbox from './Checkbox.svelte';

	export let size = 'default';
	export let group = [];
	export let value = '';
	export let checked = undefined;

	// tinted if put in component having its own background
	let background = getContext('background');

	const common = "mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";

	const colors = {
		primary: 'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600',
		success: 'peer-focus:ring-success-300 dark:peer-focus:ring-success-800 peer-checked:bg-success-600',
		warning: 'peer-focus:ring-warning-300 dark:peer-focus:ring-warning-800 peer-checked:bg-warning-400',
		danger: 'peer-focus:ring-danger-300 dark:peer-focus:ring-danger-800 peer-checked:bg-danger-600',
		purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
		teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
		orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
	};

	const sizes = {
		small: 'w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4',
		default: 'w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5',
		large: 'w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6',
	};

	let divClass;

	$: divClass = classNames(
		common,
		background ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600',
		colors[($$restProps.color) ?? 'primary'],
		sizes[size],
		'relative',
	);
</script>

<Checkbox
	custom
	{...$$restProps}
	class={$$props.class}
	{value}
	bind:checked
	bind:group
	on:click
	on:change
>
	<span class={divClass} />

	<slot />
</Checkbox>
