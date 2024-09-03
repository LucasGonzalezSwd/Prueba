// Este seria el front

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPromos } from '../redux/actions';
// import { Modal } from './Modal';
// import { useState } from 'react';


// export const PromosEspaña = () => {
//   const dispatch = useDispatch();
//   const promos = useSelector((state) => state.promos);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const openModal = (card) => {
//     setSelectedCard(card);
//   };

//   useEffect(() => {
//     dispatch(fetchPromos());
   
//   }, [dispatch]);
//   const reversedPromos = promos.slice().reverse();
   
//   return (
//     <div className='flex flex-col justify-center items-center w-screen h-full mt-[6rem]  text-white'>
//     <div className="flex w-full justify-center max-[510px]:mb-[4rem] mb-[3rem]">

// <hr  className="border-0 border-t-[0.005rem] w-6/12 max-[963px]:w-8/12  border-[#ff1f977f]"/>
// </div>
//       <h1 className='text-2xl font-extrabold text-center'>OFERTAS EXCLUSIVAS </h1>

//     <div className='flex flex-col items-center gap-[3rem]  justify-center w-full  mt-[3rem] flex-wrap'>
//     {selectedCard && (
//       <Modal card={selectedCard} closeModal={() => setSelectedCard(null)} />
//     )}
//       {reversedPromos.map((card) => (
//          <>
//          <div className='w-full flex  text-sm  justify-center ' key={card.id}>

//           <div className='flex-col   '>
//           <button className='back flex mt-[0.25rem] items-center flex-col w-[1.7rem] -mr-[0.1rem] h-[6.5rem] rounded-bl-xl rounded-tl-xl text-center shadow-[3px_6px_25px_5px_rgba(0,0,0,0.60)]  backHover2 max-[360px]:h-[14rem] max-[360px]:justify-center max-[360px]:mt-[0.5rem] max-[1000px]:h-[14rem] max-[1000px]:justify-center max-[1000px]:mt-[0.5rem]' onClick={() => openModal(card)}>
//           <p>+</p>
//           <p>I</p>
//           <p>N</p>
//           <p>F</p>
//           <p>O</p></button>

//           </div>

        
//         <div className='w-3/4 max-[510px]:w-10/12 flex max-[1000px]:flex-col text-sm shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)] bg-[#0000007b] border-white justify-center items-center border-[0.005rem] max-[1000px]:h-[15rem] max-[360px]:h-[15rem] h-[7rem] rounded-xl mb-[1.5rem]'>

//           <div className='flex   justify-center items-center w-1/3 '>
//           <img className='max-h-[8.8rem] min-h-[8.8rem] min-w-[14rem] max-w-[14rem] max-[740px]:-mt-[0.5rem] max-[740px]:max-h-[7rem] max-[740px]:min-h-[7rem] max-[510px]:max-h-[7rem] max-[510px]:min-h-[7rem] max-[510px]:w-full object-contain ' src={card.imagen}/>
//            </div>
//            <div className='flex max-[730px]:flex-col w-full  max-[510px]:gap-x-[0rem] max-[510px]:text-xs max-[510px]:mb-[1rem] max-[730px]:-mt-[0.8rem]'>
//           <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{card.titulo.toUpperCase()}</p>
//           <p className='text-[#3de7e1] w-full flex justify-center items-center text-center '>{ card.parrafo.toUpperCase() }</p>
//           <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo2.toUpperCase() }</p>
//           <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo3.toUpperCase() }</p>
//           </div>
//            <div className='w-1/4 flex justify-center items-center h-full'>
//            <a href={card.infolink} target='_blank' rel="noreferrer" ><button className=' w-fit pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200 max-[510px]:mb-[0.5rem]'> REGISTRATE</button></a>
//            </div>
//            <div className='absolute mt-[9.5rem] max-[360px]:mt-[16.4rem] max-[1000px]:mt-[16.8rem]'>
//             <div className='flex gap-[9rem] justify-center w-full max-[510px]:gap-[1rem] max-[342px]:gap-[0.5rem] max-[997px]:gap-[2.5rem]'>
//            <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen1} alt="" />
//            <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen2} alt="" />
//            <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen3} alt="" />
//            <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen4} alt="" />
//            </div>
//            </div>
//         </div>
//            </div>
//         </>
//       ))}
      
//     </div>
//     <div className='mt-[4rem]'>
       

//     </div>
//   </div>
// );
// };


// esta seria la action

// export const createPromoEsp = (cardData, username, password) => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.post(
//           "https://playermakertv.com/api/createPromo",
//           cardData,
//           {
//             headers: {
//               nombre: username,
//               password: password,
//             },
//           }
//         );
  
//         if (response.status === 200) {
//           dispatch({
//             type: POST_PROMOS,
//             payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
//           });
//           return response.data;
//         } else {
//           console.error("Error al crear una registro:", response.statusText);
//           throw new Error("Error al crear una registro");
//         }
//       } catch (error) {
//         console.error("Error al crear una registro:", error);
//         throw error;
//       }
//     };
//   };
  

// este seria el back la ruta primero y el controller segundo

// const { Router } = require("express");
// const { createPromo } = require("../controllers/postAll");
// const authMiddleware = require("../middleware/authMiddleware");
// const router = Router();

// router.post("/", authMiddleware, createPromo);

// module.exports = router;


// const createPromo = async (req, res) => {
//   try {
//     const {
//       imagen,
//       titulo,
//       parrafo,
//       parrafo2,
//       parrafo3,
//       infoparrafo,
//       infopago1,
//       infopago2,
//       infopago3,
//       infopago4,
//       infopago5,
//       infolink,
//       infoimagen1,
//       infoimagen2,
//       infoimagen3,
//       infoimagen4,
//     } = req.body;

//     if (
//       !imagen ||
//       !titulo ||
//       !parrafo ||
//       !parrafo2 ||
//       !parrafo3 ||
//       !infolink ||
//       !infoimagen1 ||
//       !infoimagen2 ||
//       !infoimagen3 ||
//       !infoimagen4
//     ) {
//       return res.status(400).json({
//         error:
//           "Se requieren todos los campos: imagen, titulo, parrafo, parrafo2",
//       });
//     }
//     if (!isURL(imagen)) {
//       return res
//         .status(400)
//         .json({ error: "La imagen debe ser una URL válida" });
//     }
//     if (!isURL(infolink)) {
//       return res.status(400).json({ error: "Debe ser una URL válida" });
//     }
//     // Crear una nueva tarjeta en la base de datos
//     const newPromo = await Promo.create({
//       imagen,
//       titulo,
//       parrafo,
//       parrafo2,
//       parrafo3,
//       infoparrafo,
//       infopago1,
//       infopago2,
//       infopago3,
//       infopago4,
//       infopago5,
//       infolink,
//       infoimagen1,
//       infoimagen2,
//       infoimagen3,
//       infoimagen4,
//     });

//     // Enviar una respuesta indicando que la tarjeta fue creada con éxito
//     return res.json(newPromo);
//   } catch (error) {
//     console.error("Error al crear una Promo:", error);
//     return res.status(500).json({ error: "Error al crear una Promo" });
//   }
// };


//este seria el model en la base de datos

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "Promo",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },

//       imagen: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       titulo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       parrafo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       parrafo2: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       parrafo3: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       infoparrafo: {
//         type: DataTypes.TEXT,
//         allowNull: true,
//       },
//       infopago1: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       infopago2: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       infopago3: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       infopago4: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       infopago5: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       infolink: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       infoimagen1: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       infoimagen2: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       infoimagen3: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       infoimagen4: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
// };
