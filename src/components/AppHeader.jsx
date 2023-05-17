// import { useState } from 'react';
// import Button, { SelectButton } from './Button';
// import styles from '../styles/modules/app.module.scss';
// import TodoModal from './TodoModal';
// import { useDispatch } from 'react-redux';
// import { updateFilterStatus } from '../slices/todoSlice';

// function AppHeader() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [filterStatus, setFilterStatus] = useState(false);
//   const dispatch = useDispatch()

//   const updateFilter = () => {
//     console.log('update select');
//     dispatch(updateFilterStatus())
//   };

//   return (
//     <div className={styles.appHeader}>
//       <Button variant="primary" onClick={() => setModalOpen(true)}>
//         Add Task
//       </Button>
//       <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
//         <option value="all">ALL</option>
//         <option value="incomplete">Incomplete</option>
//         <option value="complete">Complete</option>
//       </SelectButton>
//       <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} type="add" />
//     </div>
//   );
// }

// export default AppHeader;
