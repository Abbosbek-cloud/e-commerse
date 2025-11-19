const decrement = (itemId) => {
  const newOrder = order.map((item) => {
    if (item.id === itemId) {
      const newQuantity = item.quantity <= 0 ? (item.quantity = 0) : item.quantity - 1;
      toast.error('1 dona mahsulot ayrildi!');

      return {
        ...item,
        quantity: newQuantity,
      };
    } else {
      return item;
    }
  });

  setOrder(newOrder);
};

const increment = (itemId) => {
  const newOrder = order.map((item) => {
    if (item.id === itemId) {
      const newQuantity = item.quantity + 1;
      toast.success("1 dona mahsulot qo'shildi");
      return {
        ...item,
        quantity: newQuantity,
      };
    } else {
      return item;
    }
  });

  setOrder(newOrder);
};

const removeOrder = (itemId) => {
  const newOrder = order.filter((item) => item.id !== itemId);
  setOrder(newOrder);
  toast.error("Mahsulot savatchadan o'chirildi!");
};

const handleBasketShow = () => {
  setBasketShow(!isBasketShow);
};
