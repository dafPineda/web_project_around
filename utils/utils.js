import { buttonEdit, buttonAdd, blockForms, formAdd, formEdit, formCloseEdit, formCloseAdd, profileWork, profileName} from "./constants"; 
    function openForm(evt) {
        if(evt.target === buttonAdd ){
            blockForms.style.display = 'block';
            formAdd.style.display = 'block';
        } 
        else{
            blockForms.style.display = 'block';
            formEdit.style.display = 'block';
            const name = formEdit.querySelector("#profile-name");
            const work = formEdit.querySelector("#profile-work");
            name.value = profileName.textContent;
            work.value = profileWork.textContent;
        }
        blockForms.addEventListener('click', specialClose);
        document.addEventListener('keydown', specialClose);
        formCloseAdd.addEventListener('click', closeForm);
        formCloseEdit.addEventListener('click', closeForm);
    }

    function specialClose(evt) {
        if (evt.target === blockForms) closeForm();
        else if(evt.key === "Escape")closeForm();
    }
    
    function closeForm() { 
        blockForms.style.display = 'none';
        formEdit.style.display= 'none';
        formAdd.style.display = 'none';
        formEdit.reset();
        formAdd.reset();
        blockForms.removeEventListener('click', specialClose);
        document.removeEventListener('keydown', specialClose);
        formCloseAdd.removeEventListener('click', closeForm);
        formCloseEdit.removeEventListener('click', closeForm);
    }
    
buttonEdit.addEventListener('click', openForm);
buttonAdd.addEventListener('click', openForm);

export{formEdit, formAdd, profileName, profileWork,openForm, closeForm};