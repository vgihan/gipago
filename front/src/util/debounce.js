const useDebounce = () => {
  let timer;

  const debounce = (callback) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, 500);
  };

  return debounce;
};

export default useDebounce;
