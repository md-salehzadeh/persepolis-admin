<script>
	import classNames from 'classnames';

	export let helperClass = 'text-xs font-normal text-gray-500 dark:text-gray-300';
	export let color = 'gray';

	const colorClasses = {
		success: 'text-success-700 dark:text-success-500',
		danger: 'text-danger-700 dark:text-danger-500',
		gray: 'text-gray-900 dark:text-gray-300',
		disabled: 'text-gray-400 dark:text-gray-500',
	};
</script>

<p {...$$restProps} class={classNames(helperClass, colorClasses[color], $$props.class)}>
	<slot />
</p>
