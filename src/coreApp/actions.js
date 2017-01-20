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

export function setName(name) {
  return {
    type: 'SET_NAME',
    username : name
  }
}

export function connectToProject(cred, repo) {

  return (dispatch) => {
    localStorage.setItem('credentials', JSON.stringify(cred));
    localStorage.setItem('project', repo);

    dispatch(setCredentials(cred));
    dispatch(setProject(repo));

    let git = new Github();
    git.getUser(cred.username).then((user) => {
      console.log(user);
      if(user) {
        dispatch(setName(user.name));
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