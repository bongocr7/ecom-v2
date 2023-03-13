import { useEffect, useState } from "react";
import { useAuth } from "./Auth";

export const useCartBadge = () => {
  const auth = useAuth();
  const user = JSON.parse(localStorage.getItem(auth.user.Username));
  const [count, setCount] = useState(user.Cart.length);

  useEffect(() => {
    if (user) {
      setCount(user.Cart.length);
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        setCount(user.Cart.length);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [user]);

  return count;
};
