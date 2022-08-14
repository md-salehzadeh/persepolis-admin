<script>
	import classNames from 'classnames';

	export let progress = '45';
	export let size = 'h-2.5';
	export let labelInside = false;
	export let labelOutside = '';
	export let color = 'primary';

	const barColors = {
		primary: 'bg-primary-600',
		secondary: 'bg-secondary-600 dark:bg-secondary-300',
		info: 'bg-info-600 dark:bg-info-500',
		success: 'bg-success-600 dark:bg-success-500',
		warning: 'bg-warning-400',
		danger: 'bg-danger-600 dark:bg-danger-500',
		purple: 'bg-purple-600 dark:bg-purple-500',
		indigo: 'bg-indigo-600 dark:bg-indigo-500'
	};

	const barColor = barColors[color] ?? barColors.info;

	const classes = classNames(barColor, size, 'rounded-full');
</script>

{#if labelOutside}
	<div class="flex justify-between w-full mb-1">
		<span class="text-base font-medium text-primary-700 dark:text-white">{labelOutside}</span>
		<span class="text-sm font-medium text-primary-700 dark:text-white">{progress}%</span>
	</div>
{/if}

<div class="w-full bg-gray-200 rounded-full {size} dark:bg-gray-700">
	{#if labelInside}
		<div
			class="bg-primary-600 text-xs font-medium text-primary-100 text-center p-0.5 leading-none rounded-full"
			style="width: {progress}%"
		>
			{progress}%
		</div>
	{:else}
		<div class={classes} style="width: {progress}%" />
	{/if}
</div>