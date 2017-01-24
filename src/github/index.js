const popsicle = require('popsicle')
const SHA1   = require("crypto-js/sha1");
const Base64   = require('js-base64').Base64;

const GITHUB_API_URL = "https://api.github.com/";

export default class Github {

  constructor(props) {
    this.props = Object.assign({}, props);
  }

  doAuthRequest(request) {
    let headers = {};
    if(this.props.cred && this.props.cred.token && this.props.cred.username) {
      headers = {
        "Authorization": " Basic " + btoa(this.props.cred.username+":"+this.props.cred.token)
      };
    }

    Object.assign(request, {headers});

    return popsicle.request(request).then((res) => {
      if(res.code != 200) {
        return JSON.parse(res.body);
      }
      return null;
    });
  }

  getRepo(username, repo) {
    return this.doAuthRequest({
      url: GITHUB_API_URL + "repos/"+username+"/"+repo,
      method: 'GET'
    }).then((repo) => new Repos(repo));
  }

  getFile(username, repo, filename) {
    return this.doAuthRequest({
      url: GITHUB_API_URL + "repos/"+username+"/"+repo+"/contents/"+filename,
      method: 'GET'
    }).then( (res) => {
      res.content = Base64.decode(res.content);
      return res;
    });
  }

  getUser(username) {
    return this.doAuthRequest({
      url: GITHUB_API_URL + "users/"+username,
      method: 'GET'
    })
  }

  updateFile(repo, file, content) {
    let blob = Base64.encode(content);
    let body = {
      content: blob,
      sha: file.sha,
      path: file.path,
      message: "update " + file.path
    };

    return this.doAuthRequest({
      url: GITHUB_API_URL + "repos/"+this.props.cred.username+"/"+repo+"/contents/"+file.path,
      method: 'PUT',
      body
    });
  }
}
