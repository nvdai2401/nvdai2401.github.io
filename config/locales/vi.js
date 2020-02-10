module.exports = {
	tHome: 'Home',
	tRelativePosts: 'Relative Posts',
	tFollowTwitterDescription: 'You should follow him on Twitter',
	tTags: 'Tags',
	tIndTitle: 'All posts',
	taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
	tfIndCountPosts: count => `${count} Posts`,
	tfTagHeader: (totalCount, tag) =>
		`Kết quả tìm kiếm: ${totalCount} post${
			totalCount === 1 ? '' : 's'
		} với tag là "${tag}"`,
	t404Title: 'Not Found',
	t404Content: 'You just hit a route that does not exist... the sadness.',
}
