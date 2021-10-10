import fetchRepos from 'src/apis/fetchRepos';

const reposRequested = () => ({
  type: 'REQUESTING_REPOS'
});

const reposSuccess = (res) => ({
  type: 'REPOS_SUCCESS',
  data: { repos: res.data }
});

const reposFailed = (err) => ({
  type: 'REPOS_FAILED',
  data: { err }
});

// const reposReturned = ({ res = null, err = null, status }) => {
//   if (status)
//     return {
//       type: 'REPOS_SUCCESS',
//       data: { repos: res.data }
//     };

//   return { type: 'REPOS_FAILED', data: { err } };
// };

const loadRepos = () => {
  const callback = (dispatch) => {
    dispatch(reposRequested());
    fetchRepos()
      .then((res) => dispatch(reposSuccess(res)))
      .catch((err) => dispatch(reposFailed(err)));
  };
  return callback;
};

export default loadRepos;