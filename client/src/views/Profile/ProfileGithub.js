import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from 'components/Badge/Badge.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import profilePage from 'assets/jss/material-kit-react/views/profilePage.jsx';
class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 'aef4cc7b49f5e1604dea',
      clientSecret: '2b868c876fae4f1b596a5e43f944b2075373fb30',
      count: 5,
      sort: 'created: asc',
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    console.log(username);
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    const { classes } = this.props;
    const repoItems = repos.map(repo => (
      <div key={repo.id}>
        <hr />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div>
              <h4>
                <Link to={repo.html_url} target="_blank">
                  {repo.name}
                </Link>
                <p>{repo.description}</p>
              </h4>
            </div>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} className={classes.githubRepoLabels}>
            <div>
              <Badge color="primary">Stars: {repo.stargazers_count}</Badge>

              <Badge color="success">Watchers: {repo.watchers_count}</Badge>

              <Badge color="rose">Forks: {repo.forks_count}</Badge>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    ));
    return (
      <div ref="myRef">
        {repoItems}
        <hr />
      </div>
    );
  }
}
export default withStyles(profilePage)(ProfileGithub);
