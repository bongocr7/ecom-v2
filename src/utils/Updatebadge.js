import { useEffect, useState } from "react";
import { useAuth } from "./Auth";

export const useBadge = () => {
  const auth = useAuth();
  const user = JSON.parse(localStorage.getItem(auth.user.Username));
  const [count, setCount] = useState(user.Orders.length);

  useEffect(() => {
    if (user) {
      setCount(user.Orders.length);
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        setCount(user.Orders.length);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [user]);

  return count;
};
