const popsicle = require('popsicle')

const GITHUB_API_URL = "https://api.github.com/";

export default class Github {
  
  constructor(props) {
    this.props = Object.assign({}, props);
  }
  
  doAuthRequest(request) {
    let headers = {};
    if(this.props.token && this.props.username) {
      headers = {
        "Authorization": " Basic " + btoa(this.props.username+":"+this.props.token)
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
    })
  }
  
  getFile(username, repo, filename) {
    return this.doAuthRequest({
      url: GITHUB_API_URL + "repos/"+username+"/"+repo+"/contents/"+filename,
      method: 'GET'
    })
  }
  
}

