import {Link} from 'react-router-dom'

import trashCan from '../assets/images/trash-can.svg'
import checkbox from '../assets/images/checkbox-checked.svg'
import checkboxNotChecked from '../assets/images/checkbox-not-checked.svg'

import styles from './Todo.module.css'

function Todo({ todo, deleteTodo , checkButton}) {

  const deleteButtonHandler = (e) => {
    deleteTodo(todo.id)
  }

  const checkButtonHandler = (e) => {
    checkButton({id: todo.id, done: !todo.done})
    console.log (checkButton)
  }

  const icon = todo.done ? checkbox : checkboxNotChecked;

  return <li className={styles.todo_item}>
    <span className={styles.content}>
    
    <Link
    onClick={checkButtonHandler}>
    <img src={icon} className={styles.icon} />
    </Link>
    {todo.content}
    </span>
    <button className={styles.trashButton} onClick={deleteButtonHandler}>
      <img src={trashCan} alt="Borrar" className={styles.trashCan} />
    </button>
  </li>
}

export default Todo