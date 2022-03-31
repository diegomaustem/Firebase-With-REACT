import { useState } from 'react';
import './style.css';
import firebase from "./firebaseConnection";

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  

  async function handleAdd(){

    if(titulo.length === 0 || autor.length === 0){
        alert('Erro, não foi possivel realizar a inserção!')
        return;
    }
    
    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor
    })
    /*.doc('bmu5EIJxmPEHhPzEvNt4')
    .set({
        titulo: titulo,
        autor: autor
    })*/
    .then(()=>{
      alert('Dados casdatrados com sucesso!')
    })
    .catch((error)=>{
      alert('Ops, foi gerado algum error!' + error)
    })

  }

  async function searchPost(){

    await firebase.firestore().collection('posts')
    .doc('bmu5EIJxmPEHhPzEvNt4')
    .get()
    .then((snapshot)=>{

      setTitulo(snapshot.data().titulo);
      setAutor(snapshot.data().autor);

    })
    .catch((error)=>{
      alert('Ops, foi gerado algum error!' + error)
    })

    

  }

  return (
    <div>
          <h1>FIRE + REACT</h1><br/>
          <div className='container'>
            <label>Título: </label>
            <textarea type='text' value={titulo} onChange={ (e) => setTitulo(e.target.value)}/>

            <label>Autor: </label>
            <textarea type='text' value={autor} onChange={ (e) => setAutor(e.target.value)}/><br/>

            <button onClick={ handleAdd }>Cadastrar</button><br/>
            <button onClick={ searchPost }>Buscar Post</button><br/>

            <ul>
                {posts.map((post)=>{
                    return(
                      <li key={post.id}>
                          <span>Título: {post.titulo}</span><br/>
                          <span>Autor: {post.autor}</span><br/>
                      </li>
                    )
                })}
            </ul>

          </div>          
    </div>
  );
}

export default App;
