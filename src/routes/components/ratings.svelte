<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Rating from '$components/Ratings/Index.svelte';
	import AdvancedRating from '$components/Ratings/AdvancedRating.svelte';
	import ScoreRating from '$components/Ratings/ScoreRating.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let headerLabel = {
		desc1: '8.7',
		desc2: 'Excellent',
		desc3: '376 reviews',
		link: {
			label: 'Read all reviews',
			url: '#',
		}
	};

	let codeBlocks = [
`
<Rating total={5} rating={4.66} />
`,

`
<Rating total={5} rating={4.66} ceil />
`,

`
<Rating total={5} rating={3.21}>
	<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
</Rating>
`,

`
<Rating count rating={4.95} >
	<span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>

	<a
		href="/"
		class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
	>73 reviews</a>
</Rating>
`,

`
<Rating total={5} rating={3.21}>
	<span slot="ratingUp">
		<Icon name="heart" type="fa-solid" size="lg" class="w-6 text-danger-600" />
	</span>

	<span slot="ratingDown">
		<Icon name="heart" size="lg" class="w-6 text-gray-300" />
	</span>
</Rating>
`,

`
<AdvancedRating
	ratings={[
		{ label: '5 star', rating: 70 },
		{ label: '4 star', rating: 17 },
		{ label: '3 star', rating: 8 },
		{ label: '2 star', rating: 4 },
		{ label: '1 star', rating: 1 }
	]}
>
	<span slot="rating">
		<Rating total={5} rating={3.21}>
			<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
		</Rating>
	</span>

	<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
`,

`
<script>
	let headerLabel = {
		desc1: '8.7',
		desc2: 'Excellent',
		desc3: '376 reviews',
		link: {
			label: 'Read all reviews',
			url: '#',
		}
	};
<\/script>

<ScoreRating
	{headerLabel}
	ratings={[
		{ label: 'Staff', rating: 8.8 },
		{ label: 'Comfort', rating: 8.9 },
		{ label: 'Free WiFi', rating: 8.8 },
		{ label: 'Facilities', rating: 5.4 }
	]}
	ratings2={[
		{ label: 'Value for money', rating: 8.9 },
		{ label: 'Cleanliness', rating: 7.0 },
		{ label: 'Location', rating: 8.0 }
	]}
/>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-rating" title="Default rating" code={codeBlocks[0]}>
		<div slot="preview">
			<Rating total={5} rating={4.66} />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="ceil-prop" title="Ceil prop" code={codeBlocks[1]}>
		<div slot="preview">
			<Rating total={5} rating={4.66} ceil />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="rating-with-text" title="Rating with text" code={codeBlocks[2]}>
		<div slot="preview">
			<Rating total={5} rating={3.21}>
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="rating-count" title="Rating count" code={codeBlocks[3]}>
		<div slot="preview">
			<Rating count rating={4.95} >
				<span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>

				<a
					href="/"
					class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
				>73 reviews</a>
			</Rating>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="icon-size-and-color" title="Icon size and color" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Rating total={5} rating={3.21}>
				<span slot="ratingUp">
					<Icon name="heart" type="fa-solid" size="lg" class="w-6 text-danger-600" />
				</span>

				<span slot="ratingDown">
					<Icon name="heart" size="lg" class="w-6 text-gray-300" />
				</span>
			</Rating>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="advancedrating-component" title="AdvancedRating component" code={codeBlocks[5]}>
		<div slot="preview">
			<AdvancedRating
				ratings={[
					{ label: '5 star', rating: 70 },
					{ label: '4 star', rating: 17 },
					{ label: '3 star', rating: 8 },
					{ label: '2 star', rating: 4 },
					{ label: '1 star', rating: 1 }
				]}
			>
				<span slot="rating">
					<Rating total={5} rating={3.21}>
						<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
					</Rating>
				</span>

				<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
			</AdvancedRating>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="score-rating" title="Score rating" code={codeBlocks[6]}>
		<div slot="preview">
			<ScoreRating
				{headerLabel}
				ratings={[
					{ label: 'Staff', rating: 8.8 },
					{ label: 'Comfort', rating: 8.9 },
					{ label: 'Free WiFi', rating: 8.8 },
					{ label: 'Facilities', rating: 5.4 }
				]}
				ratings2={[
					{ label: 'Value for money', rating: 8.9 },
					{ label: 'Cleanliness', rating: 7.0 },
					{ label: 'Location', rating: 8.0 }
				]}
			/>
		</div>
	</DocSection>
</div>
