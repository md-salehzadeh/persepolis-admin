<script>
	import { getContext } from 'svelte';
	import classNames from 'classnames';

	const background = getContext('background');

	export let color = 'default';
	export let name = undefined;
	export let ariaLabel = undefined;
	export let size = 'md';

	const colors = {
		default: 'focus:ring-gray-400',
		primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-gray-700',
		success: 'text-success-500 focus:ring-success-400 hover:bg-success-200 dark:hover:bg-gray-700',
		warning: 'text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:hover:bg-gray-700',
		danger: 'text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:hover:bg-gray-700',
		dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700',
		gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
		indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700',
		purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700',
		pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700',
	};

	const sizing = {
		xs: 'm-0.5 rounded focus:ring-1 p-0.5',
		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
		md: 'rounded-lg focus:ring-2 p-1.5',
	};

	let buttonClass;

	$: buttonClass = classNames(
		'focus:outline-none whitespace-normal',
		sizing[size],
		colors[color],
		color === 'default' &&
			(background
				? 'hover:bg-gray-100 dark:hover:bg-gray-600'
				: 'hover:bg-gray-100 dark:hover:bg-gray-700'),
		$$props.class,
	);

	const svgSizes = {
		xs: 'w-3 h-3',
		sm: 'w-3.5 h-3.5',
		md: 'w-5 h-5',
	};
</script>

<button on:click type="button" {...$$restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
	{#if name}<span class="sr-only">{name}</span>{/if}

	<slot svgSize={svgSizes[size]} />
</button>
