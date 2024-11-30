export default defineNuxtRouteMiddleware((to, from) => {
	// /marriage/... routes
	if (
		to.path.startsWith('/marriage/ko')
		|| to.path.startsWith('/marriage/zh')
	) {
		return;
	}
	else if (to.path.startsWith('/marriage')) {
		let language;
		try {
			if (!language) language = window.navigator.language.split('-')[0];
			if (language !== 'ko' && language !== 'zh') language = 'ko';
		}
		catch (error) {
			language = 'ko';
		}

		return navigateTo('/marriage/' + language);
	}

	return;
});
