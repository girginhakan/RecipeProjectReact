import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Flip, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [secilenRecipe, setSecilenRecipe] = useState("");
  const [search,setSearch] =useState("");

  const recipeEkle = async (yeni) => {
    let url = "http://localhost:3000/fakeRecipes";
    if (!secilenRecipe) {
      const response = await axios.post(url, yeni);
      setRecipes((prev) => [...prev, response.data]);
      toast.success('Tarifiniz başarıyla eklendi', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
      
    } else {
      url += `/${secilenRecipe.id}`;
      const response2 = await axios.put(url, yeni);
      setRecipes((prev) =>
        prev.map((recipe) => {
          if (recipe.id == secilenRecipe.id) {
            toast.info('Tarifiniz başarıyla güncellendi', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
              });
            return { ...response2.data };

          } else {
            return { ...recipe };
          }
        })
      );
      
      setSecilenRecipe("");
    }
  };

  const recipeSil = async (id) => {
    setRecipes((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
    const url = `http://localhost:3000/fakeRecipes/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    toast.warn('Tarifiniz başarıyla silindi', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
  };

  const recipesGetir = async () => {
    let url = "http://localhost:3000/fakeRecipes";
    const response = await fetch(url);
    const recipes = await response.json();
    setRecipes(recipes);
  };

  const recipeDuzenle = (id) => {
    setSecilenRecipe(recipes.find((item) => item.id === id));
  };

  useEffect(() => {
    recipesGetir();
  }, [secilenRecipe]);

  //---------------------------------------------------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeEkle({
      id: (Number(recipes[recipes.length - 1].id) + 1).toString(),
      title: title,
      description: description,
      image: image,
    });
    setTitle("");
    setDescription("");
    setImage("");
  };
  useEffect(() => {
    if (secilenRecipe) {
      setTitle(secilenRecipe.title);
      setDescription(secilenRecipe.description);
      setImage(secilenRecipe.image);
    }
  }, [secilenRecipe]);
//-----------------------------------------------------
const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 4000); 
  };
  return (
    <DataContext.Provider
      value={{
        recipes, //recipeListten gelenler
        recipeSil,
        recipeDuzenle, //receiptten gelenler
        secilenRecipe,
        title,
        description,
        image,
        setTitle,
        setDescription,
        setImage,
        handleSubmit,
        search,setSearch,
        fullName,email,message,phone,isPopupVisible,
        setFullName,setEmail,setMessage,setPhone,setIsPopupVisible,
        handleSubmitMessage
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
