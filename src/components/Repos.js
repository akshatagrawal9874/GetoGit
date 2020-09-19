/* eslint-disable jsx-a11y/accessible-emoji */
// @ts-nocheck
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, )

    return (
        <ListGroup >
            {repos.map(repo => (
<<<<<<< HEAD
                <ListGroupItem key={repo.id} className="justify-content-between">
                    <div className="text-primary">📘{repo.name}</div>
=======
                <><ListGroupItem key={repo.id} style={{boxShadow: "10px 10px 10px #1da7dd"}}>
                    <div className="text-primary font-weight-bold">📘{repo.name}</div>
>>>>>>> c7410bb787f62855c1e0691d2fef0e855fdab4a3
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
                    <br /></>
            ))}
            <ListGroupItem style={{backgroundColor:"transparent", border:"None"}}>
                <br/>
                
                
                
                
                <br />
            </ListGroupItem>
        </ListGroup>
    )
} 

export default Repos;