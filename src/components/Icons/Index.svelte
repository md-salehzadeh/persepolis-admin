<script>
	import classNames from 'classnames';

	export let type = 'fa-regular';
	export let icon = 'question';
	export let size = null;
	export let fixedWidth = false;
	export let list = false;
	export let animation = false;
	export let duration = false;
	export let primaryColor = null;
	export let primaryOpacity = null;
	export let secondaryColor = null;
	export let secondaryOpacity = null;
	export let swapOpacity = false;
	
	$: classes = classNames(
		type,
		`fa-${icon}`,
		size && `fa-${size}`,
		fixedWidth && 'fa-fw',
		list && 'fa-li',
		animation && `fa-${animation}`,
		swapOpacity && 'fa-swap-opacity',
		$$props.class || null,
	);
</script>

<i
	class="{classes}"
	style:--fa-animation-duration={duration || null}
	style:--fa-primary-color={primaryColor || null}
	style:--fa-primary-opacity={primaryOpacity || null}
	style:--fa-secondary-color={secondaryColor || null}
	style:--fa-secondary-opacity={secondaryOpacity || null}
></i>