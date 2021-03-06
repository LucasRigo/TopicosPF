import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function UsuariosList(props) {
    return (
        <div>
            <h4>MANUTENÇÃO DE USUÁRIOS</h4>

            <button onClick={props.onClickAtualizar} type="button"
                class="btn btn-primary btn-sm">Atualizar Lista</button>

            <button onClick={props.onClickInserir} type="button"
                class="btn btn-primary btn-sm">Inserir</button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.id}</td>
                            <td>{o.nome}</td>
                            <td>{o.email}</td>
                            <td>{o.celular}</td>
                            <td>
                                <button onClick={() => props.onClickEditar(o.id)} className="btn btn-primary btn-sm">Editar</button>
                                <button onClick={() => props.onClickExcluir(o.id)} className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum usuário.</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div >
    );
}

export default UsuariosList;