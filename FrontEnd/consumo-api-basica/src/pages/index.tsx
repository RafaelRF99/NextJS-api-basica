import styles from '../styles/Home.module.css'
import axios from "axios"
import { useEffect, useState } from "react"

interface usuarioApi {
  nome: string
  idade: number
}

export default function Home() {
  const [usuarios, setUsuarios] = useState<usuarioApi[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles.container}>
      <h1>Consumindo API Basica do BackEnd</h1>
      <div className={styles.lista}>
        {usuarios.map((usuario, i) => {
          return (
            <p key={i}>{usuario.nome} - {usuario.idade}</p>
          )
        })}
      </div>
    </div>
  )
}