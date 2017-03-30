'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/users/mmpadget/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      data => data.forEach(repo => $('#repo-template').append(repo.name)),
      data => data.forEach(repo => $('#repo-template').append(repo.html_url)),
      data => data.forEach(repo => $('#repo-template').append(repo.description)),
      data => data.forEach(repo => $('#repo-template').append(repo.language)),
      data => data.forEach(repo => $('#repo-template').append(repo.created_at)),
      data => data.forEach(repo => $('#repo-template').append(repo.updated_at)),
      data => data.forEach(repo => $('#repo-template').append(repo.watchers_count))

      err => console.log(err)
    )
};

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
