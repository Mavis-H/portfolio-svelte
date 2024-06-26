<script lang="ts">
	import { items, title } from '@data/blogs';
	import * as topics from '@data/topics';
	import { onMount } from 'svelte';

	import type { Blog, Topic } from '$lib/types';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import BlogCard from '$lib/components/BlogCard/BlogCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	interface TopicFilter extends Topic {
		isSelected?: boolean;
	}

	let filters: Array<TopicFilter> = topics.items.filter((it) => {
		return items.some((blog) => blog.topics.some((topic) => topic.slug === it.slug));
	});

	let search = '';
	let displayed: Array<Blog> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((tech) => {
			if (tech.slug === slug) {
				tech.isSelected = !isSelected(slug);
			}

			return tech;
		});
	};

	$: {
		displayed = items.filter((blog) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				blog.topics.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				blog.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="blogs-filters">
		{#each filters as tech}
			<Chip active={tech.isSelected} classes={'text-0.8em'} on:click={() => onSelected(tech.slug)}
				>{tech.name}</Chip
			>
		{/each}
	</div>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="blogs-list mt-5">
			{#each displayed as blog}
				<BlogCard {blog} />
			{/each}
		</div>
	{/if} 
</SearchPage>

<style lang="scss">
	.blogs-list {
		display: grid;
		// grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		// @media (max-width: 1350px) {
		// 	grid-template-columns: repeat(2, 1fr);
		// }
		// @media (max-width: 850px) {
		// 	grid-template-columns: repeat(1, 1fr);
		// }
	}
</style>
