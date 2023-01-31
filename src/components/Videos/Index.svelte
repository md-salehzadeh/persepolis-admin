<script>
	import classNames from 'classnames';

	export let src;
	export let type = '';
	export let trackSrc = '';
	export let srclang = '';
	export let label = '';

	let videoClass = classNames($$props.class);
</script>

<video {...$$restProps} class={videoClass}>
	<source {src} {type} />

	<slot />

	{#if trackSrc && label}
		<track src={trackSrc} kind="captions" {srclang} {label} />
	{/if}

	Your browser does not support the video tag.
</video>
