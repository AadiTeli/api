import axios from 'axios'
import React, { useState } from 'react'

export const PostForm = () => {
    const [state, setState] = useState({
        id:0,
        name: "",
        title: ""
    })

    const eventChange = e => {
        e.preventDefault()
        setState({ ...state, name: e.target.value })
    }
    const eventChange1 = e => {
        e.preventDefault()
        setState({ ...state, title: e.target.value })
    }

    const handleClick = e => {
        e.preventDefault()
        // setState({name:e.target.value})
        console.log("Values", state);

        axios.post('https://jsonplaceholder.typicode.com/posts', state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
   const deleteRow=(id,e) =>
    {
        e.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                console.log("@@",res);
                console.log("@@",res.data);

                // const posts = state.filter(data => data.id !== id);
                // this.setState({ posts });
            })
        }

        const article = { title: 'React Hooks PUT Request Example' };
    axios.put('https://jsonplaceholder.typicode.com/posts/1', article)
        .then(response => setUpdatedAt(response.data.updatedAt));


        return (
            <div>
                <h1> Post Form </h1>
                <form>
                    <input type="text" value={state.name} onChange={e => eventChange(e)} />
                    <button className="btn btn-danger" onClick={(e) => deleteRow(state.id,e)}>Delete</button>
                    <br />
                    <input type="text" value={state.title} onChange={e => eventChange1(e)} />
                    <button className="btn btn-danger" onClick={(e) => deleteRow(state.id,e)}>Delete</button>
                    <br/>
                    <button onClick={e => handleClick(e)}> Submit </button>
                </form>
            </div>
        )
    }


