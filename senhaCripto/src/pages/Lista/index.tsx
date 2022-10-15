import './styles.css';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { StyledTextField } from '../../components/TextField';
import { BsFillTrashFill } from 'react-icons/bs';
import { RiEditLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { LoginTypes } from '../../utils/login.types';
import { api } from '../../services/api';
export function Lista() {

    const users = [
        { id: 1, password: '445dadsaa_sdde44' },
        { id: 2, password: '445dadsaa_sdde44' },
        { id: 3, password: '445dadsaa_sdde44' },
    ]

    const [listLogin, setListLogin] = useState<LoginTypes[]>([]);
    const [openModal, setOpenModal] = useState(false);

    const getPasswords = () => {
        api.get('api/users/datas').then((response) => setListLogin(response.data)).catch((error) => console.error(error));
    }

    useEffect(() => {
        getPasswords();
    }, [])

    return (
        <div className='container'>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Senha</th>
                    <th>Opções</th>
                </thead>

                <tbody>
                    {listLogin.map((login) => (
                        <tr key={login.id}>
                            <td>{login.id}</td>
                            <td>{login.password}</td>
                            <td>
                                <div className='icons'>
                                    <BsFillTrashFill style={{ cursor: 'pointer' }} />
                                    <RiEditLine style={{ cursor: 'pointer' }} />
                                    <AiOutlineEye style={{ cursor: 'pointer' }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={openModal} onClose={() => setOpenModal(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="modalContainer">
                    <div className="modalContent">
                        <StyledTextField label="Nova senha" />

                        <button>
                            Salvar
                        </button>
                        <button className='cancel' onClick={() => setOpenModal(false)}>
                            Cancelar
                        </button>
                    </div>

                </div>
            </Modal>

            <div className='buttonArea'>
                <button className='subscribe' onClick={() => window.location.href = "login"}>Sair</button>
                <button className='subscribe' onClick={() => setOpenModal(true)}>Nova senha</button>
            </div>
        </div>
    )
}