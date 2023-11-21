import { useNavigate } from 'react-router-dom'
import React from "react" 
import styles from './NewProject.module.css'
import ProjectForm from "../components/projects/ProjectForm";

function NewProject() {

    const navigate = useNavigate()

    function CreatePost(project){
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects" , {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
        body: JSON.stringify(project),

        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const state = { message: 'Projeto criado com sucesso!' };
            navigate('/projects', {state});
        })
        .catch(err => console.log(err))
    }


    return(
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={CreatePost}btnText="Criar Projeto"/>
    </div>

    )
}

export default NewProject;