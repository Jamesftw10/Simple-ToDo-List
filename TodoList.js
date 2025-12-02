const toDoList = [{name: 'Eat Breakfast', dueDate: '12-12-2012', time: '1:52 PM'}, {name: 'Ligo', dueDate: '01-21-2021', time: '1:55 AM'}];
            render();

            document.querySelector('.button-Add')
            .addEventListener('click', () => {
              todoList();
            })

            document.body.addEventListener('keydown', (event) => {
              if (event.key === "Enter") todoList();
            })


            function todoList(){
                let inputTodo = document.querySelector('.class1');
                const name = inputTodo.value;

                let inputDue = document.querySelector('.class2');
                const dueDate = inputDue.value;

                let inputTime = document.querySelector('.class3');
                const time = inputTime.value

                toDoList.push({name, dueDate, time});
                console.log(toDoList); 
                inputTodo.value = '';
                render();
            }

            function render(){
                
                let todos = '';
                
                toDoList.forEach((todoListObject, i) => {
                const {name, dueDate,time} = todoListObject;
                let html = 
                `
                   <div class="container">
                       <div>${name}</div>
                       <div>${dueDate}</div>
                       <div>${time}</div>   
                    <button class="Delete-button">Delete</button>
                    </div>
                `

                todos += html;

                });
                
             document.querySelector('.waw').innerHTML = todos;
             console.log(todos);

            document.querySelectorAll('.Delete-button')
            .forEach((todoListObject, i) => {
              todoListObject.addEventListener('click',() => {
                toDoList.splice({i}, 1); 
                render();
              })
            }) 
             
            

        }


            function EnterFunc(event){
                if(event.key === 'Enter'){
                    todoList();
                }
            }
          
            