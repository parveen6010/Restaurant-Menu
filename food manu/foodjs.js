const menuItems = [
    {
     id : 1,
     item : "Food Available1",
     oneLiner :"Punjabi restaurant: Green Salad + Boondi Raita,Ajawain Paratha,Butter Chicken,Paneer Tikka Papad 8 Piece,Keema Naan With Gravy,Malai Tikka,Malai Chaap",
     img : "food1.jpeg",
     hotel : "Hotel Sandoz Restaurant",
     desr : " Traditional regional cuisine is served at this relaxed local chain restaurant.",

},
{
    id : 2,
    item : "Food Available2",
    oneLiner :"Sweets: Kala Jamun.Chakkar Pista.Khoya Kesar Burfi.Anurodh.Sugar Free Kaju Burfi.Sandesh Kacha Gola.Mango Malai.Pista King.",
    img : "food2.jpg",
    hotel : "Hotel Bikanervala sweet",
    desr : "Bikanervala is an Indian restaurant chain headquartered in Delhi, that specializes in Indian sweets, snacks.",

},
{
    id : 3 ,
    item : "Food Available3",
    oneLiner :"Indian and Mughlai cuisines: Mahi Fish, Paneer Akbari, Paneer Kundan Kalian, Jhoomta Kukkad, Chicken Boti Masala, Peshawari Naan Family Favorite, Elegant Ambience, Good View, Soothing Ambience, Nice View, Relaxed Atmosphere",
    img : "food3.jpg",
    hotel : "Hotel Zaffran",
    desr : "Zaffran in gk is located on the 3rd floor and has an enchanting ambience from as soon as you enter the premises.The place is beautifully done up with wooden flooring and Royal looking furniture overlooking the greenery outside."
    
},
 
{
    id : 4 ,
    item : "Food Available4",
    oneLiner :"Food: Pancetta Pizza, Pepperoni Pizza Pie, Parsley Butter, Prosciutto, Quattro Formaggio Pizza, Neapolitan Pizza Prosciutto Parsley Butter Pepperoni Pizza Pie",
    img : "food4.jpg",
    hotel : "Hotel Leo's Restaurant",
    desr : " popular restaurant with good hygiene standards and lovely food. The menu offers a wide range of options vegetarian and meat",
},
{
    id : 5 ,
    item : "Food Available5",
    oneLiner :"Indian chill food: The Great Indian Kitchen.The Maharaja Club.The Imperial Spice.The Indian Grill.King of Spices.Cardamom.Shahi Darbar.Mughlai Darbar",
    img : "food5.jpg",
    hotel : "Hotel Malhotra Restaurant",
    desr : "This is wonderfull place to eat in paharganj the best cuisine is Chinese wether its veg/chicken Manchurian or noodles chilly paneer talumien soup or any soup trending with its American choupssey chinese choupsey and other patent dishes...",

}
]

const item = document.getElementById('item');
const oneLiner = document.getElementById('oneLiner');
const img = document.getElementById('img'); 
const hotel = document.getElementById('hotel');
const desr= document.getElementById('desr');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');


   var a = 0;
  window.addEventListener('DOMContentLoaded',function(){
    
    // let menu= menuItems[a];
    // item.textContent=menu.item;
    // oneLiner.textContent=menu.oneLiner;
    // hotel.textContent=menu.hotel;
    // desr.textContent=menu.desr;
    // img.src = menu.img;
    
    allmenu(a);
});

const allmenu =() =>{
    let menu= menuItems[a];
    item.textContent=menu.item;
    oneLiner.textContent=menu.oneLiner;
    hotel.textContent=menu.hotel;
    desr.textContent=menu.desr;
    img.src = menu.img;
}

random.addEventListener('click', ()=>{
    a = Math.floor(Math.random()*menuItems.length);
    allmenu(a);
}
)

prev.addEventListener('click', ()=>{
    a--;
    if(a <0){
        a = menuItems.length-1;

    }
    allmenu(a);
   
})

next.addEventListener('click', () =>{
    a++;
    if(a >4){
        a = 0;
    }
    allmenu(a);
})