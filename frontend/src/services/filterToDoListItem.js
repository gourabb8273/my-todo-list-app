/**
 * FILTER TO DO LIST ITEM
 */
function filterToDoListItem(toDoListItem, searchText) {
  const filteredListItem = toDoListItem.filter((taskItem) =>
    taskItem.taskTitle.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredListItem;
}

export default filterToDoListItem;