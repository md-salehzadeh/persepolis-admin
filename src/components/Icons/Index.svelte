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
	
	let className = $$props.class || '';

	let classes = [];

	classes.push(type);
	
	if (['fa-regular', 'fa-solid', 'fa-light', 'fa-thin', 'fa-duotone'].includes(type)) {
		icon = `fa-${icon}`;
	}

	classes.push(icon);

	if (size) {
		classes.push(`fa-${size}`);
	}

	if (fixedWidth) {
		classes.push('fa-fw');
	}

	if (list) {
		classes.push('fa-li');
	}

	if (animation) {
		classes.push(`fa-${animation}`);
	}

	if (swapOpacity) {
		classes.push(`fa-swap-opacity`);
	}

	if (className) {
		classes.push(className);
	}
</script>

<i
	class="{classNames(classes)}"
	style:--fa-animation-duration={duration || null}
	style:--fa-primary-color={primaryColor || null}
	style:--fa-primary-opacity={primaryOpacity || null}
	style:--fa-secondary-color={secondaryColor || null}
	style:--fa-secondary-opacity={secondaryOpacity || null}
></i>