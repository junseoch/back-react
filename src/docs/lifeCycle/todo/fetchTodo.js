 const updateTodo = async () => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        title : value,
      })
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
    })
    .catch(console.err)
  }