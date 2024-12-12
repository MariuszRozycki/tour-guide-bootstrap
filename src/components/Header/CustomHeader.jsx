import { forwardRef } from "react";
import CustomNav from "../Nav/CustomNav";

const CustomHeader = forwardRef((_, headerRef) => {
  return <CustomNav ref={headerRef} />;
});

CustomHeader.displayName = "CustomHeader";

export default CustomHeader;
