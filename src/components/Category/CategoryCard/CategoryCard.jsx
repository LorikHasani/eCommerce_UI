import { IphoneIcon } from "../../../assets/icons/icons";

function CategoryCard({ icon: IconComponent, children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-2xl w-[190px] min-w-[135px] py-6  bg-bgSmallCard">
      {IconComponent && <IconComponent width={"48px"} height={"48px"} />}
      <h4 className="text-fontMain font-[500]">{children}</h4>
    </div>
  );
}

export default CategoryCard;
