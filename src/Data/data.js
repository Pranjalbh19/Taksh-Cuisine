import dosa from "../Utils/dosa.jpg";
import Chola from "../Utils/chhola.jpg";
import Idli from "../Utils/idli.jpg";
import MasalaDosa from "../Utils/masala.jpg";
import Paneer from "../Utils/paneer.jpg";
import Gujrati from "../Utils/gujrati.jpeg";
import { Description } from "@mui/icons-material";


export const MenuList = [

    {
        name : 'dosa',
        Description: "A crispy, golden-brown South Indian crepe made from fermented rice and lentil batter, served with chutney and sambar.",
        image: dosa,
        price: 200,
        
        }
,


        {
            name : 'Paneer',
            Description: "Soft and fresh Indian cottage cheese that perfectly absorbs the rich flavors of aromatic spices",
            image: Paneer,
            price: 200,
            
            },
            {
                name : 'Chhola-Bhature',
                Description: "A hearty and spicy North Indian chickpea curry, bursting with robust flavors and paired perfectly with bhature or rice",
                image: Chola,
                price: 100,
                
                }
        ,
        {
            name : 'Idli',
            Description: "Fluffy, steamed rice cakes that are light, nutritious, and ideal for a healthy start to your day",
            image: Idli,
            price: 150,
            
            }
    ,
    {
        name : 'Gujrati',
        Description: "A crispy, golden-brown South Indian crepe made from fermented rice and lentil batter, served with chutney and sambar.",
        image: Gujrati,
        price: 200,
        
        }
,
{
    name : 'Masala Dosa',
    Description: "A crisp and savory South Indian crepe filled with a spiced potato mixture, offering a perfect balance of textures and flavors.",
    image: MasalaDosa,
    price: 300,
    
    }
,

]
