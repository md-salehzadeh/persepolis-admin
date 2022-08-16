<script>
	import classNames from 'classnames';

	export let navClass;
	export let olClass;
	
	$: navClass = classNames('flex', navClass);
	$: olClass = classNames('inline-flex items-center space-x-1 md:space-x-3', olClass);
</script>

<nav {...$$restProps} class={navClass}>
	<ol class={olClass}>
		<slot />
	</ol>
</nav>