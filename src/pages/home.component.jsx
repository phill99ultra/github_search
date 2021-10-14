import React, {useContext} from 'react'
import { Card } from '../components/card.component'
import { Loader } from '../components/loader.component'
import { Search } from '../components/search.component'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const {loading, users} = useContext(GithubContext);
    
    return(
        <React.Fragment>
            <Search/>
            <div className="row">
                {
                    loading 
                        ? <Loader/>                                 
                        :  (users.map(user => (
                                <div className="col-sm-4 mb-4" key={user.id}>
                                    <Card user={user}/>
                                </div>
                            )
                        )
                    )                   
                }             
            </div>
        </React.Fragment>
    )
}