let i= 0;

const processForm = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    console.log(title);
}

const addmenber = () => {
    const el = document.getElementById('familymenber');
    const group = createGroup(i);
    el.appendChild(group);
    i++;
}

const createElement = (type, classname, placeholder='', id) => {
    const el = document.createElement(type);
    if (placeholder !=='' && type === 'input') {
        el.placeholder = placeholder; 
    }
    if (type === 'input') {
        el.id = placeholder + '_input_' + id;
    }
    el.className = classname;
    return el;
}

const createGroup = (id) => {
    const row = createElement('div', 'row');
    const col1 = createElement('div', 'col-2');
    const col2 = createElement('div', 'col-2');
    const col3 = createElement('div', 'col-2');
    const col4 = createElement('div', 'col-2');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    const input3 = createElement('input', 'form-control', 'Document', id);
    const input4 = createElement('input', 'form-control', 'cell-number', id);
    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(input3);
    col4.appendChild(input4);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    return row;
}