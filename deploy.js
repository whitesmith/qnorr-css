var ghpages = require('gh-pages');

console.log('🚀 Deploying...')
ghpages.publish('public', function(err) {
	return err ? console.log(err) : console.log('✅ Success!')
});
