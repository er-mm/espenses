import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

export interface MilkExpense {
  id?: string;
  date: string; // YYYY-MM-DD
  milkLiters: number;
  price: number;
}

const COLLECTION = "milkExpenses";

export async function addMilkExpense(expense: Omit<MilkExpense, "id">) {
  return await addDoc(collection(db, COLLECTION), expense);
}

export async function getMilkExpenses(month: number, year: number) {
  const q = query(collection(db, COLLECTION));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
    .filter((e: any) => {
      const d = new Date(e.date);
      return d.getMonth() === month && d.getFullYear() === year;
    });
}

export async function updateMilkExpense(
  id: string,
  data: Partial<MilkExpense>
) {
  return await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deleteMilkExpense(id: string) {
  return await deleteDoc(doc(db, COLLECTION, id));
}
