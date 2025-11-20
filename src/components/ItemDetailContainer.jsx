import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setLoading(true);
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then(snapshot => {
        if (!mounted) return;
        if (snapshot.exists()) setProduct({ id: snapshot.id, ...snapshot.data() });
        else setProduct(null);
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>Producto no encontrado.</p>;
  return <ItemDetail product={product} />;
}