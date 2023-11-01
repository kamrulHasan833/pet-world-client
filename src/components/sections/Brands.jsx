import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import SectionWrapper from "../layout/SectionWrapper";
import Brand from "../shared/Brand";
import SectionHeader from "../shared/SectionHeader";

function Brands() {
  const customAxios = useAxios();
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    customAxios
      .get(`/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, [customAxios]);

  return (
    <SectionWrapper>
      <SectionHeader>categories</SectionHeader>

      <div className="grid grid-cols-3  md:grid-cols-6 gap-6 ">
        {categories &&
          categories.length > 0 &&
          categories.map((category, ind) => (
            <Brand key={ind} category={category}></Brand>
          ))}
      </div>
    </SectionWrapper>
  );
}

export default Brands;
