//require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000

const gitData = {
  "login": "raajashreeroy05",
  "id": 237451225,
  "node_id": "U_kgDODic32Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/237451225?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/raajashreeroy05",
  "html_url": "https://github.com/raajashreeroy05",
  "followers_url": "https://api.github.com/users/raajashreeroy05/followers",
  "following_url": "https://api.github.com/users/raajashreeroy05/following{/other_user}",
  "gists_url": "https://api.github.com/users/raajashreeroy05/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/raajashreeroy05/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/raajashreeroy05/subscriptions",
  "organizations_url": "https://api.github.com/users/raajashreeroy05/orgs",
  "repos_url": "https://api.github.com/users/raajashreeroy05/repos",
  "events_url": "https://api.github.com/users/raajashreeroy05/events{/privacy}",
  "received_events_url": "https://api.github.com/users/raajashreeroy05/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2025-10-11T15:12:37Z",
  "updated_at": "2026-06-15T08:38:47Z"
}

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/twitter', (req, res) => {
    res.send("Hii Raajashree")
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Here</h1>')
})

app.get('/github', (req, res) => {
    res.json(gitData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})
