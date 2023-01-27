<script>
	import { createEventDispatcher } from 'svelte';
	import classNames from 'classnames';
	import CloseButton from '$lib/utils/CloseButton.svelte';

	export let color = 'primary';
	export let large = false;
	export let border = false;
	export let href = undefined;
	export let rounded = false;
	export let index = false;
	export let dismissable = false;

	const colors = {
		primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
		danger: 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-300',
		success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300',
		warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300',
		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
		pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
		['!primary']: 'bg-primary-500 text-primary-100',
		['!dark']: 'bg-gray-500 text-gray-100',
		['!danger']: 'bg-danger-500 text-white',
		['!success']: 'bg-success-500 text-success-100',
		['!warning']: 'bg-warning-300 text-warning-800',
		['!indigo']: 'bg-indigo-500 text-indigo-100',
		['!purple']: 'bg-purple-500 text-purple-100',
		['!pink']: 'bg-pink-500 text-pink-100',
	};

	const bordedangerColors = {
		primary: 'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400',
		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500',
		danger: 'bg-danger-100 text-danger-800 dark:bg-gray-700 dark:text-danger-400 border-danger-400',
		success: 'bg-success-100 text-success-800 dark:bg-gray-700 dark:text-success-400 border-success-400',
		warning: 'bg-warning-100 text-warning-800 dark:bg-gray-700 dark:text-warning-300 border-warning-300',
		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400',
		purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400',
		pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400',
	};

	const hoverColors = {
		primary: 'hover:bg-primary-200',
		dark: 'hover:bg-gray-200',
		danger: 'hover:bg-danger-200',
		success: 'hover:bg-success-200',
		warning: 'hover:bg-warning-200',
		indigo: 'hover:bg-indigo-200',
		purple: 'hover:bg-purple-200',
		pink: 'hover:bg-pink-200',
	};

	const baseClass = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

	let transition = false;

	let badgeClass;

	$: badgeClass = classNames(
		baseClass,
		large ? 'text-sm' : 'text-xs',
		border ? `border ${bordedangerColors[color]}` : colors[color],
		href && hoverColors[color],
		rounded ? 'rounded-full' : 'rounded',
		index && 'absolute font-bold border-2 border-white dark:border-gray-900',
		index && (large ? 'w-7 h-7 -top-3 -right-3' : 'w-6 h-6 -top-2 -right-2'),
		transition && 'transition-opacity duration-300 ease-out opacity-0',
		$$props.class,
	);

	const closeBtnBaseClass = 'inline-flex items-center !p-0.5 !m-0 !ml-2 text-sm bg-transparent rounded-sm focus:!ring-0';

	// uncomment the following lines to completely overwrite <CloseButton>'s color palette
	// in case <CloseButton>'s color palette is changed in the future
	// const closeBtnColors = {
	//   primary: '!text-primary-400 hover:!bg-primary-200 hover:!text-primary-900 dark:hover:!bg-primary-800 dark:hover:!text-primary-300',
	//   dark: '!text-gray-400 hover:!bg-gray-200 hover:!text-gray-900 dark:hover:!bg-gray-600 dark:hover:!text-gray-300',
	//   danger: '!text-danger-400 hover:!bg-danger-200 hover:!text-danger-900 dark:hover:!bg-danger-800 dark:hover:!text-danger-300',
	//   success: '!text-success-400 hover:!bg-success-200 hover:!text-success-900 dark:hover:!bg-success-800 dark:hover:!text-success-300',
	//   warning: '!text-warning-400 hover:!bg-warning-200 hover:!text-warning-900 dark:hover:!bg-warning-800 dark:hover:!text-warning-300',
	//   indigo: '!text-indigo-400 hover:!bg-indigo-200 hover:!text-indigo-900 dark:hover:!bg-indigo-800 dark:hover:!text-indigo-300',
	//   purple: '!text-purple-400 hover:!bg-purple-200 hover:!text-purple-900 dark:hover:!bg-purple-800 dark:hover:!text-purple-300',
	//   pink: '!text-pink-400 hover:!bg-pink-200 hover:!text-pink-900 dark:hover:!bg-pink-800 dark:hover:!text-pink-300'
	// };

	// only overwrite necessary colors (<CloseButton> v0.29.10)
	const closeBtnColors = {
		primary: 'text-primary-400 hover:text-primary-900 dark:hover:!bg-primary-800 dark:hover:text-primary-300',
		dark: 'text-gray-400 hover:!text-gray-400 hover:!bg-gray-200 dark:hover:!text-gray-300',
		danger: 'text-danger-400 hover:text-danger-900 dark:hover:!bg-danger-800 dark:hover:text-danger-300',
		success: 'text-success-400 hover:text-success-900 dark:hover:!bg-success-800 dark:hover:text-success-300',
		warning: 'text-warning-400 hover:text-warning-900 dark:hover:!bg-warning-800 dark:hover:text-warning-300',
		indigo: 'text-indigo-400 hover:text-indigo-900 dark:hover:!bg-indigo-800 dark:hover:text-indigo-300',
		purple: 'text-purple-400 hover:text-purple-900 dark:hover:!bg-purple-800 dark:hover:text-purple-300',
		pink: 'text-pink-400 hover:text-pink-900 dark:hover:!bg-pink-800 dark:hover:text-pink-300',
	};

	let closeBtnClass;

	$: closeBtnClass = classNames(closeBtnBaseClass, closeBtnColors[color]);

	let hidden = false;

	const dispatch = createEventDispatcher();

	const handleHide = () => {
		transition = true;
		setTimeout(() => {
			hidden = true;
		}, 300);
		dispatch('dismiss', {
			message: 'The badge will be dismissed.',
		});
	};
</script>

<svelte:element this={href ? 'a' : 'span'} {href} {...$$restProps} class={badgeClass} class:hidden>
	<slot />

	{#if dismissable}
		<slot name="closeBtn" {handleHide}>
			<CloseButton
				{color}
				on:click={handleHide}
				size={large ? 'sm' : 'xs'}
				name="Remove badge"
				class={closeBtnClass}
			/>
		</slot>
	{/if}
</svelte:element>
