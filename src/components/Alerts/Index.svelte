<script>
	import { setContext } from 'svelte';
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import CloseButton from '$lib/utils/CloseButton.svelte';
	import Icon from '$components/Icons/Index.svelte';

	const dispatch = createEventDispatcher();
	
	setContext('background', true);

	export let color = 'info';
	export let icon = false;
	export let iconType = 'fa-regular';
	export let iconSize = null;
	export let iconClass = null;
	export let dismissable = false;
	export let rounded = true;
	export let accent = false;

	let hidden = false;

	const handleAlert = () => {
		dispatch('handleAlert');
	};

	const handleHide = () => {
		hidden = !hidden;
	};

	const bgClasses = {
		info: 'bg-info-100 dark:bg-info-200',
		success: 'bg-success-100 dark:bg-success-200',
		warning: 'bg-warning-100 dark:bg-warning-200',
		danger: 'bg-danger-100 dark:bg-danger-200',
		pink: 'bg-pink-100 dark:bg-pink-200',
		purple: 'bg-purple-100 dark:bg-purple-200',
		indigo: 'bg-indigo-100 dark:bg-indigo-200',
		dark: 'bg-gray-100 dark:bg-gray-700',
	};

	const borderAccentClasses = {
		info: 'border-blue-500 dark:bg-blue-200',
		success: 'border-success-500 dark:bg-success-200',
		warning: 'border-warning-500 dark:bg-warning-200',
		danger: 'border-danger-500 dark:bg-danger-200',
		pink: 'border-pink-500 dark:bg-pink-200',
		purple: 'border-purple-500 dark:bg-purple-200',
		indigo: 'border-indigo-500 dark:bg-indigo-200',
		dark: 'border-gray-500',
	};

	const textColors = {
		info: 'text-blue-700 dark:text-blue-800',
		success: 'text-success-700 dark:text-success-800',
		warning: 'text-warning-700 dark:text-warning-800',
		danger: 'text-danger-700 dark:text-danger-800',
		pink: 'text-pink-700 dark:text-pink-800',
		purple: 'text-purple-700 dark:text-purple-800',
		indigo: 'text-indigo-700 dark:text-indigo-800',
		dark: 'text-gray-700  dark:text-gray-300',
	};

	let divClass;
	
	$: divClass = classNames(
		'flex flex-col p-4 gap-2 text-sm',
		bgClasses[color] ?? bgClasses.info,
		accent && (borderAccentClasses[color] ?? borderAccentClasses.info),
		rounded && 'rounded-lg',
		accent && 'border-t-4',
		textColors[color] ?? textColors.info,
		$$props.class
	);

	const icons = {
		info: 'circle-info',
		success: 'check',
		warning: 'circle-exclamation',
		danger: 'xmark',
		pink: 'circle-info',
		purple: 'circle-info',
		indigo: 'circle-info',
		dark: 'circle-info',
	};

	if (icon === true) {
		icon = icons[color] ?? icons.info;
	}
</script>

<div id={$$props.id} class:hidden class={divClass} role="alert">
	<div class="flex items-center">
		{#if icon}
			<Icon type={iconType} name={icon} size={iconSize} class={classNames('flex-shrink-0 mr-3', iconClass)}/>
		{/if}

		<div>
			<slot />
		</div>

		{#if dismissable}
			<CloseButton
				{color}
				on:click={handleHide}
				on:click={handleAlert}
				on:click
				on:change
				on:keydown
				on:keyup
				on:focus
				on:blur
				on:mouseenter
				on:mouseleave
			/>
		{/if}
	</div>
	
	<slot name="extra" />
</div>