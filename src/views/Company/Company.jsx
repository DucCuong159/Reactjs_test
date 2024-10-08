import { useState } from "react";
import BoxRemark from "../../components/BoxRemark/BoxRemark";

const Company = () => {
  const [value, setValue] = useState("");
  const [listRemark, setListRemark] = useState([]);
  const onDataChange = (type, e) => {
    if (type === "remark") {
      setValue(e.target.value);
    }
  };
  const onSubmitData = () => {
    setListRemark([...listRemark, value]);
    setValue("");
  };
  return (
    <BoxRemark
      onDataChange={onDataChange}
      onSubmitData={onSubmitData}
      remark={value}
      listRemark={listRemark}
      maxLength={10}
    />
  );
};

export default Company;
