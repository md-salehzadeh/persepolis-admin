<script>
	import classNames from 'classnames';

	export let navClass = 'flex';
	export let olClass = 'inline-flex items-center space-x-1 md:space-x-3';
</script>

<nav {...$$restProps} class={classNames(navClass, $$props.classNav)}>
	<ol class={classNames(olClass, $$props.classOl)}>
		<slot />
	</ol>
</nav>