export interface MenuPopupProps {
  openPopup: string | null;
  handleClosePopup: () => void;
  // handleOpenPopup: (dialogId: string) => void; //дублирование кода TODO подумать как сделать наследование
}

export interface HeaderProps extends MenuPopupProps {
  handleOpenPopup: (dialogId: string) => void;
  isShowSearchSection: boolean;
  handleOpenSearchPopup: () => void; //дублирование кода TODO подумать как сделать наследование
}

export interface SearchSectionProps {
  handleOpenSearchPopup: () => void;
  isShowSearchSection: boolean;
}