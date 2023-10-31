import {ref} from 'vue';

export default function useFormTweet(){
    //usamos ref para que el componente esté pendiente del cambio
    const showForm = ref(false); 

    //función para cambiar el valor de showForm al contrario
    const openCloseForm = () =>{
        showForm.value = !showForm.value;
    }

    return{
        showForm, openCloseForm
    }
}