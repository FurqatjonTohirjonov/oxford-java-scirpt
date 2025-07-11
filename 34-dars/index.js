let arr = [];

function getNextId() {
  if (arr.length === 0) return 1;
  return Math.max(...arr.map(user => user.id)) + 1;
}

function addUser() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name) {
    arr.push({ id: getNextId(), name: name });
    setUser();
    input.value = "";
  } else {
    alert("Iltimos, ism kiriting.");
  }
}

function deleteUser(id) {
  arr = arr.filter(user => user.id !== id);
  setUser();
}

function setUser() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  arr.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.id}. ${user.name}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteUser(user.id);

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}