import css from './Filter.module.css'

export const Filter = ({ filter, handleChangeFilter, contacts }) => {
    return (
        <div className={css.filterContainer}>
        <h2 className={css.filterTitle}>Filter</h2>
        <p className={css.filterText}>Find contacts by name</p>
        <input className={css.filterInput} value={filter} onChange={handleChangeFilter} type="text" name="keyword"/>
    </div>
    )
}