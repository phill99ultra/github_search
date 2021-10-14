import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../components/loader.component';
import { Repos } from '../components/repos.component';
import { GithubContext } from '../context/github/githubContext';

export const Profile = ({match}) => {
    const {getRepos, getUser, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;
    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
    // eslint-disable-next-line
    }, [])
   if (loading) <Loader/>
   
    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos, public_gists
    } = user;
    return(
        <React.Fragment>
            <Link to={'/'} className='btn btn-link'>To main page</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img 
                                className='img-fluid'
                                style={{width: '150px'}}
                                src={avatar_url} 
                                alt={name} />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            }
                            <a 
                                href={html_url} 
                                rel='noopener noreferrer' 
                                target='_blank' 
                                className='btn btn-dark'
                            >Open profile</a>
                            <ul>
                                {login && <li><strong>Username: </strong>{login}</li>}
                                {company && <li><strong>Company: </strong>{company}</li>}
                                {blog && <li><strong>Website: </strong>{blog}</li>}
                            </ul>
                            <div className="badge bg-primary">Subscribers: {followers}</div>
                            <div className="badge bg-success">Subscribed: {following}</div>
                            <div className="badge bg-info">Repositories: {public_repos}</div>
                            <div className="badge bg-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </React.Fragment>
    )
}