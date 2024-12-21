import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    
    if (snapshot.empty) {
      console.log("No products found in collection");
      return new Response(
        JSON.stringify({ message: "No products found" }), 
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const products = snapshot.docs.map((doc) => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
    
    return new Response(
      JSON.stringify(products), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error("Firestore error:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        code: error.code,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}