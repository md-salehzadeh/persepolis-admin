<script>
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let theadClass = 'text-xs uppercase';
	export let defaultRow = true;

	let color;

	color = getContext('color');

	let noborder = getContext('noborder');
	let striped = getContext('striped');
	let defatultBgColor = noborder || striped ? '' : 'bg-gray-50 dark:bg-gray-700';

	const bgColors = {
		default: defatultBgColor,
		blue: 'bg-blue-600',
		green: 'bg-green-600',
		red: 'bg-red-600',
		yellow: 'bg-yellow-600',
		purple: 'bg-purple-600',
		custom: '',
	};

	let textColor;

	if (color === 'default') {
		textColor = 'text-gray-700 dark:text-gray-400';
	} else if (color === 'custom') {
		textColor = '';
	} else {
		textColor = 'text-white dark:text-white';
	}

	let borderColors;

	if (striped) {
		borderColors = '';
	} else if (color === 'default') {
		borderColors = 'border-gray-700';
	} else if (color === 'custom') {
		borderColors = '';
	} else {
		borderColors = `border-${color}-400`;
	}

	$: theadClassfinal = classNames(
		theadClass,
		textColor,
		striped && borderColors,
		bgColors[color],
		$$props.class,
	);
</script>

<thead {...$$restProps} class={theadClassfinal}>
	{#if defaultRow}
		<tr>
			<slot />
		</tr>
	{:else}
		<slot />
	{/if}
</thead>
