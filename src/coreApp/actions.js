import Github from './../github';

export function setCredentials(cred) {
  return {
    type: 'SET_CREDENTIALS',
    cred
  }
}

export function setProject(project) {
  return {
    type: 'SET_PROJECT',
    project
  }
}

export function setName(user) {
  return {
    type: 'SET_USER',
    user : user
  }
}

export function connectToProject(cred, repo) {

  return (dispatch) => {
    localStorage.setItem('credentials', JSON.stringify(cred));
    localStorage.setItem('project', repo);

    dispatch(setCredentials(cred));
    dispatch(setProject(repo));
    dispatch(setName({name:cred.username, login:cred.username}));

    let git = new Github();
    git.getUser(cred.username).then((user) => {
      if(user) {
        dispatch(setName(user));
      } else {
        dispatch(setCredentials(null));
        dispatch(setProject(null));
      }
    })
  }
}

export function disconnect(cred) {
  return (dispatch) => {
    localStorage.removeItem('credentials');
    dispatch(setCredentials(null));
    localStorage.removeItem('project');
    dispatch(setProject(null));
  }

}