import { useState, useEffect } from 'react';

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Создаем объект MediaQueryList на основе переданного медиазапроса
    const mediaQueryList = window.matchMedia(query);
    console.log(mediaQueryList);
    

    // Обновляем состояние в зависимости от первоначального соответствия медиазапросу
    setMatches(mediaQueryList.matches);

    // Функция для обработки изменения состояния медиазапроса
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Добавляем слушатель на изменение медиазапроса
    mediaQueryList.addEventListener('change', handleChange);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]); // Хук будет запускаться снова при изменении медиазапроса

  return matches;
}

export default useMedia;
