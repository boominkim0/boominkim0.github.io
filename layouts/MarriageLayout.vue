<template>
	<div>
		<UHorizontalNavigation
			:links="links"
			class="border-b border-gray-200 dark:border-gray-800"
		/>
		<slot />
		<footer
			class="
            bg-gray-100 dark:bg-gray-800
            color-gray-500 dark:color-gray-400
            text-sm
            py-5
            text-center
        "
		>
			<p class="mb-1">
				© 2024 Boomin Kim
			</p>
			<p>bm33728090@gmail.com</p>
		</footer>
	</div>
</template>

<script lang="ts" setup>
const links = [{
	label: '🇰🇷 한국 결혼식',
	badge: 'Seoul, 04/20',
	to: '/marriage/kr',
}, {
	label: '🇨🇳 中文 婚礼',
	badge: 'Yanji, 04/27',
	to: '/marriage/cn',
}];
</script>
