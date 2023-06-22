import { create } from "zustand";


// criando um 'store' para armazenar os dados:
export const useFormStore = create((set) => ({
    formValues: {
    username: "",
    email: "",
    name: "",
    occupation: "",
    languages: [],
    },
    
    setFormValues: (newValues) => set((state) => ({
        formValues: { ...state.formValues, ...newValues },
      })),
    }));