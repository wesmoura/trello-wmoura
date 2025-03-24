const addListButton = document.querySelector('.add-list');
const listsContainer = document.querySelector('.lists');

function createList() {
    const list = document.createElement('div');
    list.classList.add('list');

    const listTitle = document.createElement('div');
    listTitle.classList.add('list-title');

    const input = document.createElement('input');
    input.placeholder = 'Título da lista';
    listTitle.appendChild(input);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir Lista';
    deleteButton.classList.add('delete-list');
    deleteButton.addEventListener('click', () => deleteList(list));
    listTitle.appendChild(deleteButton);

    list.appendChild(listTitle);
    listsContainer.appendChild(list);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value) {
            addCardToList(list, input.value);
            input.value = '';
        }
    });
}

function addCardToList(list, cardText) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.draggable = true;

    const cardContent = document.createElement('p');
    cardContent.textContent = cardText;
    card.appendChild(cardContent);

    const reminderInput = document.createElement('input');
    reminderInput.type = 'datetime-local';
    card.appendChild(reminderInput);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar';
    saveButton.classList.add('save-card');
    saveButton.addEventListener('click', () => {
        saveCardChanges(card, cardContent.textContent, reminderInput.value);
    });
    card.appendChild(saveButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-card');
    deleteButton.addEventListener('click', () => card.remove());
    card.appendChild(deleteButton);

    list.appendChild(card);
}

function saveCardChanges(card, newText, reminderDate) {
    const reminderDisplay = reminderDate ? `<p>Programado para: ${new Date(reminderDate).toLocaleString()}</p>` : '';
    card.innerHTML = `<p>${newText}</p>${reminderDisplay}`;
}

function deleteList(list) {
    list.remove();
}

function checkReminder(card, reminderDate) {
    const today = new Date();
    const reminder = new Date(reminderDate);
    if (reminder <= today) {
        card.classList.add('reminder-alert');
    }
}

addListButton.addEventListener('click', createList);

window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card) => {
        const reminderDisplay = card.querySelector('p + p');
        if (reminderDisplay) {
            const reminderDate = new Date(reminderDisplay.textContent.split(': ')[1]);
            checkReminder(card, reminderDate.toISOString().slice(0, 16));
        }
    });
});