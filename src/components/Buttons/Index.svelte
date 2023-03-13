<script>
	import Icon from '$components/Icons/Index.svelte';

	import classNames from 'classnames';
	import { getContext } from 'svelte';

	const group = getContext('group');

	export let pill = false;
	export let outline = false;
	export let gradient = false;
	export let size = 'md';
	export let href;
	export let btnClass;
	export let type = 'button';
	export let color = 'primary';
	export let shadow = null;
	export let loading = false;
	export let icon = null;
	export let iconType = "fa-regular";
	export let iconAlign = "left";
	export let iconSize = null;
	export let iconAnimation = null;
	export let iconDuration = null;
	export let iconClass = null;

	let iconBtn = (icon && !Object.keys($$slots).length) ? true : false;

	let _iconClass = "";
	
	if (!iconBtn) {
		if (iconAlign == "right") {
			_iconClass = "ml-2";
		} else {
			_iconClass = "mr-2";
		}
	}

	iconClass = classNames(_iconClass, iconClass);

	if (loading) {
		icon = "spinner-third";
		iconType = "fa-duotone";
		iconAnimation = "spin";
		iconDuration = "0.9s";
	}
	
	const colorClasses = {
		primary: 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
		secondary: 'text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800',
		info: 'text-white bg-info-500 hover:bg-info-800 focus:ring-info-300 dark:bg-info-600 dark:hover:bg-info-700 dark:focus:ring-info-800',
		success: 'text-white bg-success-700 hover:bg-success-800 focus:ring-success-300 dark:bg-success-600 dark:hover:bg-success-700 dark:focus:ring-success-800',
		warning: 'text-white bg-warning-400 hover:bg-warning-500 focus:ring-warning-300 dark:focus:ring-warning-900',
		danger: 'text-white bg-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-900',
		purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
		light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
		alternative: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700',
		dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
	};

	const gradientClasses = {
		primary: 'text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-primary-300 dark:focus:ring-primary-800 ',
		secondary: 'text-white bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:bg-gradient-to-br focus:ring-secondary-300 dark:focus:ring-secondary-800 ',
		info: 'text-white bg-gradient-to-r from-info-400 via-info-500 to-info-600 hover:bg-gradient-to-br focus:ring-info-300 dark:focus:ring-info-800',
		success: 'text-white bg-gradient-to-r from-success-400 via-success-500 to-success-600 hover:bg-gradient-to-br focus:ring-success-300 dark:focus:ring-success-800',
		warning: 'text-white bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 hover:bg-gradient-to-br focus:ring-warning-300 dark:focus:ring-warning-800',
		danger: 'text-white bg-gradient-to-r from-danger-400 via-danger-500 to-danger-600 hover:bg-gradient-to-br focus:ring-danger-300 dark:focus:ring-danger-800',
		pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800',
		purple: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800',
		cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800',
		teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800',
		lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800',

		purpleToBlue: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800',
		greenToBlue: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800',
		redToYellow: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400',
		pinkToOrange: 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800',
		purpleToPink: 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800',
		cyanToBlue: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800',
		tealToLime: 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700',
	};

	const coloredShadowClasses = {
		primary: 'shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80',
		secondary: 'shadow-lg shadow-secondary-500/50 dark:shadow-lg dark:shadow-secondary-800/80',
		info: 'shadow-lg shadow-info-500/50 dark:shadow-lg dark:shadow-info-800/80',
		success: 'shadow-lg shadow-success-500/50 dark:shadow-lg dark:shadow-success-800/80',
		warning: 'shadow-lg shadow-warning-500/50 dark:shadow-lg dark:shadow-warning-800/80',
		danger: 'shadow-lg shadow-danger-500/50 dark:shadow-lg dark:shadow-danger-800/80 ',
		pink: 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
		purple: 'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80',
		cyan: 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
		teal: 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ',
		lime: 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
	};

	const outlineClasses = {
		primary: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-800',
		secondary: 'text-secondary-700 hover:text-white border border-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 dark:border-secondary-500 dark:text-secondary-500 dark:hover:text-white dark:hover:bg-secondary-600 dark:focus:ring-secondary-800',
		info: 'text-info-700 hover:text-white border border-info-700 hover:bg-info-800 focus:ring-info-300 dark:border-info-500 dark:text-info-500 dark:hover:text-white dark:hover:bg-info-600 dark:focus:ring-info-800',
		success: 'text-success-700 hover:text-white border border-success-700 hover:bg-success-800 focus:ring-success-300 dark:border-success-500 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-600 dark:focus:ring-success-800',
		warning: 'text-warning-400 hover:text-white border border-warning-400 hover:bg-warning-500 focus:ring-warning-300 dark:border-warning-300 dark:text-warning-300 dark:hover:text-white dark:hover:bg-warning-400 dark:focus:ring-warning-900',
		danger: 'text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-600 dark:focus:ring-danger-900',
		purple: 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
		light: 'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400',
		dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
	};

	const sizeClasses = {
		xs: (iconBtn) ? 'p-2 text-xs' : 'px-3 py-2 text-xs',
		sm: (iconBtn) ? 'p-2 text-sm' : 'px-3 py-2 text-sm',
		md: (iconBtn) ? 'p-2.5 text-sm' : 'px-5 py-2.5 text-sm',
		lg: (iconBtn) ? 'p-3 text-base' : 'px-5 py-3 text-base',
		xl: (iconBtn) ? 'p-3.5 text-base' : 'px-6 py-3.5 text-base',
	};

	function rounded(gradientOutline = false) {
		if (group) {
			if (pill) {
				return 'first:rounded-l-full last:rounded-r-full';
			} else if (gradientOutline) {
				return 'first:rounded-l-md last:rounded-r-md';
			} else {
				return 'first:rounded-l-lg last:rounded-r-lg';
			}
		}

		if (pill) {
			return 'rounded-full';
		} else if (gradientOutline) {
			return 'rounded-md';
		} else {
			return 'rounded-lg';
		}
	}

	const hasBorder = () => outline || color === 'alternative' || color === 'light';

	let buttonClass;

	$: if (btnClass) {
		buttonClass = btnClass;
	} else {
		buttonClass = classNames(
			'text-center font-medium',
			group ? 'focus:ring-2' : 'focus:ring-4',
			group && 'focus:z-10',
			group || 'focus:outline-none',
			outline && gradient
				? 'p-0.5'
				: 'inline-flex items-center justify-center ' + sizeClasses[size],
			gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
			color === 'alternative' &&
				(group
					? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600'
					: 'dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700'),
			outline &&
				color === 'dark' &&
				(group ? 'dark:text-white dark:border-white' : 'dark:text-gray-400 dark:border-gray-700'),
			hasBorder() && group && 'border-l-0 first:border-l',
			rounded(false),
			shadow && coloredShadowClasses[shadow],
			$$props.disabled && 'cursor-not-allowed opacity-50',
			$$props.class,
		);
	}

	let gradientOutlineClass;

	$: gradientOutlineClass = classNames(
		'inline-flex items-center justify-center',
		sizeClasses[size],
		rounded(true),
		'bg-white text-gray-900 dark:bg-gray-900 dark:text-white', // this is limitation - no transparency
		'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit'
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : type}
	{href}
	{...$$restProps}
	class={buttonClass}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	{#if outline && gradient}
		<!-- Trick to prentend outline without using border
		This has a limitation of no supporting transparency as
		background is set to bg-white dark:bg-gray-900 -->
		<span class={gradientOutlineClass}>
			{#if icon && iconAlign == "left"}
				<Icon type={iconType} name={icon} size={iconSize} animation={iconAnimation} duration={iconDuration} class={iconClass} />
			{/if}

			<slot />
		
			{#if icon && iconAlign == "right"}
				<Icon type={iconType} name={icon} size={iconSize} animation={iconAnimation} duration={iconDuration} class={iconClass} />
			{/if}
		</span>
	{:else}
		{#if icon && iconAlign == "left"}
			<Icon type={iconType} name={icon} size={iconSize} animation={iconAnimation} duration={iconDuration} class={iconClass} />
		{/if}
		
		<slot />
		
		{#if icon && iconAlign == "right"}
			<Icon type={iconType} name={icon} size={iconSize} animation={iconAnimation} duration={iconDuration} class={iconClass} />
		{/if}
	{/if}
</svelte:element>