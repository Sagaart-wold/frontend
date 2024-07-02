// import React from 'react';
import { SearchSectionProps } from "../types";

export const SearchSection: React.FC<SearchSectionProps> = ({
  isShowSearchSection,
  handleOpenSearchPopup,
}) => { // запрос к серверу, получение карточек и рекомендаций, затем загрузка
  return (
    // заглушка
    <header onClick={handleOpenSearchPopup}>
      {isShowSearchSection}
    </header>
  );
};
