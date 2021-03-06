import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);
    const handleSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }
        github.clearUsers();
        if(value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show('Enter users data');
        }
    }
    return(
        <div className="mb-3">
            <input 
                type="text" 
                className="form-control"
                placeholder='Enter user name...' 
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={handleSubmit}
            />
        </div>
    )
}