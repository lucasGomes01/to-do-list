import React from 'react'

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="completed">Completados</option>
                        <option value="uncompleted">Não completados</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Ass</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter