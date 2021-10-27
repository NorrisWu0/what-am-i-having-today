import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link, Route, withRouter, useParams } from 'react-router-dom';

import loadRepos from './repos.action';
import './Repos.css';

function Repo() {
  const { repoId } = useParams();
  const repo = useSelector((state) =>
    state.repos.repos.find((info) => info.id === Number.parseInt(repoId, 10))
  );

  if (repo !== undefined) {
    const { name, visibility, language } = repo;

    return (
      <div>
        <p>Repo Name: {name}</p>
        <p>Repo visibility: {visibility}</p>
        <p>Repo Language: {language}</p>
      </div>
    );
  }

  return <></>;
}

class Repos extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { loadRepos } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { repos } = this.props;
    loadRepos();
  }

  render() {
    const { loading, repos, error, match } = this.props;

    if (loading) {
      return (
        <p className="redux_fun--repos--loading">
          Loading list of repos from Github...
        </p>
      );
    }

    return (
      <section className="redux_fun--repos">
        {error && <h3>{error}</h3>}
        <section className="redux_fun--repos--list">
          <p className="redux_fun--repos--label">List of Repositories</p>
          <ul>
            {repos &&
              repos.map((repo) => (
                // eslint-disable-next-line react/prop-types
                <Link key={repo.id} to={`${match.path}/${repo.id}`}>
                  {repo.name}
                </Link>
              ))}
          </ul>
        </section>
        <section className="redux_fun--repos--detail">
          <p className="redux_fun--repos--label">Repository Detail:</p>
          {/* eslint-disable-next-line react/prop-types */}
          <Route path={`${match.path}/:repoId`} component={Repo} />
        </section>
      </section>
    );
  }
}

Repos.propTypes = {
  loadRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  repos: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

Repos.defaultProps = {
  loading: false,
  repos: {},
  error: null
};

const mapStateToProps = (state) => {
  const {
    repos: { loading, repos, err }
  } = state;
  return {
    loading,
    repos,
    err
  };
};

const mapActionsToProps = {
  loadRepos
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Repos));
