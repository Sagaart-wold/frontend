export interface MenuPopupProps {
  openPopup: string | null;
  handleClosePopup: () => void;
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