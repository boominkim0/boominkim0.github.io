<template>
	<UContainer>
		<div class="flex items-center">
			<ULink
				to="/"
				active-class="text-primary"
				inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
			>
				Boomin
			</ULink>
			<UHorizontalNavigation
				:links="links"
				class="
                    flex-1
                    justify-end
                "
			/>
		</div>
		<slot />
	</UContainer>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	},
});

const links = computed(() => [
	// {
	// 	label: 'Boomin',
	// 	avatar: {
	// 		src: 'https://avatars.githubusercontent.com/u/739984?v=4',
	// 	},
	// 	badge: 100,
	// },
	// {
	// 	label: 'Installation',
	// 	icon: 'i-heroicons-home',
	// 	to: '/getting-started/installation',
	// }, {
	// 	label: 'Horizontal Navigation',
	// 	icon: 'i-heroicons-chart-bar',
	// 	to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`,
	// }, {
	// 	label: 'Command Palette',
	// 	icon: 'i-heroicons-command-line',
	// 	to: '/components/command-palette',
	// },
	{
		icon: isDark.value ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid',
		label: isDark.value ? 'Light' : 'Dark',
		click: () => isDark.value = !isDark.value,
	},
]);
</script>
