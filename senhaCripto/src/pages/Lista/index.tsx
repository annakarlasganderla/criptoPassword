import './styles.css';
import IconButton from '@mui/material/IconButton';
import { BsTrash } from 'react-icons/bs';

export function Lista() {
    return (
        <div className='container'>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Opções</th>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>anna</td>
                        <td>llala</td>
                        <td>aaaa</td>
                        <td>icone</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>anna</td>
                        <td>llala</td>
                        <td>aaaa</td>
                        <td>icone</td>
                    </tr>
                </tbody>
            </table>

            <div>
                <button className='subscribe' onClick={() => window.location.href = "login"}>Sair</button>

            </div>
        </div>
    )
}