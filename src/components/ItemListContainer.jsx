import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import Loader from "./Loader";

export default function ItemListContainer({ categoryId, searchTerm = "" }) {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterByName = (list, term) => {
    if (!term) return list;
    const t = term.trim().toLowerCase();
    return list.filter(item => (item.title || "").toLowerCase().includes(t));
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const colRef = collection(db, "products");
    const q = categoryId ? query(colRef, where("category", "==", categoryId)) : colRef;

    getDocs(q)
      .then(snapshot => {
        if (!mounted) return;
        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllItems(results);
        setItems(filterByName(results, searchTerm));
      })
      .catch(() => {
        if (mounted) {
          setAllItems([]);
          setItems([]);
        }
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, [categoryId]);

  // Reaplica filtro cuando cambia searchTerm o la lista completa
  useEffect(() => {
    setItems(filterByName(allItems, searchTerm));
  }, [searchTerm, allItems]);

  if (loading) return <Loader />;
  return <ItemList items={items} />;
}