<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Carousel from '$components/Carousels/Index.svelte';
	import CarouselTransition from '$components/Carousels/CarouselTransition.svelte';
	import { bounceInOut } from 'svelte/easing';

	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];

	let codeBlocks = [
`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} />
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} loop showCaptions={false} showThumbs={false} duration="3000"/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} showThumbs={false}/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} showThumbs={false} showCaptions={false}/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} showThumbs={false} showCaptions={false} showIndicators={false}/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} showThumbs={false} showCaptions={false} slideControls={false}/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<Carousel {images} showCaptions={false} showThumbs={false} duration="3000"/>
`,

`
<script>
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" showCaptions={false} showThumbs={false} />
`,

`
<script>
	import { bounceInOut } from 'svelte/easing';

	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/1000/500?v1',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://picsum.photos/1000/500?v2',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://picsum.photos/1000/500?v3',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://picsum.photos/1000/500?v4',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://picsum.photos/1000/500?v5',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash',
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://picsum.photos/1000/500?v6',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash',
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://picsum.photos/1000/500?v7',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash',
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://picsum.photos/1000/500?v8',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash',
		},
	];
<\/script>

<CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}" showCaptions={false} showThumbs={false}/>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-carousel" title="Default Carousel" code={codeBlocks[0]}>
		<div slot="preview">
			<Carousel {images} />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="loop" title="Loop" code={codeBlocks[1]}>
		<div slot="preview">
			<Carousel {images} loop showCaptions={false} showThumbs={false} duration="3000"/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="without-thumbnails" title="Without thumbnails" code={codeBlocks[2]}>
		<div slot="preview">
			<Carousel {images} showThumbs={false}/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="without-caption" title="Without caption" code={codeBlocks[3]}>
		<div slot="preview">
			<Carousel {images} showThumbs={false} showCaptions={false}/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="without-indicators" title="Without indicators" code={codeBlocks[4]}>
		<div slot="preview">
			<Carousel {images} showThumbs={false} showCaptions={false} showIndicators={false}/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="without-slide-controllers" title="Without slide controllers" code={codeBlocks[5]}>
		<div slot="preview">
			<Carousel {images} showThumbs={false} showCaptions={false} slideControls={false}/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="carousel-transition" title="Carousel transition" code={codeBlocks[6]}>
		<div slot="preview">
			<CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="fade-example" title="Fade example" code={codeBlocks[7]}>
		<div slot="preview">
			<Carousel {images} showCaptions={false} showThumbs={false} duration="3000"/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="fly-example" title="Fly example" code={codeBlocks[8]}>
		<div slot="preview">
			<CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" showCaptions={false} showThumbs={false} />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="slide-example" title="Slide example" code={codeBlocks[9]}>
		<div slot="preview">
			<CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}" showCaptions={false} showThumbs={false}/>
		</div>
	</DocSection>
</div>
