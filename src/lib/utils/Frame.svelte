<script>
  import classNames from 'classnames';
  import { setContext } from 'svelte';
  import { noop } from 'svelte/internal';

  setContext('background', true);

  $: setContext('color', color);

  export let tag = 'div';

  export let color = 'default';
  export let rounded = false;
  export let border = false;
  export let shadow = false;

  // Export a prop through which you can set a desired svelte transition
  export let transition = undefined;

  // Pass in extra transition params
  export let params = {};

  // For components development
  export let node = undefined;
  export let use = noop;
  export let options = {};

  // your script goes here
  const bgColors = {
	primary: 'bg-primary-100 dark:bg-primary-200',
	success: 'bg-success-100 dark:bg-success-200',
    warning: 'bg-warning-100 dark:bg-warning-200',
    danger: 'bg-danger-100 dark:bg-danger-200',
    gray: 'bg-gray-100 dark:bg-gray-200',
    indigo: 'bg-indigo-100 dark:bg-indigo-200',
    purple: 'bg-purple-100 dark:bg-purple-200',
    pink: 'bg-pink-100 dark:bg-pink-200',
    light: 'bg-gray-50 dark:bg-gray-700',
    dark: 'bg-gray-100 dark:bg-gray-700',
    default: 'bg-white dark:bg-gray-800',
    dropdown: 'bg-white dark:bg-gray-700',
    navbar: 'bg-white dark:bg-gray-900',
    navbarUl: 'bg-gray-50 dark:bg-gray-800',
    form: 'bg-gray-50 dark:bg-gray-700',
    none: ''
  };

  const textColors = {
	primary: 'text-primary-700 dark:text-primary-800',
    success: 'text-success-700 dark:text-success-800',
    warning: 'text-warning-700 dark:text-warning-800',
    danger: 'text-danger-700 dark:text-danger-800',
    gray: 'text-gray-700 dark:text-gray-800',
    indigo: 'text-indigo-700 dark:text-indigo-800',
    purple: 'text-purple-700 dark:text-purple-800',
    pink: 'text-pink-700 dark:text-pink-800',
    light: 'text-gray-700 dark:text-gray-300',
    dark: 'text-gray-700 dark:text-gray-300',
    default: 'text-gray-500 dark:text-gray-400',
    dropdown: 'text-gray-700 dark:text-gray-200',
    navbar: 'text-gray-700 dark:text-gray-200',
    navbarUl: 'text-gray-700 dark:text-gray-400',
    form: 'text-gray-900 dark:text-white',
    none: ''
  };

  const borderColors = {
	primary: 'border-primary-500 dark:bg-primary-200',
    success: 'border-success-500 dark:bg-success-200',
    warning: 'border-warning-500 dark:bg-tellow-200',
    danger: 'border-danger-500 dark:bg-danger-200',
    gray: 'border-gray-500 dark:bg-gray-200',
    indigo: 'border-indigo-500 dark:bg-indigo-200',
    purple: 'border-purple-500 dark:bg-purple-200',
    pink: 'border-pink-500 dark:bg-pink-200',
    light: 'border-gray-500',
    dark: 'border-gray-500',
    default: 'border-gray-200 dark:border-gray-700',
    dropdown: 'border-gray-100 dark:border-gray-700',
    navbar: 'border-gray-100 dark:border-gray-700',
    navbarUl: 'border-gray-100 dark:border-gray-700',
    form: 'border-gray-300 dark:border-gray-700',
    none: ''
  };

  let divClass;

  $: divClass = classNames(
    bgColors[color],
    textColors[color],
    rounded && (color === 'dropdown' ? 'rounded' : 'rounded-lg'),
    border && 'border',
    borderColors[color],
    shadow && 'shadow-md',
    $$props.class
  );
</script>

{#if transition}
  <svelte:element
    this={tag}
    use:use={options}
    bind:this={node}
    transition:transition={params}
    {...$$restProps}
    class={divClass}
    on:mouseenter
    on:mouseleave
    on:focusin
    on:focusout>
    <slot />
  </svelte:element>
{:else}
  <svelte:element
    this={tag}
    use:use={options}
    bind:this={node}
    {...$$restProps}
    class={divClass}
    on:mouseenter
    on:mouseleave
    on:focusin
    on:focusout>
    <slot />
  </svelte:element>
{/if}