import Book from "../model/Bookmodel.js";
export const BookController = async (req, res) => {
  try {
    const { name, price, author} =   req.body;

    if(!(name && price && author)) {
        res.send("All input is required")
    }

     const createBook =await Book.create({
       name: name,
       price: price,
       author: author
     })
      res.send(createBook)
  } catch (err) {
    console.log(err);
  }
};

 export const bookSearchCOntroller = async (req, res) =>{
    try{

    }
     catch (err){
        console.log(err)
     }
 }

   export const getBookController = async (req, res) =>{
     try{

      const data = await Book.find()
      res.send(data)
     }
      catch {

      }
   }