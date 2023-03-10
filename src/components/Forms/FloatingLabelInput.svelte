<script>
	import classNames from 'classnames';
	import generateId from '$lib/utils/generateId.js';

	export let id = generateId();
	export let style = 'standard';
	export let type = 'text';
	export let size = 'default';
	export let color = 'base';
	export let value = '';
	export let label = '';

	const divClasses = {
		filled: 'relative',
		outlined: 'relative',
		standard: 'relative z-0',
	};

	const inputSizes = {
		filled: {
			small: 'px-2.5 pb-1.5 pt-4',
			default: 'px-2.5 pb-2.5 pt-5',
		},
		outlined: {
			small: 'px-2.5 pb-1.5 pt-3',
			default: 'px-2.5 pb-2.5 pt-4',
		},
		standard: {
			small: 'py-2 px-0',
			default: 'py-2.5 px-0',
		},
	};

	const labelSizes = {
		filled: {
			small: 'top-3',
			default: 'top-4',
		},
		outlined: {
			small: 'top-1',
			default: 'top-2',
		},
		standard: {
			small: 'top-3',
			default: 'top-3',
		},
	};

	const inputClasses = {
		filled: 'block rounded-t-lg w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer',
		outlined: 'block w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none dark:text-white  focus:outline-none focus:ring-0 peer',
		standard: 'block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer',
	};

	const labelClasses = {
		filled: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
		outlined: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
		standard: 'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
	};

	const inputColorClasses = {
		base: 'border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600',
		success: 'border-success-600 dark:border-success-500 dark:focus:border-success-500 focus:border-success-600',
		danger: 'border-danger-600 dark:border-danger-500 dark:focus:border-danger-500  focus:border-danger-600',
	};

	const labelColorClasses = {
		base: 'text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500',
		success: 'text-success-600 dark:text-success-500',
		danger: 'text-danger-600 dark:text-danger-500',
	};

	// you need to this to avoid 2-way binding
	function setType(node, _type) {
		node.type = _type;

		return {
			update(_type) {
				node.type = _type;
			},
		};
	}
</script>

<div class={divClasses[style]}>
	<input
		{id}
		{...$$restProps}
		bind:value
		on:blur
		on:change
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:paste
		use:setType={type}
		placeholder=" "
		class={classNames(
			inputClasses[style],
			inputColorClasses[color],
			inputSizes[style][size],
			$$props.class,
		)}
	/>

	<label
		for={id}
		class={classNames(
			labelClasses[style],
			labelColorClasses[color],
			labelSizes[style][size],
			$$props.labelClass,
		)}
	>
		{label}
	</label>
</div>
