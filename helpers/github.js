import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.TOKEN,
});

const get_repos = await octokit.request("GET /user/angelianosousa", {
  headers: {
    "x-github-api-version": "2022-11-28",
  },
});


module.exports = { get_repos }