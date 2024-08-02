require('dotenv').config()
const express= require('express')
const app = express()
const port = 3000
const github={
  "login": "Soham-Mhatre",
  "id": 142118473,
  "node_id": "U_kgDOCHiOSQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/142118473?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Soham-Mhatre",
  "html_url": "https://github.com/Soham-Mhatre",
  "followers_url": "https://api.github.com/users/Soham-Mhatre/followers",
  "following_url": "https://api.github.com/users/Soham-Mhatre/following{/other_user}",
  "gists_url": "https://api.github.com/users/Soham-Mhatre/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Soham-Mhatre/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Soham-Mhatre/subscriptions",
  "organizations_url": "https://api.github.com/users/Soham-Mhatre/orgs",
  "repos_url": "https://api.github.com/users/Soham-Mhatre/repos",
  "events_url": "https://api.github.com/users/Soham-Mhatre/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Soham-Mhatre/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Soham Mhatre",
  "company": "vidyalankar institute of technology",
  "blog": "",
  "location": "kalamboli",
  "email": null,
  "hireable": null,
  "bio": "Studying in Vidyalankar institute of technology",
  "twitter_username": "sohammhatre428",
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-08-12T19:47:22Z",
  "updated_at": "2024-07-20T08:59:28Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Hello')
})

app.get('/home',(req,res)=>{
    res.send("<h1>My name is Soham</h1>")
})

app.get('/nice', (req,res)=>{
    res.send("<h2>Hello there</h2>")
})

app.get('/github', (req,res)=>{
  res.json(github)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})