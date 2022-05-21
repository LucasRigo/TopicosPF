import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const AtividadeList = (props) => {


  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>

        <Button label="Editar" className="p-button-rounded p-button-warning" onClick={() => props.editar(rowData._id)}/>
        <Button label="Excluir" className="p-button-rounded p-button-danger" onClick={() => props.excluir(rowData._id)}/>
      </div>
    )
  }


  return (
    <div className="App">
      <h4>Listagem de Atividades</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>



      <DataTable value={props.atividades} responsiveLayout="scroll" paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}" 
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhuma atividade encontrada."

        selectionMode="single" selection={props.atividade} 
        onSelectionChange={e => props.setAtividades(e.value)} dataKey="_id"
      >

        <Column field="_id" header="Id" sortable filter></Column>
        <Column field="titulo" header="Titulo" sortable filter></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="prazo" header="Prazo" sortable filter></Column>
        <Column field="agendaInicio" header="Data Agendamento" sortable filter></Column>
        <Column field="dataHoraTermino" header="Data/Hora Termino Atividade" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}></Column>
      </DataTable>



      {/*  
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.colaboradores.length > 0 ? (
            props.colaboradores.map((o, index) => (
              <tr key={index}>
                <td>{o._id}</td>
                <td>{o.nome}</td>
                <td>{o.email}</td>
                <td>{o.senha}</td>
                <td>
                  <button
                    onClick={() => props.editar(o._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => props.excluir(o._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum colaborador!.</td>
            </tr>
          )}
        </tbody>
      </table>
      */}
    </div>
  );
};
export default AtividadeList;
