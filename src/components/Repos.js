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
    }, [repos_url])

    return (
        <ListGroup >
            {repos.map(repo => (
                <><ListGroupItem key={repo.id} style={{boxShadow: "10px 10px 10px #1da7dd"}}>
                    <div className="text-primary font-weight-bold">📘{repo.name}</div>
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