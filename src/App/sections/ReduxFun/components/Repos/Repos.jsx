import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadRepos from './repos.action';

import './Repos.css';

class Repos extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { loadRepos } = this.props;
    loadRepos();
  }

  render() {
    const { loading, repos, error } = this.props;

    return (
      <section className="redux_fun--repos">
        {loading ? (
          <p className="redux_fun--repos--loading">
            Loading list of repos from Github...
          </p>
        ) : (
          ''
        )}
        {error && <h3>{error}</h3>}
        <ul>
          {repos &&
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {repo.name}
              </a>
            ))}
        </ul>
      </section>
    );
  }
}

Repos.propTypes = {
  loadRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  repos: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string
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

export default connect(mapStateToProps, mapActionsToProps)(Repos);
