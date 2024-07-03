import { SearchSection } from "../SearchSection/SearchSection";
import { SearchSectionProps } from "../types";
import Banner from "../Banner/Banner";

export const Main: React.FC<SearchSectionProps> = ({
  isShowSearchSection,
  handleOpenSearchPopup,
}) => {
  return (
    <>
      {isShowSearchSection ? (
        <SearchSection
          handleOpenSearchPopup={handleOpenSearchPopup}
          isShowSearchSection={isShowSearchSection}
        />
      ) : (
        <Banner />
      )}
    </>
  );
};
