interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Amritpal Singh', //
	title: 'Tutorialspoint', //
	description: 'Welcome to TutorialsPoint – The Perfect Point to Master Coding! ', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'The Perfect Point to Master Coding! ', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
